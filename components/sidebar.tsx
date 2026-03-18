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
        <button className="rounded-full aspect-square p-2 relative -mt-1 bg-transparent text-white hover:bg-white/10 transition-colors outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none border-none">
          <HiMiniBars2 className="md:text-5xl text-3xl" />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-black/95 border-l border-white/10 text-white backdrop-blur-xl">
        {/* <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader> */}
        <div className="">
          <div className="items-center justify-center space-y-6 font-custom mt-10 text-lg">
            <Link href="/" className="flex justify-center text-white hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/resume" className="flex justify-center text-white hover:text-blue-400 transition-colors">
              Resume
            </Link>

            {/* <Link href="/blogs" className="flex justify-center text-white hover:text-blue-400 transition-colors">
              Blog
            </Link> */}
            <Link href="/contact" className="flex justify-center text-white hover:text-blue-400 transition-colors">
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
