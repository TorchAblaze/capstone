// import React from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
// import { API_KEY } from "../api.js";
// import Info from "./Info";

// const containerStyle = {
//   width: "900px",
//   height: "600px",
// };

// const center = {
//   lat: 40.56,
//   lng: -102.021,
// };

// function Map() {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: API_KEY,
//   });

//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(map);
//   }, []);

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={10}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       <Info></Info>
//     </GoogleMap>
//   ) : (
//     <div>Loading...</div>
//   );
// }

// export default React.memo(Map);
