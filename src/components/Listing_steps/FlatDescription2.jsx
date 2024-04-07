import React from "react";
import line from "../Images/Line 98dash.png";

import home2 from "../Images/Vector2222.png";
import arrow1 from "../Images/Arrow 2.png";
import arrow2 from "../Images/Arrow 21234.png";
import { Input } from '@mantine/core';

import { Link } from "react-router-dom";

const FlatDescription = () => {
  return (
    <div className="max-w-7xl ml-96 px-4 py-8">
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

      <div className="flex justify-start items-center lg:mt-14 md:mt-10 mt-8 gap-4 ">
        <img className="w-10 h-10" src={home2} alt="" />
        <h1 className="text-3xl font-gilroy_semi_bold text-[#262626]">
          FLAT DESCRIPTION
        </h1>
      </div>

      <div className="max-w-7xl h-[480px] flex flex-col gap-4 mt-4">
        <div className="w-full flex gap-12 pt-10">
            <div className="w-2/5">
                <h1 className="text-2xl font-gilroy_semi_bold">Flat rent</h1>
                <input
                    className="w-full h-16 mt-2 bg-slate-100 rounded-md"
                    type="text"
                />
            </div>
            <div className="w-2/5">
                <h1 className="text-2xl font-gilroy_semi_bold">Flat rent</h1>
                <div className="flex justify-between gap-5">
                <button className="w-1/4 p-4 mt-2 border border-[#C4C4C4] rounded-lg font-gilroy_medium">1BHK</button>
                <button className="w-1/4 p-4 mt-2 border border-[#C4C4C4] rounded-lg font-gilroy_medium">1BHK</button>
                <button className="w-1/4 p-4 mt-2 border border-[#C4C4C4] rounded-lg font-gilroy_medium">1BHK</button>
                <button className="w-1/4 p-4 mt-2 border border-[#C4C4C4] rounded-lg font-gilroy_medium">1BHK</button>
                </div>
            </div>
        </div>
        <div className="w-full flex gap-12 pt-10">
            <div className="w-2/5">
                <h1 className="text-2xl font-gilroy_semi_bold">Size</h1>
                <input
                    className="w-full h-16 mt-2 bg-slate-100 rounded-md"
                    type="text"
                />
            </div>
            <div className="w-2/5">
                <h1 className="text-2xl font-gilroy_semi_bold">Occupancy</h1>
                <div className="flex justify-between gap-5">
                <button className="w-1/4 p-4 mt-2 border border-[#C4C4C4] rounded-lg font-gilroy_medium">Private</button>
                <button className="w-1/4 p-4 mt-2 border border-[#C4C4C4] rounded-lg font-gilroy_medium">Double</button>
                <button className="w-1/4 p-4 mt-2 border border-[#C4C4C4] rounded-lg font-gilroy_medium">Triple</button>
                <button className="w-1/4 p-4 mt-2 border border-[#C4C4C4] rounded-lg font-gilroy_medium">Quadrapule</button>
                </div>
            </div>
        </div>
        <div className="preferences mt-8 ">
            <h1 className="text-2xl font-gilroy_semi_bold">Prefrences</h1>
            <div className="w-11/12 flex gap-12 mt-4">
                <button className="px-10 py-4 border border-[#C4C4C4] rounded-full text-xl font-gilroy_medium">No Drinking</button>
                <button className="px-10 py-4 border border-[#C4C4C4] rounded-full text-xl font-gilroy_medium">Age 25+</button>
                <button className="px-10 py-4 border border-[#C4C4C4] rounded-full text-xl font-gilroy_medium">No Non-veg</button>
                <button className="px-10 py-4 border border-[#C4C4C4] rounded-full text-xl font-gilroy_medium">College</button>
                <button className="px-10 py-4 border border-[#C4C4C4] rounded-full text-xl font-gilroy_medium">Family</button>
                {/* <button className="px-10 py-4 border border-[#C4C4C4] rounded-full">No Drinking</button> */}
            </div>
            
            
        </div>
      </div>

      <div className="max-w-5xl flex justify-between sm:mt-8">
        <Link to="/addDetails">
          <button className="px-12 py-3 border-[#2C2C2C] border rounded-lg flex justify-center items-center gap-2">
            <img src={arrow2} alt="" />
            Back
          </button>
        </Link>
        <button className="px-12 py-3 bg-[#F45C2C] rounded-lg text-white flex justify-center items-center gap-2">
          Complete Listing
          <img src={arrow1} alt="" />
        </button>
      </div>
    </div>
  );
};

export default FlatDescription;
