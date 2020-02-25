import React from "react";
import { cleanup } from "@testing-library/react";
import App from "../App";
import { Login } from "../components/Login";
import Signup from "../components/Signup";
import OwnerLogin from "../components/OwnerLogin";
import OwnerSignup from "../components/OwnerSignup";
import { Nav } from "../components/Nav";
import Dashboard from "../components/movieDashboard/Dashboard";
import FilterMenu from "../components/movieDashboard/FilterMenu";
import { MovieDetails } from "../components/MovieDetails";
import Availability from "../components/Availability";
import Checkout from "../components/Checkout";
import Event from "../components/Event";
import OwnerDashboard from "../components/OwnerDashboard";
import MakeSeatingChart from "../components/MakeSeatingChart";
import PrivateRoute from "../components/PrivateRoute";
import { renderWithRedux } from "./storeFactory";

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

test("Checkout is rendering", () => {
  renderWithRedux(<Checkout />);
});

test("Event is rendering", () => {
  renderWithRedux(<Event />);
});

test("OwnerDashboard is rendering", () => {
  renderWithRedux(<OwnerDashboard />);
});

test("MakeSeatingChart is rendering", () => {
  renderWithRedux(<MakeSeatingChart />);
});