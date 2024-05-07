"use client";
import React from "react";
import { Sidebar } from "./sidebar";
import Link from "next/link";

export default function nav() {
  return (
    <div className="fixed w-full z-50 flex sm:px-20 py-7 md:py-5 justify-between px-5 bg-white">
      <Link href={"/"} className="">
        <img src="/logo.png" className="sm:h-11 h-8 flex items-center mt-1" />
      </Link>
      <Sidebar />
    </div>
  );
}
