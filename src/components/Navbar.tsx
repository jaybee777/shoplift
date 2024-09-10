import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex px-6 justify-between items-center">
      <Link to={"/"}>
        <img src="https://ekbkhbre" alt="logo" />
      </Link>
      <div className="flex xl:gap-8 sm:gap-2">
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}> contact</Link>
        <Link to={"/cart"}>cart</Link>
        <Link to={"/login"}>login</Link>
        <Link to={"/signup"}>singup</Link>
        <Link to={"/profile"}>Profile</Link>
      </div>
    </div>
  );
}
