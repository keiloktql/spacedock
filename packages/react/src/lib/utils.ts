import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import LoggerService, { LogMethod } from "./LoggerService";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const copyToClipboard = (text: string): void => {
  navigator.clipboard
    .writeText(text)
    .then(() => {})
    .catch((err) => {
      LoggerService.error(`Failed to copy text: ${err}`);
    });
};

export const computeDisplayTextColor = (method?: LogMethod): string => {
  if (method === LogMethod.ERROR) {
    return "text-red-400";
  }
  if (method === LogMethod.USER) {
    return "text-white";
  }
  return "text-slate-400";
};

export const showMethodOrNot = (method?: LogMethod): boolean => {
  if (
    method === undefined ||
    method === LogMethod.SYSTEM ||
    method === LogMethod.USER
  ) {
    return false;
  }
  return true;
};
