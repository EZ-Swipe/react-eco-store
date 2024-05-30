import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./About.scss";

import img1 from "../../images/about/team/img1.jpg";
import img2 from "../../images/about/team/img2.jpg";
import img3 from "../../images/about/team/img3.jpg";
import img4 from "../../images/about/team/img4.jpg";
import IconsList from "../../components/icons-list/IconsList";

const TeamSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="team__slider">
      <div className="slide-wrapper">
        <div className="slide">
          <div className="slide__img">
            <img src={img1} alt="" />
            <div className="slide__img-icons">
              <IconsList />
            </div>
          </div>
          <div className="slide__info">
            <p className="slide__info-title">Jenny Wilson</p>
            <p className="slide__info-prof">Ceo & Founder</p>
          </div>
        </div>
      </div>
      <div className="slide-wrapper">
        <div className="slide">
          <div className="slide__img">
            <img src={img2} alt="" />
            <div className="slide__img-icons">
              <IconsList />
            </div>
          </div>
          <div className="slide__info">
            <p className="slide__info-title">Jane Cooper</p>
            <p className="slide__info-prof">Worker</p>
          </div>
        </div>
      </div>
      <div className="slide-wrapper">
        <div className="slide">
          <div className="slide__img">
            <img src={img3} alt="" />
            <div className="slide__img-icons">
              <IconsList />
            </div>
          </div>
          <div className="slide__info">
            <p className="slide__info-title">Cody Fisher</p>
            <p className="slide__info-prof">Security Guard</p>
          </div>
        </div>
      </div>
      <div className="slide-wrapper">
        <div className="slide">
          <div className="slide__img">
            <img src={img4} alt="" />
            <div className="slide__img-icons">
              <IconsList />
            </div>
          </div>
          <div className="slide__info">
            <p className="slide__info-title">Robert Fox</p>
            <p className="slide__info-prof">Senior Farmer Manager</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default TeamSlider;
