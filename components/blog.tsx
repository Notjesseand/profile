import React from "react";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="px-6 md:px-20 pt-20">
      <p className="font-poppins text-lg text-slate-500 ">RECENT ARTICLES</p>
      <p className="text-5xl font-bold font-montserrat">Blog</p>

      {/* latest post */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative h-60 md:h-96 mt-6 bg-cover bg-center cursor-pointer bg-[url(https://res.cloudinary.com/dv62ty87r/image/upload/v1716584819/plastic-optimized_ae5ac2.jpg)]">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70  bg-top transition-opacity duration-300 flex flex-col justify-center"></div>
        </div>
        {/* text */}
        <div className="flex  md:pl-10 space-x-5 md:space-x-10">
          <span className="flex flex-col justify-center">
            <p className="text-5xl tracking-widest font-bold font-montserrat ">
              24
            </p>
            <p className="text-slate-500 text-sm font-montserrat">May</p>
            <p className="text-slate-500 text-sm font-montserrat">2024</p>
          </span>
          <div className="flex flex-col justify-center">
            <p className="text-4xl font-bold font-montserrat">
              Plastic junk? Researchers find tiny particles in men&apos;s
              testicles
            </p>
            <p className="text-slate-500 font-montserrat mt-3">
              Whether it&apos;s our bloodstream, brain, or lungs, microscopic
              fragments of plastic seem to turn up every time scientists scour a
              new corner of the human body. The male reproductive organs are no
              exception...
            </p>

            <Link
              href={`/blogs/${2}`}
              className="animate-bounce text-lg mt-3 text-left flex items-center underline"
            >
              read more <IoArrowForward />
            </Link>
          </div>
        </div>
      </div>

      {/* oop post */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative h-60 md:h-96 mt-6 bg-contain cursor-pointer bg-[url('/blog1.png')]">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70  bg-top transition-opacity duration-300 flex flex-col justify-center"></div>
        </div>
        {/* text */}
        <div className="flex  md:pl-10 space-x-5 md:space-x-10">
          <span className="flex flex-col justify-center">
            <p className="text-5xl tracking-widest font-bold font-montserrat ">
              01
            </p>
            <p className="text-slate-500 text-sm font-montserrat">October</p>
            <p className="text-slate-500 text-sm font-montserrat">2022</p>
          </span>
          <div className="flex flex-col justify-center">
            <p className="text-4xl font-bold font-montserrat">
              Object Oriented Design
            </p>
            <p className="text-slate-500 font-montserrat mt-3">
              Object-oriented design started right from the moment computers
              were invented. At the beginning of the computing era, programming
              was usually limited to ...
            </p>

            <Link
              href={`/blogs/${1}`}
              className="animate-bounce text-lg mt-3 text-left flex items-center underline"
            >
              read more <IoArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
