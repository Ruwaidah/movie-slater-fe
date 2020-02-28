import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { renderWithRedux } from "../StoreFactory";
import ZipSearch from "../components/movieDashboard/ZipSearch";

afterEach(cleanup);

describe("ZipSearch", () => {
test("ZipSearch renders correctly", () => {
  const { getByPlaceholderText } = renderWithRedux(<ZipSearch />);
  const placeholder = getByPlaceholderText(/Enter zip code to see movies near you/i);
  
  expect(placeholder).toBeInTheDocument();
});

test('ZipSearch', () => {
    
    const { getByTestId } = renderWithRedux(<ZipSearch />);
    const input = getByTestId("zipcodesearch");
    input.value = "12345";
    fireEvent.change(input);
    expect(input.value).toBe("12345");
  
  });
});  