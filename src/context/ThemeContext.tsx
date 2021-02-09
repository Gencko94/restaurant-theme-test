import React, { createContext } from "react";
import { QueryFunction, useQuery } from "react-query";
import axios from "axios";
import {
  ServerThemeResponse,
  ThemeProviderProps,
} from "@/interfaces/interfaces";

export const ThemeProvider = createContext<ThemeProviderProps>({
  mainColor: undefined,
  textColor: undefined,
  themeLoading: true,
});

const getTheme: QueryFunction<ServerThemeResponse> = async () => {
  const res = await axios.get("http://localhost:3001/theme");
  return res.data;
};

const ThemeContext: React.FC = ({ children }) => {
  const { data, isLoading } = useQuery("theme", getTheme);
  // React.useEffect(() => {
  //   if (data) {
  //     document.documentElement.style.setProperty("--main-color", "blue");
  //   }
  // }, [data]);
  return (
    <ThemeProvider.Provider
      value={{
        mainColor: data?.mainColor,
        textColor: data?.textColor,
        themeLoading: isLoading,
      }}
    >
      {children}
    </ThemeProvider.Provider>
  );
};

export default ThemeContext;
