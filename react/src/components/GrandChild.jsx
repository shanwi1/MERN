import React from 'react'
import { useContext } from 'react';
import {textContext} from "../pages/Home"

const GrandChild = () => {
    const text = useContext(textContext);
  return (
    <div>
      <h3>GrandChild : {text}</h3>
    </div>
  )
}

export default GrandChild
