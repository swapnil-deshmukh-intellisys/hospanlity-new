import React from "react";
import {
  FiHome,
  FiCheckCircle,
  FiAlertCircle,
  FiClock,
  FiClipboard,
  FiUsers,
  FiEye,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

import { FaBed, FaBan } from "react-icons/fa";

import "./Housekeeping.css";

import TaskOverview from "../components/TaskOverview";
import CleaningStatus from "../components/CleaningStatus";
const statsData = [
  {
    title: "Total Rooms",
    value: "120",
    subText: "100%",
    icon: <FiHome />,
    color: "purple",
  },
  {
    title: "Clean Rooms",
    value: "58",
    subText: "48.3%",
    icon: <FiCheckCircle />,
    color: "green",
  },
  {
    title: "Dirty Rooms",
    value: "28",
    subText: "23.3%",
    icon: <FiAlertCircle />,
    color: "red",
  },
  {
    title: "Occupied Rooms",
    value: "74",
    subText: "61.7%",
    icon: <FaBed />,
    color: "blue",
  },
  {
    title: "Vacant Rooms",
    value: "36",
    subText: "30.0%",
    icon: <FaBed />,
    color: "orange",
  },
  {
    title: "Out of Service",
    value: "10",
    subText: "8.3%",
    icon: <FaBan />,
    color: "gray",
  },
];
export default function Housekeeping() {
  return (
    <div className="housekeeping-page">

      <div className="hk-header">
        <div className="hk-title">
          <h1>Housekeeping Dashboard</h1>
          <p>
            Monitor housekeeping activities and manage room cleaning tasks.
          </p>
        </div>

        <div className="hk-header-right">
        </div>
        
      </div>

       {/* STATS */}
  <div className="hk-stats-grid">

    {statsData.map((item, index) => (
      <div className="hk-stat-card" key={index}>

        <div className={`hk-icon ${item.color}`}>
          {item.icon}
        </div>

        <div className="hk-info">
          <span>{item.title}</span>
          <h2>{item.value}</h2>
          <p>{item.subText}</p>
        </div>

          
      </div>
    ))}

  </div>


<div className="housekeeping-row">
  <div className="task-section">
    <TaskOverview />
  </div>

  <div className="cleaning-section">
    <CleaningStatus />
  </div>
</div>
    </div>
  );
}
import React from "react";
import "./Housekeeping.css";
import {
  FiHome,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

import { FaBed, FaBan } from "react-icons/fa";

import TaskOverview from "../components/TaskOverview";
import CleaningStatus from "../components/CleaningStatus";
const statsData = [
  {
    title: "Total Rooms",
    value: "120",
    subText: "100%",
    icon: <FiHome />,
    color: "purple",
  },
  {
    title: "Clean Rooms",
    value: "58",
    subText: "48.3%",
    icon: <FiCheckCircle />,
    color: "green",
  },
  {
    title: "Dirty Rooms",
    value: "28",
    subText: "23.3%",
    icon: <FiAlertCircle />,
    color: "red",
  },
  {
    title: "Occupied Rooms",
    value: "74",
    subText: "61.7%",
    icon: <FaBed />,
    color: "blue",
  },
  {
    title: "Vacant Rooms",
    value: "36",
    subText: "30.0%",
    icon: <FaBed />,
    color: "orange",
  },
  {
    title: "Out of Service",
    value: "10",
    subText: "8.3%",
    icon: <FaBan />,
    color: "gray",
  },
];
export default function Housekeeping() {
  return (
    <div className="housekeeping-page">

      <div className="hk-header">
        <div className="hk-title">
          <h1>Housekeeping Dashboard</h1>
          <p>
            Monitor housekeeping activities and manage room cleaning tasks.
          </p>
        </div>

        <div className="hk-header-right">
        </div>
        
      </div>

       {/* STATS */}
  <div className="hk-stats-grid">

    {statsData.map((item, index) => (
      <div className="hk-stat-card" key={index}>

        <div className={`hk-icon ${item.color}`}>
          {item.icon}
        </div>

        <div className="hk-info">
          <span>{item.title}</span>
          <h2>{item.value}</h2>
          <p>{item.subText}</p>
        </div>

          
      </div>
    ))}

  </div>


<div className="housekeeping-row">
  <div className="task-section">
    <TaskOverview />
  </div>

  <div className="cleaning-section">
    <CleaningStatus />
  </div>
</div>
    </div>
  );
}



