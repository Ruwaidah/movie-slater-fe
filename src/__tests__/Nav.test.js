import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { renderWithRedux } from "../StoreFactory";
import Nav from "../components/progress-nav-bars/Nav";

afterEach(cleanup);

test("Nav bar renders correctly when user opens", () => {
  const { getByText, getByTestId } = renderWithRedux(<Nav />);
  //   const button = getByTestId("menu");
  //   fireEvent.click(button);
  const menuItem = getByText(/Home/i);
  const menuItem1 = getByText(/Sign Up/i);
  const menuItem2 = getByText(/Login/i);
  const footer = getByText(/2020 Movie Knight/i);

  expect(menuItem).toBeInTheDocument();
  expect(menuItem1).toBeInTheDocument();
  expect(menuItem2).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});
