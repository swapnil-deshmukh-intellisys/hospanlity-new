

const ratings = [
  { title: "Facilities", value: 4.4, percent: 88, color: "#2ec4b6" },
  { title: "Cleanliness", value: 4.7, percent: 94, color: "#ff8bb2" },
  { title: "Services", value: 4.6, percent: 92, color: "#9b7cff" },
  { title: "Comfort", value: 4.8, percent: 96, color: "#7fa8ff" },
  { title: "Location", value: 4.5, percent: 90, color: "#5b5ce8" },
];

export default function OverallRating({ onOpenReviews }) {
  return (
    <div className="overall-rating-card">

      <div className="overall-header">

        <h3>Overall Rating</h3>

          <button
    className="menu-btn"
    onClick={onOpenReviews}
  >
    •••
  </button>

      </div>

      <div className="rating-summary">

        <div className="rating-box">
          <span className="big-rating">4.6</span>
        
        </div>

        <div className="rating-text">
          <h4>Impressive</h4>
          <p>from 254 reviews</p>
        </div>

      </div>

      <div className="rating-list">

        {ratings.map((item) => (
          <div className="rating-row" key={item.title}>

            <span className="label">{item.title}</span>

            <div className="progress">

              <div
                className="progress-fill"
                style={{
                  width: `${item.percent}%`,
                  background: item.color,
                }}
              />

            </div>

            <span className="value">{item.value}</span>

          </div>
        ))}

      </div>

    </div>
  );
}