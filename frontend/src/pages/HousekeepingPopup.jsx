import React, { useState } from "react";
import "./HousekeepingPopup.css";


import {
  FiUsers,
  FiClipboard,
  FiTrendingUp,
  FiDownload,
  FiX,
} from "react-icons/fi";

function HousekeepingPopup({ open, onClose }) {
  if (!open) return null;

  const [showTasksPopup, setShowTasksPopup] = useState(false);

  const allTasks = [
    {
      room: "Room 101",
      staff: "Priya Sharma",
      task: "Room Cleaning",
      status: "Completed",
    },
    {
      room: "Room 102",
      staff: "Amit Verma",
      task: "Bathroom Cleaning",
      status: "In Progress",
    },
    {
      room: "Room 103",
      staff: "Neha Singh",
      task: "Bedsheet Change",
      status: "Pending",
    },
    {
      room: "Room 104",
      staff: "Vikram",
      task: "Inspection",
      status: "Completed",
    },
    {
      room: "Room 105",
      staff: "Rahul Kumar",
      task: "Mini Bar Refill",
      status: "Pending",
    },
  ];

  const staffData = [
    {
      name: "Priya Sharma",
      assigned: 15,
      completed: 12,
      progress: 2,
      pending: 1,
      rate: "80%",
    },
    {
      name: "Amit Verma",
      assigned: 13,
      completed: 10,
      progress: 2,
      pending: 1,
      rate: "77%",
    },
    {
      name: "Neha Singh",
      assigned: 10,
      completed: 8,
      progress: 1,
      pending: 1,
      rate: "80%",
    },
    {
      name: "Vikram",
      assigned: 8,
      completed: 6,
      progress: 1,
      pending: 1,
      rate: "75%",
    },
    {
      name: "Rahul Kumar",
      assigned: 4,
      completed: 2,
      progress: 1,
      pending: 1,
      rate: "50%",
    },
  ];

  const downloadCSV = () => {
    const csv =
      "Staff Name,Assigned,Completed,In Progress,Pending,Rate\n" +
      staffData
        .map(
          (x) =>
            `${x.name},${x.assigned},${x.completed},${x.progress},${x.pending},${x.rate}`
        )
        .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv",
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Staff_Performance_Report.csv";
    link.click();
  };

  return (
    <div className="hk-popup-overlay">
      <div className="hk-popup">

        <div className="hk-popup-header">
          <h2>Staff Performance (Full Report)</h2>

          <button onClick={onClose}>
            <FiX />
          </button>
        </div>

        {/* TOP CARDS */}

        <div className="report-cards">

          <div className="report-card purple">
            <FiUsers />
            <div>
              <h4>Total Staff</h4>
              <h2>12</h2>
              <span>Active Staff</span>
            </div>
          </div>

          <div className="report-card green">

            <button
              className="view-task-btn"
              onClick={() => setShowTasksPopup(true)}
            >
              View All Tasks
            </button>
            <FiClipboard />
            <div>
              <h4>Total Tasks Today</h4>
              <h2>36</h2>
              <span>All Tasks</span>
            </div>
          </div>

          <div className="report-card blue">
            <FiTrendingUp />
            <div>
              <h4>Average Tasks</h4>
              <h2>9</h2>
              <span>Per Staff</span>
            </div>
          </div>

          <div className="report-card orange">
            <FiTrendingUp />
            <div>
              <h4>Completion Rate</h4>
              <h2>86%</h2>
              <span>Completed</span>
            </div>
          </div>

        </div>

        {/* MIDDLE */}

        <div className="report-middle">

          <div className="staff-chart">

            <h3>Tasks Completed by Staff</h3>

            <div className="bar-item">
              <span>Priya Sharma</span>
              <div className="bar">
                <div style={{ width: "90%" }}></div>
              </div>
              <strong>12</strong>
            </div>

            <div className="bar-item">
              <span>Amit Verma</span>
              <div className="bar">
                <div style={{ width: "80%" }}></div>
              </div>
              <strong>10</strong>
            </div>

            <div className="bar-item">
              <span>Neha Singh</span>
              <div className="bar">
                <div style={{ width: "65%" }}></div>
              </div>
              <strong>8</strong>
            </div>

            <div className="bar-item">
              <span>Vikram</span>
              <div className="bar">
                <div style={{ width: "50%" }}></div>
              </div>
              <strong>6</strong>
            </div>

          </div>

          <div className="donut-section">
            <h3>Task Distribution</h3>

            <div className="donut-content">
              <div className="popup-donut"></div>

              <div className="popup-legend">
                <div className="legend-row">
                  <span className="legend-left">
                    <span className="g"></span> Cleaned
                  </span>
                  <span>44%</span>
                </div>

                <div className="legend-row">
                  <span className="legend-left">
                    <span className="o"></span> In Progress
                  </span>
                  <span>28%</span>
                </div>

                <div className="legend-row">
                  <span className="legend-left">
                    <span className="r"></span> Pending
                  </span>
                  <span>22%</span>
                </div>

                <div className="legend-row">
                  <span className="legend-left">
                    <span className="b"></span> Inspection
                  </span>
                  <span>6%</span>
                </div>
              </div>
            </div>
          </div>
          {/* TABLE */}

          <div className="report-table">

            <h3>Detailed Staff Performance</h3>

            <table>

              <thead>
                <tr>
                  <th>Staff Name</th>
                  <th>Assigned</th>
                  <th>Completed</th>
                  <th>In Progress</th>
                  <th>Pending</th>
                  <th>Completion Rate</th>
                </tr>
              </thead>

              <tbody>

                {staffData.map((item, i) => (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.assigned}</td>
                    <td>{item.completed}</td>
                    <td>{item.progress}</td>
                    <td>{item.pending}</td>
                    <td>
                      <span className="rate">
                        {item.rate}
                      </span>
                    </td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>

          <div className="popup-footer">

            <button
              className="download-btn"
              onClick={downloadCSV}
            >
              <FiDownload />
              Download Report
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default HousekeepingPopup;