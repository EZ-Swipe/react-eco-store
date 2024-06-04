import { Link } from "react-router-dom";
import imgNotFound from "/images/404.png";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="not-found">
      <img className="not-found-img" src={imgNotFound} alt="Not Found Image" />
      <h3>Oops! page not found</h3>
      <p className="not-found-text">
        Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas
        sagittis tortor at metus mollis
      </p>
      <Link className="btn-primary not-found-btn" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
