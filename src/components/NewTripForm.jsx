import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewTripForm(props) {
  function handleNewTripFormSubmission(event) {
    event.preventDefault();
    props.onNewTripCreation({
      name: event.target.name.value,
      startDate: event.target.startDate.value,
      endDate: event.target.endDate.value,
      tips: event.target.tips.value,
      photoDate1: event.target.photoDate1.value,
      photo1: event.target.photo1.value,
      caption1: event.target.caption1.value,
      photoDate2: event.target.photoDate2.value,
      photo2: event.target.photo2.value,
      caption2: event.target.caption2.value,
      photoDate3: event.target.photoDate3.value,
      photo3: event.target.photo3.value,
      caption3: event.target.caption3.value,
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
          <label for="startDate" className="trip-date">
            Start Date
          </label>
          <input type="date" name="startDate" className="trip-date" required />
          <label for="endDate" className="trip-date">
            End Date
          </label>
          <input type="date" name="endDate" className="trip-date" required />
        </fieldset>
        <label for="tips">Tips</label>
        <textarea name="tips" placeholder="Travel Tips" />

        <label for="photoDate1">Photo Date</label>
        <input type="date" name="photoDate1" />
        <label for="photo1">Photo</label>
        <input type="text" name="photo1" placeholder="Image Address URL" />
        <label for="caption1">Caption</label>
        <input type="text" name="caption1" placeholder="Photo Caption" />

        <label for="photoDate2">Photo Date</label>
        <input type="date" name="photoDate2" />
        <label for="photo2">Photo</label>
        <input type="text" name="photo2" placeholder="Image Address URL" />
        <label for="caption2">Caption</label>
        <input type="text" name="caption2" placeholder="Photo Caption" />

        <label for="photoDate3">Photo Date</label>
        <input type="date" name="photoDate3" />
        <label for="photo3">Photo</label>
        <input type="text" name="photo3" placeholder="Image Address URL" />
        <label for="caption3">Caption</label>
        <input type="text" name="caption3" placeholder="Photo Caption" />
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
