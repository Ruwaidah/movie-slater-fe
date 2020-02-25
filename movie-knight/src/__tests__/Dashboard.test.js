import { cleanup } from "@testing-library/react";
import { renderWithRedux } from "./storeFactory";
import Dashboard from "../components/movieDashboard/Dashboard";
import React from "react";

afterEach(cleanup);

test("Should render Dashboard ", () => {
  const { getByTestId } = renderWithRedux(<Dashboard />);
  const header = getByTestId("dashboard");
  expect(header).toBeTruthy();
});

// test('renders next button', () => {
//   const wrapper = render(withRouter(<Dashboard/>));
//   expect(wrapper.getByTestId('next-btn').length).toEqual(1)
// });

// const history = {
// push: jest.fn(()=> "/date")
// }

// test ("next button", async () => {
//   const wrapper = render(withRouter(<Dashboard history={history}/>));
//   const button = wrapper.getByTestId("next-btn");
//   rtl.fireEvent.click(button);
//   expect(button).toBeTruthy(); 
// })  
