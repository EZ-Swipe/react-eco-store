/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const HomeCategory = ({ category, productCount }) => {
  return (
    <Link to={`/categories/${category.slug}`} key={category.id} className="home-category border-hover">
      <img src={category.image} alt="" />
      <div className="home-category__info">
        <p className="home-category__title">{category.name}</p>
        <p className="home-category__products-amount">{productCount} {productCount === 1 ? "Product" : "Products"}</p>
      </div>
    </Link>
  );
};

export default HomeCategory;
