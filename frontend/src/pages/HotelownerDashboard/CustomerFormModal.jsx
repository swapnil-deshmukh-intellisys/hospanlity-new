import { useState, useEffect } from "react";
import "./CustomerFormModal.css";
import { cityData } from "./citiesData";

function CustomerFormModal({
  onClose,
  onSave,
  editCustomer,
}) {
  const [formData, setFormData] = useState({
    customerId: "",
    fullName: "",
    gender: "",
    mobile: "",
    email: "",
    dob: "",
    age: "",
    city: "",
    state: "",
    pincode: "",
    address: "",
    idProof: "",
  });

  useEffect(() => {
    if (editCustomer) {
      setFormData(editCustomer);
    }
  }, [editCustomer]);

  const calculateAge = (dob) => {
    if (!dob) return "";

    const birthDate = new Date(dob);
    const today = new Date();

    let age =
      today.getFullYear() -
      birthDate.getFullYear();

    const monthDiff =
      today.getMonth() -
      birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 &&
        today.getDate() <
          birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dob") {
      setFormData({
        ...formData,
        dob: value,
        age: calculateAge(value),
      });
      return;
    }

    if (name === "city") {
      const selectedCity =
        cityData[value];

      setFormData({
        ...formData,
        city: value,
        state:
          selectedCity?.state || "",
        pincode:
          selectedCity?.pincode || "",
      });

      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.mobile
    ) {
      alert(
        "Please fill required fields"
      );
      return;
    }

    onSave(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="customer-modal">

        <div className="modal-header">
          <h2>
            {editCustomer
              ? "Edit Customer"
              : "Add Customer"}
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            <input
              type="text"
              name="customerId"
              placeholder="Customer ID"
              value={formData.customerId}
              onChange={handleChange}
            />

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">
                Select Gender
              </option>
              <option value="Male">
                Male
              </option>
              <option value="Female">
                Female
              </option>
              <option value="Other">
                Other
              </option>
            </select>

            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />

            <input
              type="text"
              name="age"
              placeholder="Age"
              value={formData.age}
              readOnly
            />

            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="">
                Select City
              </option>

              {Object.keys(cityData).map(
                (city) => (
                  <option
                    key={city}
                    value={city}
                  >
                    {city}
                  </option>
                )
              )}
            </select>

            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              readOnly
            />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              readOnly
            />

            <input
              type="text"
              name="idProof"
              placeholder="ID Proof"
              value={formData.idProof}
              onChange={handleChange}
            />

            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />

          </div>

          <div className="modal-actions">

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              {editCustomer
                ? "Update Customer"
                : "Add Customer"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default CustomerFormModal;