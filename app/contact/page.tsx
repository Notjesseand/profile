import React from "react";
import Nav from "@/components/nav";
import Contact from "@/components/contact";
import Support from "@/components/support";

const Page = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Nav />
      <div className="pt-36 ">
        <div className="px-20">
          <p className="text-slate-400 font-semibold text-lg font-montserrat ">
            GET IN TOUCH
          </p>
          <p className="text-4xl mt-6 font-bold font-montserrat text-white">
            Contact Details
          </p>
        </div>
        <Support />
        <Contact />
      </div>
    </div>
  );
};

export default Page;
