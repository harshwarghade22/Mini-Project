import React from "react";
import Contact from "./Icons/Contact";
import Fav from "./Icons/Fav";

function RoomateCard() {
  return (
    <div>
      <div className="w-[90%] mx-auto md:mx-0 flex flex-col border rounded-lg p-3 font-gilroy_light">
        <div className="w-full md:h-[40vh] h-[40vh]  border rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="object-scale-down  h-full w-full rounded-lg"
          />
        </div>

        <div className="pt-3">
          <p className="text-sm">Working professional</p>
          <h1 className="text-xl font-gilroy_bold">Emma F.</h1>
        </div>
        <div className="flex justify-between h-[15%] mt-3">
          <div className="flex flex-col h-full justify-between">
            <p className="text-sm">Budget</p>
            <p>8000Rs</p>
          </div>
          <div className="flex flex-col h-full justify-between">
            <p className="text-sm">Looking for</p>
            <p>Female</p>
          </div>
          <div className="flex flex-col h-full justify-between">
            <p className="text-sm">Looking for</p>
            <p>Flatmate</p>
          </div>
        </div>
        <div className="w-full h-[13%] mt-3 border-t pt-3 flex gap-2">
          <div className="w-[25%] border-black border rounded-lg flex justify-center items-center ">
            <Fav />
          </div>
          <div className="w-[25%] border-black border rounded-lg flex justify-center items-center">
            <Contact />
          </div>
          <div className="w-[50%] border-black border rounded-lg text-center pt-1 bg-black text-white">
            Connect
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomateCard;
