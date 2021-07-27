import React from "react";
import PropTypes from "prop-types";

function TripDetail(props) {
  const { trip } = props;

  return (
    <React.Fragment>
      <hr />
      <h1>{trip.name}</h1>
      <p>
        {trip.startDate} - {trip.endDate}
      </p>
      <h3>Things to keep in mind:</h3>
      <p>{trip.tips}</p>

      <h3>Memories</h3>
      <img src={trip.photo1} alt={trip.caption1} />
      <p>{trip.photoDate1}</p>
      <p>{trip.caption1}</p>

      <img src={trip.photo2} alt={trip.caption2} />
      <p>{trip.photoDate2}</p>
      <p>{trip.caption2}</p>

      <img src={trip.photo3} alt={trip.caption3} />
      <p>{trip.photoDate3}</p>
      <p>{trip.caption3}</p>
      <hr />
    </React.Fragment>
  );
}

TripDetail.propTypes = {
  trip: PropTypes.object,
};

export default TripDetail;
