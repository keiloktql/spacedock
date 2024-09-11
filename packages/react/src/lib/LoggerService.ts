import eventEmitter from "@/lib/eventEmitter";
import { WELCOME_MESSAGE } from "./messages";
import { PANOLOG_ENGINE } from "./engine";

export enum LogMethod {
  USER = "user",
  LOG = "log",
  ERROR = "error",
  WARN = "warn",
  INFO = "info",
  SYSTEM = "system"
}

export interface LogMessage {
  method?: LogMethod;
  message: string;
}

class LoggerService {
  private static messages: LogMessage[] = [];

  // Static initialization block to add a welcome message
  static {
    LoggerService.system(WELCOME_MESSAGE);
  }

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
    LoggerService.system(systemMessage);
    eventEmitter.emit("new-log", this.messages);
  }

  static log(message: string) {
    const logMessage: LogMessage = { method: LogMethod.LOG, message };
    this.messages.push(logMessage);
    console.log(message);
    eventEmitter.emit("new-log", this.messages);
  }

  static error(message: string) {
    const logMessage: LogMessage = { method: LogMethod.ERROR, message };
    this.messages.push(logMessage);
    console.error(message);
    eventEmitter.emit("new-log", this.messages);
  }

  static warn(message: string) {
    const logMessage: LogMessage = { method: LogMethod.WARN, message };
    this.messages.push(logMessage);
    console.warn(message);
    eventEmitter.emit("new-log", this.messages);
  }

  static info(message: string) {
    const logMessage: LogMessage = { method: LogMethod.INFO, message };
    this.messages.push(logMessage);
    console.info(message);
    eventEmitter.emit("new-log", this.messages);
  }

  static getMessages(): LogMessage[] {
    return this.messages;
  }
}

export default LoggerService;
