

import {
  FaRegCalendarCheck,
  FaBed,
  FaWallet,
  FaSignOutAlt,
} from "react-icons/fa";

const activities = [
  {
    time: "10:30 AM",
    title: "New Booking Confirmed",
    desc: "Booking ID BK-0015 for Room 205 (Executive)",
    icon: <FaRegCalendarCheck />,
    color: "purple",
  },
  {
    time: "10:15 AM",
    title: "Check-in Completed",
    desc: "Amit Sharma checked in to Room 101 (Deluxe)",
    icon: <FaBed />,
    color: "green",
  },
  {
    time: "09:40 AM",
    title: "Payment Received",
    desc: "Payment of ₹8,500 received from Neha Patel",
    icon: <FaWallet />,
    color: "orange",
  },
  {
    time: "09:20 AM",
    title: "Check-out Completed",
    desc: "Rahul Verma checked out from Room 302 (Suite)",
    icon: <FaSignOutAlt />,
    color: "blue",
  },
];

function RecentActivities() {
  return (
    <div className="recent-activities-card">

      <div className="recent-activities-header">
        <h3>Recent Activities</h3>

        <button>View All</button>
      </div>

      <div className="activities-list">

        {activities.map((item, index) => (

          <div className="activity-item" key={index}>

            <div className={`activity-icon ${item.color}`}>
              {item.icon}
            </div>

            <div className="activity-content">

              <span className="activity-time">
                {item.time}
              </span>

              <h4>{item.title}</h4>

              <p>{item.desc}</p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentActivities;