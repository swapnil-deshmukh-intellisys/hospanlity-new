import React, { useState } from "react";
import "./TodayTaskPopup.css";
import { FiX } from "react-icons/fi";

function TodayTaskPopup({ open, onClose }) {
  if (!open) return null;

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
    {
      room: "Room 106",
      staff: "Amit Verma",
      task: "Vacuum Cleaning",
      status: "Completed",
    },
    {
      room: "Room 107",
      staff: "Priya Sharma",
      task: "Toilet Sanitization",
      status: "In Progress",
    },
    {
      room: "Room 108",
      staff: "Neha Singh",
      task: "Laundry Collection",
      status: "Pending",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredTasks = allTasks.filter((task) =>
    Object.values(task)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="task-popup-overlay">
      <div className="task-popup">

        <div className="task-popup-header">
          <h2>Today's Housekeeping Tasks</h2>

          <button
            className="task-close-btn"
            onClick={onClose}
          >
            <FiX />
          </button>
        </div>

        <input
          type="text"
          placeholder="Search by Room, Staff, Task..."
          className="task-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <table className="task-table">
          <thead>
            <tr>
              <th>Room</th>
              <th>Staff</th>
              <th>Task</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.room}</td>
                  <td>{task.staff}</td>
                  <td>{task.task}</td>

                  <td>
                    <span
                      className={`status ${task.status
                        .toLowerCase()
                        .replace(/\s/g, "-")}`}
                    >
                      {task.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-data">
                  No Task Found
                </td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default TodayTaskPopup;