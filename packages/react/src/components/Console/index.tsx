import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/shadcn/ui/Tooltip";
import { Terminal as TerminalIcon } from "lucide-react";
import Terminal from "@/components/Console/Terminal";
import { useSettings } from "@/context/SettingsContext";
import Providers from "../Providers";

interface ConsoleProps {}

const ConsoleContent = (props: ConsoleProps) => {
  const [input, setInput] = useState("");
  const { visible, setVisible } = useSettings();

  return (
    <div className="relative">
      <Tooltip>
        <button
          onClick={() => setVisible(!visible)}
          className="absolute bottom-10 right-4 p-2 rounded shadow-sm shadow-slate-400 hover:opacity-75 text-slate-800"
        >
          <TooltipTrigger asChild>
            <TerminalIcon className="w-4 h-4" />
          </TooltipTrigger>
          <TooltipContent side="left">
            <p className="text-xs">Open terminal</p>
          </TooltipContent>
        </button>
      </Tooltip>

      <Terminal input={input} setInput={setInput} />
    </div>
  );
};

const Console = () => (
  <Providers>
    <ConsoleContent />
  </Providers>
);

export default Console;
