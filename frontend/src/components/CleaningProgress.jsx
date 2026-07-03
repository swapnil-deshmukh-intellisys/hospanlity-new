import { useState } from "react";
import "./CleaningProgress.css";


const dataMap = {
  Today: {
    overall: 65,
    stats: [
      { label: "Clean Rooms", value: "40 / 120", percent: 33, color: "#22c55e" },
      { label: "In Progress", value: "30 / 120", percent: 25, color: "#3b82f6" },
      { label: "Dirty Rooms", value: "35 / 120", percent: 29, color: "#ef4444" },
      { label: "Out of Service", value: "15 / 120", percent: 13, color: "#64748b" },
    ],
  },
  Week: {
    overall: 72,
    stats: [
      { label: "Clean Rooms", value: "55 / 120", percent: 45, color: "#22c55e" },
      { label: "In Progress", value: "25 / 120", percent: 20, color: "#3b82f6" },
      { label: "Dirty Rooms", value: "30 / 120", percent: 25, color: "#ef4444" },
      { label: "Out of Service", value: "10 / 120", percent: 10, color: "#64748b" },
    ],
  },
  Month: {
    overall: 76,
    stats: [
      { label: "Clean Rooms", value: "58 / 120", percent: 48, color: "#22c55e" },
      { label: "In Progress", value: "24 / 120", percent: 20, color: "#3b82f6" },
      { label: "Dirty Rooms", value: "28 / 120", percent: 23, color: "#ef4444" },
      { label: "Out of Service", value: "10 / 120", percent: 9, color: "#64748b" },
    ],
  },
  Year: {
    overall: 82,
    stats: [
      { label: "Clean Rooms", value: "70 / 120", percent: 58, color: "#22c55e" },
      { label: "In Progress", value: "20 / 120", percent: 17, color: "#3b82f6" },
      { label: "Dirty Rooms", value: "20 / 120", percent: 17, color: "#ef4444" },
      { label: "Out of Service", value: "10 / 120", percent: 8, color: "#64748b" },
    ],
  },
};

export default function CleaningProgress() {
  const [activeTab, setActiveTab] = useState("Month");

  const { overall, stats } = dataMap[activeTab];

  return (
    <div className="cp-container">
      {/* Header */}
      <div className="cp-header">
        <h2>Cleaning Progress</h2>

        <div className="cp-tabs">
          {["Today", "Week", "Month", "Year"].map((tab) => (
            <button
              key={tab}
              className={`cp-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="cp-body">
        {/* Circle */}
        <div className="cp-circleBox">
          <div
            className="cp-circle"
            style={{
              background: `conic-gradient(#6366f1 ${overall * 3.6}deg, #e5e7eb 0deg)`,
            }}
          >
            <div className="cp-inner">
              <h1>{overall}%</h1>
              <p>Overall Progress</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="cp-stats">
          {stats.map((item, i) => (
            <div className="cp-row" key={i}>
              <div className="cp-rowTop">
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>

              <div className="cp-bar">
                <div
                  className="cp-fill"
                  style={{
                    width: `${item.percent}%`,
                    background: item.color,
                  }}
                />
              </div>

              <small>{item.percent}%</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}