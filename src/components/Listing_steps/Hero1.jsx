import React from "react";
import line from "../Images/Line 98dash.png";
import home2 from "../Images/Vector2222.png";
import item1 from "../Images/Rectangle 506v1111.png";
import item2 from "../Images/Group 48096857v2222.png";
import item3 from "../Images/Group 48096853v3333.png";
import item4 from "../Images/Group 48096859imgadd.png";
import item5 from "../Images/Group 48096859imgadd1212.png";
import arrow1 from "../Images/Arrow 2.png";
import arrow2 from "../Images/Arrow 21234.png";
import { Link } from "react-router-dom";

const Hero1 = () => {
  return (
    <div className="max-w-7xl  mx-auto py-4 px-4">
      <div className="top  flex justify-start items-center gap-1">
        <div className="w-12 h-12 rounded-full bg-black text-white flex justify-center items-center">
          1
        </div>
        <img className="" src={line} alt="" />
        <button className="px-4 py-2 bg-[#F45C2C] rounded-full text-white font-gilroy_medium">
          2 Images
        </button>
        <img className="" src={line} alt="" />

        <Link to="/addDetails">
          <div className="w-12 h-12 rounded-full bg-[#D9D9D9] font-gilroy_semi_bold text-xl flex justify-center items-center">
            3
          </div>
        </Link>
        <img className="" src={line} alt="" />
        <Link to="/flatDescription">
          <div className="w-12 h-12 rounded-full bg-[#D9D9D9] font-gilroy_semi_bold text-xl flex justify-center items-center">
            4
          </div>
        </Link>
      </div>

      <div className="flex justify-start items-baseline lg:mt-12 md:mt-10 mt-8  gap-4 ">
        <img className="w-10 h-10" src={home2} alt="" />
        <h1 className="text-3xl font-gilroy_semi_bold text-[#262626]">
          ADD IMAGES
        </h1>
      </div>

      <div className="grid lg:grid-cols-12 gap-4 border rounded-lg border-[#9B9B9B] pl-4 py-2 my-8 ">
        <div className="lg:col-span-8 md:col-span-6  col-span-full grid-rows-2 lg:px-0 px-4 ">
          <img
            className="rounded-lg md:w-full md:h-[268px] sm:w-[628px] sm:h-[268px]  md:object-cover object-scale-down lg:mb-4 md:mb-8 "
            src={item1}
            alt=""
          />
          <div className="grid grid-cols-2 lg:gap-1  md:gap-2 gap-4">
            <img
              className="rounded-lg lg:w-[358px] lg:h-[226px] md:w-[358px] md:h-[226px] sm:w-[358px] sm:h-[196px] w-[200px] h-[178px] md:object-cover object-scale-down"
              src={item2}
              alt=""
            />

            <img
              className="rounded-lg lg:w-[358px] lg:h-[226px] md:w-[358px] md:h-[226px] sm:w-[358px] sm:h-[196px] w-[200px] h-[178px] md:object-cover object-scale-down"
              src={item4}
              alt=""
            />
          </div>
        </div>

        <div className="lg:col-span-4 md:col-span-6 col-span-full  grid grid-cols-2 lg:gap-0 md:gap-2 gap-4 lg:grid-cols-1  lg:pr-0 px-4 lg:my-0 my-8">
          <img
            className="rounded-lg lg:w-[358px] lg:h-[265px] md:w-[358px] md:h-[226px] sm:w-[358px] sm:h-[196px] w-[200px] h-[178px] mb-3 md:object-cover object-scale-down"
            src={item3}
            alt=""
          />
          <img
            className="rounded-lg lg:w-[358px] lg:h-[226px] md:w-[358px] md:h-[226px] sm:w-[358px] sm:h-[196px] w-[200px] h-[178px] md:object-cover object-scale-down"
            src={item5}
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-between items-center my-8">
        <button className="px-8 py-2 border-[#2C2C2C] border rounded-full flex justify-center items-center gap-2">
          <img src={arrow2} alt="" />
          Back
        </button>
        <Link to="/addDetails">
          {" "}
          <button className="px-8 py-2 bg-[#F45C2C] rounded-full text-white flex justify-center items-center gap-2">
            Next
            <img src={arrow1} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero1;
