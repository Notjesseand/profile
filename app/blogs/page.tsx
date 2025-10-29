// "use client";
// import React, { useEffect, useState } from "react";
// import Nav from "@/components/nav";
// import { IoArrowForward } from "react-icons/io5";
// import Link from "next/link";
// import Support from "@/components/support";
// import Contact from "@/components/contact";
// import { db } from "@/config/firebase";
// import { getDoc, doc } from "firebase/firestore";

// const Page = () => {
//   const [blogPost, setBlogPost] = useState();

//    console.log(blogPost);

//   return (
//     <div className="">
//       <Nav />
//       <div className="w-full pt-36 px-7  md:px-10 lg:px-20">
//         <p className=" text-lg md:text-xl ``` font-semibold font-montserrat text-center">
//           Blog Posts
//         </p>

//         <div className="grid md:grid-cols-2 gap-4 mt-3">
//           <div className="relative h-60 md:h-96 mt-6 bg-cover bg-center cursor-pointer bg-[url(https://res.cloudinary.com/dv62ty87r/image/upload/v1716584819/plastic-optimized_ae5ac2.jpg)]">
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70  bg-top transition-opacity duration-300 flex flex-col justify-center"></div>
//           </div>
//           {/* text */}
//           <div className="flex  md:pl-10 space-x-5 md:space-x-10">
//             <span className="flex flex-col justify-center">
//               <p className="text-5xl tracking-widest font-bold font-montserrat ">
//                 24
//               </p>
//               <p className="text-slate-500 text-sm font-montserrat">May</p>
//               <p className="text-slate-500 text-sm font-montserrat">2024</p>
//             </span>
//             <div className="flex flex-col justify-center">
//               <p className="text-4xl font-bold font-montserrat">
//                 Plastic junk? Researchers find tiny particles in men&apos;s
//                 testicles
//               </p>
//               <p className="text-slate-500 font-montserrat mt-3">
//                 Whether it&apos;s our bloodstream, brain, or lungs, microscopic
//                 fragments of plastic seem to turn up every time scientists scour
//                 a new corner of the human body. The male reproductive organs are
//                 no exception...
//               </p>

//               <Link
//                 href={`/blogs/${2}`}
//                 className="animate-bounce text-lg mt-3 text-left flex items-center underline"
//               >
//                 read more <IoArrowForward />
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-4 mt-3">
//           <div className="relative h-60 md:h-96 mt-6 bg-contain cursor-pointer bg-[url('/blog1.png')]">
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70  bg-top transition-opacity duration-300 flex flex-col justify-center"></div>
//           </div>
//           {/* text */}
//           <div className="flex  md:pl-10 space-x-5 md:space-x-10">
//             <span className="flex flex-col justify-center">
//               <p className="text-5xl tracking-widest font-bold font-montserrat ">
//                 01
//               </p>
//               <p className="text-slate-500 text-sm font-montserrat">October</p>
//               <p className="text-slate-500 text-sm font-montserrat">2022</p>
//             </span>
//             <div className="flex flex-col justify-center">
//               <p className="text-4xl font-bold font-montserrat">
//                 Object Oriented Design
//               </p>
//               <p className="text-slate-500 font-montserrat mt-3">
//                 Object-oriented design started right from the moment computers
//                 were invented. At the beginning of the computing era,
//                 programming was usually limited to ...
//               </p>

//               <Link
//                 href={`/blogs/${1}`}
//                 className="animate-bounce text-lg mt-3 text-left flex items-center underline"
//               >
//                 read more <IoArrowForward />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Support />
//       <Contact />
//     </div>
//   );
// };

// export default Page;

"use client";
import React, { useEffect, useState } from "react";
import Nav from "@/components/nav";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import Support from "@/components/support";
import Contact from "@/components/contact";
import { db } from "@/config/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  post: string;
  image: string;
  date: Timestamp;
}

const Page = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db, "posts"), orderBy("date", "desc"));
        const querySnapshot = await getDocs(q);
        const blogs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as BlogPost[];

        setBlogPosts(blogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Format Firestore Timestamp to "01 October 2022"
  const formatDate = (timestamp: Timestamp) => {
    const date = timestamp.toDate();
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    return { day, month, year };
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-orange-600"></div>
      </div>
    );
  }

  return (
    <div className="">
      <Nav />
      <div className="w-full pt-36 px-7 md:px-10 lg:px-20">
        <p className="text-lg md:text-xl font-semibold font-montserrat text-center">
          Blog Posts
        </p>

        <div className="space-y-16 mt-10">
          {blogPosts.map((blog, index) => {
            const { day, month, year } = formatDate(blog.date);
            const isEven = index % 2 === 0;

            return (
              <div
                key={blog.id}
                className={`grid md:grid-cols-2 gap-4 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="relative h-60 md:h-96 mt-6 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity">
                      View Post
                    </p>
                  </div>
                </div>

                {/* Text */}
                <div
                  className={`flex md:pl-10 space-x-5 md:space-x-10 ${
                    isEven ? "" : "md:pr-10 md:pl-0"
                  }`}
                >
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
                    <h2 className="text-3xl md:text-4xl font-bold font-montserrat line-clamp-2">
                      {blog.title}
                    </h2>

                    {/* Extract first paragraph as preview */}
                    <div
                      className="text-slate-500 font-montserrat mt-3 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html:
                          blog.post.split("</p>")[0].replace(/<[^>]*>/g, "") +
                          "...",
                      }}
                    />

                    <Link
                      href={`/blogs/${blog.id}`}
                      className="animate-bounce text-lg mt-3 text-left flex items-center underline hover:text-orange-600 transition-colors"
                    >
                      read more <IoArrowForward className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {blogPosts.length === 0 && (
          <p className="text-center text-slate-500 mt-20">No blog posts yet.</p>
        )}
      </div>

      <Support />
      <Contact />
    </div>
  );
};

export default Page;