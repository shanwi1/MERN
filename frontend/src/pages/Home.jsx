import React from "react";
import { Link } from "react-router-dom";
import Parent from "../components/Parent";
import {createContext} from "react";

export const textContext = createContext();


function Home() {
  const text = "Hello from home";
  return (
    <div>
      <ul>
        <li>
          <Link to="/state">Use State Example</Link>
        </li>

        <li>
          <Link to="/forms">Forms</Link>
        </li>

        <li>
          <Link to="/effects">Effects</Link>
        </li>

        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
     
        <textContext.Provider value={text}>
          <Parent />
        </textContext.Provider>
   
    </div>
  );
}

export default Home;