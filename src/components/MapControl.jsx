import React, { useState } from "react";
import NewTripForm from "./NewTripForm";
import Map from "./Map";

const MapControl = () => {
  const [position, setPosition] = useState(undefined);

  const handleMapClick = (value) => {
    setPosition(value);
  };

  const handleNewTripFormSubmission = (value) => {
    const formData = new FormData();
    const combinedValues = {
      ...position,
      ...value,
    };
    for (let key in combinedValues) {
      formData.append(key, combinedValues[key]);
    }

    fetch("http://localhost:5000/trips", {
      method: "POST",
      body: formData,
    }).then(() => {
      window.location.href = "http://localhost:3000/trips";
    });
  };

  return (
    <>
      <Map handlePosition={handleMapClick} position={position} />
      <NewTripForm onNewTripCreation={handleNewTripFormSubmission} />
    </>
  );
};

export default MapControl;
