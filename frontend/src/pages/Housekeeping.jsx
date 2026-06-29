import React, { useState } from "react";
import "./Housekeeping.css";


import HousekeepingPopup from "./HousekeepingPopup";
import {
  FiHome,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiClipboard,
  FiUsers,
  FiEye,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const trendData = [
  { day: "18 May", cleaned: 72, progress: 40, pending: 20 },
  { day: "19 May", cleaned: 75, progress: 45, pending: 23 },
  { day: "20 May", cleaned: 85, progress: 50, pending: 27 },
  { day: "21 May", cleaned: 82, progress: 49, pending: 25 },
  { day: "22 May", cleaned: 83, progress: 51, pending: 26 },
  { day: "23 May", cleaned: 87, progress: 56, pending: 28 },
  { day: "24 May", cleaned: 95, progress: 60, pending: 33 },
];




function Housekeeping() {




  const [rooms, setRooms] = useState([

    {
      room: "101",
      type: "Deluxe Room",
      floor: "1",
      status: "Cleaned",
      staff: "Priya S.",
      updated: "24 May 09:15 AM",
    },

    {
      room: "102",
      type: "Deluxe Room",
      floor: "1",
      status: "In Progress",
      staff: "Amit V.",
      updated: "24 May 10:30 AM",
    },

    {
      room: "103",
      type: "Standard Room",
      floor: "1",
      status: "Pending",
      staff: "Neha S.",
      updated: "24 May 08:45 AM",
    },

    {
      room: "104",
      type: "Suite Room",
      floor: "1",
      status: "Cleaned",
      staff: "Vikram K.",
      updated: "24 May 09:00 AM",
    }

  ]);

  const [activeStatus, setActiveStatus] = useState("Cleaned");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [floorFilter, setFloorFilter] = useState("All Floor");
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");

  const [assignOpen, setAssignOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({

    room: "",
    type: "",
    floor: "",
    staff: "",
    status: "Pending",
    title: "",
    description: "",
    priority: "",
    reminder: "",
    startDate: "",
    dueDate: ""

  });

  const validateForm = () => {
  let newErrors = {};

  if (!form.title) newErrors.title = "Task Title is required";
  if (!form.description) newErrors.description = "Description is required";
  if (!form.room) newErrors.room = "Room Number is required";
  if (!form.type) newErrors.type = "Room Type is required";
  if (!form.floor) newErrors.floor = "Floor is required";
  if (!form.staff) newErrors.staff = "Staff is required";
  if (!form.priority) newErrors.priority = "Priority is required";
  if (!form.reminder) newErrors.reminder = "Reminder is required";
  if (!form.status) newErrors.status = "Status is required";
  if (!form.startDate) newErrors.startDate = "Start Date is required";
  if (!form.dueDate) newErrors.dueDate = "Due Date is required";

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
  const openPopup = (title) => {
    setPopupTitle(title);
    setPopupOpen(true);
  };
  const roomOptions = [
    {
      room: "101",
      type: "Deluxe Room"
    },
    {
      room: "102",
      type: "Standard Room"
    },
    {
      room: "103",
      type: "Suite Room"
    },
    {
      room: "104",
      type: "Family Room"
    }
  ];
  const floorOptions = [
    "Floor 1",
    "Floor 2",
    "Floor 3",
    "Floor 4"
  ];


  const staffOptions = [
    "Priya",
    "Amit",
    "Neha",
    "Vikram",
    "John"
  ];


  const titleOptions = [
    "Room Cleaning",
    "Deep Cleaning",
    "Inspection",
    "Maintenance",
    "Guest Request"
  ];


  const reminderOptions = [
    "5 Minutes",
    "10 Minutes",
    "30 Minutes",
    "1 Hour",
    "Before Due Date"
  ];

  const floorData = [
    { floor: "Floor 1", rooms: 60, percent: "60%", color: "#22c55e" },
    { floor: "Floor 2", rooms: 25, percent: "25%", color: "#f59e0b" },
    { floor: "Floor 3", rooms: 10, percent: "10%", color: "#ef4444" },
    { floor: "Floor 4", rooms: 5, percent: "5%", color: "#3b82f6" },
  ];


  const summaryCards = [
    {
      title: "Average Cleaning Time",
      value: "28 min",
      growth: "+5 min vs yesterday",
    },
    {
      title: "Inspections Completed",
      value: "12",
      growth: "+20% vs yesterday",
    },
    {
      title: "Guest Complaints",
      value: "2",
      growth: "-1 vs yesterday",
    },
    {
      title: "Satisfaction Score",
      value: "4.7 / 5",
      growth: "+0.3 vs yesterday",
    },
  ];

  const filteredRooms = rooms.filter((item) => {

    const searchMatch =
      item.room.toLowerCase().includes(search.toLowerCase()) ||
      item.type.toLowerCase().includes(search.toLowerCase());

    const statusMatch =
      statusFilter === "All Status"
        ? true
        : item.status === statusFilter;

    const floorMatch =
      floorFilter === "All Floor"
        ? true
        : item.floor === floorFilter.replace("Floor ", "");

    return searchMatch && statusMatch && floorMatch;
  });


  return (


    <div className="housekeeping-page">

      {/* HEADER */}

      <div className="hk-header">

        <div className="hk-title">
          <h1>Housekeeping Status Overview</h1>
          <p>Complete overview of housekeeping activities and room status</p>
        </div>

        <div className="hk-header-right">
          <button
            className="assign-btn"
            onClick={() => setAssignOpen(true)}
          >
            + Assign Task
          </button>
        </div>

        {assignOpen && (

          <div className="overlay">


            <div className="modal">

              <div className="modalHeader">

             <h2 className="assign-heading">Assign Task</h2>

                <button
                 onClick={() => {
  setAssignOpen(false);
  setErrors({});
}}
                >
                  ✕
                </button>

              </div>


    <form className="task-form">

  <div className="form-col">

    <label>Task Title <span>*</span></label>
    <select
      className="purple-input"
      value={form.title}
      onChange={(e) => setForm({ ...form, title: e.target.value })}
    >
      <option value="">Select Task Title</option>
      {titleOptions.map((item) => (
        <option key={item} value={item}>{item}</option>
      ))}
    </select>
    {errors.title && <span className="error">{errors.title}</span>}

    <label>Description <span>*</span></label>
    <textarea
      className="purple-input"
      placeholder="Enter task description"
      value={form.description}
      onChange={(e) => setForm({ ...form, description: e.target.value })}
    />
    {errors.description && <span className="error">{errors.description}</span>}

    <label>Room Number *</label>
    <select
      className="purple-input"
      value={form.room}
      onChange={(e) => {
        const selectedRoom = roomOptions.find(x => x.room === e.target.value);

        setForm({
          ...form,
          room: selectedRoom.room,
          type: selectedRoom.type
        });
      }}
    >
      <option value="">Select Room</option>
      {roomOptions.map(item => (
        <option key={item.room} value={item.room}>
          Room {item.room}
        </option>
      ))}
    </select>
    {errors.room && <span className="error">{errors.room}</span>}

    <label>Room Type</label>
    <select
      className="purple-input"
      value={form.type}
      onChange={(e) => setForm({ ...form, type: e.target.value })}
    >
      <option value="">Select Room Type</option>
      <option>Standard Room</option>
      <option>Deluxe Room</option>
      <option>Suite Room</option>
      <option>Family Room</option>
      <option>VIP Room</option>
    </select>

    <label>Floor <span>*</span></label>
    <select
      className="purple-input"
      value={form.floor}
      onChange={(e) => setForm({ ...form, floor: e.target.value })}
    >
      <option value="">Select Floor</option>
      {floorOptions.map((floor) => (
        <option key={floor} value={floor}>{floor}</option>
      ))}
    </select>
    {errors.floor && <span className="error">{errors.floor}</span>}

    <label>Assign Staff <span>*</span></label>
    <select
      className="purple-input"
      value={form.staff}
      onChange={(e) => setForm({ ...form, staff: e.target.value })}
    >
      <option value="">Select Staff</option>
      {staffOptions.map((staff) => (
        <option key={staff} value={staff}>{staff}</option>
      ))}
    </select>
    {errors.staff && <span className="error">{errors.staff}</span>}

  </div>

  <div className="form-col">

    <label>Priority</label>
    <select
      className="purple-input"
      value={form.priority}
      onChange={(e) => setForm({ ...form, priority: e.target.value })}
    >
      <option value="">Select Priority</option>
      <option>Low</option>
      <option>Medium</option>
      <option>High</option>
    </select>

    <label>Reminder <span>*</span></label>
    <select
      className="purple-input"
      value={form.reminder}
      onChange={(e) => setForm({ ...form, reminder: e.target.value })}
    >
      <option value="">Select Reminder</option>
      {reminderOptions.map((x) => (
        <option key={x} value={x}>{x}</option>
      ))}
    </select>
    {errors.reminder && <span className="error">{errors.reminder}</span>}

    <label>Status <span>*</span></label>
    <select
      className="purple-input"
      value={form.status}
      onChange={(e) => setForm({ ...form, status: e.target.value })}
    >
      <option value="">Select Status</option>
      <option>Open</option>
      <option>Pending</option>
      <option>In Progress</option>
      <option>Completed</option>
    </select>
    {errors.status && <span className="error">{errors.status}</span>}

    <label>Start Date & Time</label>
    <input
      type="datetime-local"
      className="purple-input"
      value={form.startDate}
      onChange={(e) => setForm({ ...form, startDate: e.target.value })}
    />
    {errors.startDate && <span className="error">{errors.startDate}</span>}

    <label>Due Date & Time *</label>
    <input
      type="datetime-local"
      className="purple-input"
      value={form.dueDate}
      onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
    />
    {errors.dueDate && <span className="error">{errors.dueDate}</span>}

  </div>

</form>




                <div className="footer">


                  <button
                    type="button"
                    onClick={() => setAssignOpen(false)}
                  >
                    Cancel
                  </button>



                  <button
                    type="button"
                    className="assign-btn"
onClick={() => {
  console.log(form);
  if (!validateForm()) return;

  const task = {
    title: form.title,
    room: form.room,
    type: form.type,
    floor: form.floor.replace("Floor ", ""),
    staff: form.staff,
    status: form.status,
    date: new Date().toLocaleString(),
  };

  setTasks((prev) => [...prev, task]);

  setRooms((prev) => [
    ...prev,
    {
      room: task.room,
      type: task.type,
      floor: task.floor,
      status: task.status,
      staff: task.staff,
      updated: task.date,
    },
  ]);

setForm({
  room: "",
  type: "",
  floor: "",
  staff: "",
  status: "Pending",
  title: "",
  description: "",
  priority: "",
  reminder: "",
  startDate: "",
  dueDate: "",
});

setErrors({});
setAssignOpen(false);
}}
                  >

                    Assign Task

                  </button>


                </div>




              
            </div>

          </div>

        )}





      </div>



      {/* TOP CARDS */}

      <div className="stats-grid">

        <div className="stat-card">
          <div className="icon purple">
            <FiHome />
          </div>
          <div>
            <h5>Total Rooms</h5>
            <h2>100</h2>
            <span>All Rooms</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon green">
            <FiCheckCircle />
          </div>
          <div>
            <h5>Cleaned</h5>
            <h2>45</h2>
            <span>45% of total</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon orange">
            <FiClock />
          </div>
          <div>
            <h5>In Progress</h5>
            <h2>20</h2>
            <span>20% of total</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon red">
            <FiAlertCircle />
          </div>
          <div>
            <h5>Pending</h5>
            <h2>35</h2>
            <span>35% of total</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon blue">
            <FiClipboard />
          </div>
          <div>
            <h5>Tasks Today</h5>
            <h2>18</h2>
            <span>Scheduled tasks</span>
          </div>
        </div>



      </div>

      {/* CHART AREA */}

      <div className="chart-layout">

        <div className="donut-card">
          <h3>Status Distribution</h3>

          <div className="donut-wrap">
            <div className="donut">

              <div
                className={`slice cleaned ${activeStatus === "Cleaned" ? "active-slice" : ""
                  }`}
                onClick={() => setActiveStatus("Cleaned")}
              ></div>

              <div
                className={`slice progress ${activeStatus === "In Progress" ? "active-slice" : ""
                  }`}
                onClick={() => setActiveStatus("In Progress")}
              ></div>

              <div
                className={`slice pending ${activeStatus === "Pending" ? "active-slice" : ""
                  }`}
                onClick={() => setActiveStatus("Pending")}
              ></div>

              <div className="donut-center">
                <h2>100</h2>
                <span>{activeStatus}</span>
              </div>

            </div>

            <div className="legend">

              <div
                className={`legend-item ${activeStatus === "Cleaned" ? "active-legend" : ""
                  }`}
                onClick={() => setActiveStatus("Cleaned")}
              >
                <span className="dot green"></span>
                Cleaned 45 (45%)
              </div>

              <div
                className={`legend-item ${activeStatus === "In Progress" ? "active-legend" : ""
                  }`}
                onClick={() => setActiveStatus("In Progress")}
              >
                <span className="dot orange"></span>
                In Progress 20 (20%)
              </div>

              <div
                className={`legend-item ${activeStatus === "Pending" ? "active-legend" : ""
                  }`}
                onClick={() => setActiveStatus("Pending")}
              >
                <span className="dot red"></span>
                Pending 35 (35%)
              </div>

            </div>
          </div>
        </div>


        <div className="trend-card">
          <h3>Room Status Trend (Last 7 Days)</h3>

          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="cleaned"
                stroke="#22c55e"
                strokeWidth={3}
              />

              <Line
                type="monotone"
                dataKey="progress"
                stroke="#f59e0b"
                strokeWidth={3}
              />

              <Line
                type="monotone"
                dataKey="pending"
                stroke="#ef4444"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="summary-card">
          <h3>Status Summary</h3>

          <table>
            <tbody>
              <tr>
                <td>Cleaned</td>
                <td>45</td>
                <td>45%</td>
              </tr>

              <tr>
                <td>In Progress</td>
                <td>20</td>
                <td>20%</td>
              </tr>

              <tr>
                <td>Pending</td>
                <td>35</td>
                <td>35%</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
      {/* ROOM TABLE + BOTTOM SECTION */}

      <div className="bottom-section">

        <div className="room-table-card">


          <div className="room-list-header">


            <h3>
              Room Status List
            </h3>



            <div className="room-filters">


              <select
                className="filter-select"
                value={floorFilter}
                onChange={(e) => setFloorFilter(e.target.value)}
              >

                <option>All Floor</option>

                <option>Floor 1</option>
                <option>Floor 2</option>
                <option>Floor 3</option>
                <option>Floor 4</option>

              </select>



              <select
                className="filter-select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >


                <option>
                  All Status
                </option>


                <option>
                  Cleaned
                </option>

                <option>
                  In Progress
                </option>


                <option>
                  Pending
                </option>


              </select>



              <input

                className="search-input"

                placeholder="Search room..."

                value={search}

                onChange={(e) => setSearch(e.target.value)}

              />


            </div>


          </div>





          <table>


            <thead>


              <tr>

                <th>
                  Room No.
                </th>

                <th>
                  Room Type
                </th>


                <th>
                  Floor
                </th>


                <th>
                  Status
                </th>


                <th>
                  Assigned Staff
                </th>


                <th>
                  Last Updated
                </th>


                <th>
                  Action
                </th>


              </tr>


            </thead>




            <tbody>


              {
                filteredRooms.map((room, index) => (


                  <tr key={index}>


                    <td>
                      {room.room}
                    </td>



                    <td>
                      {room.type}
                    </td>



                    <td>
                      {room.floor}
                    </td>



                    <td>


                      <span

                        className={

                          room.status === "Cleaned"

                            ?

                            "room-status clean"

                            :

                            room.status === "In Progress"

                              ?

                              "room-status progress"

                              :

                              "room-status pending"

                        }

                      >


                        {room.status}


                      </span>


                    </td>




                    <td>
                      {room.staff}
                    </td>




                    <td>
                      {room.updated}
                    </td>




                    <td>

                      <FiEye className="view-icon" />

                    </td>



                  </tr>



                ))

              }



            </tbody>


          </table>



        </div>

      </div>

      {/* ============================ CARDS ROW ============================ */}

      <div className="dashboard-cards-row">



        {/* ASSIGNED TASKS */}
        <div className="mini-card taskList">
          <h3>Assigned Tasks</h3>

          {tasks.length === 0 ? (
            <p>No tasks assigned yet</p>
          ) : (
            tasks.map((task, index) => (
              <div className="task-card" key={index}>
                <h4>{task.title}</h4>

                <p>Room : {task.room}</p>

                <p>Staff : {task.staff}</p>

                <span className="badge-pending">
                  {task.status}
                </span>

                <br />

                <small>{task.date}</small>
              </div>
            ))
          )}
        </div>

        {/* STAFF PERFORMANCE */}
        <div className="mini-card">
          <h3>Staff Performance (Tasks Today)</h3>

          <div className="staff-row">
            <span>Priya Sharma</span>
            <div className="graph-track">
              <div className="graph-fill" style={{ width: "80%" }} />
            </div>
            <strong>12</strong>
          </div>

          <div className="staff-row">
            <span>Amit Verma</span>
            <div className="graph-track">
              <div className="graph-fill" style={{ width: "66%" }} />
            </div>
            <strong>10</strong>
          </div>

          <div className="staff-row">
            <span>Neha Singh</span>
            <div className="graph-track">
              <div className="graph-fill" style={{ width: "53%" }} />
            </div>
            <strong>8</strong>
          </div>

          <div className="staff-row">
            <span>Vikram</span>
            <div className="graph-track">
              <div className="graph-fill" style={{ width: "40%" }} />
            </div>
            <strong>6</strong>
          </div>

          <button
            className="view-link"
            onClick={() => setPopupOpen(true)}
          >
            View full performance →
          </button>
        </div>

        <HousekeepingPopup
          open={popupOpen}
          onClose={() => setPopupOpen(false)}
        />

        {/* TODAY TASKS */}
        <div className="mini-card">
          <h3>Today's Tasks</h3>

          <div className="task-item">
            <span>09:00 AM</span>
            <span>Room 101</span>
            <span className="badge-clean">Cleaned</span>
          </div>

          <div className="task-item">
            <span>10:30 AM</span>
            <span>Room 205</span>
            <span className="badge-progress">In Progress</span>
          </div>

          <div className="task-item">
            <span>11:00 AM</span>
            <span>Room 301</span>
            <span className="badge-pending">Pending</span>
          </div>

          <div className="task-item">
            <span>01:30 PM</span>
            <span>Room 202</span>
            <span className="badge-progress">In Progress</span>
          </div>

          <div className="task-item">
            <span>03:00 PM</span>
            <span>Room 104</span>
            <span className="badge-clean">Cleaned</span>
          </div>

          <button
            className="view-link"
            onClick={() => openPopup("Today's Tasks")}
          >
            View all tasks →
          </button>
        </div>

        {/* FLOOR STATUS */}
        <div className="mini-card">
          <h3>Floor Wise Status</h3>

          <div className="floor-wrap">

            <div className="mini-donut">
              <span>100</span>
              <small>Total</small>
            </div>

            <div className="floor-list">
              {floorData.map((item, index) => (
                <div key={index} className="floor-item">
                  <span
                    className="floor-dot"
                    style={{ background: item.color }}
                  />
                  {item.floor} {item.rooms} ({item.percent})
                </div>
              ))}
            </div>

          </div>

          <button
            className="view-link"
            onClick={() => openPopup("Floor Wise Report")}
          >
            View floor report →
          </button>
        </div>

      </div>


    </div>
  );
}


export default Housekeeping;