import { FaBackspace } from "react-icons/fa";

function Expenses({ expense, remove }) {
  return (
    <div className="expense">
      <div>💲{expense.amount}</div>
      <div>{expense.description}</div>
      <div>
        <FaBackspace
          className="remove"
          size={30}
          color={"red"}
          onClick={() => remove(expense.id)}
        />
      </div>
    </div>
  );
}

export default Expenses;
