import {
  COMMAND_NOT_FOUND_MESSAGE,
  EXIT_MESSAGE,
  HELP_MESSAGE
} from "./messages";

type CommandHandler = (args: string[]) => string | void;

interface PanologCLIEngine {
  commands: { [key: string]: CommandHandler };
  input: string;
  history: string[];
}

class PANOLOG_CLI_ENGINE {
  private commands: { [key: string]: CommandHandler };
  private history: string[];

  constructor() {
    this.commands = {
      help: this.help,
      clear: this.clear,
      exit: this.exit
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
    console.clear();
  };

  private exit = (): string => {
    return EXIT_MESSAGE;
  };

  // This function could be used to list the history of commands
  public getHistory(): string[] {
    return this.history;
  }
}

export const PANOLOG_ENGINE = new PANOLOG_CLI_ENGINE();
