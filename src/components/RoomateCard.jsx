import React from "react";
import Contact from "./Icons/Contact";
import Fav from "./Icons/Fav";
import { Link } from "react-router-dom";

function RoomateCard() {
  
  return (
    <div>
      <div className="w-[90%] md:w-[100%] mx-auto flex flex-col border rounded-3xl p-2 font-gilroy_light shadow-xl">
        <div className="w-full md:h-[35vh] h-[40vh] border rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="object-fill object-center h-full w-full rounded-lg"
          />
        </div>

        <div className="pt-3">
          <p className="font-gilroy_medium text-[#A9A9A9]">Working professional</p>
          <h1 className="text-xl font-gilroy_semi_bold text-[#434343]">Emma F.</h1>
        </div>
        <div className="flex justify-between h-[15%] mt-3">
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
        <div className="w-full h-[50px] mt-3 border-t pt-3 flex gap-2">
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
