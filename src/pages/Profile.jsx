import { useAuth } from "../context/AuthContext";
import UserProfile from "../components/UserProfile";

function Profile() {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return <div>{user ? <UserProfile /> : <h1>No user</h1>}</div>;
}

export default Profile;
