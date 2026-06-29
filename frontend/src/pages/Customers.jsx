import React, { useState, useMemo } from "react";
import "./Customers.css";
import CustomerFormModal from "./HotelownerDashboard/CustomerFormModal";
import { FaSearch } from "react-icons/fa";

import {
 FaUsers,
 FaCalendarCheck,
 FaSignOutAlt,
 FaClock,
 FaRupeeSign
} from "react-icons/fa";

const cityData = {
  Pune: {
    state: "Maharashtra",
    pincode: "411001",
  },
  Mumbai: {
    state: "Maharashtra",
    pincode: "400001",
  },
  Nashik: {
    state: "Maharashtra",
    pincode: "422001",
  },
  Nagpur: {
    state: "Maharashtra",
    pincode: "440001",
  },
  Delhi: {
    state: "Delhi",
    pincode: "110001",
  },
};

function Customers() {
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [errors, setErrors] = useState({});

  const [search, setSearch] = useState("");

  const [customerForm, setCustomerForm] = useState({
    guestName: "",
    email: "",
    phone: "",
    dob: "",
    age: "",
    gender: "",
    address: "",
    aadhar: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [customers, setCustomers] = useState([
    {
      guestName: "Rahul Patil",
      email: "rahul@gmail.com",
      phone: "9876543210",
      gender: "Male",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411001",
      age: "28",
      status: "Checked In",
      amount: "₹12,500",
    },
  ]);

  const [filters, setFilters] = useState({
  search: "",
  bookingStatus: "",
  paymentStatus: "",
  roomType: "",
  city: "",
  gender: "",
  checkinDate: "",
  checkoutDate: "",
  sortBy: "Newest First",
});

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const month = today.getMonth() - birthDate.getMonth();

    if (
      month < 0 ||
      (month === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const handleDOB = (e) => {
    const dob = e.target.value;

    setCustomerForm({
      ...customerForm,
      dob,
      age: calculateAge(dob),
    });
  };

  const handleCity = (e) => {
    const city = e.target.value;

    const data = cityData[city];

    setCustomerForm({
      ...customerForm,
      city,
      state: data?.state || "",
      pincode: data?.pincode || "",
    });
  };

  const handleChange = (e) => {
  setCustomerForm({
    ...customerForm,
    [e.target.name]: e.target.value,
  });

  setErrors({
    ...errors,
    [e.target.name]: "",
  });
};

  const resetForm = () => {
    setCustomerForm({
      guestName: "",
      email: "",
      phone: "",
      dob: "",
      age: "",
      gender: "",
      address: "",
      aadhar: "",
      city: "",
      state: "",
      pincode: "",
    });
  };

  const addCustomer = () => {
  let newErrors = {};

  if (!customerForm.guestName) {
    newErrors.guestName = "Guest Name is required";
  }

  if (!customerForm.email) {
    newErrors.email = "Email is required";
  }

  if (!customerForm.phone) {
    newErrors.phone = "Phone is required";
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  const customer = {
    ...customerForm,
    status: "Checked In",
    amount: "₹0",
  };

  if (editingIndex !== null) {
    const updated = [...customers];
    updated[editingIndex] = customer;
    setCustomers(updated);
    setEditingIndex(null);
  } else {
    setCustomers([...customers, customer]);
  }

  resetForm();
  setErrors({});
  setShowModal(false);
};
  const deleteCustomer = (index) => {
    const updated = customers.filter((_, i) => i !== index);
    setCustomers(updated);
  };

  const editCustomer = (index) => {
    setCustomerForm(customers[index]);
    setEditingIndex(index);
    setShowModal(true);
  };

  const filteredCustomers = useMemo(() => {

  let result = [...customers];

  if (filters.search) {
    result = result.filter((c) =>
      c.guestName
        .toLowerCase()
        .includes(filters.search.toLowerCase()) ||

      c.email
        .toLowerCase()
        .includes(filters.search.toLowerCase()) ||

      c.phone.includes(filters.search) ||

      c.city
        .toLowerCase()
        .includes(filters.search.toLowerCase()) ||

      c.state
        .toLowerCase()
        .includes(filters.search.toLowerCase())
    );
  }

  if (filters.city) {
    result = result.filter(
      (c) => c.city === filters.city
    );
  }

  if (filters.gender) {
    result = result.filter(
      (c) => c.gender === filters.gender
    );
  }

  if (filters.bookingStatus) {
    result = result.filter(
      (c) => c.status === filters.bookingStatus
    );
  }

  if (filters.sortBy === "Oldest First") {
    result.reverse();
  }

  return result;

}, [customers, filters]);

  return (
    <div className="customers-page">

      <div className="customers-header">
        <div>
          <h2>Customers</h2>
          <p>Home / Customers</p>
        </div>

        <button
          className="add-customer-btn"
          onClick={() => {
            resetForm();
            setEditingIndex(null);
            setShowModal(true);
          }}
        >
          + Add Customer
        </button>
      </div>
<div className="overview-grid">

  <div className="overview-card">
    <div className="card-icon purple">
      <FaUsers />
    </div>

    <div className="card-content">
      <h4>Total Customers</h4>
      <h2>256</h2>
      <p>+12 this month</p>
    </div>
  </div>

  <div className="overview-card">
    <div className="card-icon blue">
      <FaCalendarCheck />
    </div>

    <div className="card-content">
      <h4>Checked In</h4>
      <h2>{customers.length}</h2>
      <p>Currently staying</p>
    </div>
  </div>

  <div className="overview-card">
    <div className="card-icon violet">
      <FaSignOutAlt />
    </div>

    <div className="card-content">
      <h4>Checked Out</h4>
      <h2>198</h2>
      <p>This month</p>
    </div>
  </div>

  <div className="overview-card">
    <div className="card-icon orange">
      <FaClock />
    </div>

    <div className="card-content">
      <h4>Upcoming Check-ins</h4>
      <h2>16</h2>
      <p>Next 7 days</p>
    </div>
  </div>

  <div className="overview-card">
    <div className="card-icon green">
      <FaRupeeSign />
    </div>

    <div className="card-content">
      <h4>Total Revenue</h4>
      <h2>₹2,45,680</h2>
      <p>This month</p>
    </div>
  </div>

</div>

   <div className="filter-box">

  <h3>Filter Customers</h3>

  <div className="filter-grid">

    <div className="filter-group">
      <label>Search</label>
      <input
  type="text"
  placeholder="Search by name, phone, email, city..."
  value={filters.search}
  onChange={(e) =>
    setFilters({
      ...filters,
      search: e.target.value,
    })
  }
/>
    </div>

    <div className="filter-group">
      <label>Booking Status</label>
      <select>
        <option>All Status</option>
        <option>Checked In</option>
        <option>Checked Out</option>
      </select>
    </div>

    <div className="filter-group">
      <label>Payment Status</label>
      <select>
        <option>All Payment Status</option>
        <option>Paid</option>
        <option>Pending</option>
        <option>Partial</option>
      </select>
    </div>

    <div className="filter-group">
      <label>Check-in Date</label>
      <input type="date" />
    </div>

    <div className="filter-group">
      <label>Check-out Date</label>
      <input type="date" />
    </div>

    <div className="filter-group">
      <label>Room Type</label>
      <select>
        <option>All Room Types</option>
        <option>Deluxe Room</option>
        <option>Executive Room</option>
        <option>Suite Room</option>
      </select>
    </div>

    <div className="filter-group">
  <label>City</label>

  <select
    value={filters.city}
    onChange={(e) =>
      setFilters({
        ...filters,
        city: e.target.value,
      })
    }
  >
    <option value="">
      All Cities
    </option>

    {Object.keys(cityData).map((city) => (
      <option
        key={city}
        value={city}
      >
        {city}
      </option>
    ))}
  </select>
</div>

    <div className="filter-group">
      <label>Gender</label>
      <select
  value={filters.gender}
  onChange={(e) =>
    setFilters({
      ...filters,
      gender: e.target.value,
    })
  }
>
  <option value="">
    All
  </option>

  <option value="Male">
    Male
  </option>

  <option value="Female">
    Female
  </option>
</select>
    </div>

    <div className="filter-group">
      <label>Sort By</label>
      <select>
        <option>Newest First</option>
        <option>Oldest First</option>
      </select>
    </div>

    <div className="filter-buttons">



    </div>

  </div>

</div>



      <div className="table-box">

        <div className="table-header">
          <h3>Customer List</h3>
        </div>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Customer</th>
              <th>Phone</th>
              <th>City</th>
              <th>State</th>
              <th>Age</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredCustomers.map((customer, index) => (
              <tr key={index}>
                <td>{index + 1}</td>

                <td>
                  <strong>{customer.guestName}</strong>
                  <br />
                  {customer.email}
                </td>

                <td>{customer.phone}</td>

                <td>{customer.city}</td>

                <td>{customer.state}</td>

                <td>{customer.age}</td>

                <td>
                  <span className="status-badge">
                    {customer.status}
                  </span>
                </td>

                <td>

                  <button
                    className="action-btn edit"
                    onClick={() => editCustomer(index)}
                  >
                    Edit
                  </button>

                  <button
                    className="action-btn delete"
                    onClick={() => deleteCustomer(index)}
                  >
                    Delete
                  </button>

                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay">

          <div className="customer-modal">

            <h2>Add Customer</h2>

            <div className="form-grid">

           <input
  name="guestName"
  placeholder="Guest Name"
  value={customerForm.guestName}
  onChange={handleChange}
/>

{errors.guestName && (
  <span className="error-text">{errors.guestName}</span>
)}
<input
  name="email"
  placeholder="Email"
  value={customerForm.email}
  onChange={handleChange}
/>

{errors.email && (
  <span className="error-text">{errors.email}</span>
)}

 <input
    className="phone-input"
    name="phone"
    placeholder="Phone"
    value={customerForm.phone}
    onChange={handleChange}
/>
     <input
                type="date"
                value={customerForm.dob}
                onChange={handleDOB}
              />

              <input
                value={customerForm.age}
                placeholder="Age"
                readOnly
              />

              <select
                name="gender"
                value={customerForm.gender}
                onChange={handleChange}
              >
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>

              <textarea
                name="address"
                placeholder="Address"
                value={customerForm.address}
                onChange={handleChange}
              />

              <input
                name="aadhar"
                placeholder="Aadhar Number"
                value={customerForm.aadhar}
                onChange={handleChange}
              />

              <select
                value={customerForm.city}
                onChange={handleCity}
              >
                <option value="">Select City</option>

                {Object.keys(cityData).map((city) => (
                  <option key={city}>{city}</option>
                ))}
              </select>

              <input
                value={customerForm.state}
                placeholder="State"
                readOnly
              />

              <input
                value={customerForm.pincode}
                placeholder="Pincode"
                readOnly
              />

            </div>

            <div className="modal-actions">

              <button
                className="cancel-btn"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button
                className="save-btn"
                onClick={addCustomer}
              >
                Add Customer
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Customers;