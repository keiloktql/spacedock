import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { isEq } from "@/lib/utils";
import { CommandMenu } from "@/components/shared/Command/CommandMenu";

const DesktopHeader = () => {
  const router = useRouter();
  const isActiveLink = (href?: string | number) => isEq(router.pathname, href);

  return (
    <nav className="hidden w-full h-full justify-between items-center md:flex">
      <span className="flex gap-x-6">
        <Link
          className={`text-slate-950 ${isActiveLink("/faq") ? "" : "opacity-60"} hover:underline hover:opacity-80 text-sm`}
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
      </span>
      <div className="w-full md:w-auto md:flex-none">
        <CommandMenu />
      </div>
    </nav>
  );
};

export default DesktopHeader;
