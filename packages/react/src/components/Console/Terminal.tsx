import React from "react";
import Header from "@/components/Console/Header";

interface TerminalProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  messages: any[];
}

const Terminal = ({ setIsVisible, messages }: TerminalProps) => {
  return (
    <div className="absolute bottom-10 w-full px-4 max-w-full min-h-20 max-h-40 h-full mx-auto">
      <div className="bg-gray-800 shadow-lg shadow-slate-400 flex flex-col backdrop-blur-[20px] pt-2 px-4 h-full backdrop-saturate-[180%] text-white rounded">
        <Header setIsVisible={setIsVisible} />
        <div className="flex custom-scrollbar flex-col overflow-y-auto h-full">
          {messages.map((msg: any, index: number) => (
            <div
              key={index}
              className={`text-xs font-mono ${msg.method === "error" ? "text-red-400" : ""}`}
            >
              <strong>{msg.method.toUpperCase()}:</strong> {msg.message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
