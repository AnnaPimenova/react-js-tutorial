import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Cell } from "./Cell";

describe("Cell", () => {
  test("click Cell", () => {
    const someNumber = 7;
    const { container } = render(
      <Cell isFilled={true} children={someNumber} />
    );
    const cell = container.firstChild;

    expect(cell).not.toBeNull();

    expect(cell).toHaveStyle("background-color:darkgray");

    userEvent.click(cell);
    expect(cell).toHaveTextContent(`${someNumber}`);

    userEvent.click(cell);
    expect(screen.queryByText(`${someNumber}`)).not.toBeInTheDocument();
  });
});
