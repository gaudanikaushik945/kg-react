
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/UserContext";

const DriverList = () => {
  const { setAddDriver, addDriver } = useContext(AuthContext);
  const [driverDetails, setDriverDetails] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDriverList = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8000/api/drivers/all/driver", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch drivers.");
        }

        const responseData = await response.json();
        setDriverDetails(responseData || []);
        setAddDriver(false);
      } catch (err) {
        setError(err.message || "Failed to fetch drivers. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchDriverList();
  }, [addDriver, setAddDriver]);

  const handleRemove = async (driverId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/drivers/remove/${driverId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to remove the driver.");
      }

      setDriverDetails((prev) => prev.filter((driver) => driver._id !== driverId));
      alert("Driver removed successfully!");
    } catch (err) {
      alert(err.message || "Failed to remove the driver. Please try again.");
    }
  };

  return (
    <div className="p-2 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 text-center sm:mb-10 mb-5">
        Driver List
      </h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {driverDetails.length === 0 && !loading ? (
          <p>No drivers available.</p>
        ) : (
          driverDetails.map((driver, index) => (
            <div
              key={driver._id}
              className="bg-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-gray-200 to-slate-200 p-4 rounded-t-lg">
                <h3 className="text-gray-800 text-xl font-semibold">
                  {`${index + 1}. ${driver.driverName}`}
                </h3>
              </div>

              <div className="mt-4 p-4 text-gray-800">
                <div className="flex justify-between">
                  <p className="text-sm">Mobile No:</p>
                  <p className="font-semibold">{driver.mobileNumber}</p>
                </div>
                <div className="flex justify-between mt-2">
                  <p className="text-sm">Vehicle Type:</p>
                  <p className="font-semibold">{driver.carModel}</p>
                </div>
                <div className="flex justify-between mt-2">
                  <p className="text-sm">Vehicle No:</p>
                  <p className="font-semibold">{driver.rcBookNumber}</p>
                </div>
                <div className="flex justify-between mt-2">
                  <p className="text-sm">Latitude:</p>
                  <p className="font-semibold">{driver.location.lat}</p>
                </div>
                <div className="flex justify-between mt-2">
                  <p className="text-sm">Longitude:</p>
                  <p className="font-semibold">{driver.location.lon}</p>
                </div>
              </div>

              <div className="mt-6 text-center pb-4">
                <button
                  onClick={() => handleRemove(driver._id)}
                  className="text-white px-6 py-2 rounded-full shadow-md bg-gradient-to-r from-gray-500 to-slate-500 transition duration-200"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DriverList;
