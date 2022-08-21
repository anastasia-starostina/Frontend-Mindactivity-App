import React from "react";
import { render, screen } from "@testing-library/react";
import Quote from "./index.js";
import "@testing-library/jest-dom";

test("testing whether the Quote component renders", async () => {
  render(<Quote />);
  let quote = screen.getByRole("note");
  expect(quote).toBeInTheDocument();
});

test("testing whether a specific Quote component renders", async () => {
  let exampleQuote = "example text";
  render(<Quote quote={exampleQuote} />);
  let testComponent = screen.getByRole("note");
  expect(testComponent).toHaveTextContent("example text");
});
