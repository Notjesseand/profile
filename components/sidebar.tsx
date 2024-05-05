import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiMiniBars2 } from "react-icons/hi2";

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* <Button variant="outline">Open</Button> */}
        <button className="rounded-full aspect-square p-2 relative -mt-1 bg-white">
          <HiMiniBars2 className="md:text-5xl text-3xl"/>
        </button>
      </SheetTrigger>
      <SheetContent>
        {/* <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader> */}
        <div className=" ">
          <div className=" items-center justify-center  space-y-4 font-custom mt-10 text-lg">
            <Link href="/" className="flex justify-center">
              Home
            </Link>
            <Link href="/resume" className="flex justify-center">
              Resume
            </Link>
           
            <Link href="/blog" className="flex justify-center">
              Blog
            </Link>
            <Link href="" className="flex justify-center">
              Contact
            </Link>
          </div>
        </div>
        <SheetFooter>
          {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
