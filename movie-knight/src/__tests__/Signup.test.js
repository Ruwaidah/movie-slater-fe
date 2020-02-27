import React, { useState } from "react";
import { render } from '@testing-library/react';
import * as rtl from '@testing-library/react';
import { Signup } from '../components/auth/SignUp';
import Enzyme from "enzyme";
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { signUp } from "../actions/index";
import { withRouter } from "react-router-dom";

afterEach(rtl.cleanup);

Enzyme.configure({adapter: new Adapter() });

test('all the texts displayed', () => {
    const wrapper = render(<Signup/>);
    const username = wrapper.getByPlaceholderText(/username/i);
    const email = wrapper.getByPlaceholderText(/email@example.com/i);
    const txt1 = wrapper.getByText(/Already have an account?/i);
    const txt2 = wrapper.getByText(/Sign Up/i);
    const txt3 = wrapper.getByText(/Continue as guest/i);
    const txt4 = wrapper.getByText('Save your information for a faster checkout');
    const txt5 = wrapper.getByText('Already have an account?');
    const txt6 = wrapper.getByText('Log in here');

    expect(username).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(txt1).toBeInTheDocument();
    expect(txt2).toBeInTheDocument();
    expect(txt3).toBeInTheDocument();
    expect(txt4).toBeInTheDocument();
    expect(txt5).toBeInTheDocument();
    expect(txt6).toBeInTheDocument();

  });

test('renders form labels', () => {
  const wrapper = render(<Signup/>);
  wrapper.getByText('Username');
  wrapper.getByText('Email');
  wrapper.getByText('Password');
});

test('renders inputs', () => {
  expect(shallow(<Signup/>).find('#username').length).toEqual(1)
  expect(shallow(<Signup/>).find('#email').length).toEqual(1)
  expect(shallow(<Signup/>).find('#password').length).toEqual(1)
  })

test('renders google button', () => {
  const wrapper = render(<Signup/>);
  wrapper.getByText('Login with Google');
  });

const history = {
push: jest.fn(()=> "/")
}

test ("signup button", async () => {
  const wrapper = render(<Signup signUp={signUp} history={history}/>);
  const button = wrapper.getByTestId("signUp-button");
  rtl.fireEvent.click(button);
  expect(button).toBeTruthy(); 
})  

test('username form', () => {
    
  const wrapper = render(<Signup/>);
  const input = wrapper.getByTestId("usernameform");
  rtl.fireEvent.change(input, { target: { value: "movieknights" }});
  expect(input.value).toBe("movieknights");

});

test('email form', () => {
    
  const wrapper = render(<Signup/>);
  const input = wrapper.getByTestId("emailform");
  rtl.fireEvent.change(input, { target: { value: "movieknights@mail.com" }});
  expect(input.value).toBe("movieknights@mail.com");

});

test('password form', () => {
    
  const wrapper = render(<Signup/>);
  const input = wrapper.getByTestId("passwordform");
  rtl.fireEvent.change(input, { target: { value: "movieknights123" }});
  expect(input.value).toBe("movieknights123");

});

// describe("<Signup/>", () => {
//   let wrapper;
//   const setState = jest.fn();
//   const useStateSpy = jest.spyOn(React, "useState")
//   useStateSpy.mockImplementation((init) => [init, setState]);


//   beforeEach(() => {
//       wrapper = Enzyme.mount(Enzyme.shallow(<Signup/>).get(0))
//   });

//   afterEach(() => {
//       jest.clearAllMocks();
//   });


//   describe("Username input", () => {
//     it("Should capture username correctly onChange", () => {
//         const content = wrapper.find("input").at(0);
//         content.instance().value = "Bob";
//         content.simulate("change");
//         expect(setState).toHaveBeenCalledWith("Bob");
//     });
//   });

//   describe("Email input", () => {
//     it("Should capture email correctly onChange", () => {
//         const content = wrapper.find("input").at(1);
//         content.instance().value = "na@email.com";
//         content.simulate("change");
//         expect(setState).toHaveBeenCalledWith("na@email.com");
//     });
//   });

// });
