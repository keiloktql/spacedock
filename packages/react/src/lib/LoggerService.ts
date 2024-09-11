import eventEmitter from "@/lib/eventEmitter";
import { WELCOME_MESSAGE } from "./messages";
import { PANOLOG_ENGINE } from "./engine";

export enum LogMethod {
  SYSTEM = "system",
  USER = "user",
  LOG = "log",
  ERROR = "error",
  WARN = "warn",
  INFO = "info"
}

export interface LogMessage {
  method?: LogMethod;
  message: string;
}

// Internal logger class to handle system and user messages
export class InternalLogger {
  private static messages: LogMessage[] = [];

  static system(message: string) {
    const logMessage: LogMessage = { method: LogMethod.SYSTEM, message };
    this.messages.push(logMessage);
    console.log(message);
    eventEmitter.emit("new-log", this.messages);
  }

  static user(message: string) {
    const logMessage: LogMessage = { method: LogMethod.USER, message };
    this.messages.push(logMessage);
    console.log(message);
    const systemMessage = PANOLOG_ENGINE.runCommand(message);
    this.system(systemMessage);
    eventEmitter.emit("new-log", this.messages);
  }

  static getMessages(): LogMessage[] {
    return this.messages;
  }
}

// Public LoggerService class for npm distribution
export class LoggerService {
  static log(message: string) {
    InternalLogger.getMessages().push({ method: LogMethod.LOG, message });
    console.log(message);
    eventEmitter.emit("new-log", InternalLogger.getMessages());
  }

  static error(message: string) {
    InternalLogger.getMessages().push({ method: LogMethod.ERROR, message });
    console.error(message);
    eventEmitter.emit("new-log", InternalLogger.getMessages());
  }

  static warn(message: string) {
    InternalLogger.getMessages().push({ method: LogMethod.WARN, message });
    console.warn(message);
    eventEmitter.emit("new-log", InternalLogger.getMessages());
  }

  static info(message: string) {
    InternalLogger.getMessages().push({ method: LogMethod.INFO, message });
    console.info(message);
    eventEmitter.emit("new-log", InternalLogger.getMessages());
  }

  static getMessages(): LogMessage[] {
    return InternalLogger.getMessages();
  }
}

// Initialize with a welcome message
InternalLogger.system(WELCOME_MESSAGE);

export default LoggerService;
