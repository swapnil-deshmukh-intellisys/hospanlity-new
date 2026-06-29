import React, { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";



const weekData = [
  { name: "Mon", revenue: 165000 },
  { name: "Tue", revenue: 215000 },
  { name: "Wed", revenue: 185000 },
  { name: "Thu", revenue: 255000 },
  { name: "Fri", revenue: 245000 },
  { name: "Sat", revenue: 285000 },
  { name: "Sun", revenue: 340000 },
];

const monthData = [
  { name: "Week 1", revenue: 760000 },
  { name: "Week 2", revenue: 980000 },
  { name: "Week 3", revenue: 1180000 },
  { name: "Week 4", revenue: 1320000 },
];

const yearData = [
  { name: "Jan", revenue: 950000 },
  { name: "Feb", revenue: 1100000 },
  { name: "Mar", revenue: 1350000 },
  { name: "Apr", revenue: 1260000 },
  { name: "May", revenue: 1480000 },
  { name: "Jun", revenue: 1710000 },
  { name: "Jul", revenue: 1640000 },
  { name: "Aug", revenue: 1850000 },
  { name: "Sep", revenue: 1780000 },
  { name: "Oct", revenue: 1940000 },
  { name: "Nov", revenue: 2100000 },
  { name: "Dec", revenue: 2320000 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="revenue-tooltip">
      <span>{label}</span>
      <h4>₹{payload[0].value.toLocaleString()}</h4>
    </div>
  );
};

function RevenueOverview() {
  const [range, setRange] = useState("week");

  const chartData =
    range === "week"
      ? weekData
      : range === "month"
      ? monthData
      : yearData;

  return (
    <div className="revenue-card">

      <div className="revenue-header">

        <div>
          <h3>Revenue Overview</h3>
          <p>Hotel Revenue Analytics</p>
        </div>

       <select
  value={range}
  onChange={(e) => setRange(e.target.value)}
  className="revenue-select"
>
  <option value="week">Week</option>
  <option value="month">Month</option>
  <option value="year">Year</option>
</select>

      </div>

      <ResponsiveContainer width="100%" height={320}>
        <AreaChart
          data={chartData}
          margin={{
            top: 25,
            right: 20,
            left: 10,
            bottom: 10,
          }}
        >
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#18b394" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#18b394" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke="#edf1f7"
            strokeDasharray="4 4"
            vertical={false}
          />

          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
            tick={{
              fill: "#7d879c",
              fontSize: 13,
            }}
          />

          <YAxis
            tickFormatter={(value) => `₹${value / 1000}K`}
            tick={{
              fill: "#7d879c",
              fontSize: 13,
            }}
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            cursor={{
              stroke: "#18b394",
              strokeDasharray: "4 4",
            }}
            content={<CustomTooltip />}
          />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#18b394"
            strokeWidth={4}
            fill="url(#revenueGradient)"
            activeDot={{
              r: 7,
              stroke: "#18b394",
              strokeWidth: 4,
              fill: "#fff",
            }}
            dot={{
              r: 0,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueOverview;