import React from 'react'
import Nav from '@/components/nav'
import Support from '@/components/support';
import Contact from '@/components/contact';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <Nav />
      <div className="pt-24"></div>
      <div className="px-6 md:px-20 pt-6 md:pt-12">
        <p className="text-slate-500 font-custom ">EXPERIENCE & EDUCATION</p>
        <p className="text-6xl mt-4 font-bold font-montserrat">My Resume</p>

        {/* experiences and eduction */}
        <div className="grid md:grid-cols-2 gap-x-20">
          {/* experience */}
          <div className="pt-8">
            <div className="font-custom font-semibold text-xl text-slate-600 border-b-2 pb-2 mb-4 w-full flex">
              Experience
            </div>
            {/* scholarly */}
            <div className="w-full py-3 flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">Scolarly</p>
                <p className="text-slate-500">Web Developer</p>
              </div>
              {/* duration */}
              <div className="border-2 px-4 py-1 rounded text-slate-500">
                2023
              </div>
            </div>
            {/* Abia Tech Hub */}
            <div className="w-full py-3 flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">Abia Tech Hub</p>
                <p className="text-slate-500">Intern and Web Developer</p>
              </div>
              {/* duration */}
              <div className="border-2 px-4 py-1 rounded text-slate-500">
                2023-2023
              </div>
            </div>
            {/* ECR Tech */}
            <div className="w-full py-3 flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">ECR Tech</p>
                <p className="text-slate-500">Intern</p>
              </div>
              {/* duration */}
              <div className="border-2 px-4 py-1 rounded text-slate-500">
                2019-2021
              </div>
            </div>
          </div>

          {/* eductation */}
          <div className="pt-8">
            <div className="font-custom font-semibold text-xl text-slate-600 border-b-2 pb-2 mb-4 w-full flex">
              Education
            </div>
            {/* scholarly */}
            <div className="w-full py-3 flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">University Of Nigeria, Nsukka</p>
                <p className="text-slate-500">Collge</p>
              </div>
              {/* duration */}
              <div className="border-2 px-4 py-1 rounded text-slate-500">
                2019-2023
              </div>
            </div>
            {/* Abia Tech Hub */}
            <div className="w-full py-3 flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">GSS Pyakassa, Abuja</p>
                <p className="text-slate-500">High School</p>
              </div>
              {/* duration */}
              <div className="border-2 px-4 py-1 rounded text-slate-500">
                2023-2023
              </div>
            </div>
            {/* ECR Tech */}
            <div className="w-full py-3 flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">Caray College International</p>
                <p className="text-slate-500">Middle School</p>
              </div>
              {/* duration */}
              <div className="border-2 px-4 py-1 rounded text-slate-500">
                2019-2021
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <Link href="/resume.pdf" className='text-black text-center flex py-20 justify-center underline'>Download CV</Link>
      </div>
      <Support/>
      <Contact/>
    </div>
  );
}