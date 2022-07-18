import ExpenseItem from "./ExpenseItem";

import "./Expense.css";
import Card from "./Card";

function Expense(props) {
  const expenses = [
    { date: new Date(2022, 11, 1), title: "Title1", amount: 123 },
    { date: new Date(2021, 10, 2), title: "Title2", amount: 1234 },
    { date: new Date(2020, 1, 3), title: "Title3", amount: 12345 },
  ];

  return (
    <Card className="expenses">
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      ></ExpenseItem>   
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      ></ExpenseItem>
    </Card>
  );
}

export default Expense;
