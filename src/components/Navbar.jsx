import React from "react";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <div>
      <div className="w-screen h-20 border border-black flex justify-between">
        <div className=" mt-[20px] text-3xl font-gilroy_semi_bol ml-[100px] font-semibold">
          Conti<span className="text-orange-400">new...</span>
        </div>
        <div className="mt-[30px] flex justify-between gap-8 text-gray-400 font-gilroy_medium">
          <a href="/">
            <div className="hover:text-black text-sm">Home</div>
          </a>
          <a href="">
            <div className="hover:text-black text-sm">Mates</div>
          </a>
          <a href="">
            <div className="hover:text-black text-sm">Rent More</div>
          </a>
          <a href="">
            <div className="hover:text-black text-sm">Services</div>
          </a>
          <a href="">
            <div className="hover:text-black text-sm">About</div>
          </a>
        </div>
        <div className="mt-[20px]">
          <a href="">
            <div className="w-[109px] h-[39px] border border-black rounded-full mr-[100px] flex justify-around hover:bg-black hover:text-white">
              <div className="my-[7px] text-2xl">
                <CgProfile />
              </div>
              <div className="mt-[9px] text-sm mr-1 font-gilroy_medium ">
                Profile
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
