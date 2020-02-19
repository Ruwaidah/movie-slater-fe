import React from 'react';
import { render } from '@testing-library/react';
import { Signup } from './SignUp';

test('Signup is rendering', () =>{
  render(<Signup/>);
})

test('renders "Username" text', () => {
    const wrapper = render(<Signup/>);
    wrapper.getByPlaceholderText(/username/i);
  });

  test('renders "email@example.com" text', () => {
    const wrapper = render(<Signup/>);
    wrapper.getByPlaceholderText(/email@example.com/i);
  });

  test('renders "Already have an account?" text', () => {
    const wrapper = render(<Signup/>);
    wrapper.getByText(/Already have an account?/i);
  });

  test('renders "Sign Up" text', () => {
    const wrapper = render(<Signup/>);
    wrapper.getByText(/Sign Up/i);
  });

  test('renders "Continue as guest" text', () => {
    const wrapper = render(<Signup/>);
    wrapper.getByText(/Continue as guest/i);
  });