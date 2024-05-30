/* eslint-disable react/prop-types */
import LikeIcon from "../icons/LikeIcon";
import ViewIcon from "../icons/ViewIcon";
import "./Product.scss";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import QuickViewModal from "../quick-view/QuickViewModal";
import { Link } from "react-router-dom";
import { Modal, message } from "antd";
import useWishlistStore from "../../zustand/useWishlistStore";

const Product = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { wishlist, setWishlist } = useWishlistStore();
  const [messageApi, contextHolder] = message.useMessage();

  const showModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <AiFillStar
        key={i}
        className={`star ${i < product.rating ? "active" : ""}`}
      />
    );
  }

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
      <div className="product-card border-hover">
        <Link
          to={`/product/${product.slug}`}
          key={product.id}
          className="product-card__link"
        >
          {/* Sale */}
          {product.discount && (
            <div className="product-card__sale">
              Sale <span>{product.percentDiscount}%</span>
            </div>
          )}
          {product.stockStatus == "Out of Stock" && (
            <div className="product-card__stock">{product.stockStatus}</div>
          )}
          <img src={product.image} alt="" className="product-card__image" />
          <div className="product-card__info">
            <p className="product-card__title">{product.name}</p>
            {product.discount ? (
              <div className="product-card__prices">
                <p className="product-card__prices-price">${product.price}</p>
                <p className="product-card__prices-discount">
                  ${product.discount}
                </p>
              </div>
            ) : (
              <div className="product-card__prices">
                <p className="product-card__prices-price">${product.price}</p>
              </div>
            )}
            <div className="product-card__rating">{stars}</div>
          </div>
        </Link>
        <div onClick={addToWishlist} className="product-card__like">
          <LikeIcon />
        </div>
        <div className="product-card__view" onClick={showModal}>
          <ViewIcon />
        </div>
        <Modal
          centered={true}
          open={isModalOpen}
          width={1120}
          onOk={handleOk}
          onCancel={() => setIsModalOpen(false)}
        >
          <QuickViewModal handleOk={handleOk} stars={stars} product={product} />
        </Modal>
      </div>
    </>
  );
};

export default Product;
