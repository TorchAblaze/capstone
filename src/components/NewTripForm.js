import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewTripForm(props) {
  function handleNewTripFormSubmission(event) {
    event.preventDefault();
    props.onNewTripCreation({
      name: event.target.name.value,
      // photo: event.target.photo.value,
      id: v4(),
    });
  }
  return (
    <React.Fragment>
      <hr />
      <form onSubmit={handleNewTripFormSubmission}>
        <label for="name">Trip Name</label>
        <input type="text" name="name" placeholder="Name your trip" required />
        <fieldset>
          <legend>Trip Dates</legend>
          <label for="start-date" className="trip-date">
            Start Date
          </label>
          <input
            type="date"
            name="start-date"
            className="trip-date"
            placeholder="Trip Start Date"
            required
          />
          <label for="end-date" className="trip-date">
            End Date
          </label>
          <input
            type="date"
            name="end-date"
            className="trip-date"
            placeholder="Trip End Date"
            required
          />
        </fieldset>
        <label for="tips">Tips</label>
        <input type="text" name="tips" placeholder="Travel Tips" />
        {/* <input type="image" name="photo" /> */}
        {/* Add button that will let you upload more photos */}
        <label for="photo-date">Date</label>
        <input type="date" name="photo-date" placeholder="Date of Photo" />
        <label for="caption">Caption</label>
        <input type="text" name="caption" placeholder="Photo Caption" />
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
