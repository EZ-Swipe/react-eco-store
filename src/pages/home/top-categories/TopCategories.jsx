import "./TopCategories.scss";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import useEcoStore from "../../../zustand/useEcoStore";
import HomeCategory from "./HomeCategory";

const TopCategories = () => {
  const { categories, products } = useEcoStore();

  const ProductCountByCategory = (categoryId) => {
    return products.filter(product => product.category_id === categoryId).length;
  };


  return (
    <section className="top-categories section-padding-y">
      <div className="container">
        <div className="top-categories__inner">
          <div className="subheading-link-section">
            <h3 className="subheading-link-section__title">
              Shop by Top Categories
            </h3>
            <Link className="subheading-link-section__more" to="/categories">
              <span>View All</span> <GoArrowRight size="1.4rem" />
            </Link>
          </div>
          <div className="top-categories__list">
            {categories.map((category) => (
              <HomeCategory key={category.id} category={category} productCount={ProductCountByCategory(category.id)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
