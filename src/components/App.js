import React from "react";
import Header from "./Header";
import Signin from "./Signin";
import TripControl from "./TripControl";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="signin">
          <Signin />
        </Route>
        <Route path="/">
          <TripControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// API CALL  <script async defer src="https://maps.googleapis.com/maps/api/js?key=API_KEY&callback=initMap"></script>
