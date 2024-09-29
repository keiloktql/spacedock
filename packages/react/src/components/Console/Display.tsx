import { useSettings } from "@/context/SettingsContext";
import { LogMessage } from "@/lib/LoggerService";
import { computeDisplayTextColor, showMethodOrNot } from "@/lib/utils";
import { forwardRef } from "react";

interface DisplayProps {
  messages: LogMessage[];
}

const Display = forwardRef<HTMLDivElement, DisplayProps>(
  ({ messages }, ref) => {
    const { filters } = useSettings();
    const filteredMessages = messages.filter(
      (msg) => filters[msg.method as keyof typeof filters]
    );
    return (
      <div className="flex flex-col" ref={ref}>
        {filteredMessages.map((msg, index) => {
          const lines = msg.message.split("\n");
          return (
            <div
              key={index}
              className={`text-xs font-mono h-full ${computeDisplayTextColor(msg.method)}`}
            >
              {lines.map((line, i) => (
                <div className="min-h-[16px] h-full" key={i}>
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
