import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewTripForm(props) {
  function handleNewTripFormSubmission(event) {
    event.preventDefault();
    props.onNewTripCreation({
      destination: event.target.destination.value,
      // photo: event.target.photo.value,
      id: v4(),
    });
  }
  return (
    <React.Fragment>
      <hr />
      <form onSubmit={handleNewTripFormSubmission}>
        <input
          type="text"
          name="destination"
          placeholder="Name your trip"
          required
        />
        {/* <input type="image" name="photo" /> */}
        {/* Add button that will let you upload more photos */}
        <br />
        <button type="submit">Add Trip</button>
      </form>
    </React.Fragment>
  );
}

NewTripForm.propTypes = {
  onNewTripCreation: PropTypes.func,
};

export default NewTripForm;
