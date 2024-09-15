import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileHeader from "@/components/layout/MobileHeader";
import DesktopHeader from "@/components/layout/DesktopHeader";

const Header = () => (
  <header className="sticky left-0 top-0 z-[50] h-20 w-full justify-center bg-[#ffffffb8] backdrop-blur-[20px] backdrop-saturate-[180%]">
    <div className="m-auto flex h-full w-full max-w-screen-xl justify-between px-6 sm:px-16">
      {/* 1280px */}
      <div className="w-full items-center flex">
        <Link
          className="text-black font-semibold flex items-end gap-x-4 hover:opacity-60"
          href="/"
        >
          <Image
            style={{ objectFit: "contain" }}
            src="/android-chrome-512x512.png"
            alt="logo"
            width={30}
            height={30}
          />
          <p>SpaceDock</p>
        </Link>
      </div>
      <MobileHeader />
      <DesktopHeader />
    </div>
  </header>
);

export default Header;
