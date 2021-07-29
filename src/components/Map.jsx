import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { API_KEY } from "../api.js";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 40.56,
  lng: -102.021,
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const [position, setPosition] = useState(undefined);

  const handleClick = (e) => {
    console.log(`Handling your click!`);
    const { lat, lng } = e.latLng;
    setPosition({
      lat: lat(),
      lng: lng(),
    });
  };

  console.log(`Rendering through a map component`);

  return isLoaded ? (
    <GoogleMap
      onClick={handleClick}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={5}
    >
      {position ? <Marker position={position} /> : undefined}
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
};

export default React.memo(Map);
