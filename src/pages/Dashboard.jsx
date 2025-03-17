import styles from './Dashboard.module.css'
import Sidebar from "../components/Sidebar"
import WorldMap from "../components/WorldMap"

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Sidebar/>
      <WorldMap/>
    </div>
  )
}

export default Dashboard;
