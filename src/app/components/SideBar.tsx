import { FaBoxOpen } from "react-icons/fa6";
import { MdOutlineEditNote } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { BiLogoStripe } from "react-icons/bi";
import { ImMobile } from "react-icons/im";
import { FaComputer } from "react-icons/fa6";
import { BiFridge } from "react-icons/bi";
import { GiClothes } from "react-icons/gi";
import { GrRestroomWomen } from "react-icons/gr";
import { FaBaby } from "react-icons/fa6";
import { GiConsoleController } from "react-icons/gi";
import { FaCarBattery } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { MdSignalWifiStatusbarConnectedNoInternet3 } from "react-icons/md";
import { FcElectricity } from "react-icons/fc";
import { TbTruckDelivery } from "react-icons/tb";
export const SideBar = () => {
  return (
    <div className="absolute w-1/4 shadow-xl h-[150vh]">
      <div className="mt-2 flex justify-between">
        <BiLogoStripe className={`h-12 hover:cursor-pointer w-12`} />
        <button className="text-xl mr-4 hover:cursor-pointer">X</button>
      </div>
      <p className="text-sm text-center mb-2 mt-3">Account</p>

      <div className="border mx-2 border-gray-300"></div>
      <ul className="ml-2 text-slate-700">
        <li className="flex py-1 justify-start px-">
          <FaBoxOpen className="h-6 text-slate-700 mr-2 w-5" />
          Orders
        </li>
        <li className="flex py-1 justify-start px-">
          <MdOutlineEditNote className="h-6 text-slate-800 mr-2 w-5" />
          Pending orders
        </li>
        <li className="flex py-1 justify-start px-">
          <CiHeart className="h-6 text-slate-800 mr-2 w-5" />
          Saved items
        </li>
      </ul>
      <p className="text-sm text-center mb-2 mt-7">Categories</p>
      <div className=" border mx-2 border-gray-300"></div>
      <ul className="ml-2 text-slate-700">
        <li className="flex py-1 justify-start px-">
          <ImMobile className="h-6 text-slate-800 mr-2 w-5" />
          Phones & Tablets
        </li>
        <li className="flex py-1 justify-start px-">
          <FaComputer className="h-6 text-slate-800 mr-2 w-5" />
          Computing
        </li>
        <li className="flex py-1 justify-start px-">
          <BiFridge className="h-6 text-slate-800 mr-2 w-5" />
          Appliances & Electronics
        </li>
        <li className="flex py-1 justify-start px-">
          <GiClothes className="h-6 text-slate-800 mr-2 w-5" />
          Men's Clothing
        </li>
        <li className="flex py-1 justify-start px-">
          <GrRestroomWomen className="h-6 text-slate-800 mr-2 w-5" />
          Women's Clothing
        </li>
        <li className="flex py-1 justify-start px-">
          <FaBaby className="h-6 text-slate-800 mr-2 w-5" />
          Baby Products
        </li>
        <li className="flex py-1 justify-start px-">
          <GiConsoleController className="h-6 text-slate-800 mr-2 w-5" />
          Gaming
        </li>
        <li className="flex py-1 justify-start px-">
          <FaCarBattery className="h-6 text-slate-800 mr-2 w-5" />
          Power
        </li>
        <li className="flex py-1 justify-start px-">
          <FaCar className="h-6 text-slate-800 mr-2 w-5" />
          Automobile
        </li>
        <li className="flex py-1 justify-end px-2">see more</li>
      </ul>
      <p className="text-sm ml-2 text-start mb-2 mt-7">Our Services</p>
      <div className=" border mx-2 border-gray-300"></div>
      <ul className="ml-2 text-slate-700">
        <li className="flex py-1 justify-start px-">
          <MdSignalWifiStatusbarConnectedNoInternet3 className="h-6 text-slate-800 mr-2 w-5" />
          Internet Bills
        </li>
        <li className="flex py-1 justify-start px-">
          <FcElectricity className="h-6 text-slate-800 mr-2 w-5" />
          Electric Bills
        </li>
        <li className="flex py-1 justify-start px-">
          <TbTruckDelivery className="h-6 text-slate-800 mr-2 w-5" />
          Delivery Services
        </li>
        <li className="flex py-1 justify-end px-2">see more</li>
      </ul>
    </div>
  );
};
