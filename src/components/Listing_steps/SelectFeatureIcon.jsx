import React from "react";
import { icon7, icon8, icon9, icon10 } from "../mateDetails/Icons";
import { Indicator } from '@mantine/core';


import Lift from "../Icons/Lift";
import Water from "../Icons/Water";
import Security from "../Icons/Security";
import DeskTable from "../Icons/DeskTable";

const SelectFeatureIcon = () => {
  return (
    <div className="max-w-5xl md:my-4 my-6 bg-[#F3F5F7] p-4 pb-7 ">
      <h1 className="text-xl font-gilroy_semi_bold text-[#434343] sm:my-4 sm:mt-0 mt-4 mb-8 ">
        Select Features
      </h1>
      {/* <div className="flex flex-wrap  items-center gap-8 ">
        <div className="">
          <img src={icon7} alt="" className="mx-auto" />
          <h3 className="text-sm text-center">Office chair</h3>
        </div>
        <div className="">
          <img src={icon8} alt="" className="mx-auto" />
          <h3 className="text-sm text-center">Dining Table</h3>
        </div>
        <div className="">
          <img src={icon9} alt="" className="mx-auto" />
          <h3 className="text-sm text-center">Single Bed</h3>
        </div>
        <div className="">
          <img src={icon10} alt="" className="mx-auto" />
          <h3 className="text-sm text-center">Table Lamp</h3>
        </div>

        <div className="">
          <img src={icon8} alt="" className="mx-auto" />
          <h3 className="text-sm text-center">Dining Table</h3>
        </div>
        <div className="">
          <img src={icon9} alt="" className="mx-auto" />
          <h3 className="text-sm text-center">Single Bed</h3>
        </div>
        <div className="">
          <img src={icon10} alt="" className="mx-auto" />
          <h3 className="text-sm text-center">Table Lamp</h3>
        </div>

        <div className="">
          <img src={icon8} alt="" className="mx-auto" />
          <h3 className="text-sm text-center">Dining Table</h3>
        </div>
        <div className="">
          <img src={icon9} alt="" className="mx-auto" />
          <h3 className="text-sm text-center">Single Bed</h3>
        </div>
        <div className="">
          <img src={icon10} alt="" className="mx-auto" />
          <h3 className="text-sm text-center">Table Lamp</h3>
        </div>
      </div> */}
      <div className="flex flex-wrap gap-8">
        <div className="flex-col justify-center text-center">
          <div className="w-[65px] h-[65px] bg-white rounded-lg p-2 flex justify-center items-center ">
            <Lift />
          </div>
          <h1>Lift</h1>
        </div>

        <div className="flex-col justify-center">
          <div className="w-[65px] h-[65px] bg-white rounded-lg p-2 flex justify-center items-center ">
            <Water />
          </div>
          <h1>24/7 water</h1>
        </div>

        <div className="flex-col justify-center">
          <div className="w-[65px] h-[65px] bg-white rounded-lg p-2 flex justify-center items-center ">
            <Security />
          </div>
          <h1>Security..</h1>
        </div>

        <div className="flex-col justify-center">
          <div className="w-[65px] h-[65px] bg-white rounded-lg p-2 flex justify-center items-center ">
            <DeskTable />
          </div>
          <h1>Desk Table</h1>
        </div>
      </div>
    </div>
  );
};

export default SelectFeatureIcon;
