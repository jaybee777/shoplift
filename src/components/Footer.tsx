import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <div className="bg-slate-500 w-full  justify-between ">
        <h2
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="text-center text-white py-4 bg-slate-600 hover:bg-slate-700 duration-200"
        >
          back to Top^
        </h2>

        <div className="flex justify-between px-10">
          <Link href={"/"}>
            <Image src="https://rehkbdkherb" alt="logo" />
          </Link>

          <div className=" pt-3 flex gap-6 text-yellow-50">
            <Link href={"/"}>about</Link>
            <Link href={"/"}>career</Link>
            <Link href={"/"}>contact us</Link>
            <Link href={"/"}> Privacy policy</Link>
            <Link href={"/"}> FAQ</Link>
          </div>
        </div>
        <div className="flex justify-center text-yellow-50 pb-2">
          <Link href={"/"}> ©2024</Link>
        </div>
      </div>
    </>
  );
}
