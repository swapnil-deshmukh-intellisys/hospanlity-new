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

const todayData = [
  { name: "11 AM", revenue: 18000 },
  { name: "12 PM", revenue: 24000 },
  { name: "1 PM", revenue: 22000 },
  { name: "2 PM", revenue: 31000 },
  { name: "3 PM", revenue: 42000 },
  { name: "4 PM", revenue: 47000 },
  { name: "5 PM", revenue: 52000 },
  { name: "6 PM", revenue: 56000 },
  { name: "7 PM", revenue: 61000 },
  { name: "8 PM", revenue: 68000 },
  { name: "9 PM", revenue: 72000 },
  { name: "10 PM", revenue: 78000 },
  { name: "11 PM", revenue: 85000 },
];
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
  range === "today"
    ? todayData
    : range === "week"
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
  <option value="today">Today</option>
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
  interval={0}
  tickLine={false}
  axisLine={false}
  tick={{
    fill: "#7d879c",
    fontSize: 12,
  }}
/>      <YAxis
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