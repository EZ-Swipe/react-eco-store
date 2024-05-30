import { Table } from "antd";
import useCartStore from "../../zustand/useCartStore";
import "./Cart.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CounterCart from "./CounterCart";
import { IoCloseOutline } from "react-icons/io5";
import CartTotal from "../../components/cart-total/CartTotal";
import ProductCart from "../../components/ProductCart/ProductCart";

const Cart = () => {
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
        <div className="table__price-value">${record.price}</div>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      className: "custom-column",
      render: (text, record) => (
        <CounterCart
          initialValue={record.quantity}
          onChange={(value) => handleUpdateCartItem(record.key, value)}
        />
      ),
    },
    {
      title: "Subtotal",
      dataIndex: "subtotal",
      className: "custom-column",
      render: (text, render) => (
        <div className="table__subtotal">${render.subtotal}</div>
      ),
    },
    {
      title: "",
      dataIndex: "actions",
      render: (text, record) => (
        <IoCloseOutline
          className="cart-item__close shopping-cart__delete-v2"
          onClick={() => removeFromCart(record.key)}
        />
      ),
    },
  ];
  const { cart, setCart } = useCartStore();
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  useEffect(() => {
    const updatedData = cart.map((item) => ({
      key: item.product.id,
      name: item.product.name,
      price: item.product.price,
      quantity: item.amount,
      image: item.product.image,
      subtotal: (item.amount * item.product.price).toFixed(2),
    }));
    setData(updatedData);
  }, [cart]);

  const handleUpdateCartItem = (productId, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.product.id === productId) {
        return {
          ...item,
          amount: newQuantity,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.product.id !== productId);
    setCart(updatedCart);
  };

  const getTotalSum = () => {
    return data
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
  };
  return (
    <div className="cart-page page-padding-y">
      <div className="container">
        <h5 className="wish-cart-title">My Shopping Cart</h5>
        <div className="flex-container cart-table">
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
            style={{ width: "100%" }}
            footer={() => (
              <div className="table-footer">
                <Link to="/categories" className="table-btn">
                  Return to shop
                </Link>
              </div>
            )}
          />

          <div className="products-container cart-products-container">
            {cart.map(({ product, amount }) => (
              <div style={{ position: "relative" }} key={product.id}>
                <ProductCart product={product} />
                <IoCloseOutline
                  className="cart-item__close shopping-cart__delete"
                  onClick={() => removeFromCart(product.id)}
                />
                <CounterCart
                  initialValue={amount}
                  onChange={(value) => handleUpdateCartItem(product.id, value)}
                />
              </div>
            ))}
          </div>
          <div className="cart-total">
            <span className="cart-total__title">Cart Total</span>
            <CartTotal getTotalSum={getTotalSum} />
            {cart.length === 0 ? (
              <button className="disabled-btn checkout-disabled-btn" disabled>
                Checkout
              </button>
            ) : (
              <Link
                to="/checkout"
                className="checkout-btn cart-page__checkout-btn"
                disabled={cart.length === 0}
              >
                Checkout
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
