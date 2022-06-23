import React from "react";
import { render, screen } from "@testing-library/react";
import Quote from "./index.js";

test("testing whether the Quote component renders", async () => {
  render(<Quote />);
  let quote = screen.getByRole("note");
  expect(quote).toBeInTheDocument();
});
