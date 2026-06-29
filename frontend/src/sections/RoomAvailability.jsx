
import { FaEllipsisH } from "react-icons/fa";

function RoomAvailability({ onViewDetails }) {
  return (
    <div className="room-card">

     <div className="room-header">

  <h3>Room Availability</h3>

  <button
  className="room-menu-btn"
  onClick={() => {
    console.log("clicked");
    onViewDetails();
  }}
>
  <FaEllipsisH />
</button>

</div>
      {/* Progress Bar */}

      <div className="availability-bar">

        <div className="seg occupied"></div>
        <div className="seg reserved"></div>
        <div className="seg notready"></div>
        <div className="seg available"></div>

      </div>

      {/* Statistics */}

      <div className="availability-grid">

        <div className="item">
          <div className="label">
            <span className="dot occupied-dot"></span>
            Occupied
          </div>

          <h4>82 (68.3%)</h4>
        </div>

        <div className="item">
          <div className="label">
            <span className="dot reserved-dot"></span>
            Reserved
          </div>

          <h4>34 (28.3%)</h4>
        </div>

        <div className="item">
          <div className="label">
            <span className="dot available-dot"></span>
            Available
          </div>

          <h4>32 (26.7%)</h4>
        </div>

        <div className="item">
          <div className="label">
            <span className="dot notready-dot"></span>
            Not Ready
          </div>

          <h4>8 (6.7%)</h4>
        </div>

      </div>

    </div>
  );
}

export default RoomAvailability;