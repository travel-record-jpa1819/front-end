export default function GoogleLogin() {
  const handleLogin = () => {
    window.location.href = import.meta.env.REACT_APP_BACKEND_URL + "/api/auth/google";
  };

  return <button onClick={handleLogin}>Login with Google</button>;
}

