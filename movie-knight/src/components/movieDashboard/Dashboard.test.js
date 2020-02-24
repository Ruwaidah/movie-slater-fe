import React, { useState } from "react";
import { render } from '@testing-library/react';
import * as rtl from '@testing-library/react';
import { Dashboard } from './Dashboard';
import Enzyme from "enzyme";
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

afterEach(rtl.cleanup);

Enzyme.configure({adapter: new Adapter() });

test('all the texts displayed', () => {
    const wrapper = render(withRouter(<Dashboard/>));
    wrapper.getByText(/Select the movies you'd like to see/i);
    wrapper.getByText(/Next/i);
  });

test('renders next button', () => {
  const wrapper = render(withRouter(<Dashboard/>));
  expect(wrapper.getByTestId('next-btn').length).toEqual(1)
});

const history = {
push: jest.fn(()=> "/date")
}

test ("next button", async () => {
  const wrapper = render(withRouter(<Dashboard history={history}/>));
  const button = wrapper.getByTestId("next-btn");
  rtl.fireEvent.click(button);
  expect(button).toBeTruthy(); 
})  
