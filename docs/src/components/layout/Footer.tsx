/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Separator } from "@/components/shared/Separator";

const Footer = () => (
  <footer className="bg-slate-50 px-6 sm:px-16">
    {/* Top */}
    <div className="flex flex-col justify-between items-center py-8 max-w-screen-xl mx-auto">
      <div className="text-center">
        <Link
          className="text-black font-bold flex justify-center items-end gap-x-4 hover:opacity-60"
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
        <p className="mt-2 text-gray-500 text-xs lg:whitespace-nowrap">
          The Panoramic View for Your Logs.
        </p>
      </div>
      <span className="flex flex-row mt-2">
        <Link
          href="/terms-and-conditions"
          className="font-semibold text-[#757575] text-xs hover:underline"
        >
          Terms & Conditions
        </Link>
        <Separator orientation="vertical" className="mx-2 h-6" />
        <Link
          href="/privacy-policy"
          className="font-semibold text-[#757575] text-xs hover:underline"
        >
          Privacy Policy
        </Link>
      </span>
    </div>
    <hr className="flex max-w-screen-xl mx-auto" />
    {/* Bottom */}
    <div className="flex flex-col md:flex-row md:justify-between pb-8 pt-4 max-w-screen-xl mx-auto">
      <p className="text-gray-500 font-medium text-xs">
        Copyright &copy; 2024 Tham Kei Lok. All rights reserved.
      </p>
      <span className="flex">
        <p className="text-gray-500 font-medium text-xs">
          Developed in Singapore.
        </p>
      </span>
    </div>
  </footer>
);

export default Footer;
