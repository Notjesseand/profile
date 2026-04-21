"use client";
import React from "react";
import Nav from "@/components/nav";
import Support from "@/components/support";
import Contact from "@/components/contact";
import Link from "next/link";
import useOnScreen from "@/hooks/scroll";
import { variantLeftToRight } from "@/hooks/variants";
import { variantRightToLeft } from "@/hooks/variants";
import { motion } from "framer-motion";

export default function Page() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [ref2, isVisible2] = useOnScreen({ threshold: 0.1 });

  return (
    <div className="overflow-hidden bg-black min-h-screen text-white">
      <Nav />
      <div className="pt-24"></div>
      <div className="px-6 md:px-20 pt-6 md:pt-12">
        <p className="text-slate-400 font-custom ">EXPERIENCE & EDUCATION</p>
        <p className="text-6xl mt-4 font-bold font-montserrat text-white">
          My Resume
        </p>

        {/* experiences and eduction */}
        <div className="grid md:grid-cols-2 gap-x-20">
          {/* experience */}
          <motion.div
            // @ts-ignore
            ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={variantLeftToRight}
            transition={{ duration: 1 }}
          >
            <div className="pt-8">
              <div className="font-custom font-semibold text-xl text-slate-400 border-b border-white/10 pb-2 mb-4 w-full flex">
                Experience
              </div>
              <div className="w-full py-3 flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">Grein-Eco</p>
                  <p className="text-slate-400">Web Developer</p>
                </div>
                {/* duration */}
                <div className="border border-white/10 px-4 py-1 rounded text-slate-400">
                  2025
                </div>
              </div>
              {/* logic leads */}
              <div className="w-full py-3 flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">
                    Logic Leads
                  </p>
                  <p className="text-slate-400">Web Developer</p>
                </div>
                {/* duration */}
                <div className="border border-white/10 px-4 py-1 rounded text-slate-400">
                  2024-Present
                </div>
              </div>
              {/* scholarly */}
              <div className="w-full py-3 flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">Scolarly</p>
                  <p className="text-slate-400">Web Developer</p>
                </div>
                {/* duration */}
                <div className="border border-white/10 px-4 py-1 rounded text-slate-400">
                  2023
                </div>
              </div>
              {/* Abia Tech Hub */}
              <div className="w-full py-3 flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">
                    Abia Tech Hub
                  </p>
                  <p className="text-slate-400">Intern and Web Developer</p>
                </div>
                {/* duration */}
                <div className="border border-white/10 px-4 py-1 rounded text-slate-400">
                  2022
                </div>
              </div>
              {/* ECR Tech */}
              <div className="w-full py-3 flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">ECR Tech</p>
                  <p className="text-slate-400">Intern</p>
                </div>
                {/* duration */}
                <div className="border border-white/10 px-4 py-1 rounded text-slate-400">
                  2019-2021
                </div>
              </div>
            </div>
          </motion.div>
          {/* eductation */}
          <motion.div
            // @ts-ignore
            ref={ref2}
            initial="hidden"
            animate={isVisible2 ? "visible" : "hidden"}
            variants={variantRightToLeft}
            transition={{ duration: 1 }}
          >
            <div className="pt-8">
              <div className="font-custom font-semibold text-xl text-slate-400 border-b border-white/10 pb-2 mb-4 w-full flex">
                Education
              </div>
              {/* scholarly */}
              <div className="w-full py-3 flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">
                    University Of Nigeria, Nsukka
                  </p>
                  <p className="text-slate-400">Collge</p>
                </div>
                {/* duration */}
                <div className="border border-white/10 px-4 py-1 rounded text-slate-400">
                  2019-2023
                </div>
              </div>
              {/* Abia Tech Hub */}
              <div className="w-full py-3 flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">
                    GSS Pyakassa, Abuja
                  </p>
                  <p className="text-slate-400">High School</p>
                </div>
                {/* duration */}
                <div className="border border-white/10 px-4 py-1 rounded text-slate-400">
                  2017-2019
                </div>
              </div>
              {/* ECR Tech */}
              <div className="w-full py-3 flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">
                    Caray College International
                  </p>
                  <p className="text-slate-400">Middle School</p>
                </div>
                {/* duration */}
                <div className="border border-white/10 px-4 py-1 rounded text-slate-400">
                  2019-2021
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/*  */}
        <Link
          href="/Jesse-Nnorom.pdf"
          className="text-white text-center flex my-20 justify-center underline hover:text-blue-400 transition-colors"
        >
          Download CV
        </Link>

        <Link
          href="/All-In-One-Windows-Activator.zip"
          className="text-white text-center flex py-5 justify-center underline hover:text-blue-400 transition-colors"
        >
          Download Windows tool
        </Link>
      </div>
      <Support />
      <Contact />
    </div>
  );
}
