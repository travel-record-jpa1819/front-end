import { createContext, useState, useEffect, useContext } from "react";
import { getVisitedCities } from "../services/api";

const BASE_URL = "http://localhost:8000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        // const data = getVisitedCities();
        console.log("👉 visited cities from server:", data);
        setCities(data);
      } catch {
        console.error("❌ Failed to fetch cities", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id){
      try {
        setIsLoading(true);
        const res = await fetch(`http://localhost:8080/cities/${id}`);
        const data = await res.json();
        setCurrentCity(data)
      } catch {
        alert("There is an error fetching cities");
      } finally {
        setIsLoading(false);
      }
  }
  return (
    <CitiesContext.Provider value={{ cities, isLoading,currentCity,getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("Cities Context was used out side the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
