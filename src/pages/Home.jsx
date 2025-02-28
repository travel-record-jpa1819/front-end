import styles from './Home.module.css'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <main className={styles.homepage}>
      <Navbar />
      <section>
        <h1>
          Travel The World <br /> Travlog keeps track of your adventures
        </h1>
        <h2>
          A world map that tracks your journey and gives suggestions based on AI
          algorithms to make your next destination fit your style.
        </h2>
      <Link to='/login'>Link to login</Link>
      </section>
    </main>
  );
}

export default Home;
