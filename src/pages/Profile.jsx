import { useState, useEffect } from "react";
import UserProfile from "../components/UserProfile";
import { checkAuthStatus } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      const userData = await checkAuthStatus();
      if (userData) {
        setUser(userData);
      } else {
        navigate("/");
      }
    }
    fetchUser();
  }, [navigate]);

  return (
    <div>
      {user ? <UserProfile user={user} setUser={setUser} /> : <h1>No user</h1>}
    </div>
  );
}

export default Profile;
