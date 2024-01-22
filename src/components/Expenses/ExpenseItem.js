import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 297.54;
  //   const expenseDate = new Date(2021, 2, 28);
  // let title = props.title;
  const handleClick = () => {
    setTitle("updated");
  };

  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />

        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={handleClick}>Change title </button>
      </Card>
    </>
  );
};

export default ExpenseItem;
