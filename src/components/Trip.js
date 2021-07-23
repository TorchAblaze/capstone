import React from "react";
import PropTypes from "prop-types";

function Trip(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenTripClicked(props.id)}>
        <h3>{props.name}</h3>
        <hr />
      </div>
    </React.Fragment>
  );
}

Trip.propTypes = {
  name: PropTypes.string.isRequired,
  // photo: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenTripClicked: PropTypes.func,
};

export default Trip;
