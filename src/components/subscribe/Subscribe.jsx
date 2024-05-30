import IconsList from "../icons-list/IconsList";
import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <div className="subcribe-section">
      <div className="container">
        <div className="subscribe">
          <div className="subscribe__info">
            <p className="subscribe__info-title">Subcribe our Newsletter</p>
            <p className="subscribe__info-text">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <form action="#" className="subscribe__form">
            <input
              type="email"
              className="subscribe__form-input"
              placeholder="Your email address"
            />
            <button type="submit" className="subscribe__form-btn btn-primary">
              Subscribe
            </button>
          </form>
          <IconsList />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
