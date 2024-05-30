import { useState } from "react";
import { HiOutlineMinus } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";

const CounterCart = ({ initialValue, onChange }) => {
  const [count, setCount] = useState(initialValue);

  const buttonClickMin = () => {
    if (count > 1) {
      const newValue = count - 1;
      setCount(newValue);
      onChange(newValue);
    }
  };

  const buttonClickPlus = () => {
    const newValue = count + 1;
    setCount(newValue);
    onChange(newValue);
  };

  return (
    <div className="counter">
      <button className="counter-btn" onClick={buttonClickMin}>
        <HiOutlineMinus size="1.3rem" />
      </button>
      <div className="counter-value">{count}</div>
      <button className="counter-btn" onClick={buttonClickPlus}>
        <GoPlus size="1.3rem" />
      </button>
    </div>
  );
};

export default CounterCart;
