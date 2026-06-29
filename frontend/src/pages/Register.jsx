import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaLock,
  FaEyeSlash,
  FaArrowRight,
} from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";

import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [agree, setAgree] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full Name is required";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Enter valid Gmail address";
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must contain 10 digits";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!agree) {
      toast.error("Please accept Terms & Conditions");
      return;
    }


    setErrors(newErrors);

if (Object.keys(newErrors).length === 0) {

  localStorage.setItem(
    "user",
    JSON.stringify({
      fullname: formData.fullname,
      email: formData.email,
      password: formData.password,
    })
  );

  toast.success("Registration Successful");
  navigate("/login");
}
  }

  return (
    <div className="register-container">
      <div className="register-card">

        {/* LEFT PANEL */}
        <div className="register-left-panel">
          <div className="register-overlay">

            <div className="logo">
              <h2>StayHub</h2>
              <p>Hospitality Management</p>
            </div>

            <div className="left-content">
              <h1>Create Your Account</h1>

              <div className="line"></div>

              <p>
                Join StayHub and enjoy seamless booking,
                exclusive offers and premium services.
              </p>
            </div>

            <div className="features">
              <p>✔ Best Price Guarantee</p>
              <p>✔ 24/7 Customer Support</p>
              <p>✔ Safe & Secure Booking</p>
            </div>

          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="register-right-panel">

          <div className="register-icon">
            <FaUser />
          </div>

          <h2>Register</h2>

          <span className="register-subtitle">
            Fill in the details to create your account
          </span>

          <form onSubmit={handleSubmit}>

            {/* Full Name */}
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>
            {errors.fullname && (
              <p className="error">{errors.fullname}</p>
            )}

            {/* Email */}
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && (
              <p className="error">{errors.email}</p>
            )}

            {/* Phone */}
            <div className="input-group">
              <FaPhoneAlt className="input-icon" />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            {errors.phone && (
              <p className="error">{errors.phone}</p>
            )}

            {/* Password */}
            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <FaEyeSlash className="eye-icon" />
            </div>
            {errors.password && (
              <p className="error">{errors.password}</p>
            )}

            {/* Confirm Password */}
            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <FaEyeSlash className="eye-icon" />
            </div>
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}

            {/* Checkbox */}
            <div className="terms">
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
              />

              <span>
                I agree to the
                <a href="/"> Terms & Conditions </a>
                and
                <a href="/"> Privacy Policy</a>
              </span>
            </div>

            {/* Button */}
            <button type="submit" className="register-btn">
              Register
              <FaArrowRight />
            </button>

          </form>

          {/* Divider */}
          <div className="register-divider">
            <span>OR</span>
          </div>

          {/* Google Button */}
          <button className="google-btn">
            <FcGoogle />
            Continue with Google
          </button>

          {/* Login */}
          <p className="login-text">
            Already have an account?
            <span onClick={() => navigate("/login")}>
              {" "}Login
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;