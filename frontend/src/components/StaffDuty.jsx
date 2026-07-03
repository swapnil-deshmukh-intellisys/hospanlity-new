import React from "react";
import "./StaffDuty.css";

import {
  FiArrowRight,
  FiCheckCircle,
  FiCoffee,
} from "react-icons/fi";

const staffData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Supervisor",
    image: "https://i.pravatar.cc/150?img=12",
    status: "On Duty",
  },
  {
    id: 2,
    name: "Anita Sharma",
    role: "Room Attendant",
    image: "https://i.pravatar.cc/150?img=47",
    status: "On Duty",
  },
  {
    id: 3,
    name: "Mahesh Yadav",
    role: "Room Attendant",
    image: "https://i.pravatar.cc/150?img=15",
    status: "On Duty",
  },
  {
    id: 4,
    name: "Pooja Sharma",
    role: "Housekeeping Staff",
    image: "https://i.pravatar.cc/150?img=32",
    status: "On Break",
  },
  {
    id: 5,
    name: "Ramesh Kumar",
    role: "Maintenance Staff",
    image: "https://i.pravatar.cc/150?img=18",
    status: "On Duty",
  },
];

export default function StaffDuty() {
  return (
    <div className="staff-card">

      {/* Header */}
      <div className="staff-header">
        <h3>Staff on Duty</h3>

        <button className="view-all-btn">
          View All
          <FiArrowRight size={14} />
        </button>
      </div>

      {/* Staff List */}
      <div className="staff-list">
        {staffData.map((staff) => (
          <div className="staff-item" key={staff.id}>

            {/* Left */}
            <div className="staff-left">
              <img
                src={staff.image}
                alt={staff.name}
                className="staff-avatar"
              />

              <div className="staff-info">
                <h4>{staff.name}</h4>
                <p>{staff.role}</p>
              </div>
            </div>

            {/* Right */}
            <div
              className={`staff-status ${
                staff.status === "On Duty"
                  ? "duty"
                  : "break"
              }`}
            >
              <span className="status-dot"></span>

              {staff.status === "On Duty" ? (
                <FiCheckCircle size={14} />
              ) : (
                <FiCoffee size={14} />
              )}

              <span>{staff.status}</span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}