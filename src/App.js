import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const currencies = [
    // Major currencies
    'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF',
    // Asian currencies
    'CNY', 'HKD', 'IDR', 'INR', 'KRW', 'LKR', 'MYR', 'PHP', 'SGD', 'THB', 'TWD', 'VND'
  ];

  useEffect(() => {
    const fetchExchangeRate = async () => {
      if (amount) {
        setLoading(true);
        try {
          const response = await fetch(
            `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
          );
          const data = await response.json();
          setExchangeRate(data.rates[toCurrency]);
          setConvertedAmount((amount * data.rates[toCurrency]).toFixed(2));
        } catch (error) {
          console.error('Error fetching exchange rate:', error);
        }
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, [amount, fromCurrency, toCurrency]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div className="App">
      <div className="converter-container">
        <h1>Currency Converter</h1>
        <div className="converter-form">
          <div className="input-group">
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount"
              className="amount-input"
            />
            <select
              value={fromCurrency}
              onChange={handleFromCurrencyChange}
              className="currency-select"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <input
              type="text"
              value={convertedAmount}
              readOnly
              placeholder="Converted amount"
              className="amount-input"
            />
            <select
              value={toCurrency}
              onChange={handleToCurrencyChange}
              className="currency-select"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          {loading && <div className="loading">Converting...</div>}
          {exchangeRate && !loading && (
            <div className="exchange-rate">
              1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
