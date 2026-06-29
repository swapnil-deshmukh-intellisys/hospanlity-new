
import { FaEllipsisV } from "react-icons/fa";

const bookings = [
  {
    id: "BK-0001",
    guest: "Amit Sharma",
    room: "101 (Deluxe)",
    checkin: "May 24, 2026",
    checkout: "May 26, 2026",
    amount: "₹8,500",
    status: "Checked-in",
  },
  {
    id: "BK-0002",
    guest: "Neha Patel",
    room: "205 (Executive)",
    checkin: "May 24, 2026",
    checkout: "May 25, 2026",
    amount: "₹7,500",
    status: "Checked-in",
  },
  {
    id: "BK-0003",
    guest: "Rahul Verma",
    room: "302 (Suite)",
    checkin: "May 24, 2026",
    checkout: "May 27, 2026",
    amount: "₹12,000",
    status: "Checked-out",
  },
  {
    id: "BK-0004",
    guest: "Priya Singh",
    room: "105 (Deluxe)",
    checkin: "May 24, 2026",
    checkout: "May 26, 2026",
    amount: "₹6,000",
    status: "Pending",
  },
  {
    id: "BK-0005",
    guest: "Karan Mehta",
    room: "403 (Suite)",
    checkin: "May 25, 2026",
    checkout: "May 28, 2026",
    amount: "₹11,000",
    status: "Confirmed",
  },
];

function RecentBookings({ onOpen }) {
  return (
    <div className="recent-bookings-card">

    <div className="recent-bookings-header">
  <h3>Recent Bookings</h3>

  <span
    className="view-all-link"
    onClick={onOpen}
  >
    View All
  </span>
</div>
      <table className="recent-bookings-table">

        <thead>

          <tr>
            <th>Booking ID</th>
            <th>Guest Name</th>
            <th>Room</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Amount</th>
            <th>Status</th>
            <th></th>
          </tr>

        </thead>

        <tbody>

          {bookings.map((item) => (

            <tr key={item.id}>

              <td>{item.id}</td>

              <td>{item.guest}</td>

              <td>{item.room}</td>

              <td>{item.checkin}</td>

              <td>{item.checkout}</td>

              <td>{item.amount}</td>

              <td>

                <span
                  className={`booking-status ${
                    item.status === "Checked-in"
                      ? "checkedin"
                      : item.status === "Checked-out"
                      ? "checkedout"
                      : item.status === "Pending"
                      ? "pending"
                      : "confirmed"
                  }`}
                >
                  {item.status}
                </span>

              </td>

              <td className="booking-menu">
                <FaEllipsisV />
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default RecentBookings;