// import react from "react";
// import { GoogleMap, LoadScript, InfoBox } from "@react-google-maps/api";
// import { Polygon } from "@react-google-maps/api";

// const mapContainerStyle = {
//   height: "400px",
//   width: "800px",
// };

// const center = {
//   lat: 33.772,
//   lng: -117.214,
// };

// const options = { closeBoxURL: "", enableEventPropagation: true };

// const onLoad = (infoBox) => {
//   console.log("infoBox: ", infoBox);
// };

// function Info() {
//   return (
//     <Polygon>
//       <GoogleMap
//         id="InfoBox-example"
//         mapContainerStyle={mapContainerStyle}
//         zoom={10}
//         center={center}
//       >
//         <InfoBox onLoad={onLoad} options={options} position={center}>
//           <div
//             style={{ backgroundColor: "yellow", opacity: 0.75, padding: 12 }}
//           >
//             <div style={{ fontSize: 16, fontColor: `#08233B` }}>
//               Hello, World!
//             </div>
//           </div>
//         </InfoBox>
//       </GoogleMap>
//     </Polygon>
//   );
// }
// export default Info;
