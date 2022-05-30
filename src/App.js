import "./App.css";
import Header from "./Components/Header";
import Add from "./Components/Add";
import Balance from "./Components/Balance";
import Expenses from "./Components/Expense";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  function addExpense(amount, description) {
    //code
    //amount , descriptio
    let id = expenses.length === 0 ? 1 : expenses[expenses.length - 1].id + 1;
    setExpenses([
      ...expenses,
      { id: id, amount: amount, description: description },
    ]);

    setTotal(total + Number(amount));
  }

  function removeExpense(id) {
    let filtered = expenses.filter((expense) => expense.id !== id);

    let remove = expenses.find((expense) => expense.id === id);
    console.log(remove.amount);
    setTotal(total - remove.amount);

    setExpenses(filtered);
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div>
          <Balance total={total} />
          <Add addExpense={addExpense} />

          {expenses.map((expense) => (
            <Expenses expense={expense} remove={removeExpense} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
