import React, { useState } from "react";

import Expenses from "./components/expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Laptop",
    amount: 899.99,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Rent",
    amount: 700,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Investments",
    amount: 500,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}
export default App;
