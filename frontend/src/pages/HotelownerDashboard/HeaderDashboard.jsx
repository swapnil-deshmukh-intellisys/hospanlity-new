import {
  FaCalendarAlt,
  FaSearch,
  FaBell
} from "react-icons/fa";


function HeaderDashboard() {
  return (
    <header className="dashboard-header">

      <div className="dashboard-left">

        <h1>Dashboard</h1>

        <h2>
          Welcome back, Rahul Manager! 👋
        </h2>

        <p>
          Here's what's happening at Hotel Sunrise today.
        </p>

      </div>

      <div className="dashboard-right">

        {/* Date */}

        <button className="date-btn">

          <FaCalendarAlt />

          <span>
            May 20 – May 26, 2026
          </span>

        </button>

        {/* Search */}

        <div className="header-search">

          <input
            type="text"
            placeholder="Search anything..."
          />

          <FaSearch />

        </div>

        {/* Notification */}

        <div className="header-notification">

          <FaBell />

          <span>5</span>

        </div>

        {/* Profile */}

        <div className="header-profile">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
          />

        </div>

      </div>

    </header>
  );
}

export default HeaderDashboard;