import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://api.frankfurter.app/latest';

export default function useCurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState('USD');
  const [toCur, setToCur] = useState('EUR');
  const [rate, setRate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRate = async () => {
      if (fromCur === toCur) {
        setRate(1);
        return;
      }

      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `${API_URL}?from=${fromCur}&to=${toCur}`
        );
        setRate(data.rates[toCur]);
        setError('');
      } catch (err) {
        setError('Failed to fetch exchange rates. Please try again later.');
        setRate(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRate();
  }, [fromCur, toCur]);

  const convertedAmount = rate ? (amount * rate).toFixed(2) : '—';

  const swapCurrencies = () => {
    setFromCur(toCur);
    setToCur(fromCur);
  };

  return {
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
  };
}