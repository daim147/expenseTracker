import React, { useState } from "react";
import { ExpenseItem } from "./expenseItem/ExpenxseItem";
import "./Expense.css";
import Card from "../card/Card";
import ExpensesFilter from "../filter/ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

export default function Expense(props) {
  // ! by default year is set to nothing when this component is rendered again the year will be not be remain nothing it will retain its value according to year selected when we use UseState default value will store only once after we set value it will retain the set value even we rendered the componet
  const [year, setYear] = useState("");
  // ! Filtering Data according to year Selected
  let filteredData = props.data.filter((data) =>
    data.date.getFullYear().toString().includes(`${year}`)
  );
  function filterData(e) {
    // ! here the value of year is setted not this is defualt value of year even we render the component
    console.log(e.target.value, "value");
    setYear(e.target.value);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        filterHandler={filterData}
        data={props.data}
        selected={year}
      />
      <ExpenseChart data={filteredData} />
      {filteredData[0] ? (
        filteredData.map((exp) => {
          return (
            <ExpenseItem
              key={exp.id}
              date={exp.date}
              handler={props.remove}
              title={exp.title}
              amount={exp.amount}
            />
          );
        })
      ) : (
        <p>No Expenses Found</p>
      )}
    </Card>
  );
}
