/* eslint-disable react/prop-types */
import { Checkbox } from "antd";
import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import useFilter from "../../../zustand/useFilter";

const Rating = () => {
  const [isOpen, setIsOpen] = useState(true);

  const { setRatingFilter } = useFilter();

  const ratings = [
    { label: "5.0 & up", value: 5 },
    { label: "4.0 & up", value: 4 },
    { label: "3.0 & up", value: 3 },
    { label: "2.0 & up", value: 2 },
    { label: "1.0 & up", value: 1 },
  ];

  const handleRatingChange = (checkedValues) => {
    setRatingFilter(checkedValues);
  };

  return (
    <div>
      <p
        className="left-sidebar__title"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Rating {isOpen ? <GoChevronUp /> : <GoChevronDown />}
      </p>

      {isOpen && (
        <Checkbox.Group
          className="left-sidebar__list"
          options={ratings.map((rating, index) => ({
            label: (
              <div key={index}>
                {[...Array(5)].map((_, i) => (
                  <AiFillStar
                    key={i}
                    className={i < rating.value ? "star active" : "star"}
                  />
                ))}
                <span style={{ marginLeft: "5px" }}>{rating.label}</span>
              </div>
            ),
            value: rating.value,
          }))}
          onChange={handleRatingChange}
        />
      )}
    </div>
  );
};

export default Rating;
