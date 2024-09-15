import { useSettings } from "@/context/SettingsContext";
import { InternalLogger } from "@/lib/LoggerService";
import { COMMAND_NOT_FOUND_MESSAGE, HELP_MESSAGE } from "@/lib/messages";

type CommandHandler = (args: string[]) => string | void;

interface SpaceDockCLIEngine {
  commands: { [key: string]: CommandHandler };
  input: string;
  history: string[];
}

class SPACEDOCK_CLI_ENGINE {
  private commands: { [key: string]: CommandHandler };
  private history: string[];

  constructor() {
    this.commands = {
      help: this.help,
      clear: this.clear
    };
    this.history = [];
  }

  public runCommand(input: string): string {
    this.history.push(input);
    const [_, command, ...args] = input.split(" ");
    const handler = this.commands[command];

    if (handler) {
      return handler(args) || "";
    } else {
      return COMMAND_NOT_FOUND_MESSAGE(command);
    }
  }

  private help = (): string => {
    return HELP_MESSAGE;
  };

  private clear = (): void => {
    this.history = [];
    InternalLogger.clearMessages(); // Clear log messages in the logger
    console.clear();
  };

  // This function could be used to list the history of commands
  public getHistory(): string[] {
    return this.history;
  }
}

export const SPACEDOCK_ENGINE = new SPACEDOCK_CLI_ENGINE();
