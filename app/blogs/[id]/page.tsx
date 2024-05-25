"use client";
import React, { useState, useEffect } from "react";
import { db } from "@/config/firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";
import Nav from "@/components/nav";
import Contact from "@/components/contact";
import Support from "@/components/support";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@material-tailwind/react";
import { useToast } from "@/components/ui/use-toast";
import { Timestamp } from "firebase/firestore";
// import Link from "next/link";

const Page = ({ params }: { params: any }) => {
  const id = params.id;

  const [blogPost, setBlogPost] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(db, "posts", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const blog = docSnap.data();
          // @ts-ignore
          setBlogPost(blog);
          setLoading(false);
        } else {
          console.log("No interests document found for the user");
        }
      } catch (error) {
        console.error("Error fetching interests:", error);
      }
    };

    fetchBlog();
  }, []);

  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };
  const handleCommentChange = (event: any) => {
    setComment(event.target.value);
  };
  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const addData = async () => {
    setIsLoading(true);
    try {
      await setDoc(doc(db, "comments", name), {
        name: name,
        email: email,
        blogPost: blogPost.title,
        comment: comment,
      });
      toast({
        title: "Success",
        description: "Comment Sent",
      });
      setName("");
      setEmail("");
      setComment("");
      setIsLoading(false);
      console.log(`data added successfully`);
    } catch (error) {
      setIsLoading(false);
      console.error(`Error adding data`, error);
    }
  };

  // formatting the date timestamp
  const firestoreTimestamp = blogPost?.date.seconds;

  const formatFirestoreTimestamp = (firestoreTimestamp: any) => {
    const date = new Timestamp(
      blogPost?.date.seconds,
      blogPost?.date.nanoseconds
    ).toDate();

    const options = { year: "numeric", month: "long", day: "numeric" };
    // @ts-ignore
    const formattedDate = date.toLocaleDateString("en-US", options);

    return formattedDate;
  };

  // Example usage
  const formattedDate = formatFirestoreTimestamp(firestoreTimestamp);
  console.log(formattedDate); // Outputs the formatted date

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Spinner className="h-12 w-12 flex text-slate-700" />
      </div>
    );
  }
  return (
    <div className="font-custom">
      <Nav />
      {/* offest */}
      <div className="pt-28"></div>

      <div className="md:pt-7 px-4 md:px-32">
        <div className="flex items-center ">
          Blog <div className="w-6 mx-3 h-[1px]  border items-center flex" />
          <span className="text-slate-600 ">{formattedDate}</span>
        </div>
        <p className="text-4xl mt-5  md:text-6xl font-bold font-montserrat  tracking-wider">
          {blogPost?.title}
        </p>
        <img src={blogPost?.image} alt="" className="w-full mt-8" />

        {/* blog post */}
        <div className="leading-7 md:leading-8 text-justify">
          <div
            className="leading-7 md:leading-8 text-justify mt-6"
            dangerouslySetInnerHTML={{ __html: blogPost?.post }}
          />

          {/*  */}
          <div className="grid md:grid-cols-2 pt-16">
            <div className="flex">
              <img
                src="/profile.jpg"
                alt=""
                className="h-56 mr-3 rounded-[100%]"
              />
              <div className="indent-0 ">
                <p className="text-2xl font-bold">Jesse Nnorom</p>
                <p className="text-slate-500 mt-2">Chief Editor</p>
              </div>
            </div>

            <div className="w-full">
              <p className="text-2xl font-bold pb-9 indent-0">Leave a Reply</p>

              {/* form */}
              <input
                type="text"
                onChange={handleNameChange}
                name=""
                value={name}
                placeholder="Full Name*"
                className="pl-1 border-b-2  border-slate-700 outline-none w-full pb-4"
                id=""
              />
              <input
                type="email"
                onChange={handleEmailChange}
                name=""
                value={email}
                placeholder="Email Address*"
                className="pl-1 border-b-2  border-slate-700 outline-none w-full pb-4 mt-7"
                id=""
              />
              <Textarea onChange={handleCommentChange} value={comment} />

              <div className="h-20 flex ">
                {comment && name && email ? (
                  <button
                    onClick={addData}
                    className=" border-2 rounded-full h-12 w-48 text-center flex justify-center items-center  mt-6 hover:bg-black hover:text-white"
                  >
                    {isLoading ? (
                      <Spinner className="animate-spin text-orange-600 " />
                    ) : (
                      "Send Comment"
                    )}
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Support />
      <Contact />
    </div>
  );
};

export default Page;
