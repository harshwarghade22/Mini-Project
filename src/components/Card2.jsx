import React from "react";

import { CiHeart } from "react-icons/ci";
import { MdOutlineCurrencyRupee } from "react-icons/md";

function Card2({ data }) {
  return (
    <div className="w-[420px] h-[324px]   rounded-lg shadow-zinc-400 shadow-md mb-16 mx-auto">
      <img
        className="w-full h-[260px] object-cover object-center rounded-lg"
        src={data.img}
        alt=""
      />

      <div className="text w-full h-[64px] flex justify-between items-center p-1">
        <div className=" text w-4/6 h-full  ">
          <h1 className="text-base  font-['Gilroy-Medium'] border-b-[1px] border-black border-opacity-30 ">
            {data.name}
          </h1>
          <h1 className="text-xl font-semibold font-['Gilroy-SemiBold'] flex justify-start items-center mt-1">
            <span>{<MdOutlineCurrencyRupee />}</span>
            {data.price}/mo
          </h1>
        </div>
        {<CiHeart className="text-3xl opacity-80 text-zinc-400 mr-2" />}
      </div>
    </div>
  );
}

export default Card2;
