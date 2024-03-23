import React from "react";
import Icon from "./Icons/Icon";
import { BsCurrencyRupee } from "react-icons/bs";

function Card({ data }) {
  return (
    <div className=" w-full border shadow-xl flex flex-col my-4  rounded-lg  p-3 ">
      <img
        className="w-full h-[260px] object-cover object-center rounded-xl"
        src={data.img}
        alt=""
      />

      <div className="grid grid-cols-6 gap-4 my-2">
        <div className="col-span-5">
          <h1 className="md:text-lg sm:text-xl text-xl font-['Gilroy Medium'] border-b border-gray-800/70 my-2">
            {data.name}, HSR Layout
          </h1>
          <div className="flex justify-start items-center ">
            <BsCurrencyRupee className="text-xl" />
            <h1 className="md:text-xl sm:text-sm text-xs font-['Gilroy-SemiBold'] font-semibold ">
              {data.price}/mo
            </h1>
          </div>
        </div>

        <div className="col-span-1 bg-[#FBFBFB] flex justify-center items-center">
          <Icon />
        </div>
      </div>
    </div>
  );
}

export default Card;
