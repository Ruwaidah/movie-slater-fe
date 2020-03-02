import React from "react";
import { cleanup, fireEvent } from "@testing-library/react";
import { renderWithRedux } from "../StoreFactory";
import DatePicker from "../components/date-time/DatePicker";
import DayCard from "../components/date-time/DayCard";

afterEach(cleanup);

describe("Date picker", () => {
  it("renders all components", () => {
    // Render component and grab the things you want to test
    const { getByTestId, getByText } = renderWithRedux(<DatePicker />);
    const days = getByTestId("days");
    const header = getByText(/When would you like to go/i);

    // Assert that all the days are rendering
    expect(days.children).toHaveLength(7);
    expect(header).toBeTruthy();
  });

  it("changes class to brightness when user clicks on a day", () => {
    // Render component and grab the things you want to test
    const daySelect = ["Monday", "Tuesday"];
    const setDaySelect = jest.fn();
    const { getByTestId } = renderWithRedux(
      <DayCard daySelect={daySelect} setDaySelect={setDaySelect} />
    );
    const day = getByTestId("day-btn");

    // click the button
    fireEvent.click(day);

    // Assert that the day button class has changed to bright
    expect(day).toHaveClass("day red-box");
  });
});
