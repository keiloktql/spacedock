import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/shadcn/ui/Tooltip";
import { Terminal as TerminalIcon } from "lucide-react";
import Terminal from "@/components/Console/Terminal";
import { SettingsProvider } from "@/context/SettingsContext";

interface ConsoleProps {}

const Console = (props: ConsoleProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [input, setInput] = useState("");

  return (
    <SettingsProvider>
      <div className="relative">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="absolute bottom-10 right-4 p-2 rounded shadow-sm shadow-slate-400 hover:opacity-75 text-slate-800"
            >
              <TooltipTrigger asChild>
                <TerminalIcon className="w-4 h-4" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">Open terminal</p>
              </TooltipContent>
            </button>
          </Tooltip>

          {!isVisible && (
            <Terminal
              setIsVisible={setIsVisible}
              input={input}
              setInput={setInput}
            />
          )}
        </TooltipProvider>
      </div>
    </SettingsProvider>
  );
};

export default Console;
