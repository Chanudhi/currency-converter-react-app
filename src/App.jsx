import useCurrencyConverter from './hooks/useCurrencyConverter';
import AmountInput from './components/AmountInput';
import CurrencySelect from './components/CurrencySelect';
import SwapButton from './components/SwapButton';
import ResultDisplay from './components/ResultDisplay';

export default function App() {
  const {
    amount,
    setAmount,
    fromCur,
    setFromCur,
    toCur,
    setToCur,
    convertedAmount,
    rate,
    isLoading,
    error,
    swapCurrencies,
  } = useCurrencyConverter();

  return (
    <div className="converter-container">
      <h1>Currency Converter</h1>
      
      <AmountInput value={amount} onChange={setAmount} />
      
      <div className="currency-row">
        <CurrencySelect
          label="From"
          value={fromCur}
          onChange={setFromCur}
        />
        
        <SwapButton onClick={swapCurrencies} />
        
        <CurrencySelect
          label="To"
          value={toCur}
          onChange={setToCur}
        />
      </div>

      <ResultDisplay
        amount={amount}
        fromCur={fromCur}
        toCur={toCur}
        convertedAmount={convertedAmount}
        rate={rate}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}