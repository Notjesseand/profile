import React from "react";
import Link from "next/link";
import Stack from "./ui/stack";

export default function Support() {
  return (
    <div className=" mt-10 h-96 bg-[url('/scenery.jpeg')]  bg-cover relative flex flex-col justify-center bg-fixed">
      {/* overlay */}
      <div className="absolute bg-black h-full w-full opacity-70"></div>
      <div className="z-50 pl-6 md:pl-16">
        <p className="text-white text-4xl font-montserrat font-semibold">
          Need help with professional <br className="hidden md:block"/> support? Let&apos;s work together!
        </p>
        <Link href="mailto:jessennorom@gmail.com" className="text-white mt-7 flex">
          jessennorom@gmail.com
        </Link>
        <Stack/>
      </div>
    </div>
  );
}
