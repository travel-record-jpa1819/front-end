import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

import Logo from "./Logo";
import GoogleLogin from "./GoogleLogin";
import GithubLogo from "./GithubLogo";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/features">Features</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/resources">Resources</NavLink>
        </li>
      </ul>
      
      <ul>
        <li>
          <a href="https://github.com/travel-record-jpa1819">
            <GithubLogo />
          </a>
        </li>
        <li>
          <NavLink to="/login">
            <GoogleLogin />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
