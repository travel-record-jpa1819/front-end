import { useState } from "react";
import GoogleLogin from "../components/GoogleLogin";
import Navbar from "../components/Navbar/Navbar";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main>
      <Navbar />
      <form>
        <div>
          <label htmlFor="userName">UserName</label>
          <input
            type="text"
            id="username"
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>
      <GoogleLogin />
      <h1>{username}</h1>
      <h1>{password}</h1>
    </main>
  );
}

export default Login;
