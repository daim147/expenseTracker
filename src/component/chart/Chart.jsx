import React from "react";
import "./Chart.css";
import ChartBar from "./chartBar/ChartBar";
export default function Chart(props) {
  return (
    <div className="chart">
      {props.dataSet.map((data) => {
        return (
          <ChartBar
            label={data.label}
            value={data.value}
            maxValue={props.max}
            key={data.label}
          />
        );
      })}
    </div>
  );
}
