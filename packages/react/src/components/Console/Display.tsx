import React, { forwardRef } from "react";

interface DisplayProps {
  messages: Array<{ method: string; message: string }>;
}

const Display = forwardRef<HTMLDivElement, DisplayProps>(
  ({ messages }, ref) => {
    return (
      <div className="flex flex-col" ref={ref}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`text-xs font-mono ${msg.method === "error" ? "text-red-400" : ""}`}
          >
            {msg.method && <strong>{msg.method?.toUpperCase()}:</strong>}
            {msg.message}
          </div>
        ))}
      </div>
    );
  }
);

export default Display;
