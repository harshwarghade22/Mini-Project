import React from "react";
import image1 from "../Images/Rectangle 2910.png";
import { Input } from "@mantine/core";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import VerifyUser from "./VerifyUser";
import OTPInput from "./OTPInput";
import GoogleAuthentication from "./Google";
import FacebookAuthentication from "./FacebookAuthentication"
function Page1() {
  return (
    <div className="h-screen flex overflow-hidden">
      <div className="w-[65%] h-screen bg-slate-200 hidden lg:block">
        <img src={image1} alt="" className="h-full w-full object-cover" />
      </div>
      {/* <div className='w-[35%] flex justify-center items-center'>
        <div className='w-[80%] h-[67.5%] '>
            
        </div>
      </div> */}
      <div className=" lg:w-[27.5%] mx-auto flex flex-col justify-center">
        {/* <div>

        </div> */}
        <p className="font-gilroy_bold text-lg md:text-xl  text-[#434343]">
          Create your account with
        </p>
        <p className="font-gilroy_bold text-lg md:text-xl text-[#434343]">
          with following options
        </p>
        {/* <button className="w-full px-2 py-3 bg-zinc-200 tracking-tighter font-semibold flex items-center justify-center gap-1 mt-10 mb-2">
          <img
            className="h-[25px] w-[25px]"
            src="https://cdn-icons-png.flaticon.com/128/281/281764.png"
            alt=""
          />
          Google
        </button> */}
      <GoogleAuthentication/>
        {/* <button className="w-full px-2 py-3 bg-zinc-200 tracking-tighter font-semibold flex items-center justify-center gap-1">
          <img
            className="h-[25px] w-[25px]"
            src="https://cdn-icons-png.flaticon.com/128/145/145802.png"
            alt=""
          />
          FaceBook
        </button> */}
        <FacebookAuthentication/>
        
        <h3 className="text-sm text-zinc-500 tracking-tight flex items-center justify-center gap-3 p-8 mt-4">
          <div className="w-[70px] h-[1px] bg-zinc-500 "></div>or sign with
          number<div className="w-[70px] h-[1px] bg-zinc-500"></div>
        </h3>
        {/* <h5 className="text-[12px] text-zinc-500 tracking-tighter font-semibold pt-3 pl-3 mt-4">
          Number:
        </h5> */}
        <h3 className="flex flex-col  justify-center pb-8 pl-3">
          {/* <div className="flex gap-2">
            <Input
              className="w-[30%] border-b border-zinc-400 text-center"
              type="number"
              placeholder="+91" 
              variant="unstyled"
            ></Input>
            <Input
              className="w-[60%] border-b border-zinc-400 text-center"
              type="number"
              placeholder="8433616313"
              variant="unstyled"
            ></Input>
          </div> */}
          <OTPInput/>
          <h5 className="tracking-tighter font-semibold text-sm pt-2">
            Already have an account?
            <span className="text-[#F45C2C]"> Login</span>
          </h5>
        </h3>
        
        <Link to="/login2">
            <button className="bg-[#F45C2C] text-zinc-50 px-2 py-3 w-full tracking-tighter font-semibold text-sm flex items-center justify-center gap-4 mt-4">
            Sign up <FaArrowRightLong />
            </button>
        </Link>
        
        
      </div>
    </div>
  );
}

export default Page1;
