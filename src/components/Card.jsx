import React from "react";
import Icon from "./Icons/Icon";
import { BsCurrencyRupee } from "react-icons/bs";

function Card({ data }) {
  return (
    <div className="w-full border shadow-xl  flex flex-col rounded-lg hover:scale-105 duration-300 my-6 p-1 ">
      <img
        className="w-full h-[260px] object-cover object-center rounded-lg"
        src={data.img}
        alt=""
      />

      <div className="grid grid-cols-6 gap-20">
        <div className="col-span-4">
          <h1 className="md:text-2xl sm:text-xl text-lg font-['Gilroy Medium'] font-bold border-b border-gray-800/50">
            {data.name}
          </h1>
          <div className="flex justify-start items-center">
            <BsCurrencyRupee className="text-xl" />
            <h1 className="md:text-xl sm:text-sm text-xs font-['Gilroy Medium'] font-semibold ">
              {data.price}
            </h1>
          </div>
        </div>

        <button className="col-span-2 ">
          <Icon />
        </button>
      </div>
    </div>
  );
}

export default Card;
