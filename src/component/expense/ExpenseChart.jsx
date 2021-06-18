import React from "react";
import Chart from "../chart/Chart";
export default function ExpenseChart(props) {
  const amountArray = props.data.map((el) => el.amount);
  const maxAmount = Math.round(Math.max(...amountArray));
  const chartData = [
    { label: "Jan", value: 0 },
    { label: "Fab", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const perMonth of props.data) {
    //! it will give 0 to 11 value based on month
    const monthToChangeValue = perMonth.date.getMonth();
    chartData[monthToChangeValue].value += perMonth.amount;
  }
  return <Chart dataSet={chartData} max={maxAmount} />;
}
