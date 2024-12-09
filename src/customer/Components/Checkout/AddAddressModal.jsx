import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../../config/api";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const AddAddressModal = ({ setUpdated, isOpen, onClose, refreshAddresses }) => {
  const navigate = useNavigate();

  const [addressData, setAddressData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    country: "Mexico",
    state: "",
    zipCode: "",
    phone1: "",
    nickName: "", // Ensure this field is set
    email1: "",
    addressType: "ShippingAndBilling",
    addressLine: ["", ""],
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("addressLine")) {
      const index = parseInt(name.split(".")[1], 10);
      setAddressData((prevData) => {
        const newAddressLine = [...prevData.addressLine];
        newAddressLine[index] = value;
        return { ...prevData, addressLine: newAddressLine };
      });
    } else {
      setAddressData({ ...addressData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const wt = localStorage.getItem("wt");
    const wtt = localStorage.getItem("wtt");

    if (!addressData.nickName) {
      // alert("Nickname is required");
      return;
    }

    try {
      await axios.post(`${API_BASE_URL}address`, addressData, {
        headers: {
          wt: wt,
          wtt: wtt,
        },
      });
      // alert("Address added successfully!");
      toast.success("Address added successfully!");
      onClose();
      refreshAddresses();
      setUpdated((pre) => !pre);
    } catch (error) {
      console.error("Error adding address:", error);
      // alert("Failed to add address. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <Toaster />
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white w-full max-w-2xl p-6 rounded-md shadow-md overflow-y-auto max-h-screen">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              Enter a new delivery address
            </h2>
            <button onClick={onClose} className="text-2xl font-semibold">
              &times;
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">
                Full name (First and Last name)
              </label>
              <input
                type="text"
                name="firstName"
                value={addressData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lastName"
                value={addressData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
                placeholder="Last Name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Nickname</label>
              <input
                type="text"
                name="nickName"
                value={addressData.nickName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
                placeholder="Enter a nickname"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Mobile number</label>
              <input
                type="text"
                name="phone1"
                value={addressData.phone1}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
                placeholder="May be used to assist delivery"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Pincode</label>
              <input
                type="text"
                name="zipCode"
                value={addressData.zipCode}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
                placeholder="6 digits [0-9] PIN code"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Flat, House no., Building, Company, Apartment
              </label>
              <input
                type="text"
                name="addressLine.0"
                value={addressData.addressLine[0]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Area, Street, Sector, Village
              </label>
              <input
                type="text"
                name="addressLine.1"
                value={addressData.addressLine[1]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Town/City</label>
                <input
                  type="text"
                  name="city"
                  value={addressData.city}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">State</label>
                <input
                  type="text"
                  name="state"
                  value={addressData.state}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-wwwbootscom-congress-blue hover:bg-btn-hover text-white py-2 px-4 rounded-md mt-4 w-full"
            >
              Add this address
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddAddressModal;
