import React from "react";
import TripList from "./TripList";
import TripDetail from "./TripDetail";
import { NavLink } from "react-router-dom";

class TripControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      fullTripList: [],
      selectedTrip: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedTrip != null) {
      this.setState({
        selectedTrip: null,
      });
    }
  };

  componentDidMount() {
    fetch("http://localhost:5000/trips")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            fullTripList: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  handleChangingSelectedTrip = (id) => {
    const selectedTrip = this.state.fullTripList.filter(
      (trip) => trip.id === id
    )[0];
    this.setState({ selectedTrip: selectedTrip });
  };

  render() {
    const { error, isLoaded } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else if (this.state.selectedTrip != null) {
      return (
        <>
          <TripDetail trip={this.state.selectedTrip} />
          <button onClick={this.handleClick}>Return to Trip List</button>
        </>
      );
    } else {
      return (
        <>
          <TripList
            tripList={this.state.fullTripList}
            onTripSelection={this.handleChangingSelectedTrip}
          />
          <NavLink to="trip-form">
            <button>Create New Trip</button>
          </NavLink>
        </>
      );
    }
  }
}

export default TripControl;
