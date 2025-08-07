import { useEffect, useState } from "react";
import { AppContext } from "./AppContext"; // import context from separate file
import { dummyCourses } from "../assets/assets";

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    setAllCourses(dummyCourses);
  }, []);

  const value = {
    currency,
    allCourses,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
