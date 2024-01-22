import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

export default function NewExpense({ onAddExpense }) {
  const [isAddingExpense, setIsAddingExpense] = useState(false);
  const oneSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    console.log(expenseData);
    onAddExpense(expenseData);
    toggleAddingExpense();
  };
  const toggleAddingExpense = () => {
    setIsAddingExpense(!isAddingExpense);
  };
  // const startAddingExpense = () => {
  //   setIsAddingExpense(true);
  // };
  // const stoptAddingExpense = () => {
  //   setIsAddingExpense(false);
  // };

  return (
    <div className="new-expense">
      {!isAddingExpense && (
        <button onClick={toggleAddingExpense}>Add new Expenses</button>
      )}
      {isAddingExpense && (
        <ExpenseForm
          onCancel={toggleAddingExpense}
          oneSaveExpenseData={oneSaveExpenseDataHandler}
        />
      )}
    </div>
  );
}
