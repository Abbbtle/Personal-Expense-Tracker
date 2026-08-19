// import { useState } from 'react'
import './App.css'

function App() {
  const userName = "Tebogo";

  const expenses = [
    {
      name: "Uber",
      amount: 120
    },
    {
      name: "Lunch",
      amount: 85
    },
    {
      name: "Coffee",
      amount: 30
    }
  ]

  return (
    <div>
      <h1>Expense Tracker</h1>

      <p>Welcome {userName}</p>

      {expenses.map((expense) => (
        <p>
          {expense.name}: R{expense.amount}
        </p>
      ))}
    </div>
  );
}

export default App;