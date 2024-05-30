import { Link } from "react-router-dom";
import Product from "../../../components/product/Product";
import "./FeaturedProducts.scss";
import { GoArrowRight } from "react-icons/go";

import useEcoStore from "../../../zustand/useEcoStore";

const FeaturedProducts = () => {
  const { products } = useEcoStore();

  return (
    <section className="featured-products section-padding-y">
      <div className="container">
        <div className="subheading-link-section">
          <h3 className="subheading-link-section__title">Featured Products</h3>
          <Link className="subheading-link-section__more" to="/categories">
            View All <GoArrowRight size="1.4rem" />
          </Link>
        </div>

        <div className="featured-products__list">
          {products.slice(0, 4).map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
