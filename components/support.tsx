import React from "react";
import Link from "next/link";
import Stack from "./ui/stack";

export default function Support() {
  return (
    <div className=" mt-10 py-24 bg-center  bg-[url(https://res.cloudinary.com/dv62ty87r/image/upload/v1761759936/bg_c84ss2.jpg)]  bg-auto sm:bg-cover relative flex flex-col justify-center bg-fixed">
      {/* overlay */}
      <div className="absolute bg-black h-full w-full opacity-70"></div>
      <div className="z-50 pl-6 md:pl-16 pr-2 mb-20">
        <p className="text-white text-4xl font-montserrat font-semibold">
          Building something awesome? <br className="hidden md:block" />{" "}
          Let&apos;s bring it to life.
        </p>
        <Link
          href="mailto:jessennorom@gmail.com"
          className="text-white mt-7 flex"
        >
          jessennorom@gmail.com
        </Link>
        <Stack />
      </div>
    </div>
  );
}
