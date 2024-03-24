import React from "react";
import Design from "./Design";
import { FaArrowRightLong, FaRegCopyright } from "react-icons/fa6";
import { Link } from "react-router-dom";
import bed from "../icons/Beds-single-beds-open-graph-image 1.png";
import kari from "../icons/kari-shea-tOVmshavtoo-unsplash 1.png";

function Layout2() {
  return (
    <div className=" md:hidden  bg-zinc-500 h-screen w-full grid grid-cols-1 grid-rows-6 gap-[2px] mx-auto p-[1px] Layout-2">
      {/* Layout-2 */}
      <Design />
      <div className="bg-zinc-50 row-span-2 pt-4 ">
        <div className="px-2 py-2 bg-zinc-200 drop-shadow-xl flex justify-evenly items-center mx-auto font-semibold max-w-[500px] rounded-full ">
          <h1>Mumbai</h1>
          <h1>|</h1>
          <h1>1bhk</h1>
          <h1>|</h1>
          <h1>Mates</h1>
          <h1>|</h1>
          <Link
            to="/carts"
            className="bg-orange-600 text-white d rounded-full flex justify-evenly gap-2 p-1 items-center"
          >
            GO <FaArrowRightLong />
          </Link>
        </div>
      </div>
      <div className="bg-zinc-500 grid grid-cols-3 gap-[2px] row-span-2">
        <div className="bg-zinc-50">
          <img className="object-contain h-full grayscale" src={bed} alt="" />
        </div>
        <div className="bg-zinc-50"></div>
        <div className="bg-zinc-50">
          <img className="object-cover  h-full grayscale" src={kari} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Layout2;
