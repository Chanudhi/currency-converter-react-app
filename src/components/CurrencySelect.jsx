import { CURRENCIES } from '../constants';

export default function CurrencySelect({ label, value, onChange }) {
  return (
    <div className="currency-select">
      <label>{label}</label>
      <select 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        className="select"
      >
        {CURRENCIES.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}