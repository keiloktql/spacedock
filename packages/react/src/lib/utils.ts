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
  if (method === LogMethod.WARN) {
    return "text-yellow-400";
  }
  if (method === LogMethod.INFO) {
    return "text-blue-400";
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

export const setLocalStorageItem = (
  key: string,
  value: Record<string, any> | string | undefined
) => {
  if (typeof window === "undefined") {
    LoggerService.error(
      "Error setting localStorage item: not possible on server side"
    );
    return;
  }
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    LoggerService.error(`Error setting localStorage item: ${error}`);
  }
};

export const getLocalStorageItem = (key: string): string | null => {
  if (typeof window === "undefined") {
    LoggerService.error(
      "Error getting localStorage item: not possible on server side"
    );
    return null;
  }
  try {
    const item = localStorage.getItem(key);
    return item || null;
  } catch (error) {
    LoggerService.error(`Error getting localStorage item: ${error})`);
    return null;
  }
};

export const removeLocalStorageItem = (key: string) => {
  if (typeof window === "undefined") {
    LoggerService.error(
      "Error removing localStorage item: not possible on server side"
    );
    return;
  }
  try {
    localStorage.removeItem(key);
  } catch (error) {
    LoggerService.error(`Error removing localStorage item:, ${error}`);
  }
};
