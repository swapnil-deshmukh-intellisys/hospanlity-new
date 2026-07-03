
import "./TodayActivity.css";
const activities = [
  {
    time: "09:30 AM",
    title: "Room 101 - Regular Cleaning Completed",
    by: "Rajesh Kumar",
    type: "done",
  },
  {
    time: "09:15 AM",
    title: "Room 408 - Deep Cleaning In Progress",
    by: "Anita Sharma",
    type: "progress",
  },
  {
    time: "09:20 AM",
    title: "Room 107 - Cleaning Started",
    by: "Pooja Sharma",
    type: "start",
  },
  {
    time: "10:00 AM",
    title: "Room 105 - Inspection Scheduled",
    by: "Mahesh Yadav",
    type: "schedule",
  },
  {
    time: "10:30 AM",
    title: "Room 205 - Linen Change Pending",
    by: "Sunita Devi",
    type: "pending",
  },
];

function TodayActivity() {
  return (
    <div className="activity-card">

      {/* Header */}
      <div className="activity-header">
        <h3>Today's Activity</h3>
        <button className="view-all">View All →</button>
      </div>

      {/* Timeline */}
      <div className="timeline">
        {activities.map((item, index) => (
          <div className="timeline-item" key={index}>

            <div className="left">
              <div className={`dot ${item.type}`} />
              {index !== activities.length - 1 && <div className="line" />}
            </div>

            <div className="content">
              <div className="time">{item.time}</div>
              <div className="text">
                {item.title}
                <br />
                <span>by {item.by}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default TodayActivity;