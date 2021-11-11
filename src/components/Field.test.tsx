import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Field } from "./Field";

afterEach(cleanup);

describe("Field", () => {
  it("renders filled cells", () => {
    render(
      <Field
        cellsArray={[
          [1, 0],
          [0, 1],
        ]}
      />
    );
    expect(screen.getAllByTestId("cell").length).toBe(4);
  });
});
