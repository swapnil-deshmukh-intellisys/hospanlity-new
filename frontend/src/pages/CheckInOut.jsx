import "./CheckInOut.css";
import { useState } from "react";
import List from "../pages/List";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  FaBell,
  FaCalendarAlt,
  FaClock,
  FaChevronDown,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";

export default function CheckInOut() {

  /* ===========================
            STATE
  =========================== */

  const [selectedCheckIn, setSelectedCheckIn] = useState("today");
  const [selectedCheckOut, setSelectedCheckOut] = useState("today");

  /* ===========================
          CHECK-IN DATA
  =========================== */

  const checkInData = {

    today:{
      title:"TODAY'S CHECK-IN",
      guests:"Guests",
      total:25,

      chart:[
        {time:"11 AM",value:5},
        {time:"12 PM",value:10},
        {time:"01 PM",value:20},
        {time:"02 PM",value:18},
        {time:"03 PM",value:24},
        {time:"04 PM",value:26},
        {time:"05 PM",value:35},
        {time:"06 PM",value:24},
        {time:"07 PM",value:20},
        {time:"08 PM",value:21},
        {time:"09 PM",value:22},
        {time:"10 PM",value:14},
        {time:"11 PM",value:10},
      ]
    },

    week:{
      title:"THIS WEEK CHECK-IN",
      guests:"Guests",
      total:176,

      chart:[
        {time:"Mon",value:25},
        {time:"Tue",value:32},
        {time:"Wed",value:28},
        {time:"Thu",value:36},
        {time:"Fri",value:42},
        {time:"Sat",value:46},
        {time:"Sun",value:39},
      ]
    },

    month:{
      title:"THIS MONTH CHECK-IN",
      guests:"Guests",
      total:742,

      chart:[
        {time:"W1",value:120},
        {time:"W2",value:180},
        {time:"W3",value:220},
        {time:"W4",value:260},
      ]
    },

    year:{
      title:"THIS YEAR CHECK-IN",
      guests:"Guests",
      total:8425,

      chart:[
        {time:"Jan",value:520},
        {time:"Feb",value:610},
        {time:"Mar",value:700},
        {time:"Apr",value:760},
        {time:"May",value:820},
        {time:"Jun",value:910},
        {time:"Jul",value:980},
        {time:"Aug",value:1020},
        {time:"Sep",value:930},
        {time:"Oct",value:990},
        {time:"Nov",value:1060},
        {time:"Dec",value:1180},
      ]
    }

  };

  /* ===========================
          CHECK-OUT DATA
  =========================== */

  const checkOutData = {

    today:{
      title:"TODAY'S CHECK-OUT",
      guests:"Guests",
      total:18,

      chart:[
        {time:"11 AM",value:2},
        {time:"12 PM",value:6},
        {time:"01 PM",value:14},
        {time:"02 PM",value:12},
        {time:"03 PM",value:16},
        {time:"04 PM",value:18},
        {time:"05 PM",value:28},
        {time:"06 PM",value:16},
        {time:"07 PM",value:10},
        {time:"08 PM",value:11},
        {time:"09 PM",value:13},
        {time:"10 PM",value:8},
        {time:"11 PM",value:4},
      ]
    },

    week:{
      title:"THIS WEEK CHECK-OUT",
      guests:"Guests",
      total:131,

      chart:[
        {time:"Mon",value:18},
        {time:"Tue",value:22},
        {time:"Wed",value:17},
        {time:"Thu",value:24},
        {time:"Fri",value:28},
        {time:"Sat",value:31},
        {time:"Sun",value:23},
      ]
    },

    month:{
      title:"THIS MONTH CHECK-OUT",
      guests:"Guests",
      total:615,

      chart:[
        {time:"W1",value:120},
        {time:"W2",value:145},
        {time:"W3",value:170},
        {time:"W4",value:180},
      ]
    },

    year:{
      title:"THIS YEAR CHECK-OUT",
      guests:"Guests",
      total:7218,

      chart:[
        {time:"Jan",value:450},
        {time:"Feb",value:520},
        {time:"Mar",value:610},
        {time:"Apr",value:680},
        {time:"May",value:720},
        {time:"Jun",value:760},
        {time:"Jul",value:820},
        {time:"Aug",value:790},
        {time:"Sep",value:760},
        {time:"Oct",value:840},
        {time:"Nov",value:910},
        {time:"Dec",value:980},
      ]
    }

  };

  const inData = checkInData[selectedCheckIn];
  const outData = checkOutData[selectedCheckOut];

    return (
    <div className="cio-container">

      {/* ================= HEADER ================= */}

      <div className="cio-header">

        <div className="header-left">

          <h1>Check-in / Check-out </h1>

          <p>
            Real-time guest arrival & departure tracking
          </p>

        </div>

        <div className="header-right">

          <button className="date-btn">
            <FaCalendarAlt />
            <span>19 May 2026</span>
          </button>

          <button className="notification-btn">
            <FaBell />
            <span className="badge">5</span>
          </button>

          <div className="profile-box">

            <img
              src="https://i.pravatar.cc/80?img=12"
              alt="profile"
            />

            <div className="profile-info">

              <h4>Arjun Mehta</h4>

              <span>Manager</span>

            </div>

            <FaChevronDown />

          </div>

        </div>

      </div>

      {/* ================= TIME BAR ================= */}

  

      {/* ================= GRAPH ROW ================= */}

      <div className="graphs-row">

        {/* ================= CHECK-IN CARD ================= */}

        <div className="graph-card checkin-card">

          <div className="graph-top">

            <div className="graph-heading">

              <div className="graph-icon green">

                <FaSignInAlt />

              </div>

              <div>

                <span>{inData.title}</span>

                <h2>{inData.total}</h2>

                <small>{inData.guests}</small>

              </div>

            </div>

            <div className="graph-filter">

              {["today", "week", "month", "year"].map((item) => (

                <button
                  key={item}
                  className={
                    selectedCheckIn === item
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setSelectedCheckIn(item)
                  }
                >
                  {item.charAt(0).toUpperCase() +
                    item.slice(1)}
                </button>

              ))}

            </div>

          </div>

          <ResponsiveContainer
            width="100%"
            height={260}
          >

            <AreaChart data={inData.chart}>

              <defs>

                <linearGradient
                  id="greenFill"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="0%"
                    stopColor="#16a34a"
                    stopOpacity={0.35}
                  />

                  <stop
                    offset="100%"
                    stopColor="#16a34a"
                    stopOpacity={0}
                  />

                </linearGradient>

              </defs>

              <CartesianGrid
                vertical={false}
                stroke="#eef2f7"
              />

              <XAxis dataKey="time" />

              <YAxis />

              <Tooltip />
                            <Area
                type="natural"
                dataKey="value"
                stroke="#10b981"
                strokeWidth={3}
                fill="url(#greenFill)"
                dot={{
                  r: 3,
                  fill: "#10b981",
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 6,
                  fill: "#10b981",
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

        {/* ================= CHECK-OUT CARD ================= */}

        <div className="graph-card checkout-card">

          <div className="graph-top">

            <div className="graph-heading">

              <div className="graph-icon red">

                <FaSignOutAlt />

              </div>

              <div>

                <span>{outData.title}</span>

                <h2>{outData.total}</h2>

                <small>{outData.guests}</small>

              </div>

            </div>

            <div className="graph-filter">

              {["today", "week", "month", "year"].map((item) => (

                <button
                  key={item}
                  className={
                    selectedCheckOut === item
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setSelectedCheckOut(item)
                  }
                >
                  {item.charAt(0).toUpperCase() +
                    item.slice(1)}
                </button>

              ))}

            </div>

          </div>

          <ResponsiveContainer
            width="100%"
            height={260}
          >

            <AreaChart data={outData.chart}>

              <defs>

                <linearGradient
                  id="redFill"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="0%"
                    stopColor="#ef4444"
                    stopOpacity={0.35}
                  />

                  <stop
                    offset="100%"
                    stopColor="#ef4444"
                    stopOpacity={0}
                  />

                </linearGradient>

              </defs>

              <CartesianGrid
                vertical={false}
                stroke="#eef2f7"
              />

              <XAxis dataKey="time" />

              <YAxis />

              <Tooltip />
                            <Area
                type="natural"
                dataKey="value"
                stroke="#ef4444"
                strokeWidth={3}
                fill="url(#redFill)"
                dot={{
                  r: 3,
                  fill: "#ef4444",
                  stroke: "#ffffff",
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 6,
                  fill: "#ef4444",
                  stroke: "#ffffff",
                  strokeWidth: 2,
                }}
              />

            </AreaChart>

          </ResponsiveContainer>

    </div>

      </div>

      {/* Guest List */}
      <List />

    </div>

  );

}