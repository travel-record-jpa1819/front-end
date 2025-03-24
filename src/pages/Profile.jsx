import { useAuth } from "../context/AuthContext";
import UserProfile from "../components/UserProfile";

function Profile() {
  const { user } = useAuth();

  return (
    <div>
      <UserProfile user={user} />
    </div>
  );
}

export default Profile;
