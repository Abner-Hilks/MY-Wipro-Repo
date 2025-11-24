import React from "react";
import withWindowWidth from "../withWindowWidth";

// Simple component that displays windowWidth and changes color above/below 600px
function ResponsiveBox({ windowWidth }) {
  const boxStyle = {
    padding: "16px",
    backgroundColor: windowWidth > 600 ? "#4CAF50" : "#FF5722",
    color: "white",
    borderRadius: "6px",
    width: "320px",
  };

  return (
    <div className="card" style={boxStyle}>
      <h3>Screen Width Tracker</h3>
      <p>Current Width: {windowWidth}px</p>
      <p style={{ fontSize: "0.9rem" }}>This box updates on window resize.</p>
    </div>
  );
}

const EnhancedBox = withWindowWidth(ResponsiveBox);

export default function Q5_HOCDemo() {
  return (
    <div>
      <h2>Q5 — Reusable HOC (windowWidth)</h2>
      <EnhancedBox />
    </div>
  );
}
