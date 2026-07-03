import { useState } from "react";

/* ✅ Expanded Dummy Data (IMPORTANT for pagination) */
const roomData = [
  { roomNo: 101, type: "Deluxe Room", floor: "1st Floor", status: "Clean", guest: "Rahul Mehta", info: "Check-out 09:00 AM", assigned: "Sunita Devi", time: "09:15 AM" },
  { roomNo: 102, type: "Deluxe Room", floor: "1st Floor", status: "In Progress", guest: "Priya Sharma", info: "Check-out 10:30 AM", assigned: "Anita Sharma", time: "09:35 AM" },
  { roomNo: 103, type: "Suite Room", floor: "1st Floor", status: "Dirty", guest: "", info: "Check-out 11:15 AM", assigned: "Mahesh Yadav", time: "09:40 AM" },
  { roomNo: 104, type: "Suite Room", floor: "1st Floor", status: "Inspection", guest: "", info: "Inspection Pending", assigned: "-", time: "09:10 AM" },
  { roomNo: 105, type: "Deluxe Room", floor: "1st Floor", status: "Clean", guest: "Amit Patel", info: "Checked-in", assigned: "Rajesh Kumar", time: "08:50 AM" },
  { roomNo: 106, type: "Suite Room", floor: "1st Floor", status: "Vacant", guest: "", info: "Ready for Check-in", assigned: "-", time: "08:45 AM" },
  { roomNo: 107, type: "Deluxe Room", floor: "1st Floor", status: "In Progress", guest: "", info: "Check-out 12:00 PM", assigned: "Pooja Sharma", time: "09:20 AM" },
  { roomNo: 108, type: "Standard Room", floor: "1st Floor", status: "Out of Service", guest: "", info: "AC Maintenance", assigned: "-", time: "08:40 AM" },

  { roomNo: 201, type: "Deluxe Room", floor: "2nd Floor", status: "Clean", guest: "Nikhil Singh", info: "Checked-in", assigned: "Sunita Devi", time: "09:05 AM" },
  { roomNo: 202, type: "Suite Room", floor: "2nd Floor", status: "Dirty", guest: "", info: "Check-out 09:45 AM", assigned: "Ramesh Kumar", time: "09:25 AM" },

  { roomNo: 203, type: "Deluxe Room", floor: "2nd Floor", status: "Clean", guest: "Arjun Patil", info: "Checked-in", assigned: "Meena Devi", time: "10:10 AM" },
  { roomNo: 204, type: "Standard Room", floor: "2nd Floor", status: "Inspection", guest: "", info: "Inspection Pending", assigned: "Supervisor", time: "10:20 AM" },
];

export default function RoomStatus() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
   const [floor, setFloor] = useState("All Floors");

  const rowsPerPage = 5;
 const filteredData = roomData.filter((item) => {

  const keyword = search.toLowerCase();
  const [selectedRoom, setSelectedRoom] = useState(null);

  const matchSearch =
    item.roomNo.toString().includes(keyword) ||
    item.type.toLowerCase().includes(keyword) ||
    item.floor.toLowerCase().includes(keyword) ||
    item.status.toLowerCase().includes(keyword) ||
    item.guest.toLowerCase().includes(keyword) ||
    item.assigned.toLowerCase().includes(keyword) ||
    item.info.toLowerCase().includes(keyword);

  const matchFloor =
    floor === "All Floors" || item.floor === floor;

  return matchSearch && matchFloor;
});

  /* Pagination */
  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;

const currentData = filteredData.slice(indexOfFirst, indexOfLast);

const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="hk-room-status">

      {/* HEADER */}
      <div className="hk-section-header">
        <h2>Room Status</h2>

        <div className="hk-filters">
         <select
  value={floor}
  onChange={(e) => {
    setFloor(e.target.value);
    setCurrentPage(1);
  }}
>
  <option>All Floors</option>
  <option>1st Floor</option>
  <option>2nd Floor</option>
  <option>3rd Floor</option>
  <option>4th Floor</option>
  <option>5th Floor</option>
  <option>6th Floor</option>
  <option>7th Floor</option>
  <option>8th Floor</option>
  <option>9th Floor</option>
  <option>10th Floor</option>
</select>
<input
  type="text"
  placeholder="Search room or status..."
  value={search}
  onChange={(e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  }}
/>
        </div>
      </div>

      {/* TABLE */}
      <table className="hk-table">
        <thead>
          <tr>
            <th>Room No</th>
            <th>Room Type</th>
            <th>Floor</th>
            <th>Status</th>
            <th>Guest / Info</th>
            <th>Assigned To</th>
            <th>Last Updated</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              <td>{item.roomNo}</td>
              <td>{item.type}</td>
              <td>{item.floor}</td>

              <td>
                <span className={`status ${item.status.toLowerCase().replace(/\s/g, "-")}`}>
                  {item.status}
                </span>
              </td>

              <td>
                {item.guest ? (
                  <>
                    <b>{item.guest}</b>
                    <div style={{ fontSize: "12px", color: "#777" }}>
                      {item.info}
                    </div>
                  </>
                ) : (
                  item.info
                )}
              </td>

              <td>{item.assigned}</td>
              <td>{item.time}</td>

              <td>
              <button
  className="view-btn"
  onClick={() => setSelectedRoom(item)}
>
  View
</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION (1 2 3 4 5 EXACT) */}
      <div className="hk-pagination">

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => changePage(i + 1)}
            className={currentPage === i + 1 ? "active-page" : ""}
          >
            {i + 1}
          </button>
        ))}

      </div>

      
      
    </div>

    
  );
}