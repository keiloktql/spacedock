import { Button } from "@/shadcn/ui/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shadcn/ui/Tooltip";
import { X } from "lucide-react";
import React from "react";

interface HeaderProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setIsVisible }: HeaderProps) => {
  return (
    <div className="w-full flex justify-between items-center">
      <p className="text-xs font-semibold text-slate-300">Panalog</p>
      <Button variant="ghost" size="smIcon">
        <X
          onClick={() => setIsVisible((visibility) => !visibility)}
          className="text-slate-300 w-4 h-4"
        />
      </Button>
    </div>
  );
};

export default Header;
