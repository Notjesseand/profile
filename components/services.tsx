import React from "react";
import { BsLaptop } from "react-icons/bs";
import { CiServer } from "react-icons/ci";
import { FaDatabase, FaMobileAlt } from "react-icons/fa"; // <-- added FaMobileAlt
import useOnScreen from "@/hooks/scroll";
import { motion } from "framer-motion";
import { variantLeftToRight, variantRightToLeft } from "@/hooks/variants";
import { variantBottomToTop } from "@/hooks/variants";

export default function Services() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [ref2, isVisible2] = useOnScreen({ threshold: 0.1 });
  const [ref3, isVisible3] = useOnScreen({ threshold: 0.1 });
  const [ref4, isVisible4] = useOnScreen({ threshold: 0.1 }); // <-- new ref

  return (
    <div className="pt-14 md:pt-32 overflow-hidden">
      <p className="capitalize font-custom text-slate-400 text-lg md:ml-24 ml-7">
        SERVICES THAT I PROVIDE
      </p>
      <p className="font-bold text-5xl md:ml-24 mt-1 font-montserrat ml-7 text-white">
        Services
      </p>
      {/* services */}
      <div className="grid lg:grid-cols-3 px-5 md:px-20 gap-x-2 gap-y-4 pt-5">
        {/* website design */}
        <motion.div
          // @ts-ignore
          ref={ref}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variantLeftToRight}
          transition={{ duration: 1 }}
          className="flex"
        >
          <div className="bg-white/5 border border-white/10 rounded-xl py-16 shadow-lg hover:bg-white/10 transition-all duration-300 text-start px-6 md:px-10">
            <BsLaptop className="text-7xl flex mt-3 text-blue-400" />
            <p className="text-2xl font-semibold mt-1 text-white">Frontend Development</p>
            <p className="text-slate-400 mt-4">
              I design and build modern, responsive web applications with a focus on performance, usability, and clean user experiences. Using technologies like React, Next.js, Tailwind CSS, and component systems, I turn ideas into fast, interactive interfaces that scale.
            </p>
          </div>
        </motion.div>

        {/* backend development */}
        <motion.div
          // @ts-ignore
          ref={ref2}
          initial="hidden"
          animate={isVisible2 ? "visible" : "hidden"}
          variants={variantBottomToTop}
          transition={{ duration: 1 }}
          className="flex"
        >
          <div className="bg-white/5 border border-white/10 rounded-xl py-16 shadow-lg hover:bg-white/10 transition-all duration-300 text-start px-6 md:px-10">
            <CiServer className="text-7xl flex mt-3 text-purple-400" />
            <p className="text-2xl font-semibold mt-1 text-white">
              Backend & API Development
            </p>
            <p className="text-slate-400 mt-4">
              I develop robust backend systems and RESTful APIs that power seamless application experiences. With Node.js and Express, I focus on building secure, scalable, and efficient architectures that ensure reliable communication between systems.
            </p>
          </div>
        </motion.div>

        {/* database management */}
        <motion.div
          // @ts-ignore
          ref={ref3}
          initial="hidden"
          animate={isVisible3 ? "visible" : "hidden"}
          variants={variantRightToLeft}
          transition={{ duration: 1 }}
          className="flex"
        >
          <div className="bg-white/5 border border-white/10 rounded-xl py-16 shadow-lg hover:bg-white/10 transition-all duration-300 text-start px-6 md:px-10">
            <FaDatabase className="text-7xl flex mt-3 text-cyan-400" />
            <p className="text-2xl font-semibold mt-1 text-white">Database Design & Management</p>
            <p className="text-slate-400 mt-4">
              I design and manage scalable data systems tailored to application needs. From flexible NoSQL databases like MongoDB to real-time solutions with Firebase, I ensure data is structured, accessible, and optimized for performance.
            </p>
          </div>
        </motion.div>

        {/* ---- NEW CARD: Cross‑platform App Development ---- */}
        <motion.div
          // @ts-ignore
          ref={ref4}
          initial="hidden"
          animate={isVisible4 ? "visible" : "hidden"}
          variants={variantLeftToRight} // you can change the variant if you prefer
          transition={{ duration: 1 }}
          className="flex"
        >
          <div className="bg-white/5 border border-white/10 rounded-xl py-16 shadow-lg hover:bg-white/10 transition-all duration-300 text-start px-6 md:px-10">
            <FaMobileAlt className="text-7xl flex mt-3 text-emerald-400" />
            <p className="text-2xl font-semibold mt-1 text-white">
              Mobile App Development
            </p>
            <p className="text-slate-400 mt-4">
              I build high-performance cross-platform mobile applications using React Native. By maintaining a shared codebase for iOS and Android, I deliver consistent, efficient, and native-like user experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}