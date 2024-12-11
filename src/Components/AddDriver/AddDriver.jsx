
import React, { useContext, useState, useEffect } from "react"; 
import socket from "../../socket"; 
import { AuthContext } from "../context/UserContext";

const AddDriver = ({ setDrivers }) => {
  const [formData, setFormData] = useState({
    driverName: "",
    mobileNumber: "",
    password: "",
    rcBookNumber: "",
    carModel: "",
    isActive: "active",
  });

  const [loading, setLoading] = useState(false); 
  const { setAddDriver } = useContext(AuthContext); 
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleAddDriver = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }
  
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
  
        // Log location data before setting the state
        console.log("Location fetched: ", { lat: latitude, lon: longitude });
  
        // Ensure location is being set correctly before making the API request
        setLocation({ lat: latitude, lon: longitude });
  
        const driverData = {
          ...formData,
          location: { lat: latitude, lon: longitude },  // Ensure location is included
        };
  
        console.log("Driver data being sent to backend: ", driverData); // Log the complete data
  
        try {
          const response = await fetch("http://localhost:8000/api/drivers/register/driver", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(driverData),  // Make sure location is included in the body
          });
  
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to add driver.");
          }
  
          const responseData = await response.json();
          setAddDriver(true);
          setDrivers((prevDrivers) => [...prevDrivers, responseData]);
  
          socket.emit("update-location-captain", {
            userId: responseData._id,
            location: { lat: latitude, lon: longitude },
          });
  
          setFormData({
            driverName: "",
            mobileNumber: "",
            password: "",
            rcBookNumber: "",
            carModel: "",
            isActive: "active",
          });
  
          alert("Driver added successfully!");
  
        } catch (err) {
          console.error("Error:", err);
          setError(err.message || "Failed to add driver. Please try again.");
        } finally {
          setLoading(false);
        }
      },
      (geolocationError) => {
        console.error("Geolocation error:", geolocationError);
        setError("Failed to fetch location. Please enable location services.");
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    ); 
  };
    

  useEffect(() => {
    const handleLocationUpdate = (data) => {
      const { id, latitude, longitude } = data;
      console.log(`Received location update: Driver ID: ${id}, Lat: ${latitude}, Lon: ${longitude}`);
    };

    socket.on("receive-location", handleLocationUpdate);

    return () => {
      socket.off("receive-location", handleLocationUpdate);
    };
  }, []);

  return (
    <div className="mt-20 flex flex-col items-center justify-center">
      <h3 className="text-2xl font-bold text-center text-gray-700 mb-6">Add New Driver</h3>

      <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-lg">
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleAddDriver} className="space-y-6">
          {/* Driver Name */}
          <div>
            <label htmlFor="driverName" className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              id="driverName"
              name="driverName"
              value={formData.driverName}
              onChange={handleInputChange}
              className="w-full sm:p-3 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter driver's name"
              required
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-600 mb-1">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className="w-full sm:p-3 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter mobile number"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full sm:p-3 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
              required
            />
          </div>

          {/* Vehicle Number */}
          <div>
            <label htmlFor="rcBookNumber" className="block text-sm font-medium text-gray-600 mb-1">
              Vehicle Number
            </label>
            <input
              type="text"
              id="rcBookNumber"
              name="rcBookNumber"
              value={formData.rcBookNumber}
              onChange={handleInputChange}
              className="w-full sm:p-3 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter vehicle number"
              required
            />
          </div>

          {/* Car Model */}
          <div>
            <label htmlFor="carModel" className="block text-sm font-medium text-gray-600 mb-1">
              Model Name
            </label>
            <input
              type="text"
              id="carModel"
              name="carModel"
              value={formData.carModel}
              onChange={handleInputChange}
              className="w-full sm:p-3 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Model Name (Swift, Ertiga)"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-white py-3 rounded-lg shadow-lg font-semibold bg-gradient-to-r from-gray-500 to-slate-500"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Driver"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDriver;
