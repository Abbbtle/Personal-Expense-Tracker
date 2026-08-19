// import { useState } from 'react'
import './App.css'

function App() {
  const userName = "Tebogo";

  const expense1 = "Uber";
  const amount1 = 120;

  const expense2 = "Lunch";
  const amount2 = 85;

  const expense3 = "Coffee";
  const amount3 = 30;

  return (
    <div>
      <h1>Expense Tracker</h1>

      <p>Welcome {userName}</p>

      <p>{expense1} - R{amount1}</p>
      <p>{expense2} - R{amount2}</p>
      <p>{expense3} - R{amount3}</p>
    </div>
  );
}

export default App;