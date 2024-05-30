import "./CartDrawer.scss";
import { useState } from "react";
import { Divider, Drawer } from "antd";
import { SlHandbag } from "react-icons/sl";
import { IoCloseOutline } from "react-icons/io5";
import LargeCross from "../icons/LargeCross";
import useCartStore from "../../zustand/useCartStore";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const [open, setOpen] = useState(false);
  const { cart, setCart } = useCartStore();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const removeProduct = (id) => {
    setCart(cart.filter((item) => item.product.id !== id));
  };

  const getTotalSum = () => {
    return cart.reduce(
      (sum, item) => sum + item.product.price * item.amount,
      0
    );
  };

  return (
    <>
      <div onClick={showDrawer} className="header-icon">
        <SlHandbag size="1.6rem" />
        {cart.length > 0 ? (
          <span className="product-amount-icon">{cart.length}</span>
        ) : (
          ""
        )}
      </div>
      <Drawer onClose={onClose} open={open} width={456} closable={false}>
        <div className="cart-drawer">
          {cart.length === 0 ? (
            <div className="cart-drawer__title">
              Your cart is emty
              <LargeCross onClick={onClose} />
            </div>
          ) : (
            <>
              <div className="cart-drawer__title">
                <span>Shopping Cart ({cart.length})</span>
                <LargeCross onClick={onClose} />
              </div>

              {cart.map(({ product, amount }) => (
                <div key={product.id} className="cart-drawer__items">
                  <div className="cart-item">
                    <img
                      className="cart-item__img"
                      src={product.image}
                      alt="Product Image"
                    />
                    <div className="cart-item__info">
                      <div className="cart-item__name">{product.name}</div>
                      <span className="cart-item__quantity">
                        {amount}kg x{" "}
                        <span className="cart-item__price">
                          {product.price}$
                        </span>
                      </span>
                    </div>
                    <IoCloseOutline
                      onClick={() => removeProduct(product.id)}
                      className="cart-item__close"
                      size="1.4rem"
                    />
                  </div>
                  <Divider />
                </div>
              ))}

              <div className="cart-drawer__bottom">
                <div className="cart-drawer__total">
                  <div className="cart-drawer__total-amount">
                    {cart.length} {cart.length > 1 ? "Products" : "Product"}
                  </div>
                  <div className="cart-drawer__total-sum">
                    ${getTotalSum().toFixed(2)}
                  </div>
                </div>
                <Link
                  onClick={onClose}
                  style={{ marginBottom: "12px" }}
                  className="checkout-btn"
                  to="/checkout"
                >
                  Checkout
                </Link>
                <Link onClick={onClose} className="cart-btn" to="/cart">
                  Go To Cart
                </Link>
              </div>
            </>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default CartDrawer;
