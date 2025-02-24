const BACKEND_URL = import.meta.env.REACT_APP_BACKEND_URL;

export async function checkAuthStatus() {
  try {
    const response = await fetch(`${BACKEND_URL}/api/auth`, {
      method: "GET",
      credentials: "include", // 자동으로 쿠키 포함
    });

    if (response.ok) {
      return await response.json(); 
      // { user: {name, picture, email} }
    }
  } catch (error) {
    console.error("Auth check error:", error);
  }

  return null;
}

export async function logoutUser() {
  await fetch(`${BACKEND_URL}/api/auth/logout`, {
    method: "POST",
    credentials: "include",
  });
}
