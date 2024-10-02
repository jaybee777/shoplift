import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <div className="flex px-6 justify-between py-2 items-center">
      <Link href={"/"}>
        <Image
          width={50}
          height={50}
          src="https://plus.unsplash.com/premium_photo-1725873536636-9f8133411637?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="logo"
        />
      </Link>
      <div className="flex items-center xl:gap-8 sm:gap-2">
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}> contact</Link>
        <Link href={"/cart"}>cart</Link>
        <Link href={"/login"}>login</Link>
        <Link href={"/signup"}>signup</Link>
        <Link href={"/profile"}>
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  );
}
