import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";

import { Cell } from "./Cell";

export default {
  title: "Cell",
  decorators: [withKnobs],
};

export const CellAlive: React.FC<{}> = () => {
  const count = number("Number", 0);

  return <Cell isFilled={true} children={count} />;
};

export const CellDied: React.FC<{}> = () => {
  const count = number("Number", 0);

  return <Cell isFilled={false} children={count} />;
};
