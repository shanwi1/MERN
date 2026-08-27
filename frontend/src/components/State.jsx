import { useState, useEffect } from "react";

function State() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("Component mounted or show changed");
  }, [show]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>State</h1>

      <p>Count: {count}</p>

      <button onClick={increment}>Increment</button>

      <br />

      {show && <h2>This is a simple React application.</h2>}

      <button onClick={() => setShow(!show)}>
        Toggle
      </button>
    </div>
  );
}

export default State;