import React from 'react';
import { render } from '@testing-library/react';
import { Login } from './Login';
import * as rtl from '@testing-library/react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('renders "Log in to your Movie Knight account" text', () => {
const wrapper = render(<Login/>);
wrapper.getByText(/Log in to your Movie Knight account/i);
});

test('renders email form', () => {
  const wrapper = render(<Login/>);
  wrapper.getByPlaceholderText(/email/i);
  });

test('renders password form', () => {
  const wrapper = render(<Login/>);
  wrapper.getByPlaceholderText('********');
  });  

test('Log in to your Movie Knight account', () => {
  const wrapper = render(<Login/>);
  wrapper.getByText('Log in to your Movie Knight account');
  });    

test('Forgot password? and Click here', () => {
  const wrapper = render(<Login/>);
  wrapper.getByText('Forgot password?');
  wrapper.getByText('Click here');
});  
  
test('renders a email input', () => {
expect(shallow(<Login/>).find('#email').length).toEqual(1)
})

test('renders a password input', () => {
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