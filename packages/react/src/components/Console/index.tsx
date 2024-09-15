import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shadcn/ui/Tooltip";
import { Terminal as TerminalIcon } from "lucide-react";
import Terminal from "@/components/Console/Terminal";
import { useSettings } from "@/context/SettingsContext";
import Providers from "../Providers";
import useTheme from "@/hooks/useTheme";

interface ConsoleProps {}

const ConsoleContent = (props: ConsoleProps) => {
  const [input, setInput] = useState("");
  const { visible, setVisible } = useSettings();
  useTheme();

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

const SpaceDockConsole = () => (
  <Providers>
    <ConsoleContent />
  </Providers>
);

export default SpaceDockConsole;
