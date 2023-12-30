"use client";
import Link from "next/link";
import { MdMenu } from "react-icons/md";

export const Navbar = () => {
  return (
    <nav className="flex shadow-md shadow-gray-400 bg-slate-700 text-white py-8  justify-between">
      <div>
        <MdMenu  />
        <h1 className="ml-6 hover:text-gray-300">ShopLift</h1>
      </div>
      <ul className="mr-6 w-2/12 items-center flex justify-between">
        <li className="hover:text-gray-300 text-xl hover:cursor-pointer">
          <Link href={`/`}>Home</Link>
        </li>
        <li className="hover:text-gray-300 hover:cursor-pointer">
          {" "}
          <Link href={`/cart`}>Cart</Link>
        </li>
        <li className="hover:text-gray-300 hover:cursor-pointer">
          <Link href={`/signIn`}>SignIn</Link>
        </li>
      </ul>
    </nav>
  );
};
