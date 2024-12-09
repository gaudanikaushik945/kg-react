import React, { useContext, useEffect, useState, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import _ from 'lodash';
import L from "leaflet";
import { AuthContext } from "../context/contex";
import { io } from "socket.io-client";
import { useMap } from "react-leaflet";

// FlyToLocation component to update the map view on location change
const FlyToLocation = ({ location }) => {
  const map = useMap();
  useEffect(() => {
    if (location) {
      map.flyTo([location.lat, location.lon], map.getZoom());
    }
  }, [location, map]);

  return null;
}

// Custom icon for markers
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61168.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapView = () => {
  const { setAddDriver } = useContext(AuthContext);
  const [driverDetails, setDriverDetails] = useState([]);  // To store driver data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userLocation, setUserLocation] = useState(null);  // Store the user's location

  // Update user location on each change
  const updateUserLocation = async (lat, lon) => {
    // API request logic for updating user location (e.g., to backend)
  };

  // Throttle location updates to avoid frequent API calls
  const updateUserLocationThrottled = useCallback(
    _.throttle(updateUserLocation, 10000), // Throttle updates to every 10 seconds
    []
  );

  const handleGeolocationError = (error) => {
    // Handle geolocation errors (e.g., permission denied, timeout)
    if (error.code === error.PERMISSION_DENIED) {
      setError("Permission to access location was denied.");
    } else if (error.code === error.POSITION_UNAVAILABLE) {
      setError("Location information is unavailable.");
    } else if (error.code === error.TIMEOUT) {
      setError("Geolocation request timed out.");
    } else {
      setError("An unknown error occurred while fetching the location.");
    }
  };

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setUserLocation({ lat, lon });  // Update user location state
        updateUserLocationThrottled(lat, lon);  // Throttle the updates to backend
      },
      handleGeolocationError,
      { enableHighAccuracy: true, maximumAge: 1000, timeout: 10000 }  // Increased timeout
    );

    // Cleanup geolocation watch on component unmount
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [updateUserLocationThrottled]);

  // Log every second with user location and timestamp
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (userLocation) {
        const { lat, lon } = userLocation;
        const timestamp = new Date().toLocaleTimeString();  // Get current time
        console.log(`Location: [${lat}, ${lon}] at ${timestamp}`);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);  // Cleanup on unmount
    };
  }, [userLocation]);  // This depends on `userLocation` state

  return (
    <div className="p-0" style={{ height: "100vh", width: "100vw" }}>
      {/* Show error message if there is a geolocation error */}
      {error && (
        <div style={{ position: "absolute", top: 20, left: 20, backgroundColor: "red", color: "white", padding: "10px" }}>
          {error}
        </div>
      )}

      <MapContainer
        center={userLocation ? [userLocation.lat, userLocation.lon] : [21.1702, 72.8311]}  // Center map on user location
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* Fly to the user's location when it changes */}
        <FlyToLocation location={userLocation} />

        {/* User's location marker */}
        {userLocation && (
          <Marker position={[userLocation.lat, userLocation.lon]} icon={customIcon}>
            <Popup>
              <strong>Your Location</strong>
              <br />
              Latitude: {userLocation.lat.toFixed(7)}
              <br />
              Longitude: {userLocation.lon.toFixed(7)}
            </Popup>
          </Marker>
        )}

        {/* Drivers' locations */}
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
