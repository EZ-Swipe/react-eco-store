import { Link } from "react-router-dom";
import "./Banners.scss";
import { GoArrowRight } from "react-icons/go";
import Countdown from "../../../components/countdown/Countdown";

const Banners = () => {
  return (
    <div className="banners-section section-padding-y">
      <div className="container">
        <div className="banners-inner">
          <div className="banner banner-fv">
            <div>
              <p className="banner-subtitle">100% Organic</p>
              <h4 className="banner-title">Fruit & Vegetable</h4>
            </div>
            <div className="banner__info">
              <span className="banner__info-text">Starting at:</span>
              <div className="banner__info-price">$11.99</div>
            </div>
            <Link
              to="/categories/fruits"
              className="btn-primary shop-btn"
              style={{ alignSelf: "flex-start" }}
            >
              Shop Now <GoArrowRight size="1.6rem" />
            </Link>
          </div>

          <div className="banner banner-sales">
            <div>
              <p className="banner-subtitle">sale off the week</p>
              <h4 className="banner-title">Sales of the Year</h4>
            </div>
            <Countdown />
            <Link
              to="/categories"
              className="btn-primary shop-btn"
              style={{ alignSelf: "flex-start" }}
            >
              Shop Now <GoArrowRight size="1.6rem" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
