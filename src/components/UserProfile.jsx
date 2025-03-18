import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authService";

export default function UserProfile({ user, setUser }) {
  const naviagte = useNavigate();

  async function handleLogout() {
    await logoutUser();
    setUser(null);
    naviagte('/')  
  }

  if (!user) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      {user.photo && <img src={user.photo} alt="Profile" width="100" />}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
