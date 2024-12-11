

import React, { useContext, useEffect, useState, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import _ from "lodash";
import L from "leaflet";
import { useMap } from "react-leaflet";
import { AuthContext } from "../context/UserContext";
import { io } from "socket.io-client";

// Connect to socket
const socket = io("http://localhost:8000"); // Replace with your backend URL

// FlyToLocation component to update the map view on location change
const FlyToLocation = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    if (map && location) {
      map.flyTo([location.lat, location.lon], map.getZoom());
    }
  }, [location, map]);

  return null;
};

// Function to generate a custom icon with dynamic color
const getCustomIcon = (isActive) =>
  new L.Icon({
    iconUrl: isActive
      ? "/icones/red-car.png" // Active icon
      : "/icones/green-car.png", // Inactive icon
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    className: isActive ? "active-icon" : "inactive-icon",
  });

const MapView = () => {
  const { setAddDriver } = useContext(AuthContext);
  const [driverDetails, setDriverDetails] = useState([]); // To store driver data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userLocation, setUserLocation] = useState(null); // Store the user's location
  const [userId, setUserId] = useState("user123"); // Set your userId here, dynamic if necessary

  // Fetch driver data from the API
  const fetchDriverData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://kg-backend-lyart.vercel.app/api/drivers/all/driver");
      if (!response.ok) {
        throw new Error("Failed to fetch driver data");
      }
      const data = await response.json();
      setDriverDetails(data); // Safely set the driver data
    } catch (err) {
      setError("Failed to fetch driver data");
    } finally {
      setLoading(false);
    }
  };

  // Throttle location updates to avoid frequent API calls
  const updateUserLocation = async (lat, lon) => {
    socket.emit("update-location", { userId, location: { lat, lon } });
  };

  const updateUserLocationThrottled = useCallback(
    _.throttle(updateUserLocation, 3000), // Throttle updates to every 3 seconds
    []
  );

  const handleGeolocationError = (error) => {
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
        setUserLocation({ lat, lon }); // Update user location state
        updateUserLocationThrottled(lat, lon); // Throttle the updates to backend
      },
      handleGeolocationError,
      { enableHighAccuracy: true, maximumAge: 1000, timeout: 5000 }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [updateUserLocationThrottled]);

  // Real-time updates of driver locations from the socket
  useEffect(() => {
    socket.on("location-update", (updatedDriver) => {
      setDriverDetails((prevDriverDetails) =>
        prevDriverDetails.map((driver) =>
          driver._id === updatedDriver._id ? updatedDriver : driver
        )
      );
    });

    return () => {
      socket.off("location-update");
    };
  }, []);

  // Log user and driver locations every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (userLocation) {
        console.log(
          `User ID: ${userId}, User Location: [Lat: ${userLocation.lat.toFixed(7)}, Lon: ${userLocation.lon.toFixed(7)}]`
        );
      }

      // Log all driver locations
      driverDetails.forEach((driver) => {
        if (driver.location?.lat && driver.location?.lon) {
          console.log(
            `Driver ID: ${driver._id}, Driver: ${driver.driverName}, Location: [Lat: ${driver.location.lat.toFixed(
              7
            )}, Lon: ${driver.location.lon.toFixed(7)}]`
          );
        }
      });
    }, 1000); // Log every second 

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [userLocation, driverDetails]);

  // Fetch driver data on component mount
  useEffect(() => {
    fetchDriverData();
  }, []);

  return (
    <div className="p-0" style={{ height: "100vh", width: "100vw" }}>
      {error && (
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            backgroundColor: "red",
            color: "white",
            padding: "10px",
          }}
        >
          {error}
        </div>
      )}

      <MapContainer
        center={userLocation ? [userLocation.lat, userLocation.lon] : [21.1702, 72.8311]} // Center map on user location
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
          <Marker position={[userLocation.lat, userLocation.lon]} icon={getCustomIcon(true)}>
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
            const isActive = driver.isActive; // Determine if the driver is active
            return (
              <Marker
                key={driver._id}
                position={[driver.location.lat, driver.location.lon]}
                icon={getCustomIcon(isActive)}
              >
                <Popup>
                  <strong>{driver.driverName}</strong>
                  <br />
                  Car: {driver.carModel}
                  <br />
                  Latitude: {driver.location.lat.toFixed(7)}
                  <br />
                  Longitude: {driver.location.lon.toFixed(7)}
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

