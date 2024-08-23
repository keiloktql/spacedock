import React, { useEffect, useRef } from "react";
import Header from "@/components/Console/Header";
import Display from "@/components/Console//Display";
import useLogger from "@/hooks/useLogger";
import LoggerService from "@/lib/LoggerService";

interface TerminalProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const Terminal = ({ setIsVisible, input, setInput }: TerminalProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const { messages } = useLogger();

  const displayRef = useRef<HTMLDivElement | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      LoggerService.terminalLog(`$ ${input}`);
      setInput("");
      if (displayRef.current) {
        displayRef.current.scrollTop = displayRef.current.scrollHeight;
      }
    }
  };

  useEffect(() => {
    if (displayRef.current) {
      displayRef.current.scrollTop = displayRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="absolute bottom-10 w-full px-4 max-w-full min-h-20 max-h-40 h-full mx-auto">
      <div className="bg-gray-800 shadow-lg shadow-slate-400 flex flex-col pt-2 px-4 h-full text-white rounded">
        <Header setIsVisible={setIsVisible} />
        <span className="custom-scrollbar flex-col overflow-y-auto">
          <Display ref={displayRef} messages={messages} />
          <div className="flex">
            <span className="text-slate-300 font-mono mr-2 text-xs">$</span>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent font-mono text-white text-xs border-none outline-none"
              placeholder="Type your command..."
            />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Terminal;
