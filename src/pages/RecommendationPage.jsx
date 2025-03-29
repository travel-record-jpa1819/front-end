import Recommendation from "../components/Recommendation";
import UserNav from "../components/Navbar/UserNav";
import styles from "./RecommendationPage.module.css";
import ChatBot from "../components/ChatBot";
import { Link } from "react-router-dom";

function RecommendationPage() {
  return (
    <main className={styles.background}>
      <UserNav />
      <div className={styles.mainContent}>
        <h1>Ai Recommendation</h1>
        <Recommendation />
        <Link to="/dashboard" className="bta">
          Back
        </Link>
      </div>
      <ChatBot />
    </main>
  );
}

export default RecommendationPage;
