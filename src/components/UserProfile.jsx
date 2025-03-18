import { logoutUser } from "../services/authService";

export default function UserProfile({ user, setUser }) {
  async function handleLogout() {
    await logoutUser();
    setUser(null);
  }

  if (!user) return <h2>Loading...</h2>;
  console.log(user.photo);

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      {user.photo && <img src={user.photo} alt="Profile" width="100" />}
    </div>
  );
}
