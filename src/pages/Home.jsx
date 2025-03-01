import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <main className={styles.homepage}>
      <Navbar />
      <section>
        <div>
          <h1>
            Let Travelog <br /> Track Your Trip
            <br /> Travel The World
          </h1>
          <h2>
            A world map that tracks your journey <br />
            and gives suggestions that fit your style.
          </h2>
          <Link to="/login" className="cta">Travelog!</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
