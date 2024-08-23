import React, { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/shadcn/ui/Tooltip";
import Logger from "@/lib/Logger";
import { Terminal as TerminalIcon } from "lucide-react";
import Terminal from "@/components/Console/Terminal";

interface ConsoleProps {}

const Console = (props: ConsoleProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState(Logger.getMessages());
  const [input, setInput] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages(Logger.getMessages());
    }, 1000); // Update the messages every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
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
            setMessages={setMessages}
            messages={messages}
            input={input}
            setInput={setInput}
          />
        )}
      </TooltipProvider>
    </div>
  );
};

export default Console;
