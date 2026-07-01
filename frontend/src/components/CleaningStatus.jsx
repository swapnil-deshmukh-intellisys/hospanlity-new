import React, { useState } from "react";
import {
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiTool,
} from "react-icons/fi";

const roomData = {
  "1st Floor": [
    {
      room: "101",
      type: "Deluxe Room",
      status: "Clean",
      staff: "Rajesh Kumar",
      time: "08:30 AM",
    },
    {
      room: "102",
      type: "Deluxe Room",
      status: "In Progress",
      staff: "Sunita Devi",
      time: "09:15 AM",
    },
    {
      room: "103",
      type: "Suite Room",
      status: "Dirty",
      staff: "-",
      time: "-",
    },
    {
      room: "104",
      type: "Suite Room",
      status: "Clean",
      staff: "Anita Sharma",
      time: "08:45 AM",
    },
    {
      room: "105",
      type: "Single Room",
      status: "Inspection",
      staff: "Mahesh Yadav",
      time: "10:00 AM",
    },
    {
      room: "106",
      type: "Suite Room",
      status: "Clean",
      staff: "Rajesh Kumar",
      time: "08:50 AM",
    },
    {
      room: "107",
      type: "Double Room",
      status: "In Progress",
      staff: "Pooja Sharma",
      time: "09:20 AM",
    },
    {
      room: "108",
      type: "Standard Room",
      status: "Dirty",
      staff: "-",
      time: "-",
    },
    {
      room: "109",
      type: "Single Room",
      status: "Out of Service",
      staff: "-",
      time: "-",
    },
    {
      room: "110",
      type: "Deluxe Room",
      status: "Clean",
      staff: "Sunita Devi",
      time: "08:40 AM",
    },
    {
      room: "111",
      type: "Suite Room",
      status: "Inspection",
      staff: "Mahesh Yadav",
      time: "09:30 AM",
    },
    {
      room: "112",
      type: "VIP Room",
      status: "In Progress",
      staff: "Anita Sharma",
      time: "09:10 AM",
    },
  ],
};

export default function CleaningStatus() {

  const [floor, setFloor] = useState("1st Floor");

  const rooms = roomData[floor];

  const badgeClass = (status) => {
    switch (status) {
      case "Clean":
        return "badge-clean";

      case "Dirty":
        return "badge-dirty";

      case "Inspection":
        return "badge-inspection";

      case "In Progress":
        return "badge-progress";

      case "Out of Service":
        return "badge-out";

      default:
        return "";
    }
  };

  const statusIcon = (status) => {
    switch (status) {
      case "Clean":
        return <FiCheckCircle />;

      case "Dirty":
        return <FiAlertCircle />;

      case "Inspection":
        return <FiClock />;

      case "In Progress":
        return <FiClock />;

      case "Out of Service":
        return <FiTool />;

      default:
        return null;
    }
  };

  return (
    <div className="cleaning-status">

      <div className="cleaning-header">

        <div>

          <h2>Room-wise Cleaning Status</h2>

         <div className="status-legend">

  <span className="legend-item">
    <span className="dot clean"></span>
    Clean
  </span>

  <span className="legend-item">
    <span className="dot progress"></span>
    In Progress
  </span>

  <span className="legend-item">
    <span className="dot dirty"></span>
    Dirty
  </span>

  <span className="legend-item">
    <span className="dot inspection"></span>
    Inspection
  </span>

  <span className="legend-item">
    <span className="dot out"></span>
    Out of Service
  </span>

</div>

</div>

<select
  className="floor-select"
  value={floor}
  onChange={(e) => setFloor(e.target.value)}
>
  {Object.keys(roomData).map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ))}
</select>

</div>

<div className="cleaning-grid">

  {rooms.map((room, index) => (

    <div className="clean-room-card" key={index}>

      <div className="status-icon">
        {statusIcon(room.status)}
      </div>

      <h3 className="room-number">
        {room.room}
      </h3>

      <p className="room-type">
        {room.type}
      </p>

      <span className={`status-badge ${badgeClass(room.status)}`}>
        {room.status}
      </span>

      <div className="room-footer">

        <span className="staff-name">
          {room.staff}
        </span>

        <span className="room-time">
          {room.time}
        </span>

      </div>

    </div>

  ))}

</div>

<button className="view-grid-btn">
  View Full Grid →
</button>

</div>

);
}