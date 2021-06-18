import React from "react";
import "./ExpenseDate.css";
export const ExpenseDate = (props) => {
  const [day, month, year] = new Intl.DateTimeFormat("en-gb", {
    month: "long",
    year: "numeric",
    day: "numeric",
  })
    .format(props.date)
    .split(" ");
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

ExpenseDate.defaultProps = {
  date: new Date(),
};
