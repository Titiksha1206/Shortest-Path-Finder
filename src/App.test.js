import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

test("renders  without crashing", () => {
  const div = document.createElement("div");
  render(<App />, div);
  root.unmount(div);

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
