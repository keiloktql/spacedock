import { Button, buttonVariants } from "@/shadcn/ui/Button";
import { Separator } from "@/shadcn/ui/Separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shadcn/ui/Tooltip";
import { BookOpenText, Settings as SettingsIcon, X } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from "@/shadcn/ui/Dialog";
import Settings from "@/components/Settings";
import { PANOLOG_DOC_URL } from "@/lib/config";
import { cn } from "@/lib/utils";

interface HeaderProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setIsVisible }: HeaderProps) => {
  return (
    <div className="w-full flex justify-between items-center">
      <p className="w-full text-xs font-semibold text-slate-300">Panalog</p>
      <span className="flex justify-end items-center w-full h-5">
        <Tooltip>
          <a
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "smIcon",
                className: "text-slate-300 hover:text-slate-500"
              })
            )}
            href={PANOLOG_DOC_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            <TooltipTrigger asChild>
              <BookOpenText className="w-4 h-4" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">Open Documentation</p>
            </TooltipContent>
          </a>
        </Tooltip>
        <Separator className="bg-slate-500 mx-2" orientation="vertical" />
        <Tooltip>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="text-slate-300 hover:text-slate-500"
                size="smIcon"
              >
                <TooltipTrigger asChild>
                  <SettingsIcon className="w-4 h-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Settings</p>
                </TooltipContent>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[800px] w-[90vw] h-full max-h-[85vh]">
              <Settings />
            </DialogContent>
          </Dialog>
        </Tooltip>
        <Tooltip>
          <Button
            variant="ghost"
            className="text-slate-300 hover:text-slate-500"
            onClick={() => setIsVisible((visibility) => !visibility)}
            size="smIcon"
          >
            <TooltipTrigger asChild>
              <X className="w-4 h-4" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">Close Terminal</p>
            </TooltipContent>
          </Button>
        </Tooltip>
      </span>
    </div>
  );
};

export default Header;
