import React, { useEffect, useRef } from "react";
import Header from "@/components/Console/Header";
import Display from "@/components/Console/Display";
import useLogger from "@/hooks/useLogger";
import LoggerService from "@/lib/LoggerService";

interface TerminalProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const Terminal = ({ setIsVisible, input, setInput }: TerminalProps) => {
  const { messages } = useLogger();
  const displayRef = useRef<HTMLDivElement | null>(null);
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      LoggerService.user(`$ ${input}`);
      setInput("");
      scrollToBottom();
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const scrollToBottom = () => {
    if (terminalRef.current) {
      // Adjust the scroll position to show the input area with padding
      const padding = 20; // Adjust this padding value as needed
      const terminalHeight = terminalRef.current.clientHeight;
      const displayHeight = displayRef.current
        ? displayRef.current.scrollHeight
        : 0;

      terminalRef.current.scrollTop = displayHeight + padding - terminalHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div
      className="absolute bottom-10 w-full px-4 max-w-full min-h-40 max-h-40 h-full mx-auto"
      onClick={handleTerminalClick}
    >
      <div className="bg-gray-800 shadow-lg shadow-slate-400 flex flex-col pt-2 px-4 h-full text-white rounded">
        <Header setIsVisible={setIsVisible} />
        <span
          ref={terminalRef}
          className="custom-scrollbar flex-col overflow-y-auto relative pb-24"
        >
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
              ref={inputRef}
            />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Terminal;
