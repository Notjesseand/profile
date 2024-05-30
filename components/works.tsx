import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import useOnScreen from "@/hooks/scroll";
import { variantLeftToRight } from "@/hooks/variants";
import { variantRightToLeft } from "@/hooks/variants";
import { variantBottomToTop } from "@/hooks/variants";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Works() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [ref2, isVisible2] = useOnScreen({ theshold: 0.1 });
  const [ref3, isVisible3] = useOnScreen({ threshold: 0.1 });

  return (
    <div className="pt-14 ">
      <div className="mx-8 md:mx-20">
        <p className="text-lg text-slate-500">MY WORKS</p>
        <div className="md:flex">
          <p className="text-5xl font-bold font-montserrat">Portfolio</p>
          <p className="md:pl-[25%] text-slate-500 pt-2 md:pt-0 text-focus-in">
            Having a background in freelancing, I have worked on personal
            projects as well as projects for clients, working remotely with
            teams and startups.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5 pt-5">
        {/* digital library */}
        <motion.div
          // @ts-ignore
          ref={ref}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variantLeftToRight}
          transition={{ duration: 1 }}
        >
          <Link
            href="https://thuggers-library.vercel.app/"
            className="relative h-[420px] md:h-[500px] bg-[#404258ba] cursor-pointer hover:scale-95 transition-all duration-500 flex flex-col justify-center"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 hover:opacity-80  transition-opacity duration-300 flex flex-col justify-end pb-4 sm:pb-10">
              <HiOutlineExternalLink className="flex text-4xl hover:text-blue-500 relative  z-50 text-white mx-auto" />
              <p className="text-white text-xl sm:text-2xl font-bold font-montserrat text-center z-50 relative">
                Personalized Digital Library
              </p>
            </div>

            {/* Image */}
            <img
              src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716878955/library-ps-compressed_lqmctm.jpg"
              className="w-[90%] flex mx-auto "
            />
          </Link>
        </motion.div>
        {/* Blog */}
        <motion.div
          // @ts-ignore
          ref={ref2}
          initial="hidden"
          animate={isVisible2 ? "visible" : "hidden"}
          variants={variantBottomToTop}
          transition={{ duration: 1 }}
        >
          <Link
            href="https://store-nine-red.vercel.app/"
            className="relative h-[420px] md:h-[500px] bg-[#404258ba] cursor-pointer hover:scale-95 transition-all duration-500 flex flex-col justify-center"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 hover:opacity-80  transition-opacity duration-300 flex flex-col justify-end pb-4 sm:pb-10">
              <HiOutlineExternalLink className="flex text-4xl hover:text-blue-500 relative  z-50 text-white mx-auto" />
              <p className="text-white text-xl sm:text-2xl font-bold font-montserrat text-center z-50 relative">
                Shopping Site
              </p>
            </div>

            {/* Image */}
            <img
              src="https://res.cloudinary.com/dv62ty87r/image/upload/v1717077944/store-compressed-2_ea6rqs.jpg"
              className="w-[90%] flex mx-auto "
            />
          </Link>
        </motion.div>
        {/* crypto */}
        <motion.div
          // @ts-ignore
          ref={ref3}
          initial="hidden"
          animate={isVisible3 ? "visible" : "hidden"}
          variants={variantRightToLeft}
          transition={{ duration: 1 }}
        >
          <Link
            href="https://swapp-nu.vercel.app/"
            className="relative h-[420px] md:h-[500px] bg-[#404258ba] cursor-pointer hover:scale-95 transition-all duration-500 flex flex-col justify-center"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 hover:opacity-80  transition-opacity duration-300 flex flex-col justify-end pb-4 sm:pb-10">
              <HiOutlineExternalLink className="flex text-4xl hover:text-blue-500 relative  z-50 text-white mx-auto" />
              <p className="text-white text-xl sm:text-2xl font-bold font-montserrat text-center z-50 relative">
                Crypto Site
              </p>
            </div>

            {/* Image */}
            <img
              src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716621530/Screenshot_2024-05-24_101717_qots9g.png"
              className="w-[90%] flex mx-auto "
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
