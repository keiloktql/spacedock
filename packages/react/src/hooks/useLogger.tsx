import { useEffect, useState } from "react";
import eventEmitter from "@/lib/eventEmitter";
import LoggerService, { LogMessage } from "@/lib/LoggerService";

const useLogger = () => {
  const [messages, setMessages] = useState<LogMessage[]>(
    LoggerService.getMessages()
  );

  useEffect(() => {
    const handleNewLog = (event: CustomEvent<LogMessage[]>) => {
      const newMessages = event.detail;
      setMessages([...newMessages]);
    };

    eventEmitter.on("new-log", handleNewLog as EventListener);

    return () => {
      eventEmitter.off("new-log", handleNewLog as EventListener);
    };
  }, []);

  return { messages };
};

export default useLogger;
