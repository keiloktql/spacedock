import { LogMessage } from "@/lib/LoggerService";
import React, { forwardRef } from "react";

interface DisplayProps {
  messages: LogMessage[];
}

const Display = forwardRef<HTMLDivElement, DisplayProps>(
  ({ messages }, ref) => {
    return (
      <div className="flex flex-col" ref={ref}>
        {messages.map((msg, index) => {
          const lines = msg.message.split("\n");
          return (
            <div
              key={index}
              className={`text-xs font-mono ${msg.method === "error" ? "text-red-400" : ""}`}
            >
              {lines.map((line, i) => (
                <div className="h-[16px]" key={i}>
                  {i === 0 && msg.method && (
                    <strong>{msg.method?.toUpperCase()}: </strong>
                  )}
                  {i > 0 && msg.method !== undefined && (
                    <span className="ml-4"></span>
                  )}
                  {line}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    );
  }
);

export default Display;
