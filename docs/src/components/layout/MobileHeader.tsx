import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Menu } from "lucide-react";
import { isEq } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from "@/components/shared/Sheet";

const MobileHeader = () => {
  const router = useRouter();
  const isActiveLink = (href?: string | number) => isEq(router.pathname, href);

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="h-6 md:hidden w-6" />
      </SheetTrigger>
      <SheetContent className="z-[99999]" side="right">
        <nav className="flex flex-col items-center justify-center">
          <Link
            className={`text-slate-950 ${isActiveLink("/") ? "" : "opacity-60"} hover:underline hover:opacity-80 text-sm`}
            href="/"
          >
            <SheetTitle>Panolog</SheetTitle>
          </Link>
          <Link
            className={`text-slate-950 ${isActiveLink("/docs") ? "" : "opacity-60"} hover:underline hover:opacity-80 text-sm`}
            href="/docs"
          >
            Docs
          </Link>
          <Link
            className={`text-slate-950 ${isActiveLink("/faq") ? "" : "opacity-60"} hover:underline hover:opacity-80 text-sm`}
            href="/faq"
          >
            FAQ
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileHeader;
