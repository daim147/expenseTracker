import React from "react";
import "./ChartBar.css";
export default function ChartBar(props) {
  let barHeight = "0%";
  if (props.maxValue > 0) {
    barHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div style={{ height: barHeight }} className="chart-bar__fill"></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}
