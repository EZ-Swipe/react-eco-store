import { Slider } from "antd";
import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import useFilter from "../../../zustand/useFilter";
const PriceSlider = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [inputValue, setInputValue] = useState([0, 100]);

  const { setPriceRange } = useFilter();

  const handleChange = (newValue) => {
    setInputValue(newValue);
    setPriceRange(newValue);
  };

  return (
    <div className="price-slider">
      <p
        className="left-sidebar__title"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Price {isOpen ? <GoChevronUp /> : <GoChevronDown />}
      </p>
      <div className={`left-sidebar__list ${!isOpen ? "hidden" : ""}`}>
        <Slider
          range={{
            draggableTrack: true,
          }}
          min={0}
          max={200}
          defaultValue={[0, 100]}
          onChange={handleChange}
          value={inputValue}
        />
        <p className="price-slider__text">
          Price:{" "}
          <span style={{ marginLeft: "5px", fontWeight: "500" }}>
            {inputValue[0]} - {inputValue[1]}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PriceSlider;
