import { useState } from "react";
import "./ExpenseForm.css";
// import { initialObject } from "./Object";

export default function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // const [userImput, setUserImput] = useState(initialObject);

  // const imputChangeHandler = (event) => {
  //   const { name, value } = event.target;

  //   // setUserImput(() => ({
  //   //   ...userImput,
  //   //   [name]: value,
  //   // }));
  //   setUserImput((prev) => {
  //     console.log(prev);
  //     return { ...prev, [name]: value };
  //   });

  //   setUserImput((prev) => {
  //     if (prev.title === "bruno") {
  //       console.log("pippo");
  //     }

  //     return { ...prev, [name]: value };
  //   });
  // };

  const titleChangeHandler = (event) => {
    // setUserImput({...userImput, Title: event.target.value });
    // setUserImput((preState) => {
    //   // return { ...preState, title: event.target.value };
    // });
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  // const cancelHandler = () => {
  //   setTitle("");
  //   setAmount("");
  //   setDate("");
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = { title: title, amount: +amount, date: new Date(date) };

    props.oneSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            // name="title"
            value={title}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amount}
            // name="amount"
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            // name="date"
            value={date}
            type="date"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  );
}
