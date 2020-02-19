import React from 'react';
import { render } from '@testing-library/react';

import App from '../App';
import Login from '../components/Login';
import Signup from '../components/Signup';
import OwnerLogin from '../components/OwnerLogin';
import OwnerSignup from '../components/OwnerSignup';
import ReactDOM from 'react-dom';
import Nav from '../components/Nav';
import Dashboard from '../components/movieDashboard/Dashboard.js';
import MovieDetails from '../components/MovieDetails';
import Availability from '../components/Availability';
import Checkout from '../components/Checkout';
import Event from '../components/Event';
import OwnerDashboard from '../components/OwnerDashboard';
import MakeSeatingChart from '../components/MakeSeatingChart';
import PrivateRoute from '../components/PrivateRoute';

// test('App is rendering', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// })

// test('Login is rendering', () =>{
//   render(<Login/>);
// })

// test('Signup is rendering', () =>{
//   render(<Signup/>);
// })

// test('OwnerLogin is rendering', () =>{
//   render(<OwnerLogin/>);
// })

// test('OwnerSignup is rendering', () =>{
//   render(<OwnerSignup/>);
// })

// test('Nav is rendering', () =>{
//   render(<Nav/>);
// })

// test('Dashboard is rendering', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Dashboard />, div);
//   ReactDOM.unmountComponentAtNode(div);
// })

// test('MovieDetails is rendering', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<MovieDetails />, div);
//   ReactDOM.unmountComponentAtNode(div);
// })

test('Availability is rendering', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Availability />, div);
  ReactDOM.unmountComponentAtNode(div);
})

test('Checkout is rendering', () => {
  render(<Checkout />);
})

test('Event is rendering', () => {
  render(<Event />);
})

test('OwnerDashboard is rendering', () => {
  render(<OwnerDashboard />);
})

test('MakeSeatingChart is rendering', () => {
  render(<MakeSeatingChart />);
})

