import React, { useState } from "react";
import "./NewExpense.css";
import Form from "./form/From";
export default function NewExpense(props) {
  const [bolean, showForm] = useState(false);
  function toogleForm() {
    showForm(!bolean);
  }
  return (
    <div className="new-expense">
      {bolean ? (
        <Form onSaveHandler={props.onSaveHandler} hideForm={toogleForm} />
      ) : (
        <button onClick={toogleForm}>New Expenses</button>
      )}
    </div>
  );
}
