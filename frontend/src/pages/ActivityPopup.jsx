import { useState } from "react";
import "./ActivityPopup.css";
import hotelBg from "../assets/hotel-bg.png";

function ActivityPopup({ onClose }) {
  const [activeTab, setActiveTab] = useState("today");

  const activities = {
    today: [
      { title: "New Booking", desc: "Room 101 by Rajesh Sharma" },
      { title: "Check-in", desc: "Room 205 by Amit Verma" },
      { title: "Payment Received", desc: "Room 105 by Priya Patel" },
    ],

    yesterday: [
      { title: "Check-out", desc: "Room 302 by Neha Singh" },
      { title: "Housekeeping", desc: "Room 112 cleaned successfully" },
      { title: "Maintenance", desc: "Room 403 AC repaired" },
    ],

    other: [
      { title: "New Staff Added", desc: "Reception Department" },
      { title: "Revenue Updated", desc: "Monthly Report Generated" },
      { title: "Subscription Renewed", desc: "Premium Plan Activated" },
    ],
  };

  return (
    <div className="popup-overlay">
    <div

  className="booking-popup"
  style={{
    backgroundImage: `url(${hotelBg})`,
    minHeight: "500px",
    border: "5px solid red"
  }}
>

        <div className="popup-header">
          <h2>Activity History</h2>
          <button onClick={onClose}>✖</button>
        </div>

        <div className="activity-tabs">
          <button
            className={activeTab === "today" ? "active-tab" : ""}
            onClick={() => setActiveTab("today")}
          >
            Today
          </button>

          <button
            className={activeTab === "yesterday" ? "active-tab" : ""}
            onClick={() => setActiveTab("yesterday")}
          >
            Yesterday
          </button>

          <button
            className={activeTab === "other" ? "active-tab" : ""}
            onClick={() => setActiveTab("other")}
          >
            Other
          </button>
        </div>

        <div className="activity-list">
          {activities[activeTab].map((item, index) => (
            <div className="popup-activity-item" key={index}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ActivityPopup;