import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  //set up the state for the color
  const [color, setColor] = useState("");

  //set up the state for the error in case the input is
  //wrong
  const [error, setError] = useState(false);

  //set a default list of colors
  const [list, setList] = useState([]);

  //set up a handle submit because were going to use a
  //form
  const hadleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <>
      <section className="container">
        <h3>Colour Generator</h3>
        <form onsSubmit={hadleSubmit}>
          {/** value is equal to color because we want to set the
           * state value to be equal to the value of the input
           * that is how you control it.
           * set the onchange to e.target.value also to control the state
           * from the input
           */}
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
          ></input>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        <h4>list goes here</h4>
      </section>
    </>
  );
}

export default App;
