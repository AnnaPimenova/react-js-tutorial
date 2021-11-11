import React from "react";
import { withKnobs, object } from "@storybook/addon-knobs";

import { Field } from "./Field";

export default {
  title: "Field",
  decorators: [withKnobs],
};

export const FieldEmpty2X2: React.FC<{}> = () => {
  return (
    <Field
      cellsArray={object("cellsArray", [
        [0, 0],
        [0, 0],
      ])}
    />
  );
};

export const FieldFullFilled2X2: React.FC<{}> = () => {
  return (
    <Field
      cellsArray={[
        [1, 1],
        [1, 1],
      ]}
    />
  );
};

export const Field2X2: React.FC<{}> = () => {
  return (
    <Field
      cellsArray={[
        [1, 0],
        [0, 1],
      ]}
    />
  );
};

export const Field3X3: React.FC<{}> = () => {
  return (
    <Field
      cellsArray={[
        [1, 0, 0],
        [0, 1, 0],
        [0, 1, 0],
      ]}
    />
  );
};

export const Field4X4: React.FC<{}> = () => {
  return (
    <Field
      cellsArray={[
        [0, 1, 0, 0],
        [0, 0, 0, 1],
        [0, 0, 1, 0],
        [1, 0, 0, 0],
      ]}
    />
  );
};
