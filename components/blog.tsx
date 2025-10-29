// import React from "react";
// import { IoArrowForward } from "react-icons/io5";
// import Link from "next/link";

// export default function Blog() {
//   return (
//     <div className="px-6 md:px-20 pt-20">
//       <p className="font-poppins text-lg text-slate-500 ">RECENT ARTICLES</p>
//       <p className="text-5xl font-bold font-montserrat">Blog</p>

//       {/* latest post */}
//       <div className="grid md:grid-cols-2 gap-4">
//         <div className="relative h-60 md:h-96 mt-6 bg-cover bg-center cursor-pointer bg-[url(https://res.cloudinary.com/dv62ty87r/image/upload/v1716584819/plastic-optimized_ae5ac2.jpg)]">
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70  bg-top transition-opacity duration-300 flex flex-col justify-center"></div>
//         </div>
//         {/* text */}
//         <div className="flex  md:pl-10 space-x-5 md:space-x-10">
//           <span className="flex flex-col justify-center">
//             <p className="text-5xl tracking-widest font-bold font-montserrat ">
//               24
//             </p>
//             <p className="text-slate-500 text-sm font-montserrat">May</p>
//             <p className="text-slate-500 text-sm font-montserrat">2024</p>
//           </span>
//           <div className="flex flex-col justify-center">
//             <p className="text-4xl font-bold font-montserrat">
//               Plastic junk? Researchers find tiny particles in men&apos;s
//               testicles
//             </p>
//             <p className="text-slate-500 font-montserrat mt-3">
//               Whether it&apos;s our bloodstream, brain, or lungs, microscopic
//               fragments of plastic seem to turn up every time scientists scour a
//               new corner of the human body. The male reproductive organs are no
//               exception...
//             </p>

//             <Link
//               href={`/blogs/${2}`}
//               className="animate-bounce text-lg mt-3 text-left flex items-center underline"
//             >
//               read more <IoArrowForward />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* oop post */}
//       <div className="grid md:grid-cols-2 gap-4">
//         <div className="relative h-60 md:h-96 mt-6 bg-contain cursor-pointer bg-[url('/blog1.png')]">
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70  bg-top transition-opacity duration-300 flex flex-col justify-center"></div>
//         </div>
//         {/* text */}
//         <div className="flex  md:pl-10 space-x-5 md:space-x-10">
//           <span className="flex flex-col justify-center">
//             <p className="text-5xl tracking-widest font-bold font-montserrat ">
//               01
//             </p>
//             <p className="text-slate-500 text-sm font-montserrat">October</p>
//             <p className="text-slate-500 text-sm font-montserrat">2022</p>
//           </span>
//           <div className="flex flex-col justify-center">
//             <p className="text-4xl font-bold font-montserrat">
//               Object Oriented Design
//             </p>
//             <p className="text-slate-500 font-montserrat mt-3">
//               Object-oriented design started right from the moment computers
//               were invented. At the beginning of the computing era, programming
//               was usually limited to ...
//             </p>

//             <Link
//               href={`/blogs/${1}`}
//               className="animate-bounce text-lg mt-3 text-left flex items-center underline"
//             >
//               read more <IoArrowForward />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import { db } from "@/config/firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  post: string;
  image: string;
  date: Timestamp;
}

export default function Blog() {
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const q = query(
          collection(db, "posts"),
          orderBy("date", "desc"),
          limit(2) // Only get 2 most recent
        );
        const querySnapshot = await getDocs(q);
        const posts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as BlogPost[];

        setLatestPosts(posts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      }
    };

    fetchLatestPosts();
  }, []);

  // Format date: "24", "May", "2024"
  const formatDate = (timestamp: Timestamp) => {
    const date = timestamp.toDate();
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();
    return { day, month, year };
  };

  if (loading) {
    return (
      <div className="px-6 md:px-20 pt-20">
        <div className="animate-pulse">
          <div className="h-6 bg-slate-200 rounded w-40 mb-2"></div>
          <div className="h-10 bg-slate-200 rounded w-32"></div>
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <div className="h-96 bg-slate-200 rounded"></div>
            <div className="space-y-4">
              <div className="h-8 bg-slate-200 rounded w-12"></div>
              <div className="h-12 bg-slate-200 rounded"></div>
              <div className="h-20 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-20 pt-20">
      <p className="font-poppins text-lg text-slate-500">RECENT ARTICLES</p>
      <p className="text-5xl font-bold font-montserrat">Blog</p>

      {latestPosts.length === 0 ? (
        <p className="text-slate-500 mt-10 text-center">No posts yet.</p>
      ) : (
        latestPosts.map((post, index) => {
          const { day, month, year } = formatDate(post.date);
          const isFirst = index === 0;

          return (
            <div key={post.id} className="grid md:grid-cols-2 gap-4 mt-10">
              {/* Image */}
              <div className="relative h-60 md:h-96 mt-6 overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity">
                    View Article
                  </p>
                </div>
              </div>

              {/* Text */}
              <div className="flex md:pl-10 space-x-5 md:space-x-10">
                <span className="flex flex-col justify-center text-center md:text-left">
                  <p className="text-5xl tracking-widest font-bold font-montserrat">
                    {day}
                  </p>
                  <p className="text-slate-500 text-sm font-montserrat">
                    {month}
                  </p>
                  <p className="text-slate-500 text-sm font-montserrat">
                    {year}
                  </p>
                </span>

                <div className="flex flex-col justify-center">
                  <h3 className="text-4xl font-bold font-montserrat line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Preview: first paragraph without HTML */}
                  <p className="text-slate-500 font-montserrat mt-3 line-clamp-3">
                    {post.post
                      .split("</p>")[0]
                      .replace(/<[^>]*>/g, "")
                      .replace(/&[a-z]+;/g, " ") // clean &apos; → '
                      .trim() + "..."}
                  </p>

                  <Link
                    href={`/blogs/${post.id}`}
                    className="animate-bounce text-lg mt-3 text-left flex items-center underline hover:text-orange-600 transition-colors"
                  >
                    read more <IoArrowForward className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}