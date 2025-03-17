import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";
import Logo from "./Logos/Logo";
import AppNav from "./Navbar/AppNav";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
    </div>
  );
}

export default Sidebar;
