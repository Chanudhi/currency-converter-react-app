import { FiRepeat } from 'react-icons/fi';

export default function SwapButton({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="swap-btn"
      aria-label="Swap currencies"
    >
      <FiRepeat size={24} />
    </button>
  );
}