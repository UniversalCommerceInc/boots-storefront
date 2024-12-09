import React, { useState } from "react";

const StoreStockModal = ({ isTrue, setIsTrue }) => {
  const [location, setLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleModal = () => {
    setIsTrue((prev) => !prev);
  };

  const handleUseMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude}, Lon: ${longitude}`);
          setErrorMessage(""); // Clear any previous errors
        },
        (error) => {
          setErrorMessage("Unable to retrieve your location. Please try again.");
        }
      );
    } else {
      setErrorMessage("Geolocation is not supported by your browser.");
    }
  };

  return (
    <>
      {isTrue && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-11/12 md:w-1/3 rounded-lg p-6 shadow-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={toggleModal}
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold mb-4">Check store stock</h2>
            <div className="flex mb-4">
              <div className="w-1/3">
                <img
                  src="/path/to/your_image.png"
                  alt="Opticrom Hayfever Eye Drops"
                  className="w-16 h-16 mr-4"
                />
              </div>
              <div className="w-2/3">
                <p className="font-bold">Opticrom Hayfever Eye Drops - 10ml</p>
                <p className="text-gray-600">1897152</p>
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="location"
                >
                  Enter postcode or place name
                </label>
                <input
                  type="text"
                  id="location"
                  className="border border-gray-300 rounded-md w-full py-2 px-3 mb-2"
                  placeholder="Enter postcode or place name"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <div
                  className="text-sm mb-4 cursor-pointer text-blue-500 hover:underline"
                  onClick={handleUseMyLocation}
                >
                  Use my location
                </div>
                <button className="flex items-center justify-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full">
                  Check
                </button>
              </div>
            </div>

            {errorMessage && (
              <p className="text-red-600 mt-4">{errorMessage}</p>
            )}

            <p className="text-red-600 mt-4">
              Sorry, we're unable to show the availability of the product. Please try again later.
            </p>

            <p className="text-gray-500 text-sm mt-2">
              Prices may vary depending on the store. Availability is an indication only and is updated every 30 minutes.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default StoreStockModal;
