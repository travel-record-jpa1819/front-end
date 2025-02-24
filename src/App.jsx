import { useEffect, useState } from "react";
import GoogleLogin from "./components/GoogleLogin";
import UserProfile from "./components/UserProfile";
import { checkAuthStatus } from "./services/authService";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const userData = await checkAuthStatus();
      if (userData) {
        setUser(userData.user);
      }
    }
    fetchUser();
  }, []);

  return (
    <div>
      {user ? <UserProfile user={user} setUser={setUser} /> : <GoogleLogin />}
    </div>
  );
}
