import { createContext, useContext, useState, useEffect } from "react";

const BASE_URL = "http://localhost:9000";

const AiContext = createContext();

function AiProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    async function fetchAiResponse() {
      try {
        const res = await fetch(`${BASE_URL}/rec`);
        const data = await res.json();
        setData(data);
      } catch {
        alert("There is an error fetching ai resposne");
      } finally {
        setIsLoading(false);
      }
    }
    fetchAiResponse();
  }, []);

  return (
    <AiContext.Provider value={{ data, isLoading }}>
      {children}
    </AiContext.Provider>
  );
}

function useAi() {
  const context = useContext(AiContext);
  if (context === undefined)
    throw new Error("Ai Context was used out side the AiProvider");
  return context;
}

export { AiProvider, useAi };
