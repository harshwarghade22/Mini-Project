import React from "react";
import { CgProfile } from "react-icons/cg";
import { Dropdown } from "./DropDown/dropdown";


function Navbar() {
  return (
    <div className="max-w-7xl px-4 mx-auto h-20 border-b-black flex justify-between items-center ">
      <div className=" text-3xl font-gilroy_semi_bol font-semibold">
        Conti<span className="text-orange-400">new...</span>
      </div>
      <div className="hidden md:flex justify-between gap-8 text-gray-400 font-gilroy_medium">
        <a href="/">
          <div className="hover:text-black text-sm">Home</div>
        </a>
        <a href="/roomates">
          <div className="hover:text-black text-sm">Mates</div>
        </a>
        <a href="">
          <div className="hover:text-black text-sm">Rent More</div>
        </a>
        <a href="">
          <div className="hover:text-black text-sm">Services</div>
        </a>
        <a href="/addLocation">
          <div className="hover:text-black text-sm">ListProperty</div>
        </a>
        <a href="/addLocation">
          <div className="hover:text-black text-sm">Services</div>
        </a>
      </div>
      <div className="hidden md:block">
        <a href="/login1">
          <div className="h-[39px] border border-black rounded-full flex justify-center items-center hover:bg-black hover:text-white">
            <div className="text-2xl pl-2">
              <CgProfile />
            </div>
            <div className="px-2 py-4 text-center text-sm font-gilroy_medium ">
              Profile
            </div>
          </div>
        </a>
      </div>
      <div className="md:hidden">
       <Dropdown/>
      </div>
      
    </div>
  );
}

export default Navbar;
