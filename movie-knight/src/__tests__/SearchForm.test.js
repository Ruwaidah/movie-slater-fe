import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { renderWithRedux } from "../StoreFactory";
import SearchForm from "../components/movieDashboard/SearchForm";

afterEach(cleanup);

describe("SearchForm", () => {
test("SearchForm renders correctly", () => {
  const { getByPlaceholderText } = renderWithRedux(<SearchForm />);
  const placeholder = getByPlaceholderText(/search movies/i);
  
  expect(placeholder).toBeInTheDocument();
});

test('SearchForm', () => {
    
    const { getByTestId } = renderWithRedux(<SearchForm />);
    const input = getByTestId("search");
    input.value = "Sonic";
    fireEvent.change(input);
    expect(input.value).toBe("Sonic");
  
  });
});  