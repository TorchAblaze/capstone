import React from "react";
import Header from "./Header";
import TripControl from "./TripControl";
import Map from "./Map";
import { BrowserRouter, Route } from "react-router-dom";
import MapControl from "./MapControl";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Map} />
        <Route exact path="/trips" component={TripControl} />
        <Route exact path="/trip-form" component={MapControl} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
