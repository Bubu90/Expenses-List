import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

export default function Expenses({ expenses }) {
  const [selectedData, setSelectedData] = useState("2020");
  // const [filterInfoText, setFilterInfotext] = useState("2021 ,2021 & 2022");
  // const handleChangeData = (event) => {
  //   setSelectedData(event.target.value);
  // };
  // const filterChangeHandler=
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedData;
  });
  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          onChange={(event) => setSelectedData(event.target.value)}
          value={selectedData}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {expenses
          .filter(
            (expense) => +selectedData === new Date(expense.date).getFullYear()
          )
          .map((expense) => {
            return <ExpenseItem key={expense.id} {...expense} />;
          })}
      </Card>
    </>
  );
}
