import React from "react";
import Header from "./Header";
import TripControl from "./TripControl";
import Map from "./Map";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Map />
      <TripControl />
    </React.Fragment>
  );
}

export default App;
