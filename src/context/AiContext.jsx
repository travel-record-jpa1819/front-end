import { createContext, useContext, useState, useEffect } from "react";
import { getAiRecData } from "../services/api";
// const BASE_URL = "http://localhost:9000";

const AiContext = createContext();

function AiProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchAiResponse() {
    try {
      const data = await getAiRecData();
      // const res = await fetch(`${BASE_URL}/rec`);
      // const data = await res.json();
      setData(data);
    } catch {
      alert("There is an error fetching ai response");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(function () {
    fetchAiResponse();
  }, []);

  // Expose refresh function along with your data
  const refreshData = () => {
    fetchAiResponse();
  };

  return (
    <AiContext.Provider value={{ data, isLoading,refreshData }}>
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
