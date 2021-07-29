import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { API_KEY } from "../api.js";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: 40.56,
  lng: -102.021,
};

const StaticMap = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {props.position ? <Marker position={props.position} /> : undefined}
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
};

export default React.memo(StaticMap);
