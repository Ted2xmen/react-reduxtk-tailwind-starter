import React from "react";
import { useSelector } from "react-redux";

function Counter() {
  const value = useSelector((state) => state.counter.value);
  return (
    <div className="counter">
      Counter :<span className="rounded-lg bg-black pr-5"> {value}</span>
    </div>
  );
}

export default Counter;
