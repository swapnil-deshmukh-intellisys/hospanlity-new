import "./Maintenance.css";
import { useState } from "react";
import AssignNow from "../pages/AssignNow";

import {
  FaTools,
  FaExclamationTriangle,
  FaClipboardList,
  FaCheckCircle,
  FaClock,
  FaBolt,
  FaTint,
  FaSnowflake,
  FaCouch,
} from "react-icons/fa";

function Maintenance() {
  const [showRequestPopup, setShowRequestPopup] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null);
  
  const criticalIssues = [
    {
      room: "Room 205",
      issue: "AC Not Working",
      priority: "High",
      reportedBy: "Rajesh Sharma",
    },
    {
      room: "Room 408",
      issue: "Water Leakage",
      priority: "High",
      reportedBy: "Priya Patel",
    },
    {
      room: "Room 301",
      issue: "Door Lock Fault",
      priority: "Medium",
      reportedBy: "Amit Verma",
    },
    {
      room: "Room 503",
      issue: "Power Failure",
      priority: "High",
      reportedBy: "Neha Singh",
    },
  ];

const [requests, setRequests] = useState([
  {
    room: "Room 101",
    issue: "TV Not Working",
    status: "Pending",
  },
  {
    room: "Room 302",
    issue: "Toilet Flush Issue",
    status: "In Progress",
  },
  {
    room: "Room 204",
    issue: "Hot Water Not Available",
    status: "In Progress",
  },
  {
    room: "Room 207",
    issue: "Light Flickering",
    status: "Completed",
  },
]); // 👈 हे CLOSE आहे



  const technicians = [
    {
      name: "Ramesh Kumar",
      assigned: 12,
      completed: 10,
      efficiency: "88%",
    },
    {
      name: "Suresh Yadav",
      assigned: 8,
      completed: 7,
      efficiency: "86%",
    },
    {
      name: "Amit Singh",
      assigned: 15,
      completed: 14,
      efficiency: "93%",
    },
  ];

  return (
    <div className="maintenance-page">

      <div className="maintenance-header">
        <div>
          <h2>Maintenance</h2>
          <p>
            Monitor, manage and resolve all maintenance requests
          </p>
        </div>

        <div className="header-actions">
          <button className="outline-btn">
            Export Report
          </button>

         <button
className="primary-btn"
onClick={() => setShowRequestPopup(true)}
>
+ New Request
</button>
        </div>
      </div>

      {/* TOP CARDS */}

      <div className="stats-grid">

        <div className="stat-card">
          <FaExclamationTriangle />
          <h3>4</h3>
          <p>Critical Issues</p>
        </div>

        <div className="stat-card">
          <FaClipboardList />
          <h3>12</h3>
          <p>Pending Requests</p>
        </div>

        <div className="stat-card">
          <FaTools />
          <h3>18</h3>
          <p>In Progress</p>
        </div>

        <div className="stat-card">
          <FaCheckCircle />
          <h3>15</h3>
          <p>Completed Today</p>
        </div>

        <div className="stat-card">
          <FaClock />
          <h3>3.2 hrs</h3>
          <p>Avg Resolution Time</p>
        </div>

      </div>

      {/* ROW 2 */}

      <div className="maintenance-row">

        <div className="panel">
          <div className="panel-title">
            Critical Issues
          </div>

          {criticalIssues.map((item, index) => (
            <div
              key={index}
              className="issue-card"
            >
              <div>
                <h4>{item.room}</h4>
                <p>{item.issue}</p>
                <span>{item.priority}</span>
              </div>

            <button
  className="assign-btn"
  onClick={()=>{
      setSelectedIssue(item);
      setShowRequestPopup(true);
  }}
>
    Assign Now
</button>
            </div>
          ))}
        </div>

        <div className="panel">
          <div className="panel-title">
            Maintenance Requests
          </div>

          {requests.map((item, index) => (
            <div
              key={index}
              className="request-row"
            >
              <div>
                <h4>{item.room}</h4>
                <p>{item.issue}</p>
              </div>

              <span
                className={`badge ${item.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>

        <div className="panel chart-panel">
          <div className="circle-chart">
            <h1>49</h1>
            <span>Total</span>
          </div>

          <ul>
            <li>Pending (12)</li>
            <li>In Progress (18)</li>
            <li>Completed (15)</li>
            <li>Cancelled (4)</li>
          </ul>
        </div>

      </div>

      {/* ROW 3 */}

      <div className="maintenance-row">

        <div className="panel">
          <div className="panel-title">
            Technician Performance
          </div>

          <table className="tech-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Assigned</th>
                <th>Completed</th>
                <th>Efficiency</th>
              </tr>
            </thead>

            <tbody>
              {technicians.map((tech, i) => (
                <tr key={i}>
                  <td>{tech.name}</td>
                  <td>{tech.assigned}</td>
                  <td>{tech.completed}</td>
                  <td>{tech.efficiency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="panel">
          <div className="panel-title">
            Department Workload
          </div>

          <div className="workload-item">
            <FaBolt />
            Electrical
            <div className="bar">
              <div
                className="fill"
                style={{ width: "70%" }}
              />
            </div>
          </div>

          <div className="workload-item">
            <FaTint />
            Plumbing
            <div className="bar">
              <div
                className="fill"
                style={{ width: "45%" }}
              />
            </div>
          </div>

          <div className="workload-item">
            <FaSnowflake />
            HVAC
            <div
              className="bar"
            >
              <div
                className="fill"
                style={{ width: "85%" }}
              />
            </div>
          </div>

          <div className="workload-item">
            <FaCouch />
            Furniture
            <div className="bar">
              <div
                className="fill"
                style={{ width: "30%" }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* CALENDAR */}

      <div className="panel calendar-panel">
        <div className="panel-title">
          Maintenance Calendar
        </div>

        <div className="calendar-grid">

          <div className="calendar-card">
            <h3>24 May</h3>
            <p>AC Service</p>
          </div>

          <div className="calendar-card">
            <h3>25 May</h3>
            <p>Lift Inspection</p>
          </div>

          <div className="calendar-card">
            <h3>26 May</h3>
            <p>Generator Check</p>
          </div>

          <div className="calendar-card">
            <h3>28 May</h3>
            <p>Fire System Check</p>
          </div>

        </div>
      </div>
      {showRequestPopup && (

<div className="popup-overlay">

<div className="request-popup">

<div className="popup-header">

<h2>New Maintenance Request</h2>

<button onClick={()=>setShowRequestPopup(false)}>
✖
</button>

</div>


<div className="form-grid">

<div className="input-box">
  <label>Room Number</label>

  <select defaultValue="">
    <option value="" disabled>
      Select Room
    </option>

    <option value="101">Room 101</option>
    <option value="102">Room 102</option>
    <option value="103">Room 103</option>
    <option value="104">Room 104</option>
    <option value="105">Room 105</option>
  </select>
</div>
  


<div className="input-box">
<label>Issue Category</label>

<select>
<option>Electrical</option>
<option>Plumbing</option>
<option>HVAC</option>
<option>Furniture</option>
<option>Door Lock</option>
<option>TV</option>
<option>Other</option>
</select>

</div>


<div className="input-box">
<label>Priority</label>

<select>
<option>Low</option>
<option>Medium</option>
<option>High</option>
<option>Critical</option>
</select>

</div>


<div className="input-box">
<label>Reported By</label>
<input placeholder="Customer Name"/>
</div>


<div className="input-box full">
<label>Description</label>

<textarea
rows="5"
placeholder="Describe issue..."
></textarea>

</div>


<div className="input-box">
<label>Assign Technician</label>

<select>

<option>Auto Assign</option>

<option>Ramesh Kumar</option>

<option>Suresh Yadav</option>

<option>Amit Singh</option>
<option>Neha Singh</option>


</select>

<div className="input-box">
<label>Upload File</label>

<input
type="file"
accept=".jpg,.jpeg,.png,.pdf"
/>

<small>Upload issue photo or PDF (Max 5 MB)</small>
</div>

</div>


<div className="input-box">
<label>Expected Date</label>
<input type="date"/>
</div>

</div>


<div className="popup-footer">

<button
className="cancel-btn"
onClick={()=>setShowRequestPopup(false)}
>
Cancel
</button>

<button
  className="save-btn"
  onClick={() => {
    const roomSelect = document.querySelector(".input-box select");
    const issueSelect = document.querySelectorAll(".input-box select")[1];

    if (!roomSelect.value || !issueSelect.value) return;

    setRequests([
      {
        room: "Room " + roomSelect.value,
        issue: issueSelect.value,
        status: "Pending",
      },
      ...requests,
    ]);

    setShowRequestPopup(false);
  }}
>
  Create Request
</button>

</div>
{showRequestPopup && (
    <AssignNow
        issue={selectedIssue}
        onClose={()=>{
            setShowRequestPopup(false);
            setSelectedIssue(null);
        }}
    />
)}

</div>

</div>

)}

    </div>
  );
}

export default Maintenance;