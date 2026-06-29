import "./AssignNow.css";

function AssignNow({ issue, onClose }) {
  if (!issue) return null;

  return (
    <div className="assign-overlay">
      <div className="assign-popup">

        <div className="assign-header">
          <h2>Assign Task</h2>

          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="assign-form">

          <div className="assign-row">
            <label>Room Number</label>
            <input type="text" placeholder="Enter Room Number" />
          </div>

          <div className="assign-row">
            <label>Issue</label>
            <input type="text" placeholder="Enter Issue" />
          </div>

          <div className="assign-row">
            <label>Priority</label>
            <select>
              <option value="">Select Priority</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <div className="assign-row">
            <label>Reported By</label>
            <input type="text" placeholder="Enter Name" />
          </div>

          <div className="assign-row">
            <label>Assign Technician</label>
            <select>
              <option>Ramesh Kumar</option>
              <option>Suresh Yadav</option>
              <option>Amit Singh</option>
              <option>Neha Singh</option>
            </select>
          </div>

          <div className="assign-row">
            <label>Description</label>
            <textarea rows="4" placeholder="Enter description..." />
          </div>

          <div className="assign-row">
            <label>Expected Date</label>
            <input type="date" />
          </div>

          <div className="assign-row">
            <label>Upload File (Optional)</label>
            <input type="file" />
          </div>

        </div>

        <div className="assign-footer">

          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <button
            className="assign-task-btn"
            onClick={() => {
              alert("Task Assigned Successfully");
              onClose();
            }}
          >
            Assign Task
          </button>

        </div>

      </div>
    </div>
  );
}

export default AssignNow;