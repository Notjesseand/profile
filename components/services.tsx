// import React from "react";
// import { BsLaptop } from "react-icons/bs";
// import { CiServer } from "react-icons/ci";
// import { FaDatabase } from "react-icons/fa";
// import useOnScreen from "@/hooks/scroll";
// import { motion } from "framer-motion";
// import { variantLeftToRight, variantRightToLeft } from "@/hooks/variants";
// import { variantBottomToTop } from "@/hooks/variants";

// export default function Services() {
//   const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
//   const [ref2, isVisible2] = useOnScreen({ threshold: 0.1 });
//   const [ref3, isVisible3] = useOnScreen({ threshold: 0.1 });

//   return (
//     <div className="bg- pt-14 md:pt-32 overflow-hidden">
//       <p className="capitalize font-custom  text-slate-500 text-lg md:ml-24 ml-7">
//         SERVICES THAT I PROVIDE
//       </p>
//       <p className="font-bold text-5xl md:ml-24 mt-1 font-montserrat ml-7 ">
//         Services
//       </p>
//       {/* services */}
//       <div className="grid lg:grid-cols-3 px-5 md:px-20 gap-x-2 gap-y-4 pt-5">
//         {/* website design */}
//         <motion.div
//           // @ts-ignore
//           ref={ref}
//           initial="hidden"
//           animate={isVisible ? "visible" : "hidden"}
//           variants={variantLeftToRight}
//           transition={{ duration: 1 }}
//           className="flex"
//         >
//           <div className="bg-white py-16 cursor- shadow-sm  text-start px-6 md:px-10 ">
//             <BsLaptop className="text-7xl flex mt-3" />
//             <p className="text-2xl font-semibold mt-1">Website design</p>
//             <p className="text-slate-500 mt-4">
//               I enjoy bringing ideas to life in the browser. I design websites
//               and web applications using technologies like React.js, Next.js,
//               Tailwind.css, Shadcn/ui, and animation libraries
//             </p>
//           </div>
//         </motion.div>

//         {/* backend development */}
//         <motion.div
//           // @ts-ignore
//           ref={ref2}
//           initial="hidden"
//           animate={isVisible2 ? "visible" : "hidden"}
//           variants={variantBottomToTop}
//           transition={{ duration: 1 }}
//           className="flex"
//         >
//           <div className="bg-white py-16 cursor- shadow-sm  text-start px-6 md:px-10 ">
//             <CiServer className="text-7xl flex mt-3" />
//             <p className="text-2xl font-semibold mt-1">
//               Backend and RESTful API Development
//             </p>
//             <p className="text-slate-500 mt-4">
//               I am proficient in creating and managing RESTful APIs. I use
//               Node.js and Express.js to build robust and scalable APIs, ensuring
//               seamless communication between the client and server.
//             </p>
//           </div>
//         </motion.div>

//         {/* database management */}
//         <motion.div
//           // @ts-ignore
//           ref={ref3}
//           initial="hidden"
//           animate={isVisible3 ? "visible" : "hidden"}
//           variants={variantRightToLeft}
//           transition={{ duration: 1 }}
//           className="flex"
//         >
//           <div className="bg-white py-16 cursor- shadow-sm  text-start px-6 md:px-10 ">
//             <FaDatabase className="text-7xl flex mt-3" />
//             <p className="text-2xl font-semibold mt-1">
//               Database Design
//             </p>
//             <p className="text-slate-500 mt-4">
//               I have extensive experience in managing and interacting with
//               databases. I use MongoDB for its flexibility and scalability, and
//               Firebase for real-time data synchronization and its integration
//               with the Google Cloud platform.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


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
    <div className="bg- pt-14 md:pt-32 overflow-hidden">
      <p className="capitalize font-custom  text-slate-500 text-lg md:ml-24 ml-7">
        SERVICES THAT I PROVIDE
      </p>
      <p className="font-bold text-5xl md:ml-24 mt-1 font-montserrat ml-7 ">
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
          <div className="bg-white py-16 cursor- shadow-sm  text-start px-6 md:px-10 ">
            <BsLaptop className="text-7xl flex mt-3" />
            <p className="text-2xl font-semibold mt-1">Website design</p>
            <p className="text-slate-500 mt-4">
              I enjoy bringing ideas to life in the browser. I design websites
              and web applications using technologies like React.js, Next.js,
              Tailwind.css, Shadcn/ui, and animation libraries
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
          <div className="bg-white py-16 cursor- shadow-sm  text-start px-6 md:px-10 ">
            <CiServer className="text-7xl flex mt-3" />
            <p className="text-2xl font-semibold mt-1">
              Backend and RESTful API Development
            </p>
            <p className="text-slate-500 mt-4">
              I am proficient in creating and managing RESTful APIs. I use
              Node.js and Express.js to build robust and scalable APIs, ensuring
              seamless communication between the client and server.
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
          <div className="bg-white py-16 cursor- shadow-sm  text-start px-6 md:px-10 ">
            <FaDatabase className="text-7xl flex mt-3" />
            <p className="text-2xl font-semibold mt-1">Database Design</p>
            <p className="text-slate-500 mt-4">
              I have extensive experience in managing and interacting with
              databases. I use MongoDB for its flexibility and scalability, and
              Firebase for real-time data synchronization and its integration
              with the Google Cloud platform.
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
          <div className="bg-white py-16 cursor- shadow-sm text-start px-6 md:px-10">
            <FaMobileAlt className="text-7xl flex mt-3" />
            <p className="text-2xl font-semibold mt-1">
              Cross‑platform App Development
            </p>
            <p className="text-slate-500 mt-4">
              With React Native, I build mobile applications that run
              seamlessly on both iOS and Android, sharing a single codebase
              while delivering native‑like user experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}