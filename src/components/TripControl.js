import React from "react";
import NewTripForm from "./NewTripForm";
import TripList from "./TripList"; // Refactor later
import TripDetail from "./TripDetail";

class TripControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisbleOnPage: false,
      fullTripList: [],
      selectedTrip: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedTrip != null) {
      this.setState({
        formVisbleOnPage: false,
        selectedTrip: null,
      });
    } else {
      this.setState((prevState) => ({
        formVisbleOnPage: !prevState.formVisbleOnPage,
      }));
    }
  };

  handleAddingNewTrip = (newTrip) => {
    const newFullTripList = this.state.fullTripList.concat(newTrip);
    this.setState({ fullTripList: newFullTripList, formVisbleOnPage: false });
  };

  handleChangingSelectedTrip = (id) => {
    const selectedTrip = this.state.fullTripList.filter(
      (trip) => trip.id === id
    )[0];
    this.setState({ selectedTrip: selectedTrip });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedTrip != null) {
      currentlyVisibleState = <TripDetail trip={this.state.selectedTrip} />;
      buttonText = "Return to Trip List";
    } else if (this.state.formVisbleOnPage) {
      currentlyVisibleState = (
        <NewTripForm onNewTripCreation={this.handleAddingNewTrip} />
      );
      buttonText = "Return to Trip List";
    } else {
      currentlyVisibleState = (
        <TripList
          tripList={this.state.fullTripList}
          onTripSelection={this.handleChangingSelectedTrip}
        />
      );
      buttonText = "Add Trip";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TripControl;
