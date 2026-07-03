import "./List.css";
import { useState } from "react";

import {
  FaSearch,
  FaFilter,
  FaEye,
  FaEdit,
  FaTrash,
  FaUser,
  FaClock,
  FaCalendarAlt,   // ✅ Add this
  FaBolt,          // ✅ Add this
  FaSignInAlt,
  FaSignOutAlt,
  FaExclamationCircle,
  FaTimesCircle,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight
} from "react-icons/fa";
const guestData = [
  {
    id: 1,
    name: "Rajesh Sharma",
    phone: "9876543210",
    booking: "BK-1001",
    room: "205",
    roomType: "Deluxe Room",
    checkIn: "19 May 2026",
    checkInTime: "11:07 AM",
    checkOut: "21 May 2026",
    checkOutTime: "11:00 PM",
    stay: "2 Days",
    guests: 2,
    status: "Checked In"
   
  },

  {
    id: 2,
    name: "Priya Patel",
    phone: "8765432109",
    booking: "BK-1002",
    room: "302",
    roomType: "Executive Room",
    checkIn: "19 May 2026",
    checkInTime: "11:12 AM",
    checkOut: "23 May 2026",
    checkOutTime: "11:00 PM",
    stay: "4 Days",
    guests: 3,
    status: "Checked In",
  
  },

  {
    id: 3,
    name: "Amit Verma",
    phone: "7654321098",
    booking: "BK-1003",
    room: "105",
    roomType: "Deluxe Room",
    checkIn: "-",
    checkInTime: "",
    checkOut: "21 May 2026",
    checkOutTime: "11:00 PM",
    stay: "2 Days",
    guests: 1,
    status: "Pending Arrival",
   
  },

  {
    id: 4,
    name: "Neha Singh",
    phone: "6543210987",
    booking: "BK-1004",
    room: "408",
    roomType: "Suite Room",
    checkIn: "19 May 2026",
    checkInTime: "11:09 AM",
    checkOut: "20 May 2026",
    checkOutTime: "11:00 PM",
    stay: "1 Days",
    guests: 2,
    status: "Check-out Due",
    
  },

  {
    id: 5,
    name: "Suresh Yadav",
    phone: "9871234567",
    booking: "BK-1005",
    room: "101",
    roomType: "Deluxe Room",
    checkIn: "17 May 2026",
    checkInTime: "11:09 AM",
    checkOut: "19 May 2026",
    checkOutTime: "11:00 PM",
    stay: "2 Days",
    guests: 2,
    status: "Checked Out",
   
  },

  {
    id: 6,
    name: "Vikram Joshi",
    phone: "9122456780",
    booking: "BK-1006",
    room: "210",
    roomType: "Deluxe Room",
    checkIn: "17 May 2026",
    checkInTime: "11:15 AM",
    checkOut: "22 May 2026",
    checkOutTime: "11:00 PM",
    stay: "3 Days",
    guests: 2,
    status: "Checked In",
    
  },

  {
    id: 7,
    name: "Meera Iyer",
    phone: "8987654321",
    booking: "BK-1007",
    room: "404",
    roomType: "Executive Room",
    checkIn: "19 May 2026",
    checkInTime: "11:20 AM",
    checkOut: "21 May 2026",
    checkOutTime: "11:00 PM",
    stay: "2 Days",
    guests: 2,
    status: "Checked In",
    
  },

  {
    id: 8,
    name: "Anjali Shah",
    phone: "8888888888",
    booking: "BK-1008",
    room: "305",
    roomType: "Executive",
    checkIn: "18 May 2026",
    checkInTime: "10:40 AM",
    checkOut: "22 May 2026",
    checkOutTime: "11:00 PM",
   stay: "4 Days",
    guests: 2,
    status: "Checked In",
  
  },

  {
    id: 9,
    name: "Rahul Jain",
    phone: "9999999999",
    booking: "BK-1009",
    room: "406",
    roomType: "Suite",
    checkIn: "19 May 2026",
    checkInTime: "11:15 AM",
    checkOut: "20 May 2026",
    checkOutTime: "11:00 PM",
    stay: "1 Days",
    guests: 2,
    status: "Pending Arrival",
 
  },

  {
    id: 10,
    name: "Sneha Kulkarni",
    phone: "9123456789",
    booking: "BK-1010",
    room: "507",
    roomType: "Luxury",
    checkIn: "18 May 2026",
    checkInTime: "09:00 AM",
    checkOut: "22 May 2026",
    checkOutTime: "11:00 PM",
    stay: "4 Days",
    guests: 3,
    status: "Checked In",
   
  },
];

export default function List() {

  const [search, setSearch] = useState("");
  
  
const [page, setPage] = useState(1);
const rowsPerPage = 7;
const [data, setData] = useState(guestData);

const filteredData = guestData.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase()) ||
  item.booking.toLowerCase().includes(search.toLowerCase()) ||
  item.room.includes(search)
);

const totalPages = Math.ceil(filteredData.length / rowsPerPage);

const currentData = filteredData.slice(
  (page - 1) * rowsPerPage,
  page * rowsPerPage
);
const summary = [

{
title:"Total Check-ins",
value:25,
color:"#16a34a",
icon:<FaSignInAlt/>
},

{
title:"Total Check-outs",
value:18,
color:"#ef4444",
icon:<FaSignOutAlt/>
},

{
title:"Pending Arrivals",
value:6,
color:"#2563eb",
icon:<FaClock/>
},

{
title:"Check-out Due",
value:4,
color:"#f59e0b",
icon:<FaExclamationCircle/>
}

];
const hotelTime = [
  {
    label: "Check-in Time",
    value: "11:00 AM",
  },
  {
    label: "Check-out Time",
    value: "11:00 PM",
  },
];

const actions = [
  "View Expected Arrivals",
  "View No Shows",
];

const getStatusClass = (status) => {
  switch (status) {
    case "Checked In":
      return "checked-in";

    case "Checked Out":
      return "checked-out";

    case "Pending Arrival":
      return "pending";

    case "Check-out Due":
      return "due";

    default:
      return "";
  }
};

return (
  <div className="guest-page">

    {/* ================= TABLE CARD ================= */}

    <div className="guest-table-card">

      {/* ================= HEADER ================= */}

      <div className="table-header">

        <div>
          <h2>Guest Movement List</h2>
          <span>11:00 AM - 11:00 PM</span>
        </div>

        <div className="table-actions">

          <div className="search-box">

            <FaSearch />

            <input
              type="text"
              placeholder="Search guest, room or booking ID..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />

          </div>

          <button className="filter-btn">

            <FaFilter />

            Filters

          </button>

        </div>

      </div>

      {/* ================= TABLE ================= */}

      <div className="table-responsive">

        <table className="guest-table">

          <thead>

            <tr>

              <th>Guest Name</th>

              <th>Booking ID</th>

              <th>Room</th>

              <th>Check-in</th>

              <th>Check-out</th>

              <th>Stay</th>

              <th>Guests</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {currentData.map((item) => (

              <tr key={item.id}>

                {/* Guest */}

                <td>

                  <div className="guest-info">

                  

                    <div>

                      <h4>{item.name}</h4>

                      <span>{item.phone}</span>

                    </div>

                  </div>

                </td>

                {/* Booking */}

                <td>

                  <strong>{item.booking}</strong>

                </td>

                {/* Room */}

                <td>

                  <strong>{item.room}</strong>

                  <small>{item.roomType}</small>

                </td>

                {/* Check In */}

                <td>

                  <div className="time-box">

                    <FaSignInAlt className="green-icon"/>

                    <div>

                      <strong>{item.checkIn}</strong>

                      <small>{item.checkInTime}</small>

                    </div>

                  </div>

                </td>

                {/* Check Out */}

                <td>

                  <div className="time-box">

                    <FaSignOutAlt className="red-icon"/>

                    <div>

                      <strong>{item.checkOut}</strong>

                      <small>{item.checkOutTime}</small>

                    </div>

                  </div>

                </td>

                {/* Nights */}

                <td>

                  {item.stay}

                </td>

                {/* Guests */}

                <td>

                  <div className="guest-count">

                    <FaUser />

                    {item.guests}

                  </div>

                </td>

                {/* Status */}

                <td>

                  <span className={`status ${getStatusClass(item.status)}`}>

                    {item.status}

                  </span>

                </td>

                {/* Actions */}

                <td>

                  <div className="action-buttons">

                    <button className="view-btn">

                      <FaEye />

                    </button>

                    <button className="edit-btn">

                      <FaEdit />

                    </button>

                    <button className="delete-btn">

                      <FaTrash />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* ================= FOOTER ================= */}

      <div className="table-footer">

        <p>

          Showing {(page - 1) * rowsPerPage + 1} -

          {" "}

          {Math.min(page * rowsPerPage, filteredData.length)}

          {" "}of{" "}

          {filteredData.length} Guests

        </p>

        <div className="pagination">

          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >

            <FaChevronLeft />

          </button>

          {

            Array.from({ length: totalPages }, (_, i) => (

              <button

                key={i}

                className={page === i + 1 ? "active-page" : ""}

                onClick={() => setPage(i + 1)}

              >

                {i + 1}

              </button>

            ))

          }

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >

            <FaChevronRight />

          </button>

        </div>

      </div>

    </div>

          {/* ================= BOTTOM CARDS ================= */}

      <div className="bottom-cards">

        {/* ================= TODAY SUMMARY ================= */}
{/* ================= Today's Summary ================= */}

<div className="summary-card">

    <div className="card-title">

        <div className="card-icon blue">

            <FaCalendarAlt />

        </div>

        <h3>Today's Summary</h3>

    </div>

    <div className="summary-grid">

        {summary.map((item, index) => (

            <div className="summary-item" key={index}>

                <div
                    className="summary-icon-box"
                    style={{
                        background: `${item.color}15`,
                        color: item.color
                    }}
                >
                    {item.icon}
                </div>

                <div className="summary-content">

                    <span>{item.title}</span>

                    <h2>{item.value}</h2>

                </div>

            </div>

        ))}

    </div>

</div>

        {/* ================= HOTEL TIME ================= */}

      {/* ================= HOTEL TIME WINDOW ================= */}

<div className="hotel-card">

    <div className="card-title">

        <div className="card-icon blue">

            <FaClock />

        </div>

        <h3>Hotel Time Window</h3>

    </div>

    <div className="hotel-time">

        <div className="hotel-item">

            <span>Check-in Time</span>

            <h2>11:00 AM</h2>

        </div>

        <div className="hotel-divider"></div>

        <div className="hotel-item">

            <span>Check-out Time</span>

            <h2>11:00 PM</h2>

        </div>

    </div>

    <p className="hotel-note">

        All operations are based on today's configured hotel time window.

    </p>

</div>
        {/* ================= QUICK ACTION ================= */}

     {/* ================= QUICK ACTIONS ================= */}

<div className="quick-card">

    <div className="card-title">

        <div className="card-icon purple">

            <FaBolt />

        </div>

        <h3>Quick Actions</h3>

    </div>

    <div className="quick-buttons">

        <button className="action-btn green-action">

            <span className="left-action">

                <FaUser />

                View Expected Arrivals

            </span>

            <FaArrowRight />

        </button>

        <button className="action-btn red-action">

            <span className="left-action">

                <FaUser />

                View No Shows

            </span>

            <FaArrowRight />

        </button>

    </div>

</div>
      </div>

    </div>

  );
}