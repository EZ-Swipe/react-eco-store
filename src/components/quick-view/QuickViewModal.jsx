/* eslint-disable react/prop-types */
import "./QuickViewModal.scss";
import IconsList from "../icons-list/IconsList";
import { SlHandbag } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import useCartStore from "../../zustand/useCartStore";
import Counter from "./Counter";
import { message } from "antd";
import useWishlistStore from "../../zustand/useWishlistStore";

const QuickViewModal = ({ handleOk, product, stars }) => {
  const { cart, setCart } = useCartStore();
  const { wishlist, setWishlist } = useWishlistStore();

  const productTags = product.tags
    ? product.tags.map((tag) => tag).join(", ")
    : "";

  const [messageApi, contextHolder] = message.useMessage();

  let amount = 0;

  const changeAmount = (value) => (amount = value);

  const addToCart = () => {
    const findProduct = cart.find((item) => item.product.id === product.id);

    if (findProduct) {
      findProduct.amount += amount;
      setCart([...cart]);
    } else {
      setCart([...cart, { product, amount }]);
    }
    messageApi.open({
      type: "success",
      content: "Product added to cart",
    });
    handleOk();
  };

  const addToWishlist = () => {
    const findProduct = wishlist.find((item) => item.product.id === product.id);
    if (!findProduct) {
      setWishlist([...wishlist, { product }]);
      messageApi.open({
        type: "success",
        content: "Product added to wishlist",
      });
    } else {
      messageApi.open({
        type: "error",
        content: "Product is already on the wish list",
      });
    }
  };

  return (
    <>
      {contextHolder}
      <div className="view-container">
        <div className="view-container__img">
          <img src={product.image} alt="" />
        </div>
        <div className="product-modal-info">
          <div className="product-modal-info__main">
            <div className="product-modal-info__title">
              <h4>{product.name}</h4>{" "}
              <span
                className={`stock ${
                  product.stockStatus === "In Stock"
                    ? "in-stock"
                    : "out-of-stock"
                }`}
              >
                {product.stockStatus}
              </span>
            </div>
            <div className="product-modal-info__rating">
              {stars}
              <span> 4 Review</span>
            </div>
            {product.discount ? (
              <div className="product-modal-info__prices">
                <p className="product-modal-info__prices-discount">
                  ${product.discount}
                </p>
                <p className="product-modal-info__prices-price">
                  ${product.price}
                </p>
                <div className="product-modal-info__prices-sale">
                  {product.percentDiscount}% Off
                </div>
              </div>
            ) : (
              <div className="product-modal-info__prices">
                <p className="product-modal-info__prices-price">
                  ${product.price}
                </p>
              </div>
            )}
          </div>
          <div className="product-modal-info__about">
            <div className="product-modal-info__about-share">
              <p className="product-modal-info__about-share-text">
                Share item:
              </p>
              <IconsList />
            </div>
            <p className="product-modal-info__about-text">
              {product.description}
            </p>
          </div>
          <div className="product-modal-info__add">
            <Counter changeAmount={changeAmount} />
            <button
              disabled={product.stockStatus !== "In Stock"}
              onClick={addToCart}
              className={`product-add-to-cart-btn ${
                product.stockStatus === "In Stock"
                  ? "btn-primary"
                  : "disabled-btn"
              }`}
            >
              Add to Cart <SlHandbag />
            </button>
            <button onClick={addToWishlist} className="product-like">
              <FaRegHeart size="1.3rem" />
            </button>
          </div>
          <div className="product-modal-info__under">
            <div className="product-modal-info__under-item">
              <p className="product-modal-info__under-item-title">Category:</p>
              <p className="product-modal-info__under-item-text">
                {product.categoryName}
              </p>
            </div>
            <div className="product-modal-info__under-item">
              <p className="product-modal-info__under-item-title">Tag:</p>
              <p className="product-modal-info__under-item-text">
                {productTags}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickViewModal;
