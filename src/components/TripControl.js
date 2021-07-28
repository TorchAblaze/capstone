import React from "react";
import NewTripForm from "./NewTripForm";
import TripList from "./TripList"; // Refactor later
import TripDetail from "./TripDetail";

class TripControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      formVisbleOnPage: false,
      fullTripList: [],
      selectedTrip: null,
    };
  }

  tripControlDidMount() {
    fetch("/trips")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            fullTripList: result.fullTripList,
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
    const { error, isLoaded } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else if (this.state.selectedTrip != null) {
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
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TripControl;
