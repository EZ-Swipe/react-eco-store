/* eslint-disable react/prop-types */
import { useEffect, useReducer } from "react";
import { HiOutlineMinus } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import "./Counter.scss";
import { counterReducer } from "./counterReducer";

const Counter = ({ changeAmount, value = 5 }) => {
  const [count, dispatch] = useReducer(counterReducer, value)

  useEffect(() => {
    dispatch({
      type: "set",
      payload: value,
    });
  }, [value]);

  useEffect(() => {
    changeAmount(count);
  }, [count, changeAmount]);

  const buttonClickMin = () => {
    if (count > 1) {
      dispatch({
        type: "decrement",
      });
    }
  };

  const buttonClickPlus = () => {
    if (count < 10)
      dispatch({
        type: "increment",
      });
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

export default Counter;
