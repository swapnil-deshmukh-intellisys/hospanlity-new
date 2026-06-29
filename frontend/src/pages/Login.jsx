import "./Login.css";
import { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      setError("No registered user found");
      return;
    }

    if (
      loginData.email === user.email &&
      loginData.password === user.password
    ) {
      toast.success("Login Successful");
      navigate("/dashboard");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="page">
      <div className="login-box">

        {/* LEFT */}
        <div className="left-panel">
          <div className="left-overlay">

            <div className="hotel-logo"></div>

            <h1>HOSPITALITY</h1>

            <h2>MANAGEMENT SYSTEM</h2>

            <div className="yellow-line"></div>

            <p>Manage. Serve. Succeed.</p>

          </div>
        </div>

        {/* RIGHT */}
        <div className="right-panel">

          <div className="form-box">

            <div className="top-icon">🏨</div>

            <h1>Welcome Back!</h1>

            <p className="subtitle">
              Sign in to your account
            </p>

            <div className="input-box">
              <FaUser className="input-icon" />

              <input
                type="email"
                name="email"
                placeholder="Username"
                value={loginData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-box">
              <FaLock className="input-icon" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleChange}
              />

              <span
                className="eye-icon"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            {error && (
              <p className="login-error">
                {error}
              </p>
            )}

            <div className="options">

              <label>
                <input type="checkbox" />
                Remember Me
              </label>

              <span>
                Forgot Password?
              </span>

            </div>

            <button
              className="login-btn"
              onClick={handleLogin}
            >
              Login
            </button>

            <div className="divider">
              <span>or</span>
            </div>

            <button className="staff-btn">
              👥 Login as Staff
            </button>

            <p className="register-text">
  Don't have an account?
  <span onClick={() => navigate("/register")}>
    Register
  </span>
</p>

            <div className="copyright">
              © 2024 Hospitality Management System.
              All rights reserved.
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;