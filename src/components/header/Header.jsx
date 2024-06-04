import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "/images/logo.png";
import { GrLocation } from "react-icons/gr";
import { SlHeart } from "react-icons/sl";
import { MdPhoneInTalk } from "react-icons/md";
import { Divider } from "antd";
import CartDrawer from "../cart-drawer/CartDrawer";
import useWishlistStore from "../../zustand/useWishlistStore";
import Search from "./Search";
import useCartStore from "../../zustand/useCartStore";
import MobMenu from "./MobMenu";

const Header = () => {
  const { wishlist } = useWishlistStore();
  const { cart } = useCartStore();
  const getTotalSum = () => {
    return cart
      .reduce((sum, { product, amount }) => sum + product.price * amount, 0)
      .toFixed(2);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__info">
          <div className="header__info-location">
            <GrLocation size="2rem" color="#666666" />{" "}
            <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
          </div>
          <div className="header__info-sign">
            <Link to="/sign-in">Sign In</Link>
            <span className="sign-delimiter">/</span>
            <Link to="/sign-up">Sign Up</Link>
          </div>
        </div>
      </div>
      <Divider style={{ margin: 0 }} />
      <div className="container">
        <div className="header__middle">
          <MobMenu />
          <Link to="/" className="logo header-logo">
            <img src={logo} alt="logo" />
            <span>Ecobazar</span>
          </Link>
          <div className="header__middle-search">
            <Search />
          </div>
          <div className="header__middle-like-cart">
            <Link className="header-icon" to="/wishlist">
              <SlHeart size="1.6rem" />
              {wishlist.length > 0 ? (
                <span className="product-amount-icon">{wishlist.length}</span>
              ) : (
                ""
              )}
            </Link>
            <span className="sign-delimiter"></span>
            <div className="header__middle-cart-box">
              <CartDrawer />

              <div className="header__middle-cart-info">
                <p className="header__middle-cart-text">Shopping cart:</p>
                <p className="header__middle-cart-price">${getTotalSum()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__nav">
        <div className="container">
          <div className="header__nav-inner">
            <nav className="header__nav-menu">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <NavLink className="header__nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink className="header__nav-link" to="/categories">
                    Shop
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink className="header__nav-link" to="/about-us">
                    About us
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink className="header__nav-link" to="/contact">
                    Contact us
                  </NavLink>
                </li>
              </ul>
            </nav>

            <a href="tel:2195550114" className="header-phone">
              <MdPhoneInTalk size="2rem" /> <span>{"(219)"} 555-0114</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
