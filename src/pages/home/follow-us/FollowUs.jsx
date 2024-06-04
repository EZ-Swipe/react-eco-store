import "./FollowUs.scss";
import instagramPic1 from "/images/follow-us/Instagram Post 1.jpg";
import instagramPic2 from "/images/follow-us/Instagram Post 2.jpg";
import instagramPic3 from "/images/follow-us/Instagram Post 3.jpg";
import instagramPic4 from "/images/follow-us/Instagram Post 4.jpg";
import instagramPic5 from "/images/follow-us/Instagram Post 5.jpg";
import instagramPic6 from "/images/follow-us/Instagram Post 6.jpg";

const FollowUs = () => {
  return (
    <div className="section-padding-b">
      <div className="container">
        <div className="follow-us">
          <h3>Follow us on Instagram</h3>
          <div className="follow-us__list">
            <a href="#" className="follow-us__item">
              <img src={instagramPic1} alt="" />
            </a>
            <a href="#" className="follow-us__item">
              <img src={instagramPic2} alt="" />
            </a>
            <a href="#" className="follow-us__item">
              <img src={instagramPic3} alt="" />
            </a>
            <a href="#" className="follow-us__item">
              <img src={instagramPic4} alt="" />
            </a>
            <a href="#" className="follow-us__item">
              <img src={instagramPic5} alt="" />
            </a>
            <a href="#" className="follow-us__item">
              <img src={instagramPic6} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
