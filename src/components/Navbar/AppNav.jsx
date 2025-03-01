import { NavLink } from "react-router-dom"

function AppNav() {
  return (
    <nav>
      <ul>
      <li><NavLink to="countries">Countries</NavLink></li>
      <li><NavLink to="profile">Profile</NavLink></li>
      </ul>
    </nav>
  )
}

export default AppNav
