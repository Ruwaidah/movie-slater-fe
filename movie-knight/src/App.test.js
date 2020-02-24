import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import OwnerLogin from './components/OwnerLogin';
import OwnerSignup from './components/OwnerSignup';
import { Nav } from './components/Nav';
import Dashboard from './components/movieDashboard/Dashboard';
import FilterMenu from './components/movieDashboard/FilterMenu';
import { MovieDetails } from './components/MovieDetails';
import Availability from './components/Availability';
import Checkout from './components/Checkout';
import Event from './components/Event';
import OwnerDashboard from './components/OwnerDashboard';
import MakeSeatingChart from './components/MakeSeatingChart';
import PrivateRoute from './components/PrivateRoute';

test('Login is rendering', () =>{
  render(<Login/>);
})

test('Signup is rendering', () =>{
  render(<Signup/>);
})

test('FilterMenu is rendering', () =>{
  render(<FilterMenu/>);
})

// test('MovieDetails is rendering', () =>{
//   render(<MovieDetails/>);
// })

// test('renders without crashing', () => {
//   const container = render(<App />);
// });

// test('OwnerLogin is rendering', () =>{
//   render(<OwnerLogin/>);
// })

// test('OwnerSignup is rendering', () =>{
//   render(<OwnerSignup/>);
// })

// test('Nav is rendering', () =>{
//   render(<Nav/>);
// })

// test('Dashboard is rendering', () =>{
//   render(<Dashboard/>);
// })

// test('Availability is rendering', () =>{
//   render(<Availability/>);
// })

// test('Checkout is rendering', () =>{
//   render(<Checkout/>);
// })

// test('Event is rendering', () =>{
//   render(<Event/>);
// })

// test('OwnerDashboard is rendering', () =>{
//   render(<OwnerDashboard/>);
// })

// test('MakeSeatingChart is rendering', () =>{
//   render(<MakeSeatingChart/>);
// })

