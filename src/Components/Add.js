import { FaPlus } from "react-icons/fa";
// context
function Add() {
  return (
    <div className="add-expense space">
      <input className="expense-amount" type="number" placeholder="$" />
      <input
        className="expense-input"
        type="text"
        placeholder="Add expense description"
      />
      <button className="expense-button">
        <FaPlus />
      </button>
    </div>
  );
}

export default Add;
