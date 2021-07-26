import React from "react";
import { GoogleMap, useJsApiLoader, InfoBox } from "@react-google-maps/api";
import { API_KEY } from "../api.js";

const containerStyle = {
  width: "900px",
  height: "600px",
};

const center = {
  lat: 40.56,
  lng: -102.021,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const options = { closeBoxURL: "", enableEventPropagation: true };

  const onUnmount = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  return isLoaded ? (
    <GoogleMap
      id="InfoBox-example"
      containerStyle={containerStyle}
      zoom={10}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <InfoBox onLoad={onLoad} options={options} position={center}>
        <div style={{ backgroundColor: "yellow", opacity: 0.75, padding: 12 }}>
          <div style={{ fontSize: 16, fontColor: "#08233B" }}>
            Hello, World!
          </div>
        </div>
      </InfoBox>
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
}
export default React.memo(Map);
