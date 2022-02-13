import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  // destructuring rgb, weight and index brings the properties from the color prop

  //set a state value for alert
  const [alert, setAlert] = useState(false);

  //convert the rgb value to a string to be able to use it in css
  const bcg = rgb.join(",");

  //use the rgbtohex function to convert the rgb value to hex and pass
  //it to a variable

  const hex = rgbToHex(...rgb);

  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && `color-light`}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert"> copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
