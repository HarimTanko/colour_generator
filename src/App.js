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
  const handleSubmit = (e) => {
    e.preventDefault();
    // according to the documentation, use new Values and assign it to a variable color
    //then you can call methods on that variable color
    //pass into the Values 'color'what you extracted from the input by setColor(e.target.vale)

    //wrap the the fetching of the colors in a trycatch and set the setError to true to
    //use it somewhere else (use in the input element)
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Colour Generator</h3>
        <form onSubmit={handleSubmit}>
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
            /** using the ternary operator set the classname to 'error' if error is true
             * this was set in the setError in the trycatch when tryin to extract the
             * input value and setting it to the new Values from the docs
             */
            className={`${error ? "error" : null}`}
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
