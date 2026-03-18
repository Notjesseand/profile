import React from "react";
import Link from "next/link";
import { SlSocialTwitter } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="py-16 flex flex-col justify-center px-6">
      <div className="grid md:grid-cols-3 space-y-6 md:space-y-0">
        <div className=" md:pl-24">
          <p className="font-bold font-montserrat text-xl text-white">Get in touch</p>
          <Link href="mailto:jessennorom@gmail.com" className="flex text-slate-400 hover:text-blue-400 transition-colors">
            jessennorom@gmail.com
          </Link>
        </div>
        {/* locations */}
        <div className=" md:pl-24">
          <p className="font-bold font-montserrat text-xl text-white">Locations</p>
          <p className="flex text-slate-400">Enugu, Nigeria</p>
        </div>
        {/* socials */}
        <div className=" md:pl-24 ">
          <Link
            href="https://twitter.com/jessecodess"
            className="rounded-full border-white/20 border-2 inline-block p-3 text-white hover:text-blue-400 hover:border-blue-400 transition-colors"
          >
            <SlSocialTwitter className="text-xl" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/jesse-nnorom/"
            className="rounded-full border-white/20 border-2 inline-block p-3 ml-5 text-white hover:text-blue-400 hover:border-blue-400 transition-colors"
          >
            <FaLinkedinIn className="text-xl" />
          </Link>
          <Link
            href="https://github.com/Notjesseand"
            className="rounded-full border-white/20 border-2 inline-block p-3 ml-5 text-white hover:text-blue-400 hover:border-blue-400 transition-colors"
          >
            <FaGithub className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
