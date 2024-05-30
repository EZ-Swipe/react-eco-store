/* eslint-disable react/prop-types */
import { Divider } from "antd";
import "./LeftSidebar.scss";
import AllCategories from "./AllCategories";
import PriceSlider from "./PriceSlider";
import Rating from "./Rating";
import Tags from "./Tags";
import { IoClose } from "react-icons/io5";

const LeftSidebar = ({isOpen, setIsOpen}) => {



  return (
    <div className={`left-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="close-left-sidebar">
        <IoClose size='1.7rem' onClick={() => setIsOpen(false)} />
      </div>
      <AllCategories />
      <Divider />
      <PriceSlider />
      <Divider />
      <Rating />
      <Divider />
      <Tags />
    </div>
  );
};

export default LeftSidebar;
