import "./CheckInOut.css";
import { useState } from "react";
import {
  FaSearch,
  FaEye,
  FaFileAlt,
  FaEdit,
  FaTrash,
  FaDownload,
  FaSignInAlt,
  FaSignOutAlt,
  FaBed,
  FaClock
} from "react-icons/fa";

function CheckInOut() {
  const [search, setSearch] = useState("");
  
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [error, setError] = useState("");
  const [checkInGuestName, setCheckInGuestName] = useState("");
const [checkOutGuestName, setCheckOutGuestName] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
const [feedback, setFeedback] = useState("");
const [roomType, setRoomType] = useState("");

const [selectedGuest, setSelectedGuest] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);
const [editMode, setEditMode] = useState(false);

  const [guests, setGuests] = useState([
    {
      id: 1,
      name: "Rajesh Sharma",
      phone: "9876543210",
      bookingId: "BK-1001",
      roomNo: "205",
      checkIn: "18 Jun 2026",
      checkOut: "20 Jun 2026",
      nights: 2,
      guests: 2,
      status: "Checked In"
    },
    {
      id: 2,
      name: "Priya Patel",
      phone: "8765432109",
      bookingId: "BK-1002",
      roomNo: "302",
      checkIn: "18 Jun 2026",
      checkOut: "22 Jun 2026",
      nights: 4,
      guests: 3,
      status: "Checked In"
    },
    {
      id: 3,
      name: "Amit Verma",
      phone: "7654321098",
      bookingId: "BK-1003",
      roomNo: "105",
      checkIn: "19 Jun 2026",
      checkOut: "21 Jun 2026",
      nights: 2,
      guests: 1,
      status: "Pending Arrival"
    },
    {
      id: 4,
      name: "Neha Singh",
      phone: "6543210987",
      bookingId: "BK-1004",
      roomNo: "408",
      checkIn: "18 Jun 2026",
      checkOut: "19 Jun 2026",
      nights: 1,
      guests: 2,
      status: "Check-out Due"
    }
  ]);

  const filteredGuests = guests.filter((guest) => {
    const matchName = guest.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchStatus =
      statusFilter === "All Status"
        ? true
        : guest.status === statusFilter;

    return matchName && matchStatus;
  });

  return (
    <div className="check-page">

      <div className="page-heading">
        <div>
          <h2>Check-in / Check-out</h2>
          <p>Manage guest arrivals and departures</p>
        </div>
      </div>
    
      {/* ✅ PASTE MODAL HERE (OUTSIDE TABLE + FORMS BUT INSIDE check-page) */}

      {isModalOpen && selectedGuest && (
        <div className="modal-overlay">
          <div className="modal">

            <h3>
              {editMode ? "Edit Guest" : "Guest Details"}
            </h3>

            <input
              disabled={!editMode}
              value={selectedGuest.name}
              onChange={(e) =>
                setSelectedGuest({
                  ...selectedGuest,
                  name: e.target.value
                })
              }
            />

            <input
              disabled={!editMode}
              value={selectedGuest.phone}
              onChange={(e) =>
                setSelectedGuest({
                  ...selectedGuest,
                  phone: e.target.value
                })
              }
            />

            <input
              disabled={!editMode}
              value={selectedGuest.roomNo}
              onChange={(e) =>
                setSelectedGuest({
                  ...selectedGuest,
                  roomNo: e.target.value
                })
              }
            />

            <div className="modal-buttons">

              <button onClick={() => setIsModalOpen(false)}>
                Close
              </button>

              {editMode && (
                <button onClick={handleSave}>
                  Save
                </button>
              )}

            </div>

          </div>
        </div>
      )}

    
      {/* STATS */}

      <div className="stats-row">

        <div className="top-card green">
          <div className="icon-box">
            <FaSignInAlt />
          </div>

          <div>
            <h5>Today's Check-ins</h5>
            <h2>25</h2>
            <p>Guests Arriving Today</p>
          </div>
        </div>

        <div className="top-card red">
          <div className="icon-box">
            <FaSignOutAlt />
          </div>

          <div>
            <h5>Today's Check-outs</h5>
            <h2>18</h2>
            <p>Guests Leaving Today</p>
          </div>
        </div>

        <div className="top-card blue">
          <div className="icon-box">
            <FaBed />
          </div>

          <div>
            <h5>Occupied Rooms</h5>
            <h2>142</h2>
            <p>Rooms Currently Occupied</p>
          </div>
        </div>

        <div className="top-card orange">
          <div className="icon-box">
            <FaClock />
          </div>

          <div>
            <h5>Pending Check-ins</h5>
            <h2>6</h2>
            <p>Awaiting Arrival</p>
          </div>
        </div>

      </div>

      {/* FILTERS */}

      <div className="filter-bar">

        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search guest name, room no, booking id..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
<select
  value={statusFilter}
  onChange={(e) => setStatusFilter(e.target.value)}
>
  <option>All Status</option>
  <option>Checked In</option>
  <option>Pending Arrival</option>
  <option>Check-out Due</option>
  <option>Checked Out</option>
</select>
        <input type="date" />

        <button className="export-btn">
          <FaDownload />
          Export
        </button>

      </div>

      {/* TABLE */}

      <div className="table-card">

        <table>

          <thead>
            <tr>
              <th>Guest Name</th>
              <th>Booking ID</th>
              <th>Room No</th>
              <th>Check-in Date</th>
              <th>Check-out Date</th>
              <th>Nights</th>
              <th>Guests</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredGuests.map((guest) => (

              <tr key={guest.id}>

                <td>
                  <div className="guest-info">
                   

                    <div>
                      <strong>{guest.name}</strong>
                      <span>{guest.phone}</span>
                    </div>
                  </div>
                </td>

                <td>{guest.bookingId}</td>
                <td>{guest.roomNo}</td>
                <td>{guest.checkIn}</td>
                <td>{guest.checkOut}</td>
                <td>{guest.nights}</td>
                <td>{guest.guests}</td>

                <td>
                  <span
                    className={`status-badge ${
                      guest.status === "Checked In"
  ? "checked"
  : guest.status === "Pending Arrival"
  ? "pending"
  : guest.status === "Checked Out"
  ? "checkout"
  : "due"
                    }`}
                  >
                    {guest.status}
                  </span>
                </td>

                <td>
<button className="action-btn blue" onClick={() => {
  setSelectedGuest(guest);
  setEditMode(false);
  setIsModalOpen(true);
}}>
  <FaEye />
</button>

<button className="action-btn purple" onClick={() => {
  setSelectedGuest(guest);
  setEditMode(true);
  setIsModalOpen(true);
}}>
  <FaEdit />
</button>

<button className="action-btn red" onClick={() => {
  const updated = guests.filter((g) => g.id !== guest.id);
  setGuests(updated);
}}>
  <FaTrash />
</button>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* FORMS */}

      <div className="form-row">

       <div className="check-form">

<h3>Check-in Guest</h3>

<div className="form-grid">

<input

placeholder="Guest Name"

value={checkInGuestName}
onChange={(e) => setCheckInGuestName(e.target.value)}

/>

<input placeholder="Booking ID" />

<input placeholder="Room Number" />
<select
  value={roomType}
  onChange={(e) =>
    setRoomType(e.target.value)
  }
>
<option>Select Room Type</option>

<option>Standard Room</option>

<option>Deluxe Room</option>

<option>Suite Room</option>

</select>

<input type="date" />

<input type="time" />

<input placeholder="ID Number" />

<input placeholder="Special Requests" />

</div>

{/* 👇 Error message इथे show होईल */}

{error && <p className="error">{error}</p>}

<div className="form-buttons">

<button className="cancel-btn">Cancel</button>

<button

className="primary-btn"

onClick={() => {

if (checkInGuestName === ""){

setError("Guest Name Required");

return;

}

setError("");

const newGuest = {

id: guests.length + 1,
name: checkInGuestName,

phone: "9999999999",

bookingId: "BK-" + (guests.length + 1001),

roomNo: "101",

checkIn: "19 Jun 2026",

checkOut: "-",

nights: 1,

guests: 1,

status: "Checked In"

};

setGuests([...guests, newGuest]);

setCheckInGuestName("");

}}

>

Confirm Check-In

</button>

</div>

</div>

        <div className="check-form">

          <h3>Check-out Guest</h3>

          <div className="form-grid">
<input
  placeholder="Guest Name"
  value={checkOutGuestName}
  onChange={(e) => setCheckOutGuestName(e.target.value)}
/>       <input placeholder="Room Number" />

            <input type="date" />
            <input type="time" />

          </div>

         <input
  type="email"
  placeholder="Guest Email"
/>

<select
  value={paymentStatus}
  onChange={(e) =>
    setPaymentStatus(e.target.value)
  }
>
  <option value="">
    Payment Status
  </option>

  <option value="Paid">
    Paid
  </option>

  <option value="Pending">
    Pending
  </option>
</select>
<textarea
  value={feedback}
  onChange={(e) =>
    setFeedback(e.target.value)
  }
  placeholder="Guest Feedback"
  rows="4"
/>

          <div className="form-buttons">

            <button className="cancel-btn">
              Cancel
            </button>
<button
  className="checkout-btn"
  onClick={() => {

    if (paymentStatus === "") {
      alert("Select Payment Status");
      return;
    }

    if (paymentStatus === "Pending") {
      alert("Please clear billing before checkout");
      return;
    }

    const updatedGuests = guests.map((guest) => {
  if (
    guest.name.toLowerCase().trim() ===
    checkOutGuestName.toLowerCase().trim()
  ) {
    return {
      ...guest,
      status: "Checked Out",
      checkOut: new Date().toLocaleDateString()
    };
  }
  return guest;
});
    setGuests(updatedGuests);

    alert("Guest Checked Out Successfully");

    setCheckOutGuestName("");
    setPaymentStatus("");
    setFeedback("");
  }}
>
  Confirm Check-Out
</button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CheckInOut;