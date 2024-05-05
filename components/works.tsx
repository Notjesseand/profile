import React from "react";
import Link from "next/link";

export default function Works() {
  return (
    <div className="pt-14 ">
      <div className="mx-8 md:mx-20">
        <p className="font-poppins text-lg text-slate-500 ">My Works</p>
        <div className="md:flex">
          <p className="text-5xl">Portfolio</p>
          <p className="md:pl-[25%] text-slate-500 pt-2 md:pt-0 text-focus-in">
            Having a background in freelancing, I have worked on personal
            projects as well as projects for clients, working remotely with
            teams.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5 pt-5">
        {/* digital library */}
        <Link
          href="https://thuggers-library.vercel.app/browse"
          className="relative h-[500px] bg-[#404258ba] cursor-pointer hover:scale-95 transition-all duration-500 flex flex-col justify-center"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-80  transition-opacity duration-300 flex flex-col justify-center">
            <p className="text-white text-3xl font-bold font-montserrat text-center z-50 relative">
              Personalized Digital Library
            </p>
          </div>

          {/* Image */}
          <img src="library.png" className="w-[90%] flex mx-auto " />
        </Link>
        {/* Blog */}
        <Link
          href="https://web3-indol.vercel.app/"
          className="relative h-[500px] bg-[#404258ba] cursor-pointer hover:scale-95 transition-all duration-500 flex flex-col justify-center"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-80  transition-opacity duration-300 flex flex-col justify-center">
            <p className="text-white text-3xl font-bold font-montserrat text-center z-50 relative">
              Blog Site
            </p>
          </div>

          {/* Image */}
          <img src="blog.png" className="w-[90%] flex mx-auto " />
        </Link>
        {/* crypto */}
        <Link
          href="https://realgoldstation.vercel.app/"
          className="relative h-[500px] bg-[#404258ba] cursor-pointer hover:scale-95 transition-all duration-500 flex flex-col justify-center"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-80  transition-opacity duration-300 flex flex-col justify-center">
            <p className="text-white text-3xl font-bold font-montserrat text-center z-50 relative">
              Crypto Site
            </p>
          </div>

          {/* Image */}
          <img src="crypto.png" className="w-[90%] flex mx-auto " />
        </Link>
      </div>
    </div>
  );
}
