import { Drawer } from "antd";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import "./MobMenu.scss";
import { MdPhoneInTalk } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import LargeCross from "../icons/LargeCross";

const MobMenu = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mob-menu__btn" onClick={() => setOpen(true)}>
        <RxHamburgerMenu size="1.7rem" />
      </div>
      <Drawer placement="left" closable={false} onClose={onClose} open={open}>
        <div className="mob-menu">
          <div className="mob-menu__close">
            <LargeCross onClick={onClose} />
          </div>
          <div className="site-nav">
            <NavLink className="site-nav__item" to="/" onClick={onClose}>
              Home
            </NavLink>
            <NavLink className="site-nav__item" to="/categories" onClick={onClose}>
              Shop
            </NavLink>
            <NavLink className="site-nav__item" to="/about-us" onClick={onClose}>
              About us
            </NavLink>
            <NavLink className="site-nav__item" to="/contact" onClick={onClose}>
              Contact us
            </NavLink>
          </div>
          <div className="mob-menu__phone">
            <MdPhoneInTalk size="2rem" /> <span>{"(219)"} 555-0114</span>
          </div>
          <div className="header__info-location">
            <GrLocation size="2rem" color="#666666" />{" "}
            <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
          </div>
          <div className="header__info-sign mob-menu__info-sign">
            <Link to="/sign-in">Sign In</Link>
            <span className="sign-delimiter">/</span>
            <Link to="/sign-up">Sign Up</Link>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MobMenu;
