import React, { useState } from "react";
import "./Form.css";
export default function From(props) {
  const [inputData, setInputData] = useState({
    title: "",
    amount: "",
    date: "",
  });
  //   ! Clear All input Data
  function clear() {
    setInputData({
      title: "",
      amount: "",
      date: "",
    });
  }
  //   ! Change Data in state
  function changedata(e) {
    setInputData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  //   ! Submit data and pass the data to NewExpense.js and from there to App.js
  function dataSubmition(e) {
    e.preventDefault();

    // * make data object from all inputs
    const data = {
      ...inputData,
      date: new Date(inputData.date),
    };
    // * Pass data
    props.onSaveHandler(data);

    // * clear Data
    clear();

    // * hide Form
    props.hideForm();
  }
  return (
    <form onSubmit={dataSubmition}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            required
            value={inputData.title}
            onChange={changedata}
            name="title"
            type="text"
            id="title"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            required
            onChange={changedata}
            name="amount"
            type="number"
            id="amount"
            value={inputData.amount}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            required
            onChange={changedata}
            name="date"
            type="date"
            value={inputData.date}
            id="date"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
