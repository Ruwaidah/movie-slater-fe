import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/movieDashboard/Dashboard";
import OwnerLogin from "./components/OwnerLogin";
import OwnerSignup from "./components/OwnerSignup";
import Nav from "./components/Nav";
import MovieDetails from "./components/MovieDetails";
import Availability from "./components/Availability";
import Checkout from "./components/Checkout";
import Event from "./components/Event";
import OwnerDashboard from "./components/OwnerDashboard";
import MakeSeatingChart from "./components/MakeSeatingChart";
import PrivateRoute from "./components/PrivateRoute";
import DataPicker from "./components/DatePicker";
import TimePicker from "./components/TimePicker";
import SeatChart from "./components/SeatChart";
import Tickets from "./components/Tickets";
import Showtime from "./components/Showtime";
import Profile from './components/profile/Profile.js'


function App(props) {
  const [showMenu, setShowMenu] = useState(true)
  const [oldPath, setOldPath] = useState("/")
  console.log()
  return (
    <div className="App">
      <Nav setShowMenu={setShowMenu} showMenu={showMenu} setOldPath={setOldPath} />

      {/* okta */}
      {/* <Route exact path="/home" component={Home}/> */}
      {/* okta */}
      <Route path="/profile" render={(props) => <Profile {...props} setShowMenu={setShowMenu} />} />

      <Route exact path="/login" component={Login} />

      <Route exact path="/signup" component={Signup} />

      <Route exact path="/theater-signup" component={OwnerSignup} />

      <Route exact path="/theater-login" component={OwnerLogin} />

      <Route exact path="/" component={Dashboard} />

      <Route exact path="/details/:movieName" component={MovieDetails} />

      <Route exact path="/details" component={MovieDetails} />

      <Route exact path="/availability" component={Availability} />

      <Route exact path="/checkout" component={Checkout} />

      <Route exact path="/event" component={Event} />

      <Route exact path="/date" component={DataPicker} />

      <Route exact path="/time" component={TimePicker} />

      <Route exact path="/seats" component={SeatChart} />

      <Route exact path="/tickets" component={Tickets} />

      <Route exact path="/showtime" component={Showtime} />

      <PrivateRoute exact path="/ownerdashboard" component={OwnerDashboard} />

      <PrivateRoute
        exact
        path="/makeseatingchart"
        component={MakeSeatingChart}
      />
    </div>
  );
}


const mapStateToProps = state => {
  return {
    googleData: state.googleData,
    userData: state.userData
  };
};

export default withRouter(connect(mapStateToProps)(App))