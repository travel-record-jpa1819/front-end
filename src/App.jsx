import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"
import CountryList from "./components/CountryList";

const googleLoginUrl = import.meta.env.VITE_GOOGLE_LOGIN_URL;

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="profile" element={<Profile />}></Route>
        <Route
          path="/"
          element={<Home googleLoginUrl={googleLoginUrl} />}
        ></Route>
        <Route path="dashboard" element={<Dashboard/>}>
          <Route index element={<CountryList/>}/>
            <Route path="countries" element={<CountryList/>}/>
            <Route path="profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </Router>
  );
}
