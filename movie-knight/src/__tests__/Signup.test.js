
import React from "react";
import { render, fireEvent, wait, cleanup } from "@testing-library/react";
import axios from "axios";

// Redux
import { renderWithRedux } from "./storeFactory";

// Components
import Signup from "../components/SignUp";
import { signUp } from "../actions/index";

afterEach(cleanup);

test("should render email input", () => {
  const { getByTestId } = renderWithRedux(<Signup />);
  const emailInput = getByTestId("emailform");
  expect(emailInput).toBeTruthy();
});

test("should render password input", () => {
  const { getByTestId } = renderWithRedux(<Signup />);
  const emailInput = getByTestId("passwordform");
  expect(emailInput).toBeTruthy();
});


//OLD2//

// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";

// import { render, fireEvent, wait } from '@testing-library/react';
// import axios from 'axios';

// // Redux
// import { Provider } from "react-redux";
// import { storeFactory } from "./storeFactory"

// // Components
// import {Signup} from '../components/SignUp';
// import { signUp } from "../actions/index";

// describe("Login form tests", () => {
// 	let mock;
// 	beforeEach(() => {
// 		mock = jest.spyOn(axios, 'post');
// 	});

// 	afterEach(() => {
// 		mock.mockRestore();
// 	});

// 	const { getByPlaceholderText, getByText, getByTestId } = render(
// 		<Provider store={store}>
// 			<Router>
// 				<Signup/>
// 			</Router>
// 		</Provider>
// 	);

// 	const fillForm = (username, email, password) => {

// 		fireEvent.change(getByPlaceholderText("Username"), {
// 			target: {value: username},
// 		})
// 		fireEvent.change(getByPlaceholderText("email@example.com"), {
// 			target: {value: email},
// 		})
// 		fireEvent.change(getByPlaceholderText("********"), {
// 			target: {value: password},
// 		})
// 	}

// 	const history = {
// 		push: jest.fn(()=> "/")
// 	}

// 	it("renders form correctly", () => {
	
//     expect(getByPlaceholderText("Username")).toBeInTheDocument();
//     expect(getByPlaceholderText("email@example.com")).toBeInTheDocument();
// 	expect(getByPlaceholderText("********")).toBeInTheDocument();
//     expect(getByText("Already have an account?")).toBeInTheDocument();
//     expect(getByText("Save your information for a faster checkout")).toBeInTheDocument();
//     expect(getByText("Log in here")).toBeInTheDocument();
// 	expect(getByText("Sign Up").closest('button')).toBeInTheDocument();
// 	})

// 	it("will call signup endpoint ", async () => {
// 		render(
// 			<Provider store={storeFactory}>
// 				<Router>
// 				  <Signup signUp={signUp} history={history}/>
// 				</Router>
// 			</Provider>
// 		);

// 		fillForm("TestUser", "test@email.com", "12345678")

// 		const user = {
// 			username: getByPlaceholderText("Username").value,
// 			email: getByPlaceholderText("email@example.com").value,
// 			password: getByPlaceholderText("********").value,
// 		}

// 		const result = { data: { user: user, 
// 			// token: '12345' 
// 		}}

// 		mock.mockResolvedValue(result);
// 		fireEvent.submit(getByTestId("signUp-button"))
// 		await wait(() => expect(mock).toHaveBeenCalledWith('/api/auth/register', user));
// 	});


	//OLD//


	//   const wrapper = render(<Signup/>);
	//   const input = wrapper.getByTestId("usernameform");
	//   rtl.fireEvent.change(input, { target: { value: "movieknights" }});
	//   expect(input.value).toBe("movieknights");



	// it("will call login endpoint if email and password are filled", async () => {
	// 	render(
	// 		<Provider store={store}>
	// 			<Router>
	// 				<Login />
	// 			</Router>
	// 		</Provider>
	// 	);

	// 	fillForm("test@user.com", "12345678")

	// 	const user = {
	// 		email: getByPlaceholderText("Username or Email").value,
	// 		password: getByPlaceholderText("Password").value,
	// 	}

	// 	const result = { data: { user: user, token: '12345' }}

	// 	mock.mockResolvedValue(result);
	// 	fireEvent.submit(getByTestId("login-form"))
	// 	await wait(() => expect(mock).toHaveBeenCalledWith('/auth/login/email', user));

	// });

// })









//OLD2//

// import React, { useState } from "react";
// import { render } from '@testing-library/react';
// import * as rtl from '@testing-library/react';
// import Signup from '../components/SignUp';
// import Enzyme from "enzyme";
// import { shallow, configure, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import { signUp } from "../actions/index";
// import { withRouter } from "react-router-dom";

// afterEach(rtl.cleanup);

// Enzyme.configure({adapter: new Adapter() });

// // test('FilterMenu renders correctly',() =>{
// //   expect(render(<Signup/>)).toMatchSnapshot();
// //  });

// test('all the texts displayed', () => {
//     const wrapper = render(<Signup/>);
//     wrapper.getByPlaceholderText(/username/i);
//     wrapper.getByPlaceholderText(/email@example.com/i);
//     wrapper.getByText(/Already have an account?/i);
//     wrapper.getByText(/Sign Up/i);
//     wrapper.getByText(/Continue as guest/i);
//     wrapper.getByText('Save your information for a faster checkout');
//     wrapper.getByText('Already have an account?');
//     wrapper.getByText('Log in here');
//   });

// test('renders form labels', () => {
//   const wrapper = render(<Signup/>);
//   wrapper.getByText('Username');
//   wrapper.getByText('Email');
//   wrapper.getByText('Password');
// });

// test('renders inputs', () => {
//   expect(shallow(<Signup/>).find('#username').length).toEqual(1)
//   expect(shallow(<Signup/>).find('#email').length).toEqual(1)
//   expect(shallow(<Signup/>).find('#password').length).toEqual(1)
//   })

// test('renders google button', () => {
//   const wrapper = render(<Signup/>);
//   wrapper.getByText('Login with Google');
//   });

// const history = {
// push: jest.fn(()=> "/")
// }

// test ("signup button", async () => {
//   const wrapper = render(<Signup signUp={signUp} history={history}/>);
//   const button = wrapper.getByTestId("signup-btn");
//   rtl.fireEvent.click(button);
//   expect(button).toBeTruthy(); 
// })  

// test('username form', () => {
    
//   const wrapper = render(<Signup/>);
//   const input = wrapper.getByTestId("usernameform");
//   rtl.fireEvent.change(input, { target: { value: "movieknights" }});
//   expect(input.value).toBe("movieknights");

// });

// test('email form', () => {
    
//   const wrapper = render(<Signup/>);
//   const input = wrapper.getByTestId("emailform");
//   rtl.fireEvent.change(input, { target: { value: "movieknights@mail.com" }});
//   expect(input.value).toBe("movieknights@mail.com");

// });

// test('password form', () => {
    
//   const wrapper = render(<Signup/>);
//   const input = wrapper.getByTestId("passwordform");
//   rtl.fireEvent.change(input, { target: { value: "movieknights123" }});
//   expect(input.value).toBe("movieknights123");

// });

//OLD//

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


  