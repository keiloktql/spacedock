import React, { createContext, useState, useContext, ReactNode } from "react";

type Theme = "light" | "dark";

interface SettingsContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  pathname: string;
  setPathname: (pathname: string) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [pathname, setPathname] = useState("general");

  return (
    <SettingsContext.Provider
      value={{ theme, setTheme, pathname, setPathname }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
