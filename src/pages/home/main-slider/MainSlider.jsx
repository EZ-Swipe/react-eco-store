import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainSlider.scss";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import img1 from "../../../images/main-slider-img-1.png"

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="main-slider">
      <div className="welcome-slide">  
        <div className="container">
           <div className="welcome__inner">
              <div className="welcome__inner-info">
                <div className="welcome__inner-text">Welcome to shopery</div>
                <h1 className="welcome__inner-title">Fresh & Healthy Organic Food</h1>
                <p className="welcome__inner-sale">Sale up to <span>30% OFF</span></p>
                <p className="welcome__inner-sale-under">Free shipping on all your order. we deliver, you enjoy</p>
                <Link className="btn-primary shop-btn" to="/categories">Shop now  <GoArrowRight size="1.6rem" /></Link>
              </div>
              <div className="welcome__inner-img">
                  <img src={img1} alt="Slider image" />
              </div>
           </div>
        </div>
      </div>

      <div className="welcome-slide">
        <div className="container">
           <div className="welcome__inner">
              <div className="welcome__inner-info">
                <div className="welcome__inner-text">Welcome to shopery</div>
                <h1 className="welcome__inner-title">Fresh & Healthy Organic Food</h1>
                <p className="welcome__inner-sale">Sale up to <span>30% OFF</span></p>
                <p className="welcome__inner-sale-under">Free shipping on all your order. we deliver, you enjoy</p>
                <Link className="btn-primary shop-btn" to="/categories">Shop now  <GoArrowRight size="1.6rem" /></Link>
              </div>
              <div className="welcome__inner-img">
                  <img src={img1} alt="Slider image" />
              </div>
           </div>
        </div>
      </div>

      <div className="welcome-slide">
        <div className="container">
           <div className="welcome__inner">
              <div className="welcome__inner-info">
                <div className="welcome__inner-text">Welcome to shopery</div>
                <h1 className="welcome__inner-title">Fresh & Healthy Organic Food</h1>
                <p className="welcome__inner-sale">Sale up to <span>30% OFF</span></p>
                <p className="welcome__inner-sale-under">Free shipping on all your order. we deliver, you enjoy</p>
                <Link className="btn-primary shop-btn" to="/categories">Shop now  <GoArrowRight size="1.6rem" /></Link>
              </div>
              <div className="welcome__inner-img">
                  <img src={img1} alt="Slider image" />
              </div>
           </div>
        </div>
      </div>

      
    </Slider>
  );
};

export default MainSlider;
