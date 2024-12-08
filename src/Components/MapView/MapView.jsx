// // // // import React, { useContext, useEffect, useState } from "react";
// // // // import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// // // // import "leaflet/dist/leaflet.css";
// // // // import L from "leaflet";
// // // // import { AuthContext } from "../context/contex";

// // // // // Custom icon for the drivers
// // // // const customIcon = new L.Icon({
// // // //   iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61168.png", // Replace with your custom marker icon URL
// // // //   iconSize: [25, 41], // Size of the icon
// // // //   iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
// // // //   popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
// // // // });

// // // // const MapView = () => {
// // // //   // const { setAddDriver } = useContext(AuthContext); 
// // // //   const { setAddDriver } = useContext(AuthContext); 
// // // //   const [driverDetails, setDriverDetails] = useState([]); // Use state to store fetched drivers
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState(null);

// // // //   // Example static data for drivers
// // // //   // const [drivers, setDrivers] = useState([
// // // //   //   {
// // // //   //     id: 1,
// // // //   //     name: "Driver 1",
// // // //   //     location: { lat: 21.1702, lon: 72.8311 },
// // // //   //   },
// // // //   //   {
// // // //   //     id: 2,
// // // //   //     name: "Driver 2",
// // // //   //     location: { lat: 21.2000, lon: 72.9000 },
// // // //   //   },
// // // //   //   {
// // // //   //     id: 3,
// // // //   //     name: "Driver 3",
// // // //   //     location: { lat: 21.1500, lon: 72.8500 },
// // // //   //   },
// // // //   // // ]);

// // // //   useEffect(() => {
// // // //     const fetchDriverList = async () => {
// // // //       setLoading(true); // Indicate loading state
// // // //       try {
// // // //         // Send GET request to fetch the driver list
// // // //         const response = await fetch("https://gps-app-delta.vercel.app/api/all/driver", {
// // // //           method: "GET",
// // // //           headers: {
// // // //             "Content-Type": "application/json",
// // // //           },
// // // //         });

// // // //         if (!response.ok) {
// // // //           const errorData = await response.json();
// // // //           throw new Error(errorData.message || "Failed to fetch drivers.");
// // // //         }

// // // //         const responseData = await response.json();
// // // //         console.log(responseData, "res+++++++++++++++");

// // // //         setAddDriver(false);
// // // //         setDriverDetails(responseData.data);
// // // //         console.log("location details for mapview++++++ : ", driverDetails);
        
     
// // // //         alert("Driver list fetched successfully!");
// // // //       } catch (err) {
// // // //         console.error("Error:++++++++++++++++++++++++", err);
// // // //         setError(err.message || "Failed to fetch drivers. Please try again.");
// // // //       } finally {
// // // //         setLoading(false); // Reset loading state
// // // //       }
// // // //     };

// // // //     fetchDriverList();
// // // //   }, [setAddDriver]);

// // // //   return (
// // // //     <div className="p-0" style={{ height: "100vh", width: "100vw" }}>
// // // //       <MapContainer center={[21.1702, 72.8311]} zoom={5} style={{ height: "100%", width: "100%" }}>
// // // //         <TileLayer
// // // //           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// // // //           attribution="&copy; OpenStreetMap contributors"
// // // //         />

// // // //         {driverDetails.map((driver) => (
// // // //           <Marker key={driver.id} position={[driver.location.lat, driver.location.lon]} icon={customIcon}>
// // // //             <Popup>
// // // //               <strong>{driver.name}</strong>
// // // //               <br />
// // // //               Latitude: {driver.location.lat.toFixed(4)}
// // // //               <br />
// // // //               Longitude: {driver.location.lon.toFixed(4)}
// // // //             </Popup>
// // // //           </Marker>
// // // //         ))}
// // // //       </MapContainer>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default MapView;


// // // import React, { useContext, useEffect, useState } from "react";
// // // import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// // // import "leaflet/dist/leaflet.css";
// // // import L from "leaflet";
// // // import { AuthContext } from "../context/contex";

// // // // Custom icon for the drivers
// // // const customIcon = new L.Icon({
// // //   iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61168.png", // Replace with your custom marker icon URL
// // //   iconSize: [25, 41], // Size of the icon
// // //   iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
// // //   popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
// // // });

// // // const MapView = () => {
// // //   const { setAddDriver } = useContext(AuthContext);
// // //   const [driverDetails, setDriverDetails] = useState([]); // Use state to store fetched drivers
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchDriverList = async () => {
// // //       setLoading(true); // Indicate loading state
// // //       try {
// // //         // Send GET request to fetch the driver list
// // //         const response = await fetch("https://gps-app-delta.vercel.app/api/all/driver", {
// // //           method: "GET",
// // //           headers: {
// // //             "Content-Type": "application/json",
// // //           },
// // //         });

// // //         if (!response.ok) {
// // //           const errorData = await response.json();
// // //           throw new Error(errorData.message || "Failed to fetch drivers.");
// // //         }

// // //         const responseData = await response.json();
// // //         console.log(responseData, "res+++++++++++++++");

// // //         setAddDriver(false);
// // //         setDriverDetails(responseData.data);
// // //         console.log("location details for mapview++++++ : ", driverDetails);
        
// // //         alert("Driver list fetched successfully!");
// // //       } catch (err) {
// // //         console.error("Error:++++++++++++++++++++++++", err);
// // //         setError(err.message || "Failed to fetch drivers. Please try again.");
// // //       } finally {
// // //         setLoading(false); // Reset loading state
// // //       }
// // //     };

// // //     fetchDriverList();
// // //   }, [setAddDriver]);

// // //   return (
// // //     <div className="p-0" style={{ height: "100vh", width: "100vw" }}>
// // //       <MapContainer center={[21.1702, 72.8311]} zoom={5} style={{ height: "100%", width: "100%" }}>
// // //         <TileLayer
// // //           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// // //           attribution="&copy; OpenStreetMap contributors"
// // //         />

// // //         {driverDetails.map((driver) => {
// // //           // Check if the driver has a valid location object with lat and lon
// // //           if (driver.location && driver.location.lat && driver.location.lon) {
// // //             return (
// // //               <Marker key={driver._id} position={[driver.location.lat, driver.location.lon]} icon={customIcon}>
// // //                 <Popup>
// // //                   <strong>{driver.driverName}</strong>
// // //                   <br />
// // //                   Latitude: {driver.location.lat.toFixed(4)}
// // //                   <br />
// // //                   Longitude: {driver.location.lon.toFixed(4)}
// // //                 </Popup>
// // //               </Marker>
// // //             );
// // //           }
// // //           // Skip drivers with invalid location data
// // //           return null;
// // //         })}
// // //       </MapContainer>
// // //     </div>
// // //   );
// // // };

// // // export default MapView;


// // import React, { useContext, useEffect, useState } from "react";
// // import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// // import "leaflet/dist/leaflet.css";
// // import L from "leaflet";
// // import { AuthContext } from "../context/contex";
// // import { io } from "socket.io-client";

// // // Custom icon for the drivers
// // const customIcon = new L.Icon({
// //   iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61168.png", // Replace with your custom marker icon URL
// //   iconSize: [25, 41], // Size of the icon
// //   iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
// //   popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
// // });

// // const MapView = () => {
// //   const { setAddDriver } = useContext(AuthContext);
// //   const [driverDetails, setDriverDetails] = useState([]); // Use state to store fetched drivers
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [socket, setSocket] = useState(null);

// //   useEffect(() => {
// //     const fetchDriverList = async () => {
// //       setLoading(true); // Indicate loading state
// //       try {
// //         // Send GET request to fetch the driver list
// //         const response = await fetch("https://gps-app-delta.vercel.app/api/all/driver", {
// //           method: "GET",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //         });

// //         if (!response.ok) {
// //           const errorData = await response.json();
// //           throw new Error(errorData.message || "Failed to fetch drivers.");
// //         }

// //         const responseData = await response.json();
// //         console.log(responseData, "res+++++++++++++++");

// //         setAddDriver(false);
// //         setDriverDetails(responseData.data);
// //         console.log("location details for mapview++++++ : ", driverDetails);

// //         alert("Driver list fetched successfully!");
// //       } catch (err) {
// //         console.error("Error:++++++++++++++++++++++++", err);
// //         setError(err.message || "Failed to fetch drivers. Please try again.");
// //       } finally {
// //         setLoading(false); // Reset loading state
// //       }
// //     };

// //     fetchDriverList();

// //     // Establish WebSocket connection
// //     const socketConnection = io("http://localhost:8000"); // Connect to the backend socket server

// //     setSocket(socketConnection);

// //     // Listen for location updates from the server
// //     socketConnection.on("locationUpdate", (updatedLocation) => {
// //       // Update driver details with the new location
// //       setDriverDetails((prevState) => {
// //         return prevState.map((driver) =>
// //           driver._id === updatedLocation.driverId
// //             ? { ...driver, location: { lat: updatedLocation.latitude, lon: updatedLocation.longitude } }
// //             : driver
// //         );
// //       });
// //     });

// //     // Cleanup socket connection when the component is unmounted
// //     return () => {
// //       socketConnection.disconnect();
// //     };
// //   }, [setAddDriver]);

// //   return (
// //     <div className="p-0" style={{ height: "100vh", width: "100vw" }}>
// //       <MapContainer center={[21.1702, 72.8311]} zoom={5} style={{ height: "100%", width: "100%" }}>
// //         <TileLayer
// //           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //           attribution="&copy; OpenStreetMap contributors"
// //         />

// //         {driverDetails.map((driver) => {
// //           // Check if the driver has a valid location object with lat and lon
// //           if (driver.location && driver.location.lat && driver.location.lon) {
// //             return (
// //               <Marker key={driver._id} position={[driver.location.lat, driver.location.lon]} icon={customIcon}>
// //                 <Popup>
// //                   <strong>{driver.driverName}</strong>
// //                   <br />
// //                   Latitude: {driver.location.lat.toFixed(4)}
// //                   <br />
// //                   Longitude: {driver.location.lon.toFixed(4)}
// //                 </Popup>
// //               </Marker>
// //             );
// //           }
// //           // Skip drivers with invalid location data
// //           return null;
// //         })}
// //       </MapContainer>
// //     </div>
// //   );
// // };

// // export default MapView;


// import React, { useContext, useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import { AuthContext } from "../context/contex";
// import { io } from "socket.io-client";

// // Custom icon for the drivers
// const customIcon = new L.Icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61168.png", // Replace with your custom marker icon URL
//   iconSize: [25, 41], // Size of the icon
//   iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
//   popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
// });

// const MapView = () => {
//   const { setAddDriver } = useContext(AuthContext);
//   const [driverDetails, setDriverDetails] = useState([]); // Use state to store fetched drivers
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [socket, setSocket] = useState(null);

//   useEffect(() => {
//     const fetchDriverList = async () => {
//       setLoading(true); // Indicate loading state
//       try {
//         // Send GET request to fetch the driver list
//         const response = await fetch("https://gps-app-delta.vercel.app/api/all/driver", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || "Failed to fetch drivers.");
//         }

//         const responseData = await response.json();
//         console.log(responseData, "res+++++++++++++++");

//         setAddDriver(false);
//         setDriverDetails(responseData.data);
//         console.log("location details for mapview++++++ : ", driverDetails);

//         alert("Driver list fetched successfully!");
//       } catch (err) {
//         console.error("Error:++++++++++++++++++++++++", err);
//         setError(err.message || "Failed to fetch drivers. Please try again.");
//       } finally {
//         setLoading(false); // Reset loading state
//       }
//     };

//     fetchDriverList();

//     // Establish WebSocket connection
//     const socketConnection = io("http://localhost:8000"); // Connect to the backend socket server

//     setSocket(socketConnection);

//     // Listen for location updates from the server
//     socketConnection.on("locationUpdate", (updatedLocation) => {
//       // Log the update to the console
//       console.log("Location Update Received:", updatedLocation);

//       // Update driver details with the new location
//       setDriverDetails((prevState) => {
//         return prevState.map((driver) =>
//           driver._id === updatedLocation.driverId
//             ? { ...driver, location: { lat: updatedLocation.latitude, lon: updatedLocation.longitude } }
//             : driver
//         );
//       });

//       // Log new driver locations for movement tracking
//       console.log(`Driver ${updatedLocation.driverId} moved to: Latitude: ${updatedLocation.latitude}, Longitude: ${updatedLocation.longitude}`);
//     });

//     // Cleanup socket connection when the component is unmounted
//     return () => {
//       socketConnection.disconnect();
//     };
//   }, [setAddDriver]);

//   return (
//     <div className="p-0" style={{ height: "100vh", width: "100vw" }}>
//       <MapContainer center={[21.1702, 72.8311]} zoom={5} style={{ height: "100%", width: "100%" }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="&copy; OpenStreetMap contributors"
//         />

//         {driverDetails.map((driver) => {
//           // Check if the driver has a valid location object with lat and lon
//           if (driver.location && driver.location.lat && driver.location.lon) {
//             return (
//               <Marker key={driver._id} position={[driver.location.lat, driver.location.lon]} icon={customIcon}>
//                 <Popup>
//                   <strong>{driver.driverName}</strong>
//                   <br />
//                   Latitude: {driver.location.lat.toFixed(4)}
//                   <br />
//                   Longitude: {driver.location.lon.toFixed(4)}
//                 </Popup>
//               </Marker>
//             );
//           }
//           // Skip drivers with invalid location data
//           return null;
//         })}
//       </MapContainer>
//     </div>
//   );
// };

// export default MapView;

// import React, { useContext, useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import { AuthContext } from "../context/contex";
// import { io } from "socket.io-client";

// // Custom icon for the drivers
// const customIcon = new L.Icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61168.png", // Replace with your custom marker icon URL
//   iconSize: [25, 41], // Size of the icon
//   iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
//   popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
// });

// const MapView = () => {
//   const { setAddDriver } = useContext(AuthContext);
//   const [driverDetails, setDriverDetails] = useState([]); // Use state to store fetched drivers
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [socket, setSocket] = useState(null);

//   useEffect(() => {
//     // Fetching the driver list from the API
//     const fetchDriverList = async () => {
//       setLoading(true); // Indicate loading state
//       try {
//         const response = await fetch("https://gps-app-delta.vercel.app/api/all/driver", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch drivers.');
//         }

//         const data = await response.json();
//         console.log("Initial driver data:", data); // Log the initial driver list

//         setAddDriver(false);
//         setDriverDetails(data.data); // Populate driver details from the API response
//       } catch (err) {
//         console.error("Error fetching driver list: ", err);
//         setError(err.message || "Failed to fetch drivers.");
//       } finally {
//         setLoading(false); // Reset loading state
//       }
//     };

//     fetchDriverList();

//     // Establishing a WebSocket connection
//     const socketConnection = io("http://localhost:8000");
//     setSocket(socketConnection);

//     // Listening for location updates from the server
//     socketConnection.on("locationUpdate", (updatedLocation) => {
//       console.log("Location update received: ", updatedLocation); // Log the new location data

//       // Updating the driver details state when location changes
//       setDriverDetails((prevState) => {
//         return prevState.map((driver) =>
//           driver._id === updatedLocation.driverId
//             ? { ...driver, location: { lat: updatedLocation.latitude, lon: updatedLocation.longitude } }
//             : driver
//         );
//       });

//       // Console log the updated location of the driver
//       console.log(`Updated location for driver ${updatedLocation.driverId}:`);
//       console.log(`Latitude: ${updatedLocation.latitude}, Longitude: ${updatedLocation.longitude}`);
//     });

//     // Cleanup the WebSocket connection on component unmount
//     return () => {
//       socketConnection.disconnect();
//     };
//   }, [setAddDriver]);

//   return (
//     <div className="p-0" style={{ height: "100vh", width: "100vw" }}>
//       <MapContainer center={[21.1702, 72.8311]} zoom={5} style={{ height: "100%", width: "100%" }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="&copy; OpenStreetMap contributors"
//         />

//         {driverDetails.map((driver) => {
//           // Ensure the driver has a valid location
//           if (driver.location && driver.location.lat && driver.location.lon) {
//             return (
//               <Marker key={driver._id} position={[driver.location.lat, driver.location.lon]} icon={customIcon}>
//                 <Popup>
//                   <strong>{driver.driverName}</strong>
//                   <br />
//                   Latitude: {driver.location.lat.toFixed(4)}
//                   <br />
//                   Longitude: {driver.location.lon.toFixed(4)}
//                 </Popup>
//               </Marker>
//             );
//           }
//           return null; // Skip drivers without valid location data
//         })}
//       </MapContainer>
//     </div>
//   );
// };

// export default MapView;

// import React, { useContext, useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import { AuthContext } from "../context/contex";
// import { io } from "socket.io-client";

// // Custom icon for the drivers
// const customIcon = new L.Icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61168.png", // Replace with your custom marker icon URL
//   iconSize: [25, 41], // Size of the icon
//   iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
//   popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
// });

// const MapView = () => {
//   const { setAddDriver } = useContext(AuthContext);
//   const [driverDetails, setDriverDetails] = useState([]); // Use state to store fetched drivers
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [socket, setSocket] = useState(null);
//   const [userLocation, setUserLocation] = useState(null); // State to store the laptop's location

//   // Function to get the current geolocation of the device (laptop)
//   const getDeviceLocation = (position) => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setUserLocation({
//             lat: position.coords.latitude,
//             lon: position.coords.longitude,
//           });
//         },
//         (error) => {
//           console.error("Error fetching geolocation:", error);
//           setError("Could not retrieve your location.");
//         }
//       );
//     } else {
//       console.error("Geolocation is not supported by this browser.");
//       setError("Geolocation is not supported.");
//     }
//   };

//   useEffect(() => {
//     // Fetching the driver list from the API
//     const fetchDriverList = async () => {
//       setLoading(true); // Indicate loading state
//       try {
//         const response = await fetch("https://gps-app-delta.vercel.app/api/all/driver", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch drivers.');
//         }

//         const data = await response.json();
//         console.log("Initial driver data:", data); // Log the initial driver list

//         setAddDriver(false);
//         setDriverDetails(data.data); // Populate driver details from the API response
//       } catch (err) {
//         console.error("Error fetching driver list: ", err);
//         setError(err.message || "Failed to fetch drivers.");
//       } finally {
//         setLoading(false); // Reset loading state
//       }
//     };

//     fetchDriverList();

//     // Establishing a WebSocket connection
//     const socketConnection = io("http://localhost:8000");
//     setSocket(socketConnection);

//     // Listening for location updates from the server
//     socketConnection.on("locationUpdate", (updatedLocation) => {
//       console.log("Location update received: ", updatedLocation); // Log the new location data

//       // Updating the driver details state when location changes
//       setDriverDetails((prevState) => {
//         return prevState.map((driver) =>
//           driver._id === updatedLocation.driverId
//             ? { ...driver, location: { lat: updatedLocation.latitude, lon: updatedLocation.longitude } }
//             : driver
//         );
//       });

//       // Console log the updated location of the driver
//       console.log(`Updated location for driver ${updatedLocation.driverId}:`);
//       console.log(`Latitude: ${updatedLocation.latitude}, Longitude: ${updatedLocation.longitude}`);
//     });

//     // Cleanup the WebSocket connection on component unmount
//     return () => {
//       socketConnection.disconnect();
//     };
//   }, [setAddDriver]);

//   // Run this when the component mounts to get the user's initial location
//   useEffect(() => {
//     getDeviceLocation(position);
//   }, [position]);

//   return (
//     <div className="p-0" style={{ height: "100vh", width: "100vw" }}>
//       <MapContainer
//         center={userLocation ? [userLocation.lat, userLocation.lon] : [21.1702, 72.8311]} // Default to a fallback center if no location
//         zoom={5}
//         style={{ height: "100%", width: "100%" }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="&copy; OpenStreetMap contributors"
//         />

//         {/* Add marker for the laptop's location */}
//         {userLocation && (
//           <Marker position={[userLocation.lat, userLocation.lon]} icon={customIcon}>
//             <Popup>
//               <strong>Your Location</strong>
//               <br />
//               Latitude: {userLocation.lat.toFixed(4)}
//               <br />
//               Longitude: {userLocation.lon.toFixed(4)}
//             </Popup>
//           </Marker>
//         )}

//         {/* Render driver markers */}
//         {driverDetails.map((driver) => {
//           // Ensure the driver has a valid location
//           if (driver.location && driver.location.lat && driver.location.lon) {
//             return (
//               <Marker key={driver._id} position={[driver.location.lat, driver.location.lon]} icon={customIcon}>
//                 <Popup>
//                   <strong>{driver.driverName}</strong>
//                   <br />
//                   Latitude: {driver.location.lat.toFixed(4)}
//                   <br />
//                   Longitude: {driver.location.lon.toFixed(4)}
//                 </Popup>
//               </Marker>
//             );
//           }
//           return null; // Skip drivers without valid location data
//         })}
//       </MapContainer>
//     </div>
//   );
// };

// export default MapView;

import React, { useContext, useEffect, useState,useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import _ from 'lodash'
import L from "leaflet";
import { AuthContext } from "../context/contex";
import { io } from "socket.io-client";
import { useMap } from "react-leaflet";

const FlyToLocation = ({ location }) => {
  // console.log(location);
  
  const map = useMap();
  useEffect(() => {
    console.log(location);
    
    if (location) {
      map.flyTo([location.lat, location.lon], map.getZoom());
    }
  }, [location, map]);

  return null;
};

// Custom icon for the drivers
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61168.png", // Replace with your custom marker icon URL
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
});

const MapView = () => {
  const { setAddDriver } = useContext(AuthContext);
  const [driverDetails, setDriverDetails] = useState([]); // Use state to store fetched drivers
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [socket, setSocket] = useState(null);
  const [userLocation, setUserLocation] = useState(null); // State to store the laptop's location

  // Function to update the user location in the backend API
  const updateUserLocation = async (lat, lon) => {
    // try {
    //   const response = await fetch("https://gps-app-delta.vercel.app/api/notify-location", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ lat, lon }),
    //   });
      
    //   if (!response.ok) {
    //     throw new Error('Failed to update location');
    //   }
    //   const data = await response.json();
    //   console.log('Location updated:', data);
    // } catch (error) {
    //   console.error('Error updating location:', error);
    //   setError("Could not update location.");
    // }
  };
  

  // useEffect(() => {
  //   if (socket) {
  //     socket.on("addLocation", (updatedLocation) => {
  //       setDriverDetails((prevState) =>
  //         prevState.map((driver) =>
  //           driver._id === updatedLocation.driverId
  //             ? {
  //                 ...driver,
  //                 location: {
  //                   lat: updatedLocation.latitude,
  //                   lon: updatedLocation.longitude,
  //                 },
  //               }
  //             : driver
  //         )
  //       );
  //     });
  //   }
  // }, [socket]);

  // useEffect(() => {
  //   // Fetching the driver list from the API
  //   const fetchDriverList = async () => {
  //     setLoading(true); // Indicate loading state
  //     try {
  //       const response = await fetch("https://gps-app-delta.vercel.app/api/all/driver", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error('Failed to fetch drivers.');
  //       }

  //       const data = await response.json();
  //       console.log("Initial driver data:", data); // Log the initial driver list

  //       setAddDriver(false);
  //       setDriverDetails(data.data); // Populate driver details from the API response
  //     } catch (err) {
  //       console.error("Error fetching driver list: ", err);
  //       setError(err.message || "Failed to fetch drivers.");
  //     } finally {
  //       setLoading(false); // Reset loading state
  //     }
  //   };

  //   fetchDriverList();

  //   // Establishing a WebSocket connection
  //   const socketConnection = io("http://localhost:8000");
  //   setSocket(socketConnection);

  //   // Listening for location updates from the server
  //   socketConnection.on("locationUpdate", (updatedLocation) => {
  //     console.log("Location update received: ", updatedLocation); // Log the new location data

  //     // Updating the driver details state when location changes
  //     setDriverDetails((prevState) => {
  //       return prevState.map((driver) =>
  //         driver._id === updatedLocation.driverId
  //           ? { ...driver, location: { lat: updatedLocation.latitude, lon: updatedLocation.longitude } }
  //           : driver
  //       );
  //     });

  //     // Console log the updated location of the driver
  //     console.log(`Updated location for driver ${updatedLocation.driverId}:`);
  //     console.log(`Latitude: ${updatedLocation.latitude}, Longitude: ${updatedLocation.longitude}`);
  //   });

  //   // Cleanup the WebSocket connection on component unmount
  //   return () => {
  //     socketConnection.disconnect();
  //   };
  // }, [setAddDriver]);

  const updateUserLocationThrottled = useCallback(
    _.throttle(updateUserLocation, 10000), // Limit updates to every 10 seconds
    []
  );
  
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setUserLocation({ lat, lon });
        updateUserLocationThrottled(lat, lon);
      },
      (error) => {
        console.error("Error fetching geolocation:", error);
      },
      { enableHighAccuracy: true, maximumAge: 10000, timeout: 10000}
    );
  
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [updateUserLocationThrottled]);
    

  useEffect(() => {
    const handleOrientation = (event) => {
      const { alpha, beta, gamma } = event; // Device rotation angles
      console.log("Orientation:", { alpha, beta, gamma });
      // Optionally, adjust icon orientation based on this data
    };
  
    window.addEventListener("deviceorientation", handleOrientation);
  
    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setUserLocation({ lat, lon });
  
          updateUserLocation(lat, lon);
        },
        (error) => {
          console.error("Error fetching geolocation:", error);
          setError("Could not retrieve your location.");
        },
        {
          enableHighAccuracy: true,
          timeout: 10000, 
          maximumAge: 10000,
        }
      );
    }, 10000); 
  
    return () => {
      clearInterval(intervalId);
    };
  }, []); // No dependencies to keep interval constant
  

  return (
    <div className="p-0" style={{ height: "100vh", width: "100vw" }}>
   <MapContainer
  center={userLocation ? [userLocation.lat, userLocation.lon] : [21.1702, 72.8311]}
  zoom={13}
  style={{ height: "100%", width: "100%" }}
>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&copy; OpenStreetMap contributors"
  />

  {/* Fly to the new location when it changes */}
  <FlyToLocation location={userLocation} />

  {/* Add marker for the user's location */}
  {userLocation && (
    <Marker position={[userLocation.lat, userLocation.lon]} icon={customIcon}>
      <Popup>
        <strong>Your Location</strong>
        <br />
        Latitude: {userLocation.lat.toFixed(4)}
        <br />
        Longitude: {userLocation.lon.toFixed(4)}
      </Popup>
    </Marker>
  )}

  {/* Render driver markers */}
  {driverDetails.map((driver) => {
    if (driver.location?.lat && driver.location?.lon) {
      return (
        <Marker key={driver._id} position={[driver.location.lat, driver.location.lon]} icon={customIcon}>
          <Popup>
            <strong>{driver.driverName}</strong>
            <br />
            Latitude: {driver.location.lat.toFixed(4)}
            <br />
            Longitude: {driver.location.lon.toFixed(4)}
          </Popup>
        </Marker>
      );
    }
    return null;
  })}
</MapContainer>

    </div>
  );
};

export default MapView;

