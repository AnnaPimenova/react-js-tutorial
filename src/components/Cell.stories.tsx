import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";

import { Cell } from "./Cell";

export default {
  title: "Cell",
  decorators: [withKnobs],
};

export const Cell_alive: React.FC<{}> = () => {
  const count = number("Number", 0);

  return <Cell isFilled={true} children={count} />;
};

export const Cell_died: React.FC<{}> = () => {
    const count = number("Number", 0);
  
    return <Cell isFilled={false} children={count} />;
};