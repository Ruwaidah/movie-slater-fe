import React from "react";
import { cleanup } from "@testing-library/react";
import App from "../App";
import { Login } from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import FilterMenu from "../components/movieDashboard/FilterMenu";

import { renderWithRedux } from "../StoreFactory";

afterEach(cleanup);

test("Login is rendering", () => {
  renderWithRedux(<Login />);
});

test("Signup is rendering", () => {
  renderWithRedux(<Signup />);
});

test("FilterMenu is rendering", () => {
  renderWithRedux(<FilterMenu />);
});
