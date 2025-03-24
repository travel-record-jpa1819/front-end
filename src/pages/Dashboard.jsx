import styles from "./Dashboard.module.css";
import Sidebar from "../components/Sidebar";
import WorldMap from "../components/WorldMap";
import UserNav from "../components/Navbar/UserNav";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <UserNav />

      <div className={styles.mainContent}>
        <Sidebar />
        <WorldMap />
      </div>
    </div>
  );
}

export default Dashboard;
