export default function ResultDisplay({
    amount,
    fromCur,
    toCur,
    convertedAmount,
    rate,
    isLoading,
    error
  }) {
    if (error) return <div className="error">{error}</div>;
    
    return (
      <div className="result">
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            <div className="converted-amount">
              {amount} {fromCur} = {convertedAmount} {toCur}
            </div>
            {rate && (
              <div className="rate-info">
                1 {fromCur} = {rate.toFixed(4)} {toCur}
              </div>
            )}
          </>
        )}
      </div>
    );
  }