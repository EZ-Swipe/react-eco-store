import { useEffect } from "react";
import useEcoStore from "../../../zustand/useEcoStore";
import useFilter from "../../../zustand/useFilter";
import { useLocation, useParams } from "react-router-dom";
import Product from "../../../components/product/Product";
import "./CategoryProducts.scss";

const CategoryProducts = () => {
  const { slug } = useParams();
  const location = useLocation();
  const { products, categories } = useEcoStore();
  const {
    setActiveCategory,
    setProductsCategory,
    activeCategory,
    priceRange,
    ratingFilter,
    tagsFilter,
    productsCategory,
  } = useFilter();

  useEffect(() => {
    setActiveCategory(categories.find((category) => category.slug === slug));
  }, [categories, slug, setActiveCategory]);

  useEffect(() => {
    if (activeCategory) {
      const filteredProducts = products.filter(
        (item) => item.category_id === activeCategory?.id
      );

      let filteredByTags = filteredProducts;

      if (tagsFilter.length > 0) {
        filteredByTags = filteredProducts.filter((product) =>
          tagsFilter.every((tag) => product.tags.includes(tag))
        );
      }

      if (priceRange) {
        const [minPrice, maxPrice] = priceRange;
        filteredByTags = filteredByTags.filter(
          (item) => item.price >= minPrice && item.price <= maxPrice
        );
      }

      if (ratingFilter.length > 0) {
        filteredByTags = filteredByTags.filter((item) =>
          ratingFilter.includes(Math.floor(item.rating))
        );
      }

      setProductsCategory(filteredByTags);
    }
  }, [
    activeCategory,
    priceRange,
    setProductsCategory,
    ratingFilter,
    tagsFilter,
    products,
  ]);

  // Очистка productsCategory при изменении маршрута
  useEffect(() => {
    setProductsCategory([]); // Очищаем productsCategory при изменении маршрута
  }, [location.pathname, setProductsCategory]);

  return (
    <div className="products-container">
      {productsCategory.length < 1
        ? "No products match the selected criteria"
        : productsCategory.map((product) => (
            <Product key={product.id} product={product} />
          ))}
    </div>
  );
};

export default CategoryProducts;
