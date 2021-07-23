import React from "react";
import PropTypes from "prop-types";

function TripDetail(props) {
  const { trip } = props;

  return (
    <React.Fragment>
      <hr />
      <h1>Trip Memories</h1>
      <h3>{trip.name}</h3>
      {/* <img>{trip.photo}</img> */}
      {/* Refactor later: how to upload photos? Loop through photo collection and put each inside an image tag*/}
      <hr />
    </React.Fragment>
  );
}

TripDetail.propTypes = {
  trip: PropTypes.object,
};

export default TripDetail;
