import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { FaEllipsisH } from "react-icons/fa";
import { useState } from "react";

const todayData = [
  { day: "11 AM", booked: 12, cancelled: 1 },
  { day: "12 PM", booked: 18, cancelled: 2 },
  { day: "1 PM", booked: 15, cancelled: 1 },
  { day: "2 PM", booked: 22, cancelled: 2 },
  { day: "3 PM", booked: 28, cancelled: 3 },
  { day: "4 PM", booked: 25, cancelled: 2 },
  { day: "5 PM", booked: 30, cancelled: 2 },
  { day: "6 PM", booked: 34, cancelled: 3 },
  { day: "7 PM", booked: 38, cancelled: 2 },
  { day: "8 PM", booked: 42, cancelled: 4 },
  { day: "9 PM", booked: 40, cancelled: 3 },
  { day: "10 PM", booked: 46, cancelled: 2 },
  { day: "11 PM", booked: 50, cancelled: 3 },
];

const weekData = [
  { day: "Mon", booked: 70, cancelled: 8 },
  { day: "Tue", booked: 58, cancelled: 9 },
  { day: "Wed", booked: 88, cancelled: 10 },
  { day: "Thu", booked: 80, cancelled: 9 },
  { day: "Fri", booked: 70, cancelled: 10 },
  { day: "Sat", booked: 82, cancelled: 9 },
  { day: "Sun", booked: 82, cancelled: 9 },
];


const monthData = [
  { day: "Week 1", booked: 320, cancelled: 28 },
  { day: "Week 2", booked: 350, cancelled: 24 },
  { day: "Week 3", booked: 390, cancelled: 30 },
  { day: "Week 4", booked: 430, cancelled: 26 },
];

const yearData = [
  { day: "Jan", booked: 980, cancelled: 82 },
  { day: "Feb", booked: 1040, cancelled: 74 },
  { day: "Mar", booked: 1150, cancelled: 90 },
  { day: "Apr", booked: 1100, cancelled: 81 },
  { day: "May", booked: 1220, cancelled: 88 },
  { day: "Jun", booked: 1280, cancelled: 92 },
  { day: "Jul", booked: 1320, cancelled: 95 },
  { day: "Aug", booked: 1260, cancelled: 86 },
  { day: "Sep", booked: 1340, cancelled: 89 },
  { day: "Oct", booked: 1400, cancelled: 93 },
  { day: "Nov", booked: 1450, cancelled: 91 },
  { day: "Dec", booked: 1500, cancelled: 96 },
];

export default function BookingOverview() {
  const [range, setRange] = useState("week");

 const data =
  range === "today"
    ? todayData
    : range === "week"
    ? weekData
    : range === "month"
    ? monthData
    : yearData;

  return (
    <div className="booking-overview-card">

      <div className="booking-top">

        <div>
          <h3>Booking Overview</h3>

          <div className="booking-legend">

            <span>
              <div className="green-dot"></div>
              Booked
            </span>

            <span>
              <div className="pink-dot"></div>
              Cancelled
            </span>

          </div>

        </div>

        <div className="booking-actions">
<select
  value={range}
  onChange={(e) => setRange(e.target.value)}
>
  <option value="today">Today</option>
  <option value="week">Week</option>
  <option value="month">Month</option>
  <option value="year">Year</option>
</select>
          <FaEllipsisH />

        </div>

      </div>

      <ResponsiveContainer width="100%" height={300}>
<BarChart
    data={data}
    barGap={0}
    barCategoryGap="15%"
>

          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke="#e8edf4"
          />

   <XAxis
    dataKey="day"
    tickLine={false}
    axisLine={false}
    interval={0}
    padding={{ left: 0, right: 0 }}
/>       <YAxis
    tickLine={false}
    axisLine={false}
    width={30}
/>
          <Tooltip />

          <Bar
            dataKey="booked"
            stackId="a"
            fill="#25B99A"
            radius={[4, 4, 0, 0]}
          />

          <Bar
            dataKey="cancelled"
            stackId="a"
            fill="#F77BA6"
            radius={[4, 4, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}