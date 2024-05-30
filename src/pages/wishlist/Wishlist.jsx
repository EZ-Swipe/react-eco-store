import { Flex, Table, message } from "antd";
import IconsList from "../../components/icons-list/IconsList";
import { useEffect, useState } from "react";
import useWishlistStore from "../../zustand/useWishlistStore";
import { IoCloseOutline } from "react-icons/io5";
import useCartStore from "../../zustand/useCartStore";
import useEcoStore from "../../zustand/useEcoStore";
import Product from "../../components/product/Product";

const Wishlist = () => {
  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      className: "custom-column",
      render: (text, record) => (
        <div className="table__product">
          <img
            src={record.image}
            alt={record.name}
            style={{ height: "100px" }}
          />
          {record.name}
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      className: "custom-column",

      render: (text, record) => (
        <>
          {record.discount ? (
            <div className="wishlist__isdiscount">
              <span className="wishlist-table__price-value">
                ${record.price}
              </span>
              <span className="wishlist-table__discount-value">
                ${record.discount}
              </span>
            </div>
          ) : (
            <div className="wishlist-table__price-value">${record.price}</div>
          )}
        </>
      ),
    },
    {
      title: "Stock Status",
      dataIndex: "stockStatus",
      className: "custom-column",
      render: (text, record) => (
        <div
          className={`stock ${
            record.stockStatus === "In Stock" ? "in-stock" : "out-of-stock"
          }`}
        >
          {record.stockStatus}
        </div>
      ),
    },
    {
      title: "",
      dataIndex: "addToCart",
      className: "custom-column wishlist-addToCart",

      render: (text, record) => (
        <button
          disabled={record.stockStatus !== "In Stock"}
          onClick={() => addToCart(record.key)}
          className={`wishlist-btn ${
            record.stockStatus === "In Stock" ? "btn-primary" : "disabled-btn"
          }`}
        >
          Add to Cart
        </button>
      ),
    },
    {
      title: "",
      dataIndex: "actions",
      render: (text, record) => (
        <IoCloseOutline
          className="cart-item__close shopping-cart__delete"
          onClick={() => removeFromCart(record.key)}
        />
      ),
    },
  ];

  const { wishlist, setWishlist } = useWishlistStore();
  const { cart, setCart } = useCartStore();
  const { products } = useEcoStore();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const updatedData = wishlist.map((item) => ({
      key: item.product.id,
      name: item.product.name,
      price: item.product.price,
      image: item.product.image,
      discount: item.product.discount,
      stockStatus: item.product.stockStatus,
    }));
    setData(updatedData);
  }, [wishlist]);

  const removeFromCart = (productId) => {
    const updatedCart = wishlist.filter(
      (item) => item.product.id !== productId
    );
    setWishlist(updatedCart);
  };

  const addToCart = (productId) => {
    const findProductInCart = cart.find(
      (item) => item.product.id === productId
    );
    const findProductInProducts = products.find(
      (item) => item.id === productId
    );

    if (findProductInProducts) {
      if (findProductInCart) {
        findProductInCart.amount += 1;
        setCart([...cart]);
      } else {
        setCart([...cart, { product: findProductInProducts, amount: 1 }]);
      }
      messageApi.open({
        type: "success",
        content: "Product added to cart",
      });
    } else {
      console.log("Product with id", productId, "not found in products list.");
    }
  };
  return (
    <>
      {contextHolder}
      <div className="wishlist">
        <div className="page-padding-y">
          <div className="container">
            <h5 className="wish-cart-title">My Wishlist</h5>
            <Table
              className="table"
              pagination={{
                pageSize: itemsPerPage,
                total: data.length,
                current: currentPage,
                onChange: (page) => setCurrentPage(page),
              }}
              columns={columns}
              dataSource={data}
              footer={() => (
                <Flex align="center">
                  Share: <IconsList />
                </Flex>
              )}
            />
          </div>
        </div>
      </div>

      <div className="wishlist-mob">
        <div className="container">
          <h5 className="wish-cart-title">My Wishlist</h5>

          <div className="products-container wishlist-mob__products-container">
            {wishlist.map(({ product }) => (
              <div style={{ position: "relative" }} key={product.id}>
                <Product product={product} />
                <IoCloseOutline
                  className="cart-item__close shopping-cart__delete"
                  onClick={() => removeFromCart(product.id)}
                />
                <div className="btn-row">
                  <button
                    disabled={product.stockStatus !== "In Stock"}
                    className={`wishlist-btn ${
                      product.stockStatus === "In Stock"
                        ? "btn-primary"
                        : "disabled-btn"
                    }`}
                    onClick={() => addToCart(product.id)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Flex align="center" style={{ paddingBottom: "15px" }}>
            Share: <IconsList />
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
