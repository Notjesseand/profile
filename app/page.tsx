import Image from "next/image";
import Nav from "@/components/nav";
import "../app/cursor.css";
import {Bio} from "../app/data" 

export default function Home() {
  return (
    <main className="">
      <div className="cursor js-cursor"></div>
      <div className="cursor"></div>
      <Nav />
      <p className="text-5xl font-bold block md:hidden mt-12 text-center">
        Jesse Nnorom
      </p>
      <div className="pt-10 sm:px-20 sm:gap-40 grid md:grid-cols-3 grid-cols-1">
        {/* profile */}
        <div className="transform-banner flex md:h-[75vh] h-[50vh] w-4/5 mx-auto md:w-96 relative justify-center">
          <Image
            src="/profile.jpg"
            alt=""
            className="h-auto w-4/5 rounded-lg object-cover flex mx-auto justify-center"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div className="sm:pt-20 col-span-2">
          <p className="text-5xl font-bold md:block hidden">Jesse Nnorom</p>
          <p className="mt-5 text-gray-600 w-11/12 mx-auto text-justify md:w-4/5 ">
            {Bio}
          </p>
        </div>
      </div>
    </main>
  );
}
