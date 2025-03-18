const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function checkAuthStatus() {
  console.log("invoked");
  try {
    const response = await fetch(`${BACKEND_URL}/profile`, {
      method: "GET",
      credentials: "include", // 자동으로 쿠키 포함
    });

    if (!response.ok) {
      console.error("Response error:", response.status);
      return null;
    }
    console.log(BACKEND_URL)
    const jsonData = await response.json();
    console.log("user data", jsonData);
    return jsonData;

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
