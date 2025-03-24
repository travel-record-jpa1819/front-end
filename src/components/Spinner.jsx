import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
}

export default Spinner;
