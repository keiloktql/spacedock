import { useEffect, useState } from "react";
import eventEmitter from "@/lib/eventEmitter";
import LoggerService from "@/lib/LoggerService";

interface LogMessage {
  method: "log" | "error" | "warn" | "info";
  message: string;
}

const useLogger = () => {
  const [messages, setMessages] = useState<LogMessage[]>(
    LoggerService.getMessages()
  );

  useEffect(() => {
    const handleNewLog = (newMessages: LogMessage[]) => {
      setMessages([...newMessages]);
    };

    eventEmitter.on("new-log", handleNewLog);

    return () => {
      eventEmitter.off("new-log", handleNewLog);
    };
  }, []);

  return { messages };
};

export default useLogger;
