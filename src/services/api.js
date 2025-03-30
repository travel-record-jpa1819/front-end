const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function submitTripData(formData) {
  const response = await fetch(`${BACKEND_URL}/submit`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Network response error");
  }
  return response.json();
}
