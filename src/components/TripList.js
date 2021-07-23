// Won't be a trip list but a map generated from an API, will be refactored later
import React from "react";
import Trip from "./Trip";
import PropTypes from "prop-types";

function TripList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.tripList.map((trip) => (
        <Trip
          whenTripClicked={props.onTripSelection}
          name={trip.name}
          // photo={trip.photo}
          id={trip.id}
          key={trip.id}
        />
      ))}
    </React.Fragment>
  );
}

TripList.propTypes = {
  tripList: PropTypes.array,
  onTripSelection: PropTypes.func,
};

export default TripList;
