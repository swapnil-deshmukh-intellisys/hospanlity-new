
import {
  FaCalendarAlt,
  FaUserCheck,
  FaSignOutAlt,
  FaRupeeSign,
  FaStar
} from "react-icons/fa";

const stats = [
     {
    title: "Check-ins Today",
    value: "12",
    growth: "+3.56%",
    text: "from last week",
    positive: true,
    icon: <FaUserCheck />,
    color: "green",
  },
  {
    title: "Check-outs Today",
    value: "10",
    growth: "-10.6%",
    text: "from last week",
    positive: false,
    icon: <FaSignOutAlt />,
    color: "orange",
  },
  {
    title: "New Bookings",
    value: "18",
    growth: "+8.70%",
    text: "from last week",
    positive: true,
    icon: <FaCalendarAlt />,
    color: "purple",
  },
 
  {
    title: "Today's Revenue",
    value: "₹1,25,000",
    growth: "+5.70%",
    text: "from last week",
    positive: true,
    icon: <FaRupeeSign />,
    color: "mint",
  },
  {
    title: "Average Rating",
    value: "4.6",
    suffix: "/5",
    reviews: "from 254 reviews",
    icon: <FaStar />,
    color: "yellow",
  },
];

function DashboardStats() {
  return (
    <div className="stats-grid">

      {stats.map((item, index) => (

        <div className="stat-card" key={index}>

          <div className={`stat-icon ${item.color}`}>
            {item.icon}
          </div>

          <div className="stat-content">

            <h4>{item.title}</h4>

            <div className="stat-value-row">

              <h2>
                {item.value}

                {item.suffix && (
                  <span>{item.suffix}</span>
                )}

              </h2>

            </div>

            {item.reviews ? (

              <p className="reviews">
                {item.reviews}
              </p>

            ) : (

              <div className="growth-row">

                <span
                  className={
                    item.positive
                      ? "growth positive"
                      : "growth negative"
                  }
                >
                  {item.growth}
                </span>

                <span className="growth-text">
                  {item.text}
                </span>

              </div>

            )}

          </div>

        </div>

      ))}

    </div>
  );
}

export default DashboardStats;