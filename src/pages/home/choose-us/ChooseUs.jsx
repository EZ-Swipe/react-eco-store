import "./ChooseUs.scss";
import chooseUspic1 from "../../../images/choose-us/choose-us-1.jpg";
import chooseUspic2 from "../../../images/choose-us/choose-us-2.jpg";
import { IoCheckmarkCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const ChooseUs = () => {
  return (
    <section className="section-padding-y">
      <div className="container">
        <div className="choose-us">
          <div className="choose-us__pictures">
            <img
              className="choose-us__pictures-img picture-1"
              src={chooseUspic1}
              alt=""
            />
            <img
              className="choose-us__pictures-img"
              src={chooseUspic2}
              alt=""
            />
          </div>
          <div className="choose-us__info">
            <h3 className="choose-us__info-title">
              100% Trusted Organic Food Store
            </h3>
            <div className="choose-us__info-text-block">
              <IoCheckmarkCircle
                className="choose-us__info-text-block-icon"
                color="#00b207"
                size="1.9rem"
              />
              <p className="choose-us__info-text-block-title">
                Healthy & natural food for lovers of healthy food.
              </p>
              <p className="choose-us__info-text-block-text">
                Ut quis tempus erat. Phasellus euismod bibendum magna non
                tristique. Pellentesque semper vestibulum elit sed condimentum.
                Nunc pretium fermentum interdum.{" "}
              </p>
            </div>
            <div className="choose-us__info-text-block">
              <IoCheckmarkCircle
                className="choose-us__info-text-block-icon"
                color="#00b207"
                size="1.9rem"
              />
              <p className="choose-us__info-text-block-title">
                Healthy & natural food for lovers of healthy food.
              </p>
              <p className="choose-us__info-text-block-text">
                Ut quis tempus erat. Phasellus euismod bibendum magna non
                tristique. Pellentesque semper vestibulum elit sed condimentum.
                Nunc pretium fermentum interdum.{" "}
              </p>
            </div>
            <Link
              to="/categories"
              className="btn-primary shop-btn choose-us__info-btn"
            >
              Shop Now <GoArrowRight size="1.6rem" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
