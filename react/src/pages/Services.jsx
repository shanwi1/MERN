import React from "react";
import useCounter from "../useCounter";

function Services() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>Custom Hook</h1>

      <h3>Count: {count}</h3>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Services;