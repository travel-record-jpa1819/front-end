import styles from "./Recommendation.module.css";
import { useAi } from "../context/AiContext";

function Recommendation() {
  const { aiResponse } = useAi();

  return <main className={styles.background}>recommendation page</main>;
}

export default Recommendation;
