import * as React from "react";

import { cn, copyToClipboard } from "@/lib/utils";
import { VERSION } from "@/lib/config";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  copyable?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, copyable = false, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full pr-10 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
            className
          )}
          ref={ref}
          {...props}
        />
        {copyable && (
          <button
            type="button"
            onClick={() => copyToClipboard(VERSION)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-medium px-2 py-1 rounded bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600"
          >
            Copy
          </button>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
