"use client";
import React, { useState } from "react";
import Nav from "@/components/nav";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/config/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { Spinner } from "@material-tailwind/react";
import Support from "@/components/support";
import Image from "next/image";
import Contact from "@/components/contact";

export default function Page() {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
        comment: comment,
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

  return (
    <div className="font-custom">
      <Nav />
      {/* offest */}
      <div className="pt-28"></div>

      <div className="md:pt-7 px-4 md:px-20">
        <div className="flex items-center ">
          Blog <div className="w-6 mx-3 h-[1px]  border items-center flex" />{" "}
          <span className="text-slate-600 ">1 Oct 2022</span>{" "}
        </div>
        <p className="text-4xl mt-5  md:text-6xl font-bold font-montserrat  tracking-wider">
          Object Oriented Programming
        </p>
        <img src="blog1.png" alt="" className="w-full mt-8" />

        {/* blog post */}
        <div className="indent-7 leading-7 md:leading-8 text-justify">
          <p className="indent pt-6   ">
            Object-oriented design started right from the moment computers were
            invented. At the beginning of the computing era, programming was
            usually limited to machine language programming. Machine language
            means those sets of instructions that are specific to a particular
            machine or processor, which are in the form of 0&apos;s and
            1&apos;s. These are sequences of bits (0100110…). But it&apos;s
            quite difficult to write a program or develop software in machine
            language. <br />
            An object contains encapsulated data and procedures grouped together
            to represent an entity. The &apos;object interface&apos; defines how
            the object can be interacted with. An object-oriented program is
            described by the interaction of these objects. Object-oriented
            design is the discipline of defining the objects and their
            interactions to solve a problem that was identified and documented
            during object-oriented analysis. It&apos;s actually impossible to
            develop software used in today&apos;s scenarios with sequences of
            bits. This was the main reason programmers moved on to the next
            generation of programming languages, developing assembly languages,
            which were near enough to the English language to easily understand.
            These assembly languages were used in microprocessors. With the
            invention of the microprocessor, assembly languages flourished and
            ruled over the industry, but it was not enough. Again, programmers
            came up with something new, i.e., structured and procedural
            programming. <br />
          </p>
          <p className="indent">
            <b>Structured Programming</b> – The basic principle of the
            structured programming approach is to divide a program into
            functions and modules. The use of modules and functions makes the
            program more understandable and readable. It helps to write cleaner
            code and to maintain control over the functions and modules. This
            approach gives importance to functions rather than data. It focuses
            on the development of large software applications, for example, C
            was used for modern operating system development. The programming
            languages: PASCAL (introduced by Niklaus Wirth) and C (introduced by
            Dennis Ritchie) follow this approach.
          </p>
          <p className="indent">
            <b>Procedural Programming Approach</b> – This approach is also known
            as the top-down approach. In this approach, a program is divided
            into functions that perform specific tasks. This approach is mainly
            used for medium-sized applications. Data is global, and all the
            functions can access global data. The basic drawback of the
            procedural programming approach is that data is not secured because
            data is global and can be accessed by any function. Program control
            flow is achieved through function calls and goto statements. The
            programming languages: FORTRAN (developed by IBM) and COBOL
            (developed by Dr. Grace Murray Hopper) follow this approach. These
            programming constructs were developed in the late 1970s and 1980s.
            There were still some issues with these languages, though they
            fulfilled the criteria of well-structured programs, software, etc.
            They were not as structured as the requirements were at that time.
            They seem to be over-generalized and don&apos;t correlate with
            real-time applications. To solve such kinds of problems, OOP, an
            object-oriented approach was developed as a solution.
          </p>
          <p>
            <b>Data Abstraction</b> – Abstraction refers to the act of
            representing important and special features without including the
            background details or explanation about that feature. Data
            abstraction simplifies database design. <br />
            <b>1.</b> Physical Level: It describes how the records are stored,
            which are often hidden from the user. It can be described with the
            phrase, “block of storage.” <br />
            <b>2.</b> Logical Level: It describes data stored in the database
            and the relationships between the data. The programmers generally
            work at this level as they are aware of the functions needed to
            maintain the relationships between the data. <br />
            <b>3.</b> View Level: Application programs hide details of data
            types and information for security purposes. This level is generally
            implemented with the help of GUI, and details that are meant for the
            user are shown. <br />
          </p>
          <p className="">
            <b>Encapsulation</b> – Encapsulation is one of the fundamental
            concepts in object-oriented programming (OOP). It describes the idea
            of wrapping data and the methods that work on data within one unit,
            e.g., a class in Java. This concept is often used to hide the
            internal state representation of an object from the outside.
            Inheritance – Inheritance is the ability of one class to inherit
            capabilities or properties of another class, called the parent
            class. When we write a class, we inherit properties from other
            classes. So when we create a class, we do not need to write all the
            properties and functions again and again, as these can be inherited
            from another class that possesses it. Inheritance allows the user to
            reuse the code whenever possible and reduce its redundancy.
            Polymorphism – Polymorphism is the ability of data to be processed
            in more than one form. It allows the performance of the same task in
            various ways. It consists of method overloading and method
            overriding, i.e., writing the method once and performing a number of
            tasks using the same method name.
          </p>
          <p>Some important points to know about OOP: </p>
          <span>
            <span>
              <b className="numbering">1.</b> OOP treats data as a critical
              element.{" "}
            </span>
            <br />
            <span>
              <b>2.</b>Emphasis is on data rather than procedure.
            </span>
            <br />
            <span>
              <b>3.</b>Decomposition of the problem into simpler modules.{" "}
            </span>
            <br />
            <span>
              <b>4.</b>Doesn&apos;t allow data to freely flow in the entire
              system, ie localized control flow.
            </span>
            <br />
            <span>
              <b>5.</b>Data is protected from external functions.{" "}
            </span>
            <br />
          </span>
          <span>
            <p>
              <b>Advantages of OOPs –</b> <br />
            </p>

            <span>
              <b> •</b> It models the real world very well.{" "}
            </span>
            <br />
            <span>
              <b> •</b> With OOP, programs are easy to understand and maintain.{" "}
            </span>
            <br />
            <span>
              <b> •</b> OOP offers code reusability. Already created classes can
              be reused without having to write them again.
            </span>
            <br />
            <span>
              <b> •</b> OOP facilitates the quick development of programs where
              parallel development of classes is possible.{" "}
            </span>
            <br />
            <span>
              <b> •</b> With OOP, programs are easier to test, manage and debug.{" "}
            </span>
            <br />

            <p>
              {" "}
              <b>Disadvantages of OOPs –</b> <br />
              <span>
                <b> •</b>With OOP, classes sometimes tend to be
                over-generalized.{" "}
              </span>
              <br />
              <span>
                <b> •</b> The relations among classes become superficial at
                times.{" "}
              </span>
              <br />
              <span>
                <b> •</b> The OOP design is tricky and requires appropriate
                knowledge. Also, one needs to do proper planning and design for
                OOP programming.{" "}
              </span>
              <br />
              <span>
                <b> •</b> To program with OOP, the programmer needs proper
                skills such as design, programming, and thinking in terms of
                objects and classes, etc.{" "}
              </span>
              <br />{" "}
            </p>
          </span>

          {/*  */}
          <div className="grid md:grid-cols-2 pt-16">
            <div className="flex">
              <img
                src="profile.jpg"
                alt=""
                className="h-56   mr-3    rounded-[100%]"
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
            </div>
          </div>
        </div>
      </div>
      <Support/>  
      <Contact/>
    </div>
  );
}
