"use client";
import Image from "next/image";
import Nav from "@/components/nav";
import "../app/cursor.css";
import { Bio } from "../app/data";
import Services from "@/components/services";
import Works from "@/components/works";
import Blog from "@/components/blog";
import Support from "@/components/support";
import Contact from "@/components/contact";
import { motion } from "framer-motion";
import useOnScreen from "@/hooks/scroll";
import profile from "@/public/profile.jpg";

export default function Home() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const variant = {
    hidden: { opacity: 0, x: -250 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <main className="bg-slate-50 overflow-hidden">
      <Nav />
      <div className="pt-20 md:pt-28"></div>
      <p className="text-5xl font-bold block md:hidden mt-12 text-left pl-[20%] font-custom  ">
        Jesse
      </p>
      <p className="font-custom text-slate-500 md:hidden text-left pl-[20%]">
        web developer
      </p>
      <div className="pt-10  md:px-14 lg:gap-20 grid lg:grid-cols-3 grid-cols-1 ">
        {/* profile */}
        <div
          className="transform-banner flex h-[60vh] sm:h-[70vh] mx-auto relative justify-center px-7 sm:px-0 w-full
        "
        >
          <img
            src="/profile.jpg"
            alt=""
            className="h-[100%] max-h-[70vh]  rounded-lg object-cover flex mx-auto justify-center md:h-[100vh] aspect-square"
          />
        </div>

        <div className="sm:pt-20 col-span-2">
          <p className="text-5xl font-bold md:block hidden text-center lg:text-start">
            Jesse Nnorom
          </p>
          <motion.div
            // @ts-ignore
            ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={variant}
            transition={{ duration: 1 }}
          >
            <p className="mt-5 text-gray-600 w-11/12 lg:mx-0 mx-auto text flex lg:w-4/5 text-focus-in">
              {Bio}
            </p>
          </motion.div>
        </div>
      </div>
      {/* services that I provide */}
      <Services />
      <Works />
      <Blog />
      <Support />
      <Contact />
    </main>
  );
}
