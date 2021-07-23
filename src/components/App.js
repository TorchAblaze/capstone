import React from "react";
import Header from "./Header";
import TripControl from "./TripControl";
import Map from "./Map";

function App() {
  return (
    <React.Fragment>
      {/* <Router> */}
      <Header />
      {/* <Switch>
         <Route path="signin">
           <Signin />
         </Route>
         <Route path="/"> */}
      <Map />
      <TripControl />
      {/* </Route>
       </Switch>
     </Router> */}
    </React.Fragment>
  );
}

export default App;

// API CALL  <script async defer src="https://maps.googleapis.com/maps/api/js?key=API_KEY&callback=initMap"></script>
