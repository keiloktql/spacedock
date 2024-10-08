import { SettingsProvider } from "@/context/SettingsContext";
import { TooltipProvider } from "@/shadcn/ui/Tooltip";
import React, { ReactNode } from "react";
import { useEffect } from "react";
import { useSettings } from "@/context/SettingsContext";

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <SettingsProvider>
      <TooltipProvider delayDuration={100}>{children}</TooltipProvider>
    </SettingsProvider>
  );
};

export default Providers;
