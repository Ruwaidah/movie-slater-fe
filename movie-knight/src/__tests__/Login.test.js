import React from "react";
import { render, fireEvent, cleanup, wait } from "@testing-library/react";
import { Login } from "../components/auth/Login";
import { login } from "../actions";
import { renderWithRedux } from "../StoreFactory";

afterEach(cleanup);

test("login renders", () => {
  const { getByLabelText } = render(<Login />);
  const emailNode = getByLabelText("Email");
  const passwordNode = getByLabelText("Password");
  expect(emailNode).toBeInTheDocument();
  expect(passwordNode).toBeInTheDocument();
});

test("renders google button", () => {
  const wrapper = render(<Login />);
  wrapper.getByText("Login with Google");
});

test("calls onSubmit with the username and password when submitted", () => {
  // Arrange
  const history = {
    push: jest.fn(() => "/")
  };
  const handleSubmit = jest.fn(() => console.log("hi"));
  const fakeUser = {
    email: "test@test.com",
    password: "test"
  };

  // render and grab your queries
  const { container, getByLabelText, getByText } = renderWithRedux(
    <Login login={login} history={history} handleSubmit={handleSubmit} />
  );

  // grab the input fields
  const emailNode = getByLabelText("Email");
  const passwordNode = getByLabelText("Password");
  const formNode = container.querySelector("form");
  const submitButtonNode = getByText("Log In");

  // fill out the fields with fake user
  emailNode.value = fakeUser.email;
  passwordNode.value = fakeUser.password;

  // Act
  fireEvent.click(submitButtonNode);
  // Simulate.onSubmit(formNode);

  // Assert
  expect(handleSubmit).toHaveBeenCalled();
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser);
  expect(submitButtonNode.type).toBe("submit");
});
