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

        <Route exact path="/details" component={MovieDetails} />

        <Route exact path="/availability" component={Availability} />

        <Route exact path="/checkout" component={Checkout} />

        <Route exact path="/event" component={Event} />

        <Route exact path="/date" component={DataPicker} />

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

//okta2//
// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Security, ImplicitCallback } from '@okta/okta-react';
// import Home from './Home';

// const config = {
//   issuer: 'https://dev-228034.okta.com/oauth2/default',
//   redirectUri: window.location.origin + '/implicit/callback',
//   clientId: '0oa19mwctLQwNEoBW4x6',
//   pkce: true
// }

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Security {...config}>
//           <Route path='/' exact={true} component={Home}/>
//           <Route path='/implicit/callback' component={ImplicitCallback}/>
//         </Security>
//       </Router>
//     );
//   }
// }

// export default App;
// okta2//

// okta//
// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
// import Home from './Home';
// import Login from './Login';
// import Protected from './Protected';

// function onAuthRequired({history}) {
//   history.push('/login');
// }

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Security issuer='https://dev-228034.okta.com/oauth2/default'
//                   clientId='0oa19mwctLQwNEoBW4x6'
//                   redirectUri={window.location.origin + '/implicit/callback'}
//                   onAuthRequired={onAuthRequired}
//                   pkce={true} >
//           <Route path='/' exact={true} component={Home} />
//           <SecureRoute path='/protected' component={Protected} />
//           <Route path='/login' render={() => <Login baseUrl='https://dev-228034.okta.com' />} />
//           <Route path='/implicit/callback' component={ImplicitCallback} />
//         </Security>
//       </Router>
//     );
//   }
// }

// export default App;
// okta//

// okta//
// import { Security, ImplicitCallback } from '@okta/okta-react';
// okta//

// okta//
// const config = {
//   issuer: 'https://dev-228034.okta.com/oauth2/default',
//   redirectUri: window.location.origin + '/implicit/callback',
//   clientId: '0oa19mwctLQwNEoBW4x6',
//   pkce: true
// }
// okta//
