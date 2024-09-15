import { useSettings } from "@/context/SettingsContext";
import React, { useEffect } from "react";

type Props = {};

const useTheme = () => {
  const { theme } = useSettings();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return null;
};

export default useTheme;
