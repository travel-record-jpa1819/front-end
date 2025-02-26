import styles from './GoogleLogin.module.css'

export default function GoogleLogin() {
  const handleLogin = () => {
    window.location.href = import.meta.env.VITE_GOOGLE_LOGIN_URL;
  };

  return (
    <button onClick={handleLogin} className={styles.google}>
      <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" className={styles.googleIcon} />
      Sign in with Google
    </button>
  );
}
