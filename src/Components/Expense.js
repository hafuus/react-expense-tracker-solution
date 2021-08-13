import { FaBackspace } from "react-icons/fa";

function Expenses() {
  return (
    <div className="expense">
      <div>💲200</div>
      <div>Some bit of description about expense</div>
      <div>
        <FaBackspace className="remove" size={30} color={"red"} />
      </div>
    </div>
  );
}

export default Expenses;
