import React from "react";
import { render, fireEvent, cleanup, wait } from "@testing-library/react";
import App from "../App";
import { renderWithRedux } from "../StoreFactory";

test("app renders", () => {
  renderWithRedux(<App />);
});
