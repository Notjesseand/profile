import React from "react";
import { BsLaptop } from "react-icons/bs";
import { CiServer } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa";

export default function Services() {
  return (
    <div className="bg-slate-50 pt-14 md:pt-32">
      <p className="capitalize font-custom  text-slate-500 text-lg md:ml-24 ml-7">
        SERVICES THAT I PROVIDE
      </p>
      <p className="font-bold text-5xl md:ml-24 mt-1  ml-7 font-montserrat">Services</p>
      {/* services */}
      <div className="grid md:grid-cols-3 px-5 md:px-20 gap-x-2 gap-y-4 pt-5">
        <div className="bg-white py-16 cursor- shadow-sm  text-start px-10 ">
          <BsLaptop className="text-7xl flex mt-3" />
          <p className="text-2xl font-semibold mt-1">Website design</p>
          <p className="text-slate-500 mt-4">
            I enjoy bringing ideas to life in the browser. I design websites and
            web applications using technologies like React.js, Next.js, Firebase
            and SQL
          </p>
        </div>
        <div className="bg-white py-16 cursor- shadow-sm  text-start px-10 ">
          <CiServer className="text-7xl flex mt-3" />
          <p className="text-2xl font-semibold mt-1">Backend Development</p>
          <p className="text-slate-500 mt-4">
            I am a fan of server-sdie technologies. I use PHP, Laravel, and
            Firebase for backend development
          </p>
        </div>
        <div className="bg-white py-16 cursor- shadow-sm  text-start px-10 ">
          <FaDatabase className="text-7xl flex mt-3" />
          <p className="text-2xl font-semibold mt-1">Backend Development</p>
          <p className="text-slate-500 mt-4">
            I am a fan of server-side technologies. I use PHP, Laravel, and
            Firebase for backend development
          </p>
        </div>
      </div>
    </div>
  );
}
