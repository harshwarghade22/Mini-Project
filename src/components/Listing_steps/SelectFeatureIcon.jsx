import React from "react";
import {
 
  icon7,
  icon8,
  icon9,
  icon10,
} from "../mateDetails/Icons";

const SelectFeatureIcon = () => {
  return (
    <div className="max-w-2xl md:my-4 my-6 bg-[#F3F5F7] p-2 ">
      <h1 className="text-xl font-gilroy_semi_bold text-[#434343] mt-8 mb-4">
        Select Features
      </h1>
      <div className="flex flex-wrap  items-center gap-8 ">
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
      </div>
    </div>
  );
};

export default SelectFeatureIcon;
