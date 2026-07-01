import React, { useState } from "react";
import {
  FiFolder,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiChevronRight,
} from "react-icons/fi";
import { MdOutlineEmergency } from "react-icons/md";

const menu = [
  {
    id: "pending",
    title: "Pending",
    count: 24,
    icon: <FiFolder />,
    color: "#ff8a00",
  },
  {
    id: "completed",
    title: "Completed",
    count: 42,
    icon: <FiCheckCircle />,
    color: "#22c55e",
  },
  {
    id: "progress",
    title: "In Progress",
    count: 12,
    icon: <FiClock />,
    color: "#3b82f6",
  },
  {
    id: "delayed",
    title: "Delayed",
    count: 6,
    icon: <FiAlertCircle />,
    color: "#ef4444",
  },
  {
    id: "emergency",
    title: "Emergency",
    count: 3,
    icon: <MdOutlineEmergency />,
    color: "#7c3aed",
  },
];

const taskData = {
  pending: [
    {
      room: "Room 205",
      task: "Linen Change",
      floor: "2nd Floor",
      staff: "Sunita Devi",
      time: "10:30 AM",
      priority: "Medium",
      avatar: "https://i.pravatar.cc/40?img=32",
    },
    {
      room: "Room 503",
      task: "Regular Cleaning",
      floor: "5th Floor",
      staff: "Pooja Sharma",
      time: "11:30 AM",
      priority: "Medium",
      avatar: "https://i.pravatar.cc/40?img=25",
    },
    {
      room: "Room 606",
      task: "Mini Bar Refill",
      floor: "6th Floor",
      staff: "Ramesh Kumar",
      time: "09:15 PM",
      priority: "Low",
      avatar: "https://i.pravatar.cc/40?img=18",
    },
    {
      room: "Room 707",
      task: "Regular Cleaning",
      floor: "7th Floor",
      staff: "Rajesh Kumar",
      time: "12:30 PM",
      priority: "Medium",
      avatar: "https://i.pravatar.cc/40?img=15",
    },
    {
      room: "Room 802",
      task: "Deep Cleaning",
      floor: "8th Floor",
      staff: "Sunita Devi",
      time: "03:00 PM",
      priority: "High",
      avatar: "https://i.pravatar.cc/40?img=11",
    },
    {
      room: "Room 1003",
      task: "Regular Cleaning",
      floor: "10th Floor",
      staff: "Anita Sharma",
      time: "02:00 PM",
      priority: "Medium",
      avatar: "https://i.pravatar.cc/40?img=48",
    },
  ],

completed: [
  {
    room: "Room 101",
    task: "Room Cleaning",
    floor: "1st Floor",
    staff: "Rajesh Kumar",
    time: "08:30 AM",
    priority: "Completed",
    avatar: "https://i.pravatar.cc/40?img=12",
  },
  {
    room: "Room 104",
    task: "Bathroom Cleaning",
    floor: "1st Floor",
    staff: "Anita Sharma",
    time: "08:45 AM",
    priority: "Completed",
    avatar: "https://i.pravatar.cc/40?img=45",
  },
  {
    room: "Room 110",
    task: "Bed Arrangement",
    floor: "1st Floor",
    staff: "Sunita Devi",
    time: "09:10 AM",
    priority: "Completed",
    avatar: "https://i.pravatar.cc/40?img=32",
  },
  {
    room: "Room 204",
    task: "Room Cleaning",
    floor: "2nd Floor",
    staff: "Priya",
    time: "09:40 AM",
    priority: "Completed",
    avatar: "https://i.pravatar.cc/40?img=21",
  },
  {
    room: "Room 404",
    task: "VIP Cleaning",
    floor: "4th Floor",
    staff: "Anjali",
    time: "10:00 AM",
    priority: "Completed",
    avatar: "https://i.pravatar.cc/40?img=18",
  },
  {
    room: "Room 502",
    task: "Regular Cleaning",
    floor: "5th Floor",
    staff: "Pooja",
    time: "10:30 AM",
    priority: "Completed",
    avatar: "https://i.pravatar.cc/40?img=25",
  },
],

progress: [
  {
    room: "Room 102",
    task: "Bathroom Cleaning",
    floor: "1st Floor",
    staff: "Sunita Devi",
    time: "09:15 AM",
    priority: "Medium",
    avatar: "https://i.pravatar.cc/40?img=32",
  },
  {
    room: "Room 107",
    task: "Room Cleaning",
    floor: "1st Floor",
    staff: "Pooja Sharma",
    time: "09:30 AM",
    priority: "Medium",
    avatar: "https://i.pravatar.cc/40?img=25",
  },
  {
    room: "Room 203",
    task: "Deep Cleaning",
    floor: "2nd Floor",
    staff: "Neha",
    time: "10:00 AM",
    priority: "High",
    avatar: "https://i.pravatar.cc/40?img=11",
  },
  {
    room: "Room 302",
    task: "Mini Bar Refill",
    floor: "3rd Floor",
    staff: "Vikas",
    time: "10:20 AM",
    priority: "Low",
    avatar: "https://i.pravatar.cc/40?img=16",
  },
  {
    room: "Room 403",
    task: "Regular Cleaning",
    floor: "4th Floor",
    staff: "Sneha",
    time: "11:00 AM",
    priority: "Medium",
    avatar: "https://i.pravatar.cc/40?img=28",
  },
  {
    room: "Room 504",
    task: "VIP Cleaning",
    floor: "5th Floor",
    staff: "Mahesh",
    time: "11:30 AM",
    priority: "High",
    avatar: "https://i.pravatar.cc/40?img=14",
  },
],

delayed: [
  {
    room: "Room 103",
    task: "Deep Cleaning",
    floor: "1st Floor",
    staff: "-",
    time: "-",
    priority: "High",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    room: "Room 202",
    task: "Room Cleaning",
    floor: "2nd Floor",
    staff: "-",
    time: "-",
    priority: "Medium",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    room: "Room 303",
    task: "Bathroom Cleaning",
    floor: "3rd Floor",
    staff: "-",
    time: "-",
    priority: "High",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    room: "Room 402",
    task: "Maintenance",
    floor: "4th Floor",
    staff: "-",
    time: "-",
    priority: "High",
    avatar: "https://i.pravatar.cc/40?img=4",
  },
  {
    room: "Room 503",
    task: "Regular Cleaning",
    floor: "5th Floor",
    staff: "-",
    time: "-",
    priority: "Medium",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
  {
    room: "Room 601",
    task: "Room Cleaning",
    floor: "6th Floor",
    staff: "-",
    time: "-",
    priority: "Medium",
    avatar: "https://i.pravatar.cc/40?img=6",
  },
],

emergency: [
  {
    room: "Room 801",
    task: "Water Leakage",
    floor: "8th Floor",
    staff: "Ramesh",
    time: "NOW",
    priority: "High",
    avatar: "https://i.pravatar.cc/40?img=41",
  },
  {
    room: "Room 902",
    task: "Electrical Issue",
    floor: "9th Floor",
    staff: "Mahesh",
    time: "NOW",
    priority: "High",
    avatar: "https://i.pravatar.cc/40?img=23",
  },
  {
    room: "Room 1001",
    task: "Fire Alarm Check",
    floor: "10th Floor",
    staff: "Rajesh",
    time: "NOW",
    priority: "High",
    avatar: "https://i.pravatar.cc/40?img=19",
  },
],
};

export default function TaskOverview() {
  const [active, setActive] = useState("pending");

  const currentTasks = taskData[active];

  const activeMenu = menu.find((m) => m.id === active);

  const [activeTab, setActiveTab] = useState("Pending");

const tasks = taskData[activeTab];

  return (
    <div className="task-overview">

      <div className="task-header">
        <h2>Housekeeping Tasks Overview</h2>

        <button className="view-all-btn">
          View All Tasks →
        </button>
      </div>

      <div className="task-body">

        <div className="task-sidebar">

          {menu.map((item) => (
            <div
              key={item.id}
              className={`task-menu-item ${
                active === item.id ? "active" : ""
              }`}
              onClick={() => setActive(item.id)}
            >

              <div
                className="task-menu-icon"
                style={{
                  background: `${item.color}15`,
                  color: item.color,
                }}
              >
                {item.icon}
              </div>

              <span className="task-menu-title">
                {item.title}
              </span>

              <span
                className="task-menu-count"
                style={{
                  background: `${item.color}15`,
                  color: item.color,
                }}
              >
                {item.count}
              </span>

              {active === item.id && (
                <FiChevronRight className="task-arrow" />
              )}
            </div>
          ))}

        </div>

        <div className="task-content">

          <h3 className="task-heading">
            {activeMenu.title} Tasks ({activeMenu.count})
          </h3>

          <div className="task-grid">

       {tasks.map((task, index) => (

  <div className="task-card" key={index}>

    <div className="task-card-top">

      <div>

        <h4 className="task-room">
          {task.room}
        </h4>

        <p className="task-title">
          {task.task}
        </p>

        <span className="task-floor">
          {task.floor}
        </span>

      </div>

      <span
        className={`priority-badge ${task.priority
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
      >
        {task.priority}
      </span>

    </div>

    <div className="task-card-footer">

      <div className="staff-box">

        <img
          src={task.avatar}
          alt={task.staff}
          className="staff-avatar"
        />

        <span className="staff-name">
          {task.staff}
        </span>

      </div>

      <span className="task-time">
        {task.time}
      </span>

    </div>

  </div>

))}

</div>

{active === "pending" && (
  <p className="more-task-link">
    +18 more pending tasks
  </p>
)}

{active === "completed" && (
  <p className="more-task-link">
    +36 more completed tasks
  </p>
)}

{active === "progress" && (
  <p className="more-task-link">
    +6 more in progress tasks
  </p>
)}

{active === "delayed" && (
  <p className="more-task-link">
    No more delayed tasks
  </p>
)}

{active === "emergency" && (
  <p className="more-task-link">
    No more emergency tasks
  </p>
)}

</div>

</div>

</div>

);
}