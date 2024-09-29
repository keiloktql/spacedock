import * as React from "react";

import { cn, copyToClipboard } from "@/lib/utils";
import { VERSION } from "@/lib/config";
import { Copy } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shadcn/ui/Tooltip";
import { toast } from "@/shadcn/ui/Toast/use-toast";
import { Toaster } from "@/shadcn/ui/Toast/toaster";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  copyable?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, copyable = false, ...props }, ref) => {
    const handleCopy = () => {
      copyToClipboard(VERSION);
      toast({
        title: "Success!",
        description: "Copied to Clipboard!"
      });
    };

    return (
      <div className="relative flex items-center">
        <Toaster />
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
          <Tooltip>
            <button
              type="button"
              onClick={() => handleCopy()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-medium rounded bg-slate-100 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600"
            >
              <span className="sr-only">Copy</span>
              <TooltipTrigger asChild>
                <Copy className="h-8 w-8 p-2 text-slate-500" />
              </TooltipTrigger>
              <TooltipContent side="left">
                <p className="text-xs">Copy to Clipboard</p>
              </TooltipContent>
            </button>
          </Tooltip>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
