import React from "react";
import PropTypes from "prop-types";

function Trip(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenTripClicked(props.id)}>
        <h3>{props.destination}</h3>
        <hr />
      </div>
    </React.Fragment>
  );
}

Trip.propTypes = {
  destination: PropTypes.string.isRequired,
  // photo: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenTripClicked: PropTypes.func,
};

export default Trip;
