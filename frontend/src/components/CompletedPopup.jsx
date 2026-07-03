import React, { useState, useMemo } from "react";
import "./CompletedPopup.css";

import {
  FiX,
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const completedTasksData = [
  {
    id: 1,
    room: "101",
    type: "Deluxe",
    floor: "1st Floor",
    task: "Regular Cleaning",
    staff: "Anita Sharma",
    avatar: "https://i.pravatar.cc/100?img=11",
    priority: "Medium",
    completedAt: "09:20 AM",
    status: "Completed",
  },
  {
    id: 2,
    room: "103",
    type: "Suite",
    floor: "1st Floor",
    task: "Deep Cleaning",
    staff: "Sunita Devi",
    avatar: "https://i.pravatar.cc/100?img=12",
    priority: "High",
    completedAt: "09:45 AM",
    status: "Completed",
  },
  {
    id: 3,
    room: "205",
    type: "Executive",
    floor: "2nd Floor",
    task: "Bathroom Cleaning",
    staff: "Ravi Kumar",
    avatar: "https://i.pravatar.cc/100?img=13",
    priority: "Medium",
    completedAt: "10:00 AM",
    status: "Completed",
  },
  {
    id: 4,
    room: "207",
    type: "Deluxe",
    floor: "2nd Floor",
    task: "Linen Change",
    staff: "Pooja Sharma",
    avatar: "https://i.pravatar.cc/100?img=14",
    priority: "Low",
    completedAt: "10:25 AM",
    status: "Completed",
  },
  {
    id: 5,
    room: "301",
    type: "Suite",
    floor: "3rd Floor",
    task: "Mini Bar Refill",
    staff: "Rajesh Kumar",
    avatar: "https://i.pravatar.cc/100?img=15",
    priority: "Medium",
    completedAt: "10:40 AM",
    status: "Completed",
  },
  {
    id: 6,
    room: "305",
    type: "Executive",
    floor: "3rd Floor",
    task: "Regular Cleaning",
    staff: "Meena Patil",
    avatar: "https://i.pravatar.cc/100?img=16",
    priority: "High",
    completedAt: "11:00 AM",
    status: "Completed",
  },
  {
    id: 7,
    room: "401",
    type: "Deluxe",
    floor: "4th Floor",
    task: "Deep Cleaning",
    staff: "Anjali More",
    avatar: "https://i.pravatar.cc/100?img=17",
    priority: "Medium",
    completedAt: "11:15 AM",
    status: "Completed",
  },
  {
    id: 8,
    room: "403",
    type: "Suite",
    floor: "4th Floor",
    task: "Window Cleaning",
    staff: "Vikas Rao",
    avatar: "https://i.pravatar.cc/100?img=18",
    priority: "Low",
    completedAt: "11:40 AM",
    status: "Completed",
  },
  {
    id: 9,
    room: "502",
    type: "Executive",
    floor: "5th Floor",
    task: "Regular Cleaning",
    staff: "Priya Singh",
    avatar: "https://i.pravatar.cc/100?img=19",
    priority: "Medium",
    completedAt: "12:00 PM",
    status: "Completed",
  },
  {
    id: 10,
    room: "601",
    type: "Suite",
    floor: "6th Floor",
    task: "Deep Cleaning",
    staff: "Rahul Patil",
    avatar: "https://i.pravatar.cc/100?img=20",
    priority: "High",
    completedAt: "12:20 PM",
    status: "Completed",
  },
  {
    id: 11,
    room: "603",
    type: "Deluxe",
    floor: "6th Floor",
    task: "Bathroom Cleaning",
    staff: "Kiran Joshi",
    avatar: "https://i.pravatar.cc/100?img=21",
    priority: "Medium",
    completedAt: "12:45 PM",
    status: "Completed",
  },
  {
    id: 12,
    room: "701",
    type: "Executive",
    floor: "7th Floor",
    task: "Regular Cleaning",
    staff: "Deepa Sharma",
    avatar: "https://i.pravatar.cc/100?img=22",
    priority: "Low",
    completedAt: "01:10 PM",
    status: "Completed",
  },
];

export default function CompletedPopup({ open, onClose }) {
  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("All");
  const [floor, setFloor] = useState("All");
  const [page, setPage] = useState(1);

  const rowsPerPage = 5;

  if (!open) return null;

    const filteredData = useMemo(() => {
    return completedTasksData.filter((item) => {
      const searchMatch =
        item.room.toLowerCase().includes(search.toLowerCase()) ||
        item.staff.toLowerCase().includes(search.toLowerCase()) ||
        item.task.toLowerCase().includes(search.toLowerCase());

      const priorityMatch =
        priority === "All" || item.priority === priority;

      const floorMatch =
        floor === "All" || item.floor === floor;

      return searchMatch && priorityMatch && floorMatch;
    });
  }, [search, priority, floor]);

  const totalPages = Math.ceil(
    filteredData.length / rowsPerPage
  );

  const currentRows = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="completed-overlay">

      <div className="completed-popup">

        <div className="popup-header">

          <div>
            <h2>Completed Housekeeping Tasks</h2>
            <p>
              View all completed housekeeping records
            </p>
          </div>

          <button
            className="close-popup"
            onClick={onClose}
          >
            <FiX />
          </button>

        </div>

        <div className="popup-toolbar">

          <div className="search-box">

            <FiSearch />

            <input
              type="text"
              placeholder="Search room, task, staff..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />

          </div>

          <select
            value={priority}
            onChange={(e) => {
              setPriority(e.target.value);
              setPage(1);
            }}
          >
            <option>All</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <select
            value={floor}
            onChange={(e) => {
              setFloor(e.target.value);
              setPage(1);
            }}
          >
            <option>All</option>
            <option>1st Floor</option>
            <option>2nd Floor</option>
            <option>3rd Floor</option>
            <option>4th Floor</option>
            <option>5th Floor</option>
            <option>6th Floor</option>
            <option>7th Floor</option>
          </select>

        </div>

        <table className="completed-table">

          <thead>

            <tr>
              <th>Room</th>
              <th>Task</th>
              <th>Floor</th>
              <th>Staff</th>
              <th>Priority</th>
              <th>Completed At</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            {currentRows.map((item) => (
              <tr key={item.id}>

                <td>
                  <strong>{item.room}</strong>
                  <br />
                  <small>{item.type}</small>
                </td>

                <td>{item.task}</td>

                <td>{item.floor}</td>

                <td>

                  <div className="staff-info">

                    <img
                      src={item.avatar}
                      alt=""
                    />

                    <span>{item.staff}</span>

                  </div>

                </td>

                <td>

                  <span
                    className={`priority-badge ${item.priority.toLowerCase()}`}
                  >
                    {item.priority}
                  </span>

                </td>

                <td>{item.completedAt}</td>

                <td>

                  <span className="status-badge">
                    {item.status}
                  </span>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

                <div className="popup-footer">

          <div className="pagination-info">
            Showing {(page - 1) * rowsPerPage + 1} -
            {Math.min(page * rowsPerPage, filteredData.length)}
            {" "}of{" "}
            {filteredData.length} completed tasks
          </div>

          <div className="pagination">

            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="page-btn"
            >
              <FiChevronLeft />
            </button>

            {Array.from(
              { length: totalPages },
              (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setPage(index + 1)}
                  className={
                    page === index + 1
                      ? "page-number active"
                      : "page-number"
                  }
                >
                  {index + 1}
                </button>
              )
            )}

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="page-btn"
            >
              <FiChevronRight />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}