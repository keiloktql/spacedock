import eventEmitter from "@/lib/eventEmitter";

export interface LogMessage {
  method?: "log" | "error" | "warn" | "info" | "systemMessage";
  message: string;
}

class LoggerService {
  private static messages: LogMessage[] = [];

  // Static initialization block to add a welcome message
  static {
    LoggerService.systemMessage(`Welcome to the Panolog!
Panolog is a browser-based shell with the Panolog CLI pre-installed.
`);
  }

  static systemMessage(message: string) {
    const logMessage: LogMessage = { message };
    this.messages.push(logMessage);
    console.log(message);
    eventEmitter.emit("new-log", this.messages);
  }

  static log(message: string) {
    const logMessage: LogMessage = { method: "log", message };
    this.messages.push(logMessage);
    console.log(message);
    eventEmitter.emit("new-log", this.messages);
  }

  static error(message: string) {
    const logMessage: LogMessage = { method: "error", message };
    this.messages.push(logMessage);
    console.error(message);
    eventEmitter.emit("new-log", this.messages);
  }

  static warn(message: string) {
    const logMessage: LogMessage = { method: "warn", message };
    this.messages.push(logMessage);
    console.warn(message);
    eventEmitter.emit("new-log", this.messages);
  }

  static info(message: string) {
    const logMessage: LogMessage = { method: "info", message };
    this.messages.push(logMessage);
    console.info(message);
    eventEmitter.emit("new-log", this.messages);
  }

  static getMessages(): LogMessage[] {
    return this.messages;
  }
}

export default LoggerService;
