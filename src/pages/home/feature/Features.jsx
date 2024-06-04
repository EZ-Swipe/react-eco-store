import "./Features.scss";
import shippingImg from "/images/features/shipping.png";
import supportImg from "/images/features/support.png";
import paymentImg from "/images/features/payment.png";
import moneyBackImg from "/images/features/money-back.png";

const Features = () => {
  return (
    <div className="feature-wrapper">
      <div className="container">
        <div className="feature">
          <div className="feature__item feature__item--top">
            <img src={shippingImg} alt="" className="feature__item-img" />
            <p className="feature__item-title">Free Shipping</p>
            <p className="feature__item-text">Free shipping with discount</p>
          </div>
          <div className="feature__item feature__item--top">
            <img src={supportImg} alt="" className="feature__item-img" />
            <p className="feature__item-title">Great Support 24/7</p>
            <p className="feature__item-text">Instant access to Contact</p>
          </div>
          <div className="feature__item">
            <img src={paymentImg} alt="" className="feature__item-img" />
            <p className="feature__item-title">100% Sucure Payment</p>
            <p className="feature__item-text">We ensure your money is save</p>
          </div>
          <div className="feature__item">
            <img src={moneyBackImg} alt="" className="feature__item-img" />
            <p className="feature__item-title">Money-Back Guarantee</p>
            <p className="feature__item-text">30 days money-back</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
