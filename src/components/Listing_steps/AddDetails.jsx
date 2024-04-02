import React from "react";
import line from "../Images/Line 98dash.png";
import home2 from "../Images/Vector2222.png";
import arrow1 from "../Images/Arrow 2.png";
import arrow2 from "../Images/Arrow 21234.png";

import { Link } from "react-router-dom";
import SelectAmmenitiesIcons from "./SelectAmmenitiesIcons";
import SelectFeatureIcon from "./SelectFeatureIcon";

const AddDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="top  flex justify-start items-center gap-1">
        <div className="w-12 h-12 rounded-full bg-black text-white flex justify-center items-center">
          1
        </div>
        <img className="" src={line} alt="" />
        <Link to="/addImage">
          <div className="w-12 h-12 rounded-full bg-black text-white flex justify-center items-center">
            2
          </div>
        </Link>
        <img className="" src={line} alt="" />
        <button className="px-4 py-2 bg-[#F45C2C] rounded-full text-white font-gilroy_medium">
          3 Add Details
        </button>
        <img className="" src={line} alt="" />
        <Link to="/flatDescription">
          <div className="w-12 h-12 rounded-full bg-[#D9D9D9] font-gilroy_semi_bold text-xl flex justify-center items-center">
            4
          </div>
        </Link>
      </div>

      <div className="flex justify-start items-baseline lg:mt-12 md:mt-10 mt-8  gap-4 ">
        <img className="w-10 h-10" src={home2} alt="" />
        <h1 className="text-3xl font-bold">ADD DETAILS</h1>
      </div>

      <SelectAmmenitiesIcons />
      <SelectFeatureIcon />

      <div className="max-w-5xl flex justify-between items-center my-8">
        <Link to="/addImage">
          <button className="px-8 py-2 border-[#2C2C2C] border rounded-full flex justify-center items-center gap-2">
            <img src={arrow2} alt="" />
            Back
          </button>
        </Link>
        <Link to="/flatDescription">
          <button className="px-8 py-2 bg-[#F45C2C] rounded-full text-white flex justify-center items-center gap-2">
            Next
            <img src={arrow1} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddDetails;
