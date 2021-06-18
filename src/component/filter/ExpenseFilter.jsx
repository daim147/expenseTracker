import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  // ! fetching year from data to display options for them
  const dateArray = props.data.map((el) => el.date.getFullYear());
  const dateArrayOfSet = ["", ...new Set(dateArray)];

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/*! setting value of selected which is selected by us !*/}
        <select value={props.selected} onChange={props.filterHandler}>
          {dateArrayOfSet.map((el) => (
            <option value={`${el}`} key={Math.random() * 10}>
              {el === "" ? "All" : el}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
