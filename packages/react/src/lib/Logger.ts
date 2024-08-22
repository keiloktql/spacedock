class Logger {
  private static messages: Array<{ method: string; message: string }> = [];

  static log(message: string) {
    this.messages.push({ method: "log", message });
    console.log(message); // You can still log to the console if needed
  }

  static error(message: string) {
    this.messages.push({ method: "error", message });
    console.error(message); // You can still log to the console if needed
  }

  static warn(message: string) {
    this.messages.push({ method: "warn", message });
    console.warn(message); // You can still log to the console if needed
  }

  static info(message: string) {
    this.messages.push({ method: "info", message });
    console.info(message); // You can still log to the console if needed
  }

  static getMessages() {
    return this.messages;
  }
}

export default Logger;
