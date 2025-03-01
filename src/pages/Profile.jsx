import { useState, useEffect } from "react";
import UserProfile from "../components/UserProfile";
import { checkAuthStatus } from "../services/authService";

function Profile() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   async function fetchUser() {
  //     const userData = await checkAuthStatus();
  //     if (userData) {
  //       setUser(userData.user);
  //     }
  //   }
  //   fetchUser();
  // }, []);

  return (
    // <div>
    //   <UserProfile user={user} setUser={setUser} />
    // </div>
    <h1>hi</h1>
  );
}

export default Profile;
