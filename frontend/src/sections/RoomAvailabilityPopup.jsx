import { exportRoomAvailability } from "../sections/exportRoomAvailability";
import {
  FaTimes,
  FaBed,
  FaDoorOpen,
  FaTools,
  FaCalendarCheck,
  FaFilePdf,
  FaPrint,
  FaFileExcel,
} from "react-icons/fa";

const roomData = [
  { type: "Deluxe", total: 25, occupied: 20, reserved: 3, available: 2 },
  { type: "Executive", total: 20, occupied: 18, reserved: 1, available: 1 },
  { type: "Suite", total: 15, occupied: 12, reserved: 2, available: 1 },
  { type: "Standard", total: 40, occupied: 22, reserved: 12, available: 6 },
];

function RoomAvailabilityPopup({ onClose }) {
  return (
    <div className="room-popup-overlay">

      <div className="room-popup">

        <button
        className="popup-close-btn"
        onClick={onClose}
    >
        <FaTimes />
    </button>

        {/* Header */}

        <div className="room-popup-header">

          <div>
            <h2>Room Availability Report</h2>
            <p>Current room occupancy summary</p>
          </div>

</div>
        {/* Summary Cards */}

        <div className="room-summary-grid">

          <div className="summary-card occupied">
            <FaBed />
            <h3>72</h3>
            <span>Occupied</span>
          </div>

          <div className="summary-card reserved">
            <FaCalendarCheck />
            <h3>18</h3>
            <span>Reserved</span>
          </div>

          <div className="summary-card available">
            <FaDoorOpen />
            <h3>8</h3>
            <span>Available</span>
          </div>

          <div className="summary-card maintenance">
            <FaTools />
            <h3>2</h3>
            <span>Maintenance</span>
          </div>

        </div>

        {/* Table */}

        <div className="room-table">

          <table>

            <thead>

              <tr>
                <th>Room Type</th>
                <th>Total</th>
                <th>Occupied</th>
                <th>Reserved</th>
                <th>Available</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>Deluxe</td>
                <td>25</td>
                <td>20</td>
                <td>3</td>
                <td>2</td>
              </tr>

              <tr>
                <td>Executive</td>
                <td>20</td>
                <td>18</td>
                <td>1</td>
                <td>1</td>
              </tr>

              <tr>
                <td>Suite</td>
                <td>15</td>
                <td>12</td>
                <td>2</td>
                <td>1</td>
              </tr>

              <tr>
                <td>Standard</td>
                <td>40</td>
                <td>22</td>
                <td>12</td>
                <td>6</td>
              </tr>

            </tbody>

          </table>

        </div>

        {/* Footer */}

        <div className="room-popup-footer">

          <button
  className="export-btn"
  onClick={() => exportRoomAvailability(roomData)}
>
  <FaFileExcel />
  Export Excel
</button>

          <button className="print-btn">
            <FaPrint />
            Print
          </button>

         

        </div>

      </div>

    </div>
  );
}

export default RoomAvailabilityPopup;