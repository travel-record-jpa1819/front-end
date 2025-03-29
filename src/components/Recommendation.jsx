import { useAi } from "../context/AiContext";
import styles from "./Recommendation.module.css";

function Recommendation() {
  const { data, isLoading, refreshData } = useAi();

  if (isLoading) {
    return <div className={styles.loading}>Loading recommendations...</div>;
  }

  return (
    <>
      <button className={styles.refreshButton} onClick={refreshData}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="23 4 23 10 17 10"></polyline>
          <polyline points="1 20 1 14 7 14"></polyline>
          <path d="M3.51 9a9 9 0 0 1 14.13-3.36L23 10M1 14l5.34 4.66A9 9 0 0 0 20.49 15"></path>
        </svg>
      </button>
      <div className={styles.container}>
        {data.map((rec) => (
          <div key={rec.id} className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img src="https://flagsapi.com/US/flat/64.png" height="100px" />
                <h2 className={styles.cityName}>{rec.cityName}</h2>
              </div>
              <div className={styles.cardBack}>
                <p className={styles.climate}>
                  <strong>Climate:</strong> {rec.climate}
                </p>
                <p className={styles.exchangeRate}>
                  <strong>Exchange Rate (USD):</strong> {rec.exchangeRateUsd}
                </p>
                <div className={styles.touristSpots}>
                  <strong>Tourist Spots:</strong>
                  <ul>
                    {rec.touristSpots.map((spot, index) => (
                      <li key={index}>{spot}</li>
                    ))}
                  </ul>
                </div>
                <p className={styles.reason}>
                  <strong>Reason:</strong> {rec.reason}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Recommendation;
