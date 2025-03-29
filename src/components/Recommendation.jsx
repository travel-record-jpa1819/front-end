import { useAi } from "../context/AiContext";
import styles from "./Recommendation.module.css";

function Recommendation() {
  const { data, isLoading } = useAi();

  if (isLoading) {
    return <div className={styles.loading}>Loading recommendations...</div>;
  }

  return (
    <div className={styles.container}>
      {data.map((rec) => (
        <div key={rec.id} className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.cardFront}>
                <img src="https://flagsapi.com/US/flat/64.png" height="100px"/>
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
  );
}

export default Recommendation;
