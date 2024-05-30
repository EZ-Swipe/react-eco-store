import CategoryProducts from "./category-products/CategoryProducts";
import LeftSidebar from "./left-sidebar/LeftSidebar";
import "./Categories.scss";
import { useEffect, useRef } from "react";
import { IoFilter } from "react-icons/io5";
import { useState } from "react";

const Categories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const categoriesContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoriesContainerRef.current &&
        !categoriesContainerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [categoriesContainerRef]);
  return (
    <>
      <div className="container">
        <div className="filter-product" onClick={() => setIsOpen(true)}>
          Filters <IoFilter />
        </div>
        <div className="categories-container" ref={categoriesContainerRef}>
          <LeftSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          <CategoryProducts />
        </div>
      </div>
    </>
  );
};

export default Categories;
