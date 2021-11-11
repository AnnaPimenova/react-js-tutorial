import React from "react";
import { render } from "react-dom";
import { Field } from "./components/Field";

render(
  <Field
    cellsArray={[
      [1, 0, 1, 0],
      [0, 0, 1, 1],
      [0, 1, 0, 1],
      [1, 1, 0, 0],
    ]}
  ></Field>,
  document.getElementById("root")
);
