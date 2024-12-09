import React, { useEffect, useState } from "react";
import AddressBook from "../customer/Components/adreess/AddressBook";
import OrderHistory from "../customer/Components/orders/OrderHistory";
import { useDispatch, useSelector } from "react-redux";
import { API_BASE_URL } from "../config/api";
import { getCartItems, getCutomerOrdersNew } from "../action/cart";
import axios from "axios";
const Sidebar = ({ items, onItemSelect }) => {
  return (
    <div className="w-1/4 text-indigo-900  bg-gray-100 p-4">
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="p-2 cursor-pointer hover:bg-gray-200"
            onClick={() => onItemSelect(item)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState("my account summary");
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const { user } = useSelector((state) => state.auth);
  const { newOrder } = useSelector((store) => store);
  const dispatch = useDispatch();
  const wt = localStorage.getItem("wt");
  const wtt = localStorage.getItem("wtt");

  useEffect(() => {
    dispatch(getCutomerOrdersNew());
    dispatch(getCartItems());
  }, [loading, wt, wtt]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}info`, {
          headers: {
            wt: wt || user?.WCToken,
            wtt: wtt || user?.WCTrustedToken,
          },
        });
        const data = response.data;
        dispatch(getCartItems());

        setProfile(data);
        localStorage.setItem("email", JSON.stringify(data.logonId));
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  }, [user, wt, wtt]);
  console.log("profile", profile);

  const items = [
    {
      label: "my account summary",
      component: <AccountSummary profile={profile} />,
    },
    {
      label: "change login details",
      component: <ChangeLoginDetails profile={profile} />,
    },
    { label: "personal information", component: <PersonalInformation /> },
    { label: "order history", component: <OrderHistory /> },
    { label: "address book", component: <AddressBook /> },
    { label: "Prescription", component: <Prescription /> },
    { label: "appointments", component: <Appointment /> },

    // Add other menu items here
  ];

  const renderComponent = () => {
    const item = items.find((item) => item.label === selectedItem);
    return item ? item.component : <div>No component found</div>;
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        items={items}
        onItemSelect={(item) => setSelectedItem(item.label)}
      />
      <div className="w-3/4 p-8">{renderComponent()}</div>
    </div>
  );
};

const AccountSummary = ({ profile }) => (
  <div>
    <h2 className="text-4xl font-bold text-center text-indigo-900">
      Hello {profile.firstName || "User"}
    </h2>
    <h3 className="text-xl mt-4 text text-indigo-900 font-semibold">
      Account Summary
    </h3>

    <div className="bg-white p-4 shadow-md border mt-6">
      <h4 className="text-lg  font-semibold text-indigo-900 ">Recent Order</h4>
      <p className="text-gray-600">
        {/* You've not placed an order yet, why not check out some of our great{" "} */}
        <a href="" className="text-indigo-500">
          {/* offers? */}
        </a>
      </p>
    </div>

    <div className="grid grid-cols-2 gap-4 mt-6">
      <div className="bg-white p-4 shadow-md border">
        <div className="flex items-center space-x-3">
          <div className="text-indigo-500 text-3xl">🛒</div>
          <div>
            <h4 className="text-lg font-semibold text-indigo-900 ">
              Reorder and save time
            </h4>
            <p className="text-sm text-gray-600">
              Reorder regular purchases from your order history page
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 shadow-md border">
        <div className="flex items-center space-x-3">
          <div className="text-red-500 text-3xl">❤️</div>
          <div>
            <h4 className="text-lg text-indigo-900 font-semibold">
              Favourites
            </h4>
            <p className="text-sm text-gray-600">
              Save all your must-have products in one place for easy ordering
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 shadow-md border">
        <div className="flex items-center space-x-3">
          <div className="text-blue-500 text-3xl">💊</div>
          <div>
            <h4 className="text-lg font-semibold text-indigo-900">
              Prescriptions online
            </h4>
            <p className="text-sm text-gray-600">
              Find out more about convenient ways to manage your NHS and private
              prescriptions
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 shadow-md border">
        <div className="flex items-center space-x-3">
          <div className="text-indigo-900 text-3xl">📅</div>
          <div>
            <h4 className="text-lg text-indigo-900 font-semibold">
              Appointment booking online
            </h4>
            <p className="text-sm text-gray-600">
              From eye tests and vaccinations to beauty advice, book
              appointments easily online
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ChangeLoginDetails = ({ profile }) => (
  <div>
    <h2 className="text-xl text-indigo-900  font-bold">Change login details</h2>
    <div className="mt-4">
      <label className="block text-indigo-900  font-semibold">
        Email address:
      </label>
      <p className="text-gray-600">{profile.logonId}</p>
      <a href="#" className="text-indigo-500">
        Change email
      </a>
    </div>
    <div className="mt-4">
      <label className="block text-indigo-900  font-semibold">Password:</label>
      <p className="text-gray-600">********</p>
      <a href="#" className="text-indigo-500">
        Change password
      </a>
    </div>
    {/* Add more UI components similar to the second screenshot */}
  </div>
);

const PersonalInformation = () => (
  <div>
    <h2 className="text-xl mb-4 text-center font-bold text-indigo-900">
      Personal Information
    </h2>
    {/* Add UI components for personal information */}
    <p className="text-center">No Information available for now</p>
  </div>
);

const Prescription = () => {
  const [prescriptions, setPrescriptions] = useState([
    { id: 1, medicine: "Paracetamol", dosage: "500mg", date: "2024-08-01" },
    { id: 2, medicine: "Ibuprofen", dosage: "200mg", date: "2024-08-10" },
  ]);

  const [newPrescription, setNewPrescription] = useState({
    medicine: "",
    dosage: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPrescription({ ...newPrescription, [name]: value });
  };

  const handleAddPrescription = () => {
    const newId = prescriptions.length
      ? Math.max(...prescriptions.map((p) => p.id)) + 1
      : 1;
    setPrescriptions([...prescriptions, { ...newPrescription, id: newId }]);
    setNewPrescription({ medicine: "", dosage: "", date: "" });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-indigo-900">
        My Prescriptions
      </h2>

      {/* Prescription List */}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Medicine</th>
            <th className="py-2 px-4 border-b">Dosage</th>
            <th className="py-2 px-4 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.map((prescription) => (
            <tr key={prescription.id}>
              <td className="py-2 px-4 border-b">{prescription.medicine}</td>
              <td className="py-2 px-4 border-b">{prescription.dosage}</td>
              <td className="py-2 px-4 border-b">{prescription.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Prescription Form */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-indigo-900 mb-2">
          Add New Prescription
        </h3>
        <input
          type="text"
          name="medicine"
          value={newPrescription.medicine}
          onChange={handleInputChange}
          className="p-2 border rounded w-full mb-2"
          placeholder="Medicine name"
        />
        <input
          type="text"
          name="dosage"
          value={newPrescription.dosage}
          onChange={handleInputChange}
          className="p-2 border rounded w-full mb-2"
          placeholder="Dosage"
        />
        <input
          type="date"
          name="date"
          value={newPrescription.date}
          onChange={handleInputChange}
          className="p-2 border rounded w-full mb-4"
        />
        <button
          onClick={handleAddPrescription}
          className="bg-indigo-900 text-white py-2 px-4 rounded"
        >
          Add Prescription
        </button>
      </div>
    </div>
  );
};

const Appointment = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, doctor: "Dr. Smith", date: "2024-08-05", status: "Confirmed" },
    { id: 2, doctor: "Dr. Brown", date: "2024-08-12", status: "Pending" },
  ]);

  const [newAppointment, setNewAppointment] = useState({
    doctor: "",
    date: "",
    status: "Pending",
  });

  const doctors = ["Dr. Smith", "Dr. Brown", "Dr. Johnson"]; // Add more doctors as needed

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const handleAddAppointment = () => {
    const newId = appointments.length
      ? Math.max(...appointments.map((a) => a.id)) + 1
      : 1;
    setAppointments([...appointments, { ...newAppointment, id: newId }]);
    setNewAppointment({ doctor: "", date: "", status: "Pending" });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-indigo-900 mb-4">
        My Appointments
      </h2>

      {/* Appointment List */}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Doctor</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td className="py-2 px-4 border-b">{appointment.doctor}</td>
              <td className="py-2 px-4 border-b">{appointment.date}</td>
              <td className="py-2 px-4 border-b">{appointment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Book Appointment Form */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-indigo-900 mb-2">
          Book New Appointment
        </h3>
        <select
          name="doctor"
          value={newAppointment.doctor}
          onChange={handleInputChange}
          className="p-2 border rounded w-full mb-2"
        >
          <option value="">Select Doctor</option>
          {doctors.map((doctor, index) => (
            <option key={index} value={doctor}>
              {doctor}
            </option>
          ))}
        </select>
        <input
          type="date"
          name="date"
          value={newAppointment.date}
          onChange={handleInputChange}
          className="p-2 border rounded w-full mb-2"
        />
        <button
          onClick={handleAddAppointment}
          className="bg-indigo-900 text-white py-2 px-4 rounded"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
