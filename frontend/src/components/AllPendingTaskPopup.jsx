import React, { useMemo, useState } from "react";
import "./AllPendingTaskPopup.css";

import {
  FiSearch,
  FiX,
  FiFilter,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

/* ==========================================
   DUMMY DATA (24 Pending Tasks)
========================================== */

const taskList = [

{
id:1,
room:"205",
roomType:"Deluxe Room",
task:"Linen Change",
floor:"2nd Floor",
priority:"Medium",
staff:"Sunita Devi",
time:"10:30 AM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=32",
},

{
id:2,
room:"503",
roomType:"Suite Room",
task:"Regular Cleaning",
floor:"5th Floor",
priority:"Medium",
staff:"Pooja Sharma",
time:"11:30 AM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=25",
},

{
id:3,
room:"606",
roomType:"Suite Room",
task:"Mini Bar Refill",
floor:"6th Floor",
priority:"Low",
staff:"Ramesh Kumar",
time:"09:15 PM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=18",
},

{
id:4,
room:"707",
roomType:"Deluxe Room",
task:"Regular Cleaning",
floor:"7th Floor",
priority:"Medium",
staff:"Rajesh Kumar",
time:"12:30 PM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=15",
},

{
id:5,
room:"802",
roomType:"Suite Room",
task:"Deep Cleaning",
floor:"8th Floor",
priority:"High",
staff:"Sunita Devi",
time:"03:00 PM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=11",
},

{
id:6,
room:"1003",
roomType:"Standard Room",
task:"Regular Cleaning",
floor:"10th Floor",
priority:"Medium",
staff:"Anita Sharma",
time:"02:00 PM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=48",
},

{
id:7,
room:"1105",
roomType:"Deluxe Room",
task:"Linen Change",
floor:"11th Floor",
priority:"Medium",
staff:"Pooja Sharma",
time:"02:30 PM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=21",
},

{
id:8,
room:"1201",
roomType:"Suite Room",
task:"Regular Cleaning",
floor:"12th Floor",
priority:"Medium",
staff:"Ramesh Kumar",
time:"03:00 PM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=30",
},

{
id:9,
room:"304",
roomType:"Deluxe Room",
task:"Bathroom Cleaning",
floor:"3rd Floor",
priority:"High",
staff:"Mahesh",
time:"08:45 AM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=10",
},

{
id:10,
room:"405",
roomType:"Suite Room",
task:"VIP Cleaning",
floor:"4th Floor",
priority:"High",
staff:"Neha",
time:"09:40 AM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=44",
},

{
id:11,
room:"510",
roomType:"Standard Room",
task:"Regular Cleaning",
floor:"5th Floor",
priority:"Medium",
staff:"Sneha",
time:"10:20 AM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=50",
},

{
id:12,
room:"612",
roomType:"Suite Room",
task:"Window Cleaning",
floor:"6th Floor",
priority:"Low",
staff:"Raj",
time:"11:00 AM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=17",
},

{
id:13,
room:"702",
roomType:"Deluxe Room",
task:"Mini Bar Refill",
floor:"7th Floor",
priority:"Medium",
staff:"Anjali",
time:"01:15 PM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=19",
},

{
id:14,
room:"808",
roomType:"Suite Room",
task:"Room Cleaning",
floor:"8th Floor",
priority:"Medium",
staff:"Rahul",
time:"02:10 PM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=27",
},

{
id:15,
room:"905",
roomType:"Suite Room",
task:"Bathroom Cleaning",
floor:"9th Floor",
priority:"High",
staff:"Vijay",
time:"04:00 PM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=38",
},

{
id:16,
room:"1006",
roomType:"Standard Room",
task:"Regular Cleaning",
floor:"10th Floor",
priority:"Medium",
staff:"Aarti",
time:"04:30 PM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=9",
},

{
id:17,
room:"1102",
roomType:"Suite Room",
task:"Deep Cleaning",
floor:"11th Floor",
priority:"High",
staff:"Komal",
time:"05:00 PM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=33",
},

{
id:18,
room:"1206",
roomType:"Deluxe Room",
task:"Curtain Cleaning",
floor:"12th Floor",
priority:"Low",
staff:"Ajay",
time:"05:15 PM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=41",
},

{
id:19,
room:"103",
roomType:"Standard Room",
task:"Dusting",
floor:"1st Floor",
priority:"Low",
staff:"Kiran",
time:"08:00 AM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=6",
},

{
id:20,
room:"206",
roomType:"Deluxe Room",
task:"Bed Arrangement",
floor:"2nd Floor",
priority:"Medium",
staff:"Ritu",
time:"09:00 AM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=14",
},

{
id:21,
room:"309",
roomType:"Suite Room",
task:"Balcony Cleaning",
floor:"3rd Floor",
priority:"Low",
staff:"Sagar",
time:"11:20 AM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=31",
},

{
id:22,
room:"411",
roomType:"Deluxe Room",
task:"Mirror Cleaning",
floor:"4th Floor",
priority:"Medium",
staff:"Deepa",
time:"12:00 PM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=26",
},

{
id:23,
room:"512",
roomType:"Suite Room",
task:"Laundry Pickup",
floor:"5th Floor",
priority:"High",
staff:"Ramesh",
time:"01:40 PM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=22",
},

{
id:24,
room:"615",
roomType:"Standard Room",
task:"Regular Cleaning",
floor:"6th Floor",
priority:"Medium",
staff:"Anita",
time:"03:40 PM",
status:"Pending",
avatar:"https://i.pravatar.cc/40?img=35",
},
];

export default function AllPendingTaskPopup({ open, onClose }) {

  const [search, setSearch] = useState("");

  const [priority, setPriority] = useState("All Priority");
const rowsPerPage = 8;
const [currentPage, setCurrentPage] = useState(1);

  const [floor, setFloor] = useState("All Floors");

  const [sortBy, setSortBy] = useState("Room Number");

 

 

  /* ==========================
      FILTER + SEARCH + SORT
  ========================== */

  const filteredTasks = useMemo(() => {

    let data = [...taskList];

    /* Search */

    if (search.trim()) {

      data = data.filter((item) => {

        const text = search.toLowerCase();

        return (

          item.room.toLowerCase().includes(text) ||

          item.task.toLowerCase().includes(text) ||

          item.staff.toLowerCase().includes(text)

        );

      });

    }

    /* Priority */

    if (priority !== "All Priority") {

      data = data.filter(

        (item) => item.priority === priority

      );

    }

    /* Floor */

    if (floor !== "All Floors") {

      data = data.filter(

        (item) => item.floor === floor

      );

    }

    /* Sorting */

    switch (sortBy) {

      case "Room Number":

        data.sort(

          (a, b) => Number(a.room) - Number(b.room)

        );

        break;

      case "Priority":

        data.sort((a, b) =>

          a.priority.localeCompare(b.priority)

        );

        break;

      case "Time":

        data.sort((a, b) =>

          a.time.localeCompare(b.time)

        );

        break;

      case "Staff":

        data.sort((a, b) =>

          a.staff.localeCompare(b.staff)

        );

        break;

      default:

        break;

    }

    return data;

  }, [search, priority, floor, sortBy]);

  /* ==========================
        PAGINATION
  ========================== */

  const totalPages = Math.ceil(

    filteredTasks.length / rowsPerPage

  );

  const startIndex =

    (currentPage - 1) * rowsPerPage;

  const currentRows = filteredTasks.slice(

    startIndex,

    startIndex + rowsPerPage

  );

  /* Reset page after filter */

  React.useEffect(() => {


   setCurrentPage(1);
}, [search, priority, floor]);
  /* Close */

  if (!open) return null;

    return (

    <div className="pending-popup-overlay">

      <div className="pending-popup">

        {/* ================= HEADER ================= */}

        <div className="popup-header">

          <h2>
            All Pending Tasks ({filteredTasks.length})
          </h2>

          <button
            className="popup-close"
            onClick={onClose}
          >
            <FiX />
          </button>

        </div>

        {/* ================= FILTER BAR ================= */}

        <div className="popup-toolbar">

          {/* Search */}

          <div className="popup-search">

            <FiSearch />

            <input
              type="text"
              placeholder="Search by room number, task or staff..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          {/* Priority */}

          <select
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value)
            }
          >

            <option>All Priority</option>

            <option>High</option>

            <option>Medium</option>

            <option>Low</option>

          </select>

          {/* Floor */}

          <select
            value={floor}
            onChange={(e) =>
              setFloor(e.target.value)
            }
          >

            <option>All Floors</option>

            <option>1st Floor</option>
            <option>2nd Floor</option>
            <option>3rd Floor</option>
            <option>4th Floor</option>
            <option>5th Floor</option>
           

          </select>

          {/* Sort */}

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
          >

            <option>Room Number</option>

            <option>Priority</option>

            <option>Time</option>

            <option>Staff</option>

          </select>

        </div>

        {/* ================= TABLE ================= */}

        <div className="popup-table">

          <div className="popup-table-head">

            <span>Room No.</span>

            <span>Task / Service</span>

            <span>Floor</span>

            <span>Priority</span>

            <span>Assigned To</span>

            <span>Time</span>

            <span>Status</span>

          </div>

          <div className="popup-table-body">

            {currentRows.map((item) => (

              <div
                className="popup-row"
                key={item.id}
              >

                {/* Room */}

                <div className="room-column">

                  <strong>
                    Room {item.room}
                  </strong>

                  <small>
                    {item.roomType}
                  </small>

                </div>

                {/* Task */}

                <div>

                  {item.task}

                </div>

                {/* Floor */}

                <div>

                  {item.floor}

                </div>

                {/* Priority */}

                <div>

                  <span
                    className={`priority-chip ${item.priority.toLowerCase()}`}
                  >

                    {item.priority}

                  </span>

                </div>

                {/* Staff */}

                <div className="staff-cell">

                  <img
                    src={item.avatar}
                    alt=""
                  />

                  <span>

                    {item.staff}

                  </span>

                </div>

                {/* Time */}

                <div>

                  {item.time}

                </div>

                {/* Status */}

                <div>

                  <span className="status-chip">

                    {item.status}

                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

                {/* Footer */}
<div className="pending-popup-footer">

  <div className="pending-footer-left">
    Showing {startIndex + 1} -{" "}
    {Math.min(
      currentPage * rowsPerPage,
      filteredTasks.length
    )}{" "}
    of {filteredTasks.length} tasks
  </div>

  <div className="pending-pagination">

    <button
      className="page-btn"
      disabled={currentPage === 1}
      onClick={() =>
        setCurrentPage((p) => Math.max(1, p - 1))
      }
    >
      ‹
    </button>

    {Array.from({
      length: totalPages,
    }).map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentPage(index + 1)}
        className={
          currentPage === index + 1
            ? "page-btn active"
            : "page-btn"
        }
      >
        {index + 1}
      </button>
    ))}

    <button
      className="page-btn"
      disabled={currentPage === totalPages}
      onClick={() =>
        setCurrentPage((p) => Math.min(totalPages, p + 1))
      }
    >
      ›
    </button>

  </div>
</div>
      </div>

    </div>

  );

}

