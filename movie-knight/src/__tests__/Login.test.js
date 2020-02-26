import React from 'react';
import { render } from '@testing-library/react';
import { Login } from './Login';
import * as rtl from '@testing-library/react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { login } from "../actions/index";

configure({ adapter: new Adapter() });

it('renders texts', () => {

  const wrapper = render(<Login/>);
  wrapper.getByText('Log in to your Movie Knight account');
  wrapper.getByText('Forgot password?');
  wrapper.getByText('Click here');

  });

it('renders form', () => {

  const wrapper = render(<Login/>);
  wrapper.getByPlaceholderText(/email/i);
  wrapper.getByPlaceholderText('********');

  });
  
it('renders input', () => {

  expect(shallow(<Login/>).find('#email').length).toEqual(1)
  expect(shallow(<Login/>).find('#password').length).toEqual(1)

  })

test('renders form labels', () => {

  const wrapper = render(<Login/>);
  wrapper.getByText('Email');
  wrapper.getByText('Password');

});

test('email form', () => {
    
  const wrapper = render(<Login/>);
  const input = wrapper.getByTestId("emailform");
  rtl.fireEvent.change(input, { target: { value: "movieknights@mail.com" }});
  expect(input.value).toBe("movieknights@mail.com");

});

test('password form', () => {
    
  const wrapper = render(<Login/>);
  const input = wrapper.getByTestId("passwordform");
  rtl.fireEvent.change(input, { target: { value: "movieknights123" }});
  expect(input.value).toBe("movieknights123");

});

const history = {
  push: jest.fn(()=> "/")
  }

test ("login button", async () => {
  const wrapper = render(<Login login={login} history={history} />);
  const button = wrapper.getByTestId("login-btn");
  rtl.fireEvent.click(button);
  expect(button).toBeTruthy(); 
})  