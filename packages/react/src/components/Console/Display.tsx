import { LogMessage } from "@/lib/LoggerService";
import { computeDisplayTextColor, showMethodOrNot } from "@/lib/utils";
import { forwardRef } from "react";

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
              className={`text-xs font-mono ${computeDisplayTextColor(msg.method)}`}
            >
              {lines.map((line, i) => (
                <div className="h-[16px]" key={i}>
                  {i === 0 && showMethodOrNot(msg.method) && (
                    <strong>{msg.method?.toUpperCase()}: </strong>
                  )}
                  {i > 0 &&
                    msg.method !== undefined &&
                    msg.method !== "system" && <span className="ml-4"></span>}
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
