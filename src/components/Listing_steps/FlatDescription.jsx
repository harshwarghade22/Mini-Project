import React from "react";
import line from "../Images/Line 98dash.png";

import home2 from "../Images/Vector2222.png";
import arrow1 from "../Images/Arrow 2.png";
import arrow2 from "../Images/Arrow 21234.png";
import icon1 from "../Images/Group 480968651122.png";
import icon2 from "../Images/Vector112233.png";
import icon3 from "../Images/Group 4809686811223344.png";
import icon4 from "../Images/Group 480968681122334455.png";
import { Link } from "react-router-dom";

const FlatDescription = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="top  flex justify-start items-center gap-1">
        <Link to="/addLocation">
          <div className="w-12 h-12 rounded-full bg-black text-white flex justify-center items-center">
            1
          </div>
        </Link>

        <img className="" src={line} alt="" />
        <Link to="/addImage">
          <div className="w-12 h-12 rounded-full bg-black text-white flex justify-center items-center">
            2
          </div>
        </Link>
        <img className="" src={line} alt="" />
        <Link to="/addDetails">
          <div className="w-12 h-12 rounded-full bg-black text-white flex justify-center items-center">
            3
          </div>
        </Link>
        <img className="" src={line} alt="" />

        <button className="px-4 py-2 bg-[#F45C2C] rounded-full text-white font-gilroy_medium">
          4 Flat Description
        </button>
      </div>

      <div className="flex justify-start items-baseline lg:mt-12 md:mt-10 mt-8  gap-4 ">
        <img className="w-10 h-10" src={home2} alt="" />
        <h1 className="text-3xl font-gilroy_semi_bold text-[#262626]">
          FLAT DESCRIPTION
        </h1>
      </div>

      <div className="grid md:grid-cols-12  my-4 px-4">
        <div className="lg:col-span-5 md:col-span-4 col-span-12  grid ">
          <h1 className="font-gilroy_semi_bold text-lg text-[#2D2D2D] mb-2">
            Flat rent
          </h1>
          <input
            className="md:w-10/12 w-full h-12 border-black border"
            type="text"
          />

          <h1 className="font-gilroy_semi_bold text-lg text-[#2D2D2D] mt-4 mb-2">
            Size
          </h1>
          <div className="relative">
            <input
              className="md:w-9/12 w-10/12 h-12 border-black border px-4"
              type="text"
            />
            <span className="absolute top-0 lg:right-32 md:right-20  sm:right-28 right-20 p-3">
              (sqs)
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 md:col-span-8 col-span-12 md:my-0 my-8 ">
          <div className="">
            <h1 className="font-gilroy_semi_bold text-lg text-[#2D2D2D] mb-2">
              Flat
            </h1>
            <div className="flex justify-start items-center lg:gap-16 gap-8 ">
              <button className="px-4 sm:py-2 py-1 rounded-lg border border-[#C4C4C4] text-[#2D2D2D]">
                1 BHK
              </button>
              <button className="px-4 sm:py-2 py-1 rounded-lg border border-[#C4C4C4] text-[#2D2D2D]">
                2 BHK
              </button>
              <button className="px-4 sm:py-2 py-1 rounded-lg border border-[#C4C4C4] text-[#2D2D2D]">
                3 BHK
              </button>
              <button className="px-4 sm:py-2 py-1 rounded-lg border border-[#C4C4C4] text-[#2D2D2D]">
                3 BHK +
              </button>
            </div>
          </div>

          <div className="my-4">
            <h1 className="font-gilroy_semi_bold text-lg text-[#2D2D2D] mb-2">
              Occupancy
            </h1>
            <div className="flex justify-start items-center lg:gap-12 md:gap-8 gap-2 mt-4">
              <button className="px-4 py-2 rounded-lg border border-[#C4C4C4] text-[#2D2D2D] flex justify-center items-center gap-2">
                <img src={icon1} alt="" />
                Single
              </button>
              <button className="px-4 py-2 rounded-lg border border-[#C4C4C4] text-[#2D2D2D] flex justify-center items-center gap-2">
                <img src={icon2} alt="" />
                Double
              </button>
              <button className="px-4 py-2 rounded-lg border border-[#C4C4C4] text-[#2D2D2D] flex justify-center items-center gap-2">
                <img src={icon3} alt="" />
                Triple
              </button>
              <button className="md:px-6 px-4 py-2 rounded-lg border border-[#C4C4C4] text-[#2D2D2D] flex justify-center items-center ">
                <img src={icon4} alt="" />
                Quadruple
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-4 lg:my-2 my-4">
        <h1 className="font-gilroy_semi_bold text-lg text-[#2D2D2D] mb-2">
          Preferences
        </h1>
        <div className="flex flex-wrap justify-start items-center gap-4">
          <button className="px-12 py-3 rounded-full  border border-[#C4C4C4] text-[#2D2D2D]">
            No Drinking
          </button>
          <button className="px-12 py-3 rounded-full  border border-[#C4C4C4] text-[#2D2D2D]">
            Age 25+
          </button>
          <button className="px-12 py-3 rounded-full  border border-[#C4C4C4] text-[#2D2D2D]">
            No NonVeg
          </button>
          <button className="px-12 py-3 rounded-full  border border-[#C4C4C4] text-[#2D2D2D]">
            College Student
          </button>
          <button className="px-12 py-3 rounded-full  border border-[#C4C4C4] text-[#2D2D2D]">
            Family
          </button>
          <button className="px-12 py-3 rounded-full  border border-[#C4C4C4] text-[#2D2D2D]">
            No Smoking
          </button>
        </div>
      </div>

      <div className="max-w-7xl flex justify-between items-centpy-2 sm:mt-12  my-4 px-4">
        <Link to="/addDetails">
          <button className="px-8 py-2 border-[#2C2C2C] border rounded-full flex justify-center items-center gap-2">
            <img src={arrow2} alt="" />
            Back
          </button>
        </Link>
        <button className="px-8 py-2 bg-[#F45C2C] rounded-full text-white flex justify-center items-center gap-2">
          Complete Listing
          <img src={arrow1} alt="" />
        </button>
      </div>
    </div>
  );
};

export default FlatDescription;
