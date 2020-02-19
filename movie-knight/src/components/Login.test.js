import React from 'react';
import { render } from '@testing-library/react';
import { Login } from './Login';

test('Signup is rendering', () =>{
  render(<Login/>);
})

test('renders "Log in to your Movie Knight account" text', () => {
const wrapper = render(<Login/>);
wrapper.getByText(/Log in to your Movie Knight account/i);
});
