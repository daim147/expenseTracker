import React, { useState, useEffect } from "react";
import "./App.css";
import Expense from "./component/expense/Expense";
import NewExpense from "./component/NewExpense/NewExpense";
let expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
let storeLocalData = JSON.parse(localStorage.getItem("expense"));
// ! Check if local storage has store value
if (storeLocalData) {
  storeLocalData.forEach((data, i) => {
    //! converting string of date into Object
    storeLocalData[i].date = new Date(data.date);
  });
  expenses = storeLocalData;
}
function App() {
  // ! Making state of expense data
  const [expenseData, updateExpenseData] = useState(expenses);

  // ! Recieving Data from newExpenses and adding to expense data
  const addExpense = (expense) => {
    expense = {
      ...expense,
      id: (Math.random() * 10).toString(),
    };
    updateExpenseData((prev) => [expense, ...prev]);
  };
  // ! Saving to local Storage
  function saveLocal() {
    localStorage.setItem("expense", JSON.stringify(expenseData));
  }
  // ! Remove expenses
  function removeExpense(date) {
    const index = expenseData.findIndex((obj) => obj.date === date);

    updateExpenseData((prev) => {
      prev.splice(index, 1);
      return [...prev];
    });
  }
  // ! it will call saveLocal when ever component got render
  useEffect(saveLocal);
  return (
    <div>
      <NewExpense onSaveHandler={addExpense} />
      <Expense data={expenseData} remove={removeExpense} />
    </div>
  );
}

export default App;
