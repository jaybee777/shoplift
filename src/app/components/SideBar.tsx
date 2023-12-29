import { FaBoxOpen } from "react-icons/fa6";
import { MdOutlineEditNote } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { BiLogoStripe } from "react-icons/bi";

export const SideBar = () => {
  return (
    <div className="w-1/6 shadow-xl h-[100vh]">
      <div className="mt-2 flex justify-between">
        <BiLogoStripe className={`h-12 hover:cursor-pointer w-12`} />
        <button className="text-2xl mr-4 hover:cursor-pointer">X</button>
      </div>
      <p className="text-sm text-center mb-2 mt-7">Account</p>

      <div className=" border mx-2 border-gray-300"></div>
      <ul className="ml-2 text-slate-700">
        <li className="flex py-1 justify-start px-">
          <FaBoxOpen className="h-8 text-slate-700 mr-1 w-8" />
          Orders
        </li>
        <li className="flex py-1 justify-start px-">
          <MdOutlineEditNote className="h-8 text-slate-800 mr-1 w-8" />
          Pending orders
        </li>
        <li className="flex py-1 justify-start px-">
          <CiHeart className="h-8 text-slate-800 mr-1 w-8" />
          Saved items
        </li>
      </ul>
    </div>
  );
};
