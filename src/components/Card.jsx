import React from "react";

function Card({ data }) {
  return (
    <div className="w-full border shadow-xl  flex flex-col rounded-lg hover:scale-105 duration-300 my-6 p-1">
      <img
        className="w-full h-[260px] object-cover object-center rounded-lg"
        src={data.img}
        alt=""
      />

      <div className="flex justify-between items-center ">
        <div>
          <h1 className="md:text-2xl sm:text-xl text-lg font-['Gilroy Medium'] font-semibold ">
            {data.name}
          </h1>
          <h1 className="md:text-xl sm:text-sm text-xs font-['Gilroy Medium'] font-semibold">
            {data.price}
          </h1>
        </div>

        <button>Start</button>
      </div>
    </div>
  );
}

export default Card;
