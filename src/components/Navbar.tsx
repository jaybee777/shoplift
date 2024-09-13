import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <div className="flex px-6 justify-between py-2 items-center">
      <Link to={"/"}>
        <img src="https://ekbkhbre" alt="logo" />
      </Link>
      <div className="flex items-center xl:gap-8 sm:gap-2">
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}> contact</Link>
        <Link to={"/cart"}>cart</Link>
        <Link to={"/login"}>login</Link>
        <Link to={"/signup"}>singup</Link>
        <Link to={"/profile"}>
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  );
}
