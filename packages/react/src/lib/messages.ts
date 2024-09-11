export const WELCOME_MESSAGE = `Welcome to Panolog!
Panolog is a browser-based shell with the Panolog CLI pre-installed.

View supported Panolog commands via \`help\`
`;

export const COMMAND_NOT_FOUND_MESSAGE = (command?: string) => `
command not found: ${command}
`;

export const HELP_MESSAGE = `
Available commands:
- help: Shows this help message
- clear: Clears the shell
- exit: Exits the shell
`;

export const EXIT_MESSAGE = `
Exiting shell...
`;
