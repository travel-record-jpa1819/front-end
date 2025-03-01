import { Outlet } from "react-router-dom"
import Logo from "./Logo/Logo"
import AppNav from "./Navbar/AppNav"

function Sidebar() {
  return (
    <div>
      <Logo/>
      <AppNav/>
      <Outlet/>
    </div>
  )
}

export default Sidebar
