import "./Footer.scss";
import { Link } from "react-router-dom";
import logo from "/images/logo.png";
import IconsList from "../icons-list/IconsList";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import applepayImg from "/images/footer-under/ApplePay.png";
import visaImg from "/images/footer-under/Visa.png";
import discovereImg from "/images/footer-under/Discover.png";
import mastercardImg from "/images/footer-under/Mastercard.png";
import securePaymentImg from "/images/footer-under/Cart.png";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

const Footer = () => {
  const [isOpenAcc, setIsOpenAcc] = useState(false);
  const [isOpenHelps, setIsOpenHelps] = useState(false);
  const [isOpenProxy, setIsOpenProxy] = useState(false);
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-inner__info">
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/"
              className="logo logo-footer"
            >
              <img src={logo} alt="logo" />
              <span>Ecobazar</span>
            </Link>
            <div className="footer-inner__info-text">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magn.
            </div>
            <IconsList />
          </div>

          <div className="footer-inner__list">
            <div className="footer-inner__list-item">
              <div
                className="footer-inner__title"
                onClick={() => setIsOpenAcc((prevState) => !prevState)}
              >
                My Account{" "}
                <div
                  className={
                    "footer-inner__title-close" + (isOpenAcc ? " open" : "")
                  }
                >
                  <IoCloseOutline size="1.8rem" />
                </div>
              </div>
              <ul
                className={
                  "footer-inner__list-item-ul" + (isOpenAcc ? " open" : "")
                }
              >
                <li className="footer-inner__list-item-li">
                  <Link to="/account">My Account</Link>
                </li>
                <li className="footer-inner__list-item-li">
                  <Link to="/order-history">Order History</Link>
                </li>
                <li className="footer-inner__list-item-li">
                  <Link to="/cart">Shoping Cart</Link>
                </li>
                <li className="footer-inner__list-item-li">
                  <Link to="/wishlist">Wishlist</Link>
                </li>
              </ul>
            </div>

            <div className="footer-inner__list-item">
              <div
                className="footer-inner__title"
                onClick={() => setIsOpenHelps((prevState) => !prevState)}
              >
                Helps{" "}
                <div
                  className={
                    "footer-inner__title-close" + (isOpenHelps ? " open" : "")
                  }
                >
                  <IoCloseOutline size="1.8rem" />
                </div>
              </div>
              <ul
                className={
                  "footer-inner__list-item-ul" + (isOpenHelps ? " open" : "")
                }
              >
                <li className="footer-inner__list-item-li">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="footer-inner__list-item-li">
                  <Link to="/faqs">Faqs</Link>
                </li>
                <li className="footer-inner__list-item-li">
                  <Link to="/condition">Terms & Condition</Link>
                </li>
                <li className="footer-inner__list-item-li">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            <div className="footer-inner__list-item">
              <div
                className="footer-inner__title"
                onClick={() => setIsOpenProxy((prevState) => !prevState)}
              >
                Proxy{" "}
                <div
                  className={
                    "footer-inner__title-close" + (isOpenProxy ? " open" : "")
                  }
                >
                  <IoCloseOutline size="1.8rem" />
                </div>
              </div>
              <ul
                className={
                  "footer-inner__list-item-ul" + (isOpenProxy ? " open" : "")
                }
              >
                <li className="footer-inner__list-item-li">
                  <Link to="/about-us">About</Link>
                </li>
                <li className="footer-inner__list-item-li">
                  <Link to="/categories">Shop</Link>
                </li>
                <li className="footer-inner__list-item-li">
                  <Link to="/product">Product</Link>
                </li>
                <li className="footer-inner__list-item-li">
                  <Link to="/track-order">Track Order</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-inner__download">
            <p className="footer-inner__title">Download Mobile App</p>
            <div className="footer-inner__download-info">
              <a href="#" className="dowload-btn">
                <FaApple color="#fff" size="1.7rem" />
                <div className="dowload-btn__text">
                  <p className="dowload-btn__text-subtitle">Download on the</p>
                  <p className="dowload-btn__text-title">App Store</p>
                </div>
              </a>
              <a href="#" className="dowload-btn">
                <FaGooglePlay color="#fff" size="1.6rem" />
                <div className="dowload-btn__text">
                  <p className="dowload-btn__text-subtitle">Download on the</p>
                  <p className="dowload-btn__text-title">Google play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-under">
        <div className="container">
          <div className="footer-under-inner">
            <p className="footer-under-inner__text">
              Ecobazar eCommerce © 2021. All Rights Reserved
            </p>
            <div className="footer-under-inner__icons">
              <img
                src={applepayImg}
                alt=""
                className="footer-under-inner__icons-item"
              />
              <img
                src={visaImg}
                alt=""
                className="footer-under-inner__icons-item"
              />
              <img
                src={discovereImg}
                alt=""
                className="footer-under-inner__icons-item"
              />
              <img
                src={mastercardImg}
                alt=""
                className="footer-under-inner__icons-item"
              />
              <img
                src={securePaymentImg}
                alt=""
                className="footer-under-inner__icons-item"
              />
            </div>
          </div>
          <div className="autor">
          <p>
            Website layout design created by{" "}
            <a
              className="autor__link"
              href="https://www.figma.com/@templatecookie"
              target="_blank"
            >
              Templatecookie
            </a>{" "}
            <br />
            The original mockup is available on{" "}
            <a
              className="autor__link"
              href="https://www.figma.com/community/file/1272474484693685580/shopery-organic-ecommerce-shop-website-figma-template-community"
              target="_blank"
            >
              Figma Community
            </a>
            .
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
