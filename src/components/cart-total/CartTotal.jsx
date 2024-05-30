/* eslint-disable react/prop-types */
import { Divider } from "antd";

const CartTotal = ({ getTotalSum }) => {
  return (
    <div className="cart-total__list">
      <div className="cart-total__item">
        <p className="cart-total__item-name">Subtotal:</p>
        <p className="cart-total__item-value">${getTotalSum()}</p>
      </div>
      <Divider style={{ margin: 0 }} />
      <div className="cart-total__item">
        <p className="cart-total__item-name">Shipping:</p>
        <p className="cart-total__item-value">Free</p>
      </div>
      <Divider style={{ margin: 0 }} />
      <div className="cart-total__item cart-total__item-l">
        <p className="cart-total__item-name cart-total__item-l-name">Total:</p>
        <p className="cart-total__item-value cart-total__item-l-value">
          ${getTotalSum()}
        </p>
      </div>
    </div>
  );
};

export default CartTotal;
