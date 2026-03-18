import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import useOnScreen from "@/hooks/scroll";
import { variantLeftToRight } from "@/hooks/variants";
import { variantRightToLeft } from "@/hooks/variants";
import { variantBottomToTop } from "@/hooks/variants";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Works() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [ref2, isVisible2] = useOnScreen({ threshold: 0.1 });
  const [ref3, isVisible3] = useOnScreen({ threshold: 0.1 });
  const [ref4, isVisible4] = useOnScreen({ threshold: 0.1 });
  const [ref5, isVisible5] = useOnScreen({ threshold: 0.1 });

  return (
    <div className="pt-14 pb-20">
      <div className="mx-8 md:mx-20">
        <p className="text-lg text-slate-500 tracking-wider font-semibold">MY WORKS</p>
        <div className="md:flex">
          <p className="text-5xl font-bold font-montserrat tracking-tight text-white drop-shadow-lg">
            Portfolio
          </p>
          <p className="md:pl-[25%] text-slate-400 pt-2 md:pt-0 text-focus-in leading-relaxed">
            Having a background in freelancing, I have worked on personal
            projects as well as projects for clients, working remotely with
            teams and startups.
          </p>
        </div>
      </div>

      {/* Real Complex Projects Section */}
      <div className="mx-8 md:mx-20 mt-16 mb-8 relative">
        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden md:block"></div>
        <h3 className="text-3xl font-bold font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Projects
        </h3>
        <p className="text-slate-500 mt-2 text-sm uppercase tracking-widest font-semibold">Web Applications & Platforms</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-20 pt-5">
        {/* Projects */}
        {/* Obels */}
        <motion.div
           // @ts-ignore
           ref={ref}
           initial="hidden"
           animate={isVisible ? "visible" : "hidden"}
           variants={variantLeftToRight}
           transition={{ duration: 0.8 }}
           className="group relative"
         >
           <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500 group-hover:duration-200"></div>
           <Link
             href="https://obels.vercel.app/"
             className="relative bg-[#1a1b26] rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-500 flex flex-col border border-white/10"
             target="_blank"
           >
             <div className="relative w-full aspect-video bg-black/40 overflow-hidden">
               <Image
                 src="/new-images/obels.png"
                 alt="Obels"
                 fill
                 className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
               />
             </div>
             <div className="p-6 flex flex-col items-center text-center">
               <HiOutlineExternalLink className="text-3xl text-white/70 group-hover:text-pink-400 mb-2 transition-colors duration-300" />
               <p className="text-white text-xl font-bold font-montserrat">
                 Obels
               </p>
               <span className="text-sm text-purple-300 font-medium mt-1">
                 Logistics Platform
               </span>
             </div>
           </Link>
         </motion.div>

        {/* E-Commerce Platform (Rubix) */}
        <motion.div
           // @ts-ignore
           ref={ref2}
           initial="hidden"
           animate={isVisible2 ? "visible" : "hidden"}
           variants={variantBottomToTop}
           transition={{ duration: 0.8 }}
           className="group relative"
         >
           <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500 group-hover:duration-200"></div>
           <Link
             href="https://rubix-nine.vercel.app/"
             className="relative bg-[#1a1b26] rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-500 flex flex-col border border-white/10"
             target="_blank"
           >
             <div className="relative w-full aspect-video bg-black/40 overflow-hidden">
               <Image
                 src="https://res.cloudinary.com/dv62ty87r/image/upload/v1728659940/rubix_e6xs0g.png"
                 alt="Rubix"
                 fill
                 className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
               />
             </div>
             <div className="p-6 flex flex-col items-center text-center">
               <HiOutlineExternalLink className="text-3xl text-white/70 group-hover:text-amber-400 mb-2 transition-colors duration-300" />
               <p className="text-white text-xl font-bold font-montserrat">
                 E-Commerce Platform
               </p>
               <span className="text-sm text-blue-300 font-medium mt-1">
                 Next.js, Shadcn UI
               </span>
             </div>
           </Link>
         </motion.div>

         {/* Stable Homes */}
         <motion.div
           // @ts-ignore
           ref={ref3}
           initial="hidden"
           animate={isVisible3 ? "visible" : "hidden"}
           variants={variantRightToLeft}
           transition={{ duration: 0.8 }}
           className="group relative md:col-span-2 lg:col-span-1 mx-auto w-full max-w-md lg:max-w-none"
         >
           <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500 group-hover:duration-200"></div>
           <Link
             href="https://stable-homes.vercel.app/"
             className="relative bg-[#1a1b26] rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-500 flex flex-col border border-white/10"
             target="_blank"
           >
             <div className="relative w-full aspect-video bg-black/40 overflow-hidden">
               <Image
                 src="/new-images/stable-homes.png"
                 alt="Stable Homes"
                 fill
                 className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
               />
             </div>
             <div className="p-6 flex flex-col items-center text-center">
               <HiOutlineExternalLink className="text-3xl text-white/70 group-hover:text-emerald-400 mb-2 transition-colors duration-300" />
               <p className="text-white text-xl font-bold font-montserrat">
                 Stable Homes
               </p>
               <span className="text-sm text-emerald-300 font-medium mt-1">
                 Real Estate Platform
               </span>
             </div>
           </Link>
         </motion.div>
      </div>

      {/* Landing Page Projects Section */}
      <div className="mx-8 md:mx-20 mt-24 mb-8 relative">
        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-green-400 to-emerald-600 rounded-full hidden md:block"></div>
        <h3 className="text-3xl font-bold font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
          Landing Page Projects
        </h3>
        <p className="text-slate-500 mt-2 text-sm uppercase tracking-widest font-semibold">High-conversion Sites</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-20 pt-5">
        {/* Landing Page Projects */}
        {/* Mango Cares */}
        <motion.div
           // @ts-ignore
           ref={ref4}
           initial="hidden"
           animate={isVisible4 ? "visible" : "hidden"}
           variants={variantBottomToTop}
           transition={{ duration: 0.8 }}
           className="group relative"
         >
           <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500 group-hover:duration-200"></div>
           <Link
             href="https://mango-cares.vercel.app/"
             className="relative bg-[#1a1b26] rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-500 flex flex-col border border-white/10"
             target="_blank"
           >
             <div className="relative w-full aspect-video bg-black/40 overflow-hidden">
               <Image
                 src="/new-images/mango-cares.png"
                 alt="Mango Cares"
                 fill
                 className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
               />
             </div>
             <div className="p-6 flex flex-col items-center text-center">
               <HiOutlineExternalLink className="text-3xl text-white/70 group-hover:text-orange-400 mb-2 transition-colors duration-300" />
               <p className="text-white text-xl font-bold font-montserrat">
                 Mango Cares
               </p>
               <span className="text-sm text-orange-300 font-medium mt-1">
                 Foundation Landing Page
               </span>
             </div>
           </Link>
         </motion.div>
 
         {/* Thuggers Store */}
        <motion.div
           // @ts-ignore
           ref={ref5}
           initial="hidden"
           animate={isVisible5 ? "visible" : "hidden"}
           variants={variantBottomToTop}
           transition={{ duration: 0.8 }}
           className="group relative"
         >
           <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500 group-hover:duration-200"></div>
           <Link
             href="https://store-nine-red.vercel.app/"
             className="relative bg-[#1a1b26] rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-500 flex flex-col border border-white/10"
             target="_blank"
           >
             <div className="relative w-full aspect-video bg-black/40 overflow-hidden">
               <Image
                 src="/new-images/thugger-store.png"
                 alt="Thuggers Store"
                 fill
                 className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
               />
             </div>
             <div className="p-6 flex flex-col items-center text-center">
               <HiOutlineExternalLink className="text-3xl text-white/70 group-hover:text-indigo-400 mb-2 transition-colors duration-300" />
               <p className="text-white text-xl font-bold font-montserrat">
                 Thuggers Store
               </p>
               <span className="text-sm text-indigo-300 font-medium mt-1">
                 E-commerce Landing Page
               </span>
             </div>
           </Link>
         </motion.div>
      </div>
    </div>
  );
}
