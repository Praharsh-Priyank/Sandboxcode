/*var React = require("react");
var ReactDOM = require("react-dom");*/

import React from "react";
import ReactDOM from "react-dom";

const fname = "Praharsh";
const lnme = "Priyank";
ReactDOM.render(
  <div>
    <h1>
      My name is {fname} {lnme}
    </h1>
    <p>This is great</p>
  </div>,
  document.getElementById("root")
);
