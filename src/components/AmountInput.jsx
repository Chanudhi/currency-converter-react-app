export default function AmountInput({ value, onChange }) {
    return (
      <div className="input-group">
        <label>Amount</label>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          min="0"
          step="0.01"
          placeholder="Enter amount"
        />
      </div>
    );
  }