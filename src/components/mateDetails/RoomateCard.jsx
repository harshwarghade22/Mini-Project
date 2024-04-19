import React from "react";
import Contact from "../Icons/Contact";
import Fav from "../Icons/Fav";
import { Link } from "react-router-dom";
import profile1 from "../Images/Rectangle 105.png"

function RoomateCard() {
  
  return (
    <div>
      <div className="w-[90%] md:w-[100%] mx-auto flex flex-col border rounded-2xl font-gilroy_light shadow-xl">
        <div className="w-full md:h-[35vh] h-[40vh] border rounded-3xl  p-1">
          <img
            src={profile1}
            alt=""
            className="object-fill object-center h-full w-full rounded-xl"
          />
        </div>

        <div className="pt-3 px-4">
          <p className="font-gilroy_medium text-[#A9A9A9]">Working professional</p>
          <h1 className="text-xl font-gilroy_semi_bold text-[#434343]">Emma F.</h1>
        </div>
        <div className="flex justify-between h-[15%] mt-3 px-4">
          <div className="flex flex-col h-full justify-between">
            <p className="text-sm font-gilroy_medium text-[#A9A9A9]">Budget</p>
            <p className="font-gilroy_medium text-[#6E6E6E]">8000Rs</p>
          </div>
          <div className="flex flex-col h-full justify-between">
            <p className="text-sm font-gilroy_medium text-[#A9A9A9]">Looking for</p>
            <p className="font-gilroy_medium text-[#6E6E6E]">Female</p>
          </div>
          <div className="flex flex-col h-full justify-between">
            <p className="text-sm font-gilroy_medium text-[#A9A9A9]">Looking for</p>
            <p className="font-gilroy_medium text-[#6E6E6E]">Flatmate</p>
          </div>
        </div>
        <div className="w-full h-[60px] mt-3 border-t pt-3 flex gap-2 px-3 pb-3">
          <Link to="#" className="w-[25%] border-black border rounded-lg flex justify-center items-center ">
            <Fav />
          </Link>
          <Link to="#" className="w-[25%] border-black border rounded-lg flex justify-center items-center">
            <Contact />
          </Link>
          <Link to="/matedetails" className="w-[50%] border-black border rounded-lg bg-[#262626] text-[#FFFFFF] flex justify-center items-center">
            Connect
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default RoomateCard;