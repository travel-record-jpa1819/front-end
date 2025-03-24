import { useAuth } from "../context/AuthContext";
import UserProfile from "../components/UserProfile";
import { Link } from "react-router-dom";

function Profile() {
  const { user } = useAuth();

  return (
    <div>
      <UserProfile user={user} />
      <Link to="/dashboard">Link to dashboard</Link>
    </div>
  );
}

export default Profile;
