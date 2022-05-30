import { FaPlus } from "react-icons/fa";
import { useState } from "react";
// context
function Add({ addExpense }) {
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  return (
    <div className="add-expense space">
      <input
        className="expense-amount"
        type="number"
        placeholder="$"
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        className="expense-input"
        type="text"
        placeholder="Add expense description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <select>
        <option>Expense</option>
        <option>Income</option>
      </select>
      <button
        className="expense-button"
        onClick={() => addExpense(amount, description)}
      >
        <FaPlus />
      </button>
    </div>
  );
}

export default Add;
