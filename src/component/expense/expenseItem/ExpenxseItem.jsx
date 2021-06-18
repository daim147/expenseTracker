import React from "react";
import "./ExpenseItem.css";
import { ExpenseDate } from "../expenseDate/ExpenseDate";
import Card from "../../card/Card";
export const ExpenseItem = (props) => {
  return (
    <Card className="expense-item ">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description ">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

ExpenseItem.defaultProps = {
  date: new Date(),
  title: "Home Loan",
  amount: "$500.0",
};
