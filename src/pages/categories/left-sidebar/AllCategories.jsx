/* eslint-disable react/prop-types */
import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import { NavLink } from "react-router-dom";
import useEcoStore from "../../../zustand/useEcoStore";

const AllCategories = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { categories } = useEcoStore();

  return (
    <div>
      <p
        className="left-sidebar__title"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        All Categories {isOpen ? <GoChevronUp /> : <GoChevronDown />}
      </p>
      <ul className={`left-sidebar__list ${!isOpen ? "hidden" : ""}`}>
        {categories.map((category) => (
          <NavLink
            to={`${category.slug}`}
            className="category-radio"
            key={category.id}
          >
            <span className="radio"></span>
            <span>{category.name}</span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default AllCategories;
