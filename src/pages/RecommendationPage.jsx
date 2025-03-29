import Recommendation from "../components/Recommendation";
import UserNav from "../components/Navbar/UserNav";
import styles from "./RecommendationPage.module.css";
import ChatBot from "../components/ChatBot";

function RecommendationPage() {
  return (
    <main className={styles.background}>
      <UserNav />
      <h1>Ai Recommendation</h1>
      <Recommendation />
      <ChatBot/>
    </main>
  );
}

export default RecommendationPage;
