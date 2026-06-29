import React, { useState } from "react";
import {
  FaTimes,
  FaSearch,
  FaCalendarAlt,
  FaDownload,
  FaPlus,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const bookings = [
  {
    id: "BK001",
    guest: "Rahul Sharma",
    phone: "+91 98765 43210",
    room: "Deluxe Room 101",
    checkIn: "28 Jun 2026",
    checkOut: "30 Jun 2026",
    amount: "₹8,500",
    status: "Confirmed",
    avatar: "RS",
  },
  {
    id: "BK002",
    guest: "Priya Patil",
    phone: "+91 91234 56789",
    room: "Executive Suite 204",
    checkIn: "29 Jun 2026",
    checkOut: "02 Jul 2026",
    amount: "₹12,000",
    status: "Checked In",
    avatar: "PP",
  },
  {
    id: "BK003",
    guest: "Amit Joshi",
    phone: "+91 99887 76655",
    room: "Standard Room 305",
    checkIn: "30 Jun 2026",
    checkOut: "01 Jul 2026",
    amount: "₹4,200",
    status: "Pending",
    avatar: "AJ",
  },
  {
    id: "BK004",
    guest: "Sneha Desai",
    phone: "+91 97654 32109",
    room: "Deluxe Room 110",
    checkIn: "01 Jul 2026",
    checkOut: "03 Jul 2026",
    amount: "₹9,800",
    status: "Checked Out",
    avatar: "SD",
  },
  {
    id: "BK005",
    guest: "Vikram Mehta",
    phone: "+91 90012 34567",
    room: "Suite Room 301",
    checkIn: "02 Jul 2026",
    checkOut: "04 Jul 2026",
    amount: "₹14,500",
    status: "Confirmed",
    avatar: "VM",
  },
  {
    id: "BK006",
    guest: "Kavita Singh",
    phone: "+91 94567 89012",
    room: "Standard Room 202",
    checkIn: "02 Jul 2026",
    checkOut: "03 Jul 2026",
    amount: "₹3,800",
    status: "Pending",
    avatar: "KS",
  },
];



function getStatusClass(status) {
  switch (status) {
    case "Confirmed":
      return "confirmed";
    case "Checked In":
      return "checkedin";
    case "Checked Out":
      return "checkedout";
    case "Pending":
      return "pending";
    default:
      return "";
  }
}

function RecentBookingsPopup({ onClose }) {

      const [search, setSearch] = useState("");

  const filteredBookings = bookings.filter((item) =>
    item.guest.toLowerCase().includes(search.toLowerCase()) ||
    item.id.toLowerCase().includes(search.toLowerCase()) ||
    item.room.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="recent-popup-overlay">
      <div className="recent-popup">

        {/* Header */}

        <div className="recent-popup-header">

          <div>
            <h2>Recent Bookings</h2>
            <p>All bookings from your hotel</p>
          </div>

          <button
            className="popup-close"
            onClick={onClose}
          >
            <FaTimes />
          </button>

        </div>

        {/* Toolbar */}

        <div className="recent-toolbar">

          <div className="toolbar-left">

            <div className="search-box">

              <FaSearch />

          <input
  type="text"
  placeholder="Search guest, booking ID, room..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

            </div>

            <div className="date-box">

              <FaCalendarAlt />

              <span>May 20 – May 26, 2026</span>

            </div>

          </div>

          <div className="toolbar-right">

            <button className="export-btn">
              <FaDownload />
              Export
            </button>

            <button className="add-btn">
              <FaPlus />
              Add Booking
            </button>

          </div>

        </div>

        {/* Filter */}

        <div className="booking-filters">

          <button className="active">All Bookings</button>
          <button>Confirmed</button>
          <button>Checked In</button>
          <button>Checked Out</button>
          <button>Pending</button>
          <button>Cancelled</button>

        </div>

        {/* Table */}

        <div className="booking-table-wrapper">

          <table className="booking-table">

            <thead>

              <tr>

                <th>Booking ID</th>
                <th>Guest</th>
                <th>Room</th>
                <th>Check-In</th>
                <th>Check-Out</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {bookings.map((item) => (

                <tr key={item.id}>

                  <td>{item.id}</td>

                  <td>

                    <div className="guest-info">

                      <div className="avatar">
                        {item.avatar}
                      </div>

                      <div>

                        <h4>{item.guest}</h4>
                        <span>{item.phone}</span>

                      </div>

                    </div>

                  </td>

                  <td>{item.room}</td>

                  <td>{item.checkIn}</td>

                  <td>{item.checkOut}</td>

                  <td>{item.amount}</td>

                  <td>

                    <span
                      className={`status ${getStatusClass(item.status)}`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td>

                    <div className="table-actions">

                      <button>
                        <FaEye />
                      </button>

                      <button>
                        <FaEdit />
                      </button>

                      <button className="delete">
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Footer */}

        <div className="recent-footer">

          <span>
            Showing 1 to 6 of 57 bookings
          </span>

          <div className="pagination">

            <button>{"<<"}</button>
            <button>{"<"}</button>

            <button className="active">
              1
            </button>

            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>

            <button>{">"}</button>
            <button>{">>"}</button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default RecentBookingsPopup;