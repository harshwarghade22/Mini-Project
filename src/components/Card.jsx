import React, { useState } from "react";
import Icon from "./Icons/Icon";
import { BsCurrencyRupee } from "react-icons/bs";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

function Card({ data }) {
  const [carousel] = useState(data.slides);

  const [currentIndx, setCurrentIndx] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentIndx === carousel.length - 1;
    if (isLastSlide) {
      setCurrentIndx(0);
    } else {
      setCurrentIndx(currentIndx + 1);
    }
  };
  const prevSlide = () => {
    const isFirstSlide = currentIndx === 0;
    const indx = isFirstSlide ? carousel.length - 1 : currentIndx - 1;
    setCurrentIndx(indx);
  };
  return (
    <div className="w-full min-h-96 border shadow-xl flex flex-col my-4  rounded-lg  p-3">
      {/* <img
        className="w-full h-[260px] object-cover object-center rounded-xl"
        src={data.img}
        alt=""
      /> */}
      <div
        style={{ backgroundImage: `url(${carousel[currentIndx].url})` }}
        className="w-full  h-[260px]  border border-gray-400   bg-center bg-cover flex justify-end items-end rounded-xl"
      >
        <div className=" w-full text-3xl flex justify-between items-center text-white opacity-60 px-4 mb-4">
          <IoIosArrowDropleftCircle
            onClick={prevSlide}
            className="hover:scale-125  "
          />{" "}
          <IoIosArrowDroprightCircle
            onClick={nextSlide}
            className="hover:scale-125"
          />
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 my-2">
        <div className="col-span-5">
          <Link to="/details">
            <h1 className="md:text-lg sm:text-xl text-xl font-gilroy_medium border-b border-gray-800/70 my-2 hover:text-blue-600 ease-in-out duration-300 hover:scale-105">
              {data.name}, HSR Layout
            </h1>
          </Link>
          <div className="flex justify-start items-center ">
            <BsCurrencyRupee className="text-xl" />
            <h1 className="text-xl font-gilroy_semi_bold  font-semibold ">
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
