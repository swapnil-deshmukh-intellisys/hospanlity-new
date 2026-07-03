import { useState } from "react";
import "./Housekeeping.css";
import ViewAllTaskPopup from "../pages/ViewAllTaskPopup";

import {
  FiHome,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

import { FaBed, FaBan } from "react-icons/fa";
import TaskOverview from "../components/TaskOverview";
import AllPendingTaskPopup from "../components/AllPendingTaskPopup";
import CompletedPopup from "../components/CompletedPopup";
import RoomStatus from "../components/RoomStatus";
import TodayActivity from "../components/TodayActivity";
import CleaningProgress from "../components/CleaningProgress";
import StaffDuty from "../components/StaffDuty";

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

   const [active, setActive] = useState("pending");
  const [showPendingPopup, setShowPendingPopup] = useState(false);
  const [openCompleted, setOpenCompleted] = useState(false);
  const [showViewAllPopup, setShowViewAllPopup] = useState(false);

  return (
    <div className="housekeeping-page">

      {/* Header */}
      <div className="hk-header">

        <div className="hk-title">
          <h1>Housekeeping Dashboard</h1>
          <p>
            Monitor housekeeping activities and manage room cleaning tasks.
          </p>
        </div>

        <div className="hk-header-right">
          {/* Future Buttons */}
        </div>

      </div>

      {/* Stats Cards */}
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
 {/* Task Overview */}
<div className="hk-task-overview">
<TaskOverview
  onViewPending={() => setShowPendingPopup(true)}
  onViewCompleted={() => setOpenCompleted(true)}
   onViewAllTasks={() => setShowViewAllPopup(true)}
/>

  <CompletedPopup
    open={openCompleted}
    onClose={() => setOpenCompleted(false)}
  />

  <ViewAllTaskPopup
  open={showViewAllPopup}
  onClose={() => setShowViewAllPopup(false)}
/>

  {showPendingPopup && (
    <AllPendingTaskPopup
      open={showPendingPopup}
      onClose={() => setShowPendingPopup(false)}
    />
  )}
</div>

{/* Room Status */}
<RoomStatus />

{/* ✅ TODAY ACTIVITY + CLEANING PROGRESS (SIDE BY SIDE FIX) */}
<div className="today-cards-row">
  <div className="activity-card">
    <TodayActivity />
  </div>

  <div className="cleaning-progress-card">
    <CleaningProgress />
  </div>

  <div className="staff-duty-card">
    <StaffDuty />
  </div>
</div>
    
      </div>



      

    
  );
}


