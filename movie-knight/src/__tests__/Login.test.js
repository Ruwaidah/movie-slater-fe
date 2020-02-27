import React from 'react';
import { render } from '@testing-library/react';
import { Login } from '../components/auth/Login';
import * as rtl from '@testing-library/react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { login } from "../actions/index";

configure({ adapter: new Adapter() });

it('renders texts', () => {

  const wrapper = render(<Login/>);
  const text1 = wrapper.getByText('Log in to your Movie Knight account');
  const text2 =  wrapper.getByText('Forgot password?');
  const text3 = wrapper.getByText('Click here');

  expect(text1).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(text3).toBeInTheDocument();

  });

it('renders form', () => {

  const wrapper = render(<Login/>);
  const email = wrapper.getByPlaceholderText(/email/i);
  const password = wrapper.getByPlaceholderText('********');

  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  

  });
  
it('renders input', () => {

  expect(shallow(<Login/>).find('#email').length).toEqual(1)
  expect(shallow(<Login/>).find('#password').length).toEqual(1)

  })

test('renders form labels', () => {

  const wrapper = render(<Login/>);
  const emailLabel = wrapper.getByText('Email');
  const passwordLabel = wrapper.getByText('Password');

  expect(emailLabel).toBeInTheDocument();
  expect(passwordLabel).toBeInTheDocument();

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