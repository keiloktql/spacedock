import { Button } from "@/shadcn/ui/Button";
import { Separator } from "@/shadcn/ui/Separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shadcn/ui/Tooltip";
import { BookOpenText, Settings, X } from "lucide-react";
import React from "react";

interface HeaderProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setIsVisible }: HeaderProps) => {
  return (
    <div className="w-full flex justify-between items-center">
      <p className="w-full text-xs font-semibold text-slate-300">Panalog</p>
      <span className="flex justify-end items-center w-full h-5">
        <Tooltip>
          <Button
            variant="ghost"
            className="text-slate-300 hover:text-slate-500"
            size="smIcon"
          >
            <TooltipTrigger asChild>
              <BookOpenText className="w-4 h-4" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">Open Documentation</p>
            </TooltipContent>
          </Button>
        </Tooltip>
        <Separator className="bg-slate-500 mx-2" orientation="vertical" />
        <Tooltip>
          <Button
            variant="ghost"
            className="text-slate-300 hover:text-slate-500"
            size="smIcon"
          >
            <TooltipTrigger asChild>
              <Settings className="w-4 h-4" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">Settings</p>
            </TooltipContent>
          </Button>
        </Tooltip>
        <Tooltip>
          <Button
            variant="ghost"
            className="text-slate-300 hover:text-slate-500"
            size="smIcon"
          >
            <TooltipTrigger asChild>
              <X
                onClick={() => setIsVisible((visibility) => !visibility)}
                className="w-4 h-4"
              />
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
