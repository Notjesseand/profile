"use client";
import React from "react";
import { Sidebar } from "./sidebar";
import Link from "next/link";

export default function nav() {
  return (
    <div className="fixed w-full z-50 flex sm:px-20 py-4 sm:py-4 md:py-4 justify-between px-5 bg-white">
      <Link href={"/"} className="">
        <img
          src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716538239/Premium_Vector___Wolf_tech_modern_simple_logo_icon_ideas-removebg-preview_je6aex.png"
          className="sm:h-20 w-full h-14 flex items-center mt-1"
        />
      </Link>
      <Sidebar />
    </div>
  );
}
