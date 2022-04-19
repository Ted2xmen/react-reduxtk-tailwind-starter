import React from "react";
import { useSelector } from "react-redux";

function Counter() {
  const value = useSelector((state) => state.counter.value);
  return (
    <div className="counter">
      Counter: {value}
    </div>
  )
}

export default Counter;
