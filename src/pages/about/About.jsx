import "./About.scss";
import aboutImg1 from "/images/about/about-1.jpg";
import aboutImg2 from "/images/about/about-2.png";
import aboutImg3 from "/images/about/about-3.png";
import feature1 from "/images/about/features/Icon.png";
import feature2 from "/images/about/features/Icon-1.png";
import feature3 from "/images/about/features/Icon-2.png";
import feature4 from "/images/about/features/Icon-3.png";
import feature5 from "/images/about/features/Icon-4.png";
import feature6 from "/images/about/features/Icon-5.png";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { useEffect } from "react";
import TeamSlider from "./TeamSlider";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-wrapper">
      <section className="section-padding-y">
        <div className="container">
          <div className="about-us">
            <div className="about-us__info">
              <h1 className="about-title">100% Trusted Organic Food Store</h1>
              <p className="about-us__info-text">
                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
                laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies
                elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at
                accumsan. Donec a eros non massa vulputate ornare. Vivamus
                ornare commodo ante, at commodo felis congue vitae.
              </p>
            </div>
            <div className="about-us__img">
              <img src={aboutImg1} alt="About us image" />
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="section-about-me">
          <div className="container">
            <div className="about-me">
              <div className="about-me__image">
                <img src={aboutImg2} alt="About me image" />
              </div>
              <div className="about-me__info">
                <h1 className="about-title">100% Trusted Organic Food Store</h1>
                <p className="about-me__info-text">
                  Pellentesque a ante vulputate leo porttitor luctus sed eget
                  eros. Nulla et rhoncus neque. Duis non diam eget est luctus
                  tincidunt a a mi. Nulla eu eros consequat tortor tincidunt
                  feugiat.
                </p>
                <div className="about-me-features">
                  <div className="about-me-features__item">
                    <img
                      src={feature1}
                      alt=""
                      className="about-me-features__item-img"
                    />
                    <div>
                      <p className="about-me-features__item-title">
                        100% Organic food
                      </p>
                      <p className="about-me-features__item-text">
                        100% healthy & Fresh food.
                      </p>
                    </div>
                  </div>
                  <div className="about-me-features__item">
                    <img
                      src={feature2}
                      alt=""
                      className="about-me-features__item-img"
                    />
                    <div>
                      <p className="about-me-features__item-title">
                        Great Support 24/7
                      </p>
                      <p className="about-me-features__item-text">
                        Instant access to Contact
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-me-features">
                  <div className="about-me-features__item">
                    <img
                      src={feature3}
                      alt=""
                      className="about-me-features__item-img"
                    />
                    <div>
                      <p className="about-me-features__item-title">
                        Customer Feedback
                      </p>
                      <p className="about-me-features__item-text">
                        Our happy customer
                      </p>
                    </div>
                  </div>
                  <div className="about-me-features__item">
                    <img
                      src={feature4}
                      alt=""
                      className="about-me-features__item-img"
                    />
                    <div>
                      <p className="about-me-features__item-title">
                        100% Sucure Payment
                      </p>
                      <p className="about-me-features__item-text">
                        We ensure your money is save
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-me-features">
                  <div className="about-me-features__item">
                    <img
                      src={feature5}
                      alt=""
                      className="about-me-features__item-img"
                    />
                    <div>
                      <p className="about-me-features__item-title">
                        Free Shipping
                      </p>
                      <p className="about-me-features__item-text">
                        Free shipping with discount
                      </p>
                    </div>
                  </div>
                  <div className="about-me-features__item">
                    <img
                      src={feature6}
                      alt=""
                      className="about-me-features__item-img"
                    />
                    <div>
                      <p className="about-me-features__item-title">
                        100% Organic Food
                      </p>
                      <p className="about-me-features__item-text">
                        100% healthy & Fresh food.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-delivered">
        <div className="container">
          <div className="delivered">
            <div className="delivered__info">
              <h2 className="delivered__info-title">
                We Delivered, You Enjoy Your Order.
              </h2>
              <p className="delivered__info-text">
                Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
                ultrices consectetur velit dapibus eu. Mauris sollicitudin
                dignissim diam, ac mattis eros accumsan rhoncus. Curabitur
                auctor bibendum nunc eget elementum.
              </p>
              <ul className="delivered__info-features">
                <li className="delivered__info-features-item">
                  <span>
                    <FaCheck size="0.9rem" />
                  </span>
                  <p>Sed in metus pellentesque.</p>
                </li>
                <li className="delivered__info-features-item">
                  <span>
                    <FaCheck size="0.9rem" />
                  </span>
                  <p>
                    Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
                  </p>
                </li>
                <li className="delivered__info-features-item">
                  <span>
                    <FaCheck size="0.9rem" />
                  </span>
                  <p>Maecenas ut nunc fringilla erat varius.</p>
                </li>
              </ul>
              <Link
                to="/categories"
                className="btn-primary shop-btn choose-us__info-btn"
              >
                Shop Now <GoArrowRight size="1.6rem" />
              </Link>
            </div>
            <div className="delivered-image">
              <img src={aboutImg3} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding-y" style={{background: 'linear-gradient(180deg, #f2f2f2 0%, #fff 100%)'}}>
        <div className="container">
          <div className="team">
            <div className="team__header">
              <h2 className="team__header-title">Our Awesome Team</h2>
              <p className="team__header-text">
                Pellentesque a ante vulputate leo porttitor luctus sed eget
                eros. Nulla et rhoncus neque. Duis non diam eget est luctus
                tincidunt a a mi.
              </p>
            </div>
            <TeamSlider />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
