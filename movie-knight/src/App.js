import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
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


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        {/* okta */}
        {/* <Route exact path="/home" component={Home}/> */}
        {/* okta */}

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
    </Router>
  );
}

export default App;
