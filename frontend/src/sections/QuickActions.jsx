import {
  FaPlus,
  FaChevronRight,
  FaCalendarAlt,
  FaUserCheck,
  FaSignOutAlt,
  FaUserPlus,
  FaBan,
  FaFileInvoice
} from "react-icons/fa";



const actions = [
  {
    icon: <FaCalendarAlt />,
    title: "New Booking",
    color: "#6C63FF",
    bg: "#F4F1FF"
  },
  {
    icon: <FaUserCheck />,
    title: "Check-in Guest",
    color: "#10B981",
    bg: "#ECFDF5"
  },
  {
    icon: <FaSignOutAlt />,
    title: "Check-out Guest",
    color: "#F59E0B",
    bg: "#FFF7ED"
  },
  {
    icon: <FaUserPlus />,
    title: "Add Guest",
    color: "#3B82F6",
    bg: "#EFF6FF"
  },

  {
    icon: <FaFileInvoice />,
    title: "Generate Invoice",
    color: "#8B5CF6",
    bg: "#F5F3FF"
  }
];

function QuickActions() {
  return (
    <div className="quick-card">

      <div className="quick-header">
        <h3>Quick Actions</h3>

        <button className="quick-add">
          <FaPlus />
        </button>
      </div>

      <div className="quick-list">

        {actions.map((item, index) => (

          <div
            key={index}
            className="quick-item"
            style={{ background: item.bg }}
          >

            <div className="quick-left">

              <div
                className="quick-icon"
                style={{ color: item.color }}
              >
                {item.icon}
              </div>

              <span>{item.title}</span>

            </div>

            <FaChevronRight className="quick-arrow" />

          </div>

        ))}

      </div>

    </div>
  );
}

export default QuickActions;