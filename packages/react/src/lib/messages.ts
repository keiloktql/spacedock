import { VERSION } from "@/lib/config";

export const WELCOME_MESSAGE = `Welcome to SpaceDock ${VERSION}!
SpaceDock is a browser-based shell with the SpaceDock CLI pre-installed.

View supported SpaceDock commands via \`help\`
`;

export const COMMAND_NOT_FOUND_MESSAGE = (command?: string) => `
command not found: ${command}
`;

export const HELP_MESSAGE = `
Available commands:
- help: Shows this help message
- clear: Clears the shell
`;
