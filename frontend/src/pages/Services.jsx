import React from "react";
import { Link } from "react-router-dom";
import useCounter from "../useCounter";

function Services() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>Services</h1>

      {/* Custom Hook */}
      <h2>Custom Hook</h2>

      <h3>Count: {count}</h3>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>

      <hr />

      {/* Task Management */}
      <h2>Task Management</h2>

      <p>
        Create, view, update and delete your tasks.
      </p>

      <Link to="/tasks">
        <button>Go to Task Management</button>
      </Link>
    </div>
  );
}

export default Services;