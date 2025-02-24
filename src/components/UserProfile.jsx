import { logoutUser } from "../services/authService";

export default function UserProfile({ user, setUser }) {
  async function handleLogout() {
    await logoutUser();
    setUser(null);
  }

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <img src={user.picture} alt="Profile" />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
