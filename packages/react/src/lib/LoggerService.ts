import eventEmitter from "@/lib/eventEmitter";

interface LogMessage {
  method: "log" | "error" | "warn" | "info";
  message: string;
}

class LoggerService {
  private static messages: LogMessage[] = [];

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
