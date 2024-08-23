import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import LoggerService from "./LoggerService";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const copyToClipboard = (text: string): void => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      LoggerService.log("Text copied to clipboard");
    })
    .catch((err) => {
      LoggerService.error(`Failed to copy text: ${err}`);
    });
};
