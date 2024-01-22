import "./ExpenseFilter.css";

export default function ExpenseFilter(props) {
  return (
    <div className=" expense-filter">
      <div className="expenses-filter__control">
        <label> Filter by year</label>

        <select {...props}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
}
