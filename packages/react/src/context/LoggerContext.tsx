import React, { createContext, useContext, useState, useCallback } from "react";
import LoggerService from "@/lib/LoggerService";

interface LoggerContextType {
  log: (message: string) => void;
  error: (message: string) => void;
  warn: (message: string) => void;
  info: (message: string) => void;
  messages: Array<{ method: string; message: string }>;
}

const LoggerContext = createContext<LoggerContextType | undefined>(undefined);
export default LoggerContext;

export const LoggerProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [messages, setMessages] = useState(LoggerService.getMessages());

  const updateMessages = useCallback(() => {
    setMessages([...LoggerService.getMessages()]);
  }, []);

  const log = useCallback(
    (message: string) => {
      LoggerService.log(message);
      updateMessages();
    },
    [updateMessages]
  );

  const error = useCallback(
    (message: string) => {
      LoggerService.error(message);
      updateMessages();
    },
    [updateMessages]
  );

  const warn = useCallback(
    (message: string) => {
      LoggerService.warn(message);
      updateMessages();
    },
    [updateMessages]
  );

  const info = useCallback(
    (message: string) => {
      LoggerService.info(message);
      updateMessages();
    },
    [updateMessages]
  );

  return (
    <LoggerContext.Provider value={{ log, error, warn, info, messages }}>
      {children}
    </LoggerContext.Provider>
  );
};
