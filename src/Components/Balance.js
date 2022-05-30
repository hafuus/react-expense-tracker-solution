function Balance({ total }) {
  return (
    <div className="balance space">
      <div>Total Expense:</div>
      <div>
        <b>💲{total}</b>
      </div>
    </div>
  );
}

export default Balance;
