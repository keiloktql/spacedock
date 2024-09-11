import {
  PANOLOG_SETTINGS_FILTER_KEY,
  PANOLOG_SETTINGS_THEME_KEY
} from "@/lib/config";
import { getLocalStorageItem, setLocalStorageItem } from "@/lib/utils";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect
} from "react";

type Theme = "light" | "dark";

interface SettingsContextType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  pathname: string;
  setPathname: (pathname: string) => void;
  filters: Record<string, boolean>;
  setFilters: (filters: Record<string, boolean>) => void;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(
      PANOLOG_SETTINGS_THEME_KEY
    ) as Theme | null;
    return storedTheme ?? "light"; // Default to "light" if no stored value
  });
  const [pathname, setPathname] = useState("general");
  const [filters, setFilters] = useState<Record<string, boolean>>(() => {
    const storedFilters = getLocalStorageItem(PANOLOG_SETTINGS_FILTER_KEY);
    return storedFilters
      ? { system: true, user: true, ...JSON.parse(storedFilters) }
      : {
          system: true,
          user: true,
          log: true,
          error: true,
          warn: true,
          info: true
        };
  });
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setLocalStorageItem(PANOLOG_SETTINGS_FILTER_KEY, filters);
  }, [filters]);

  return (
    <SettingsContext.Provider
      value={{
        theme,
        setTheme,
        pathname,
        setPathname,
        filters,
        setFilters,
        visible,
        setVisible
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
