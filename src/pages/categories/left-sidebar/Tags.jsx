import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import useFilter from "../../../zustand/useFilter";

const Tags = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedTags, setSelectedTags] = useState([]);
  const { setTagsFilter } = useFilter();

  const tags = [
    "Healthy",
    "Vegetable",
    "Vitamins",
    "Low fat",
    "Kid foods",
    "Bread",
    "Meat",
    "Snacks",
    "Tiffin",
    "Lunch",
    "Dinner",
    "Breakfast",
    "Fruit",
  ];

  const handleTagClick = (tag) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter((item) => item !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newSelectedTags);
    setTagsFilter(newSelectedTags);
  };

  return (
    <div>
      <p
        className="left-sidebar__title"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Popular Tag {isOpen ? <GoChevronUp /> : <GoChevronDown />}
      </p>

      <div className={`tags-list ${!isOpen ? "hidden" : ""}`}>
        {tags.map((tag, index) => (
          <button
            key={index}
            className={`tag-btn ${
              selectedTags.includes(tag) ? "selected clicked" : ""
            }`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tags;
