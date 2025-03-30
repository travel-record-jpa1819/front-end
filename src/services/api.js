const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function submitTripData(formData) {
  const response = await fetch(`${BACKEND_URL}/submit`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Network response error",response.status);
  }
  return response.json();
}

export async function getVisitedCities(){
  const response = await fetch(`${BACKEND_URL}/visitedcities`,{
    method: "GET",
    credentials: "include",
  });
  
  if(!response.ok){
    throw new Error("Network response error",response.status);
  }
  return response.json()
}
export async function getAiRecData(){
  const response = await fetch(`${BACKEND_URL}/rec`,{
    method: "GET",
    credentials: "include",
  });

  if(!response.ok){
    throw new Error("Network response error",response.status);
  }
  return response.json();
}

export async function sendChat({message}){
  if (!message.trim()) return;
  const response = await fetch(`${BACKEND_URL}/chatbot`,{
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    }
    ,body: JSON.stringify({message}),
  })
  if(!response.ok){
    throw new Error("Network error");
  }
  return response.json();
}