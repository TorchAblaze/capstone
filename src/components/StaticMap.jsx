import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { API_KEY } from "../api.js";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const StaticMap = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const { lat, lng } = props.position;
  const target = { lat: parseFloat(lat), lng: parseFloat(lng) };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={target} zoom={15}>
      {props.position ? <Marker position={target} /> : undefined}
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
};

export default React.memo(StaticMap);
