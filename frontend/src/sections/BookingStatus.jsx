import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  { name: "Occupied", value: 72, color: "#27C3A8" },
  { name: "Reserved", value: 18, color: "#FDB03B" },
  { name: "Available", value: 8, color: "#9D83F7" },
  { name: "Maintenance", value: 2, color: "#D9DEE8" },
];

const RADIAN = Math.PI / 180;

const renderCenterLabel = ({ cx, cy }) => {
  return (
    <>
      <text
        x={cx}
        y={cy - 5}
        textAnchor="middle"
        dominantBaseline="central"
        className="status-center-value"
      >
        72%
      </text>

      <text
        x={cx}
        y={cy + 25}
        textAnchor="middle"
        dominantBaseline="central"
        className="status-center-text"
      >
        Occupied
      </text>
    </>
  );
};

function BookingStatus() {
  return (
    <div className="booking-status-card">

      <div className="booking-status-header">
        <h3>Room Occupancy Status</h3>
      </div>

      <div className="booking-status-body">

        <div className="status-chart">

          <ResponsiveContainer width={230} height={230}>

            <PieChart>

              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={72}
                outerRadius={92}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
                paddingAngle={4}
                cornerRadius={8}
                labelLine={false}
                label={renderCenterLabel}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={entry.color}
                  />
                ))}
              </Pie>

            </PieChart>

          </ResponsiveContainer>

        </div>

        <div className="status-legend">

          <div className="status-row">

            <div className="status-left">
              <span
                className="status-dot"
                style={{ background: "#27C3A8" }}
              ></span>

              <span className="status-name">
                Occupied
              </span>
            </div>

            <div className="status-right">
              <strong>72</strong>
              <span>(72%)</span>
            </div>

          </div>

          <div className="status-row">

            <div className="status-left">
              <span
                className="status-dot"
                style={{ background: "#FDB03B" }}
              ></span>

              <span className="status-name">
                Reserved
              </span>
            </div>

            <div className="status-right">
              <strong>18</strong>
              <span>(18%)</span>
            </div>

          </div>

          <div className="status-row">

            <div className="status-left">
              <span
                className="status-dot"
                style={{ background: "#9D83F7" }}
              ></span>

              <span className="status-name">
                Available
              </span>
            </div>

            <div className="status-right">
              <strong>8</strong>
              <span>(8%)</span>
            </div>

          </div>

          <div className="status-row">

            <div className="status-left">
              <span
                className="status-dot"
                style={{ background: "#D9DEE8" }}
              ></span>

              <span className="status-name">
                Maintenance
              </span>
            </div>

            <div className="status-right">
              <strong>2</strong>
              <span>(2%)</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default BookingStatus;