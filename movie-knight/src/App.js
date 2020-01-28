import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Nav';
import Dashboard from './components/Dashboard';
import MovieDetails from './components/MovieDetails';
import Availability from './components/Availability';
import Checkout from './components/Checkout';
import Event from './components/Event';
import OwnerDashboard from './components/OwnerDashboard';
import MakeSeatingChart from './components/MakeSeatingChart';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">

      <Navbar />
      
      <Route exact path="/login" component={Login}/>

      <Route exact path="/signup" component={Signup}/>


      <Route exact path="/" component={Dashboard}/>
      {/* <Route exact path="/details" component={MovieDetails}/>
      <Route exact path="/availability" component={Availability}/>
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/event" component={Event} /> */}

      {/* <PrivateRoute exact path="/ownerdashboard" component={OwnerDashboard}/>

      <PrivateRoute exact path="/makeseatingchart" component={MakeSeatingChart}/> */}
    </div>
  );
}

export default App;
