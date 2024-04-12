import React from "react";
import line from "../Images/Line 98dash.png";
import home2 from "../Images/Vector2222.png";
import arrow1 from "../Images/Arrow 2.png";
import arrow2 from "../Images/Arrow 21234.png";

import { Link } from "react-router-dom";
import SelectAmmenitiesIcons from "./SelectAmmenitiesIcons";
import SelectFeatureIcon from "./SelectFeatureIcon";
import NearbyPlaces from "./NearbyPlaces";
import { ScrollArea } from '@mantine/core';
import { MdNorthEast } from "react-icons/md";


const AddDetails = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-4">
      <div className="top flex justify-start items-center gap-1">
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
        <button className="px-6 py-3 bg-[#F45C2C] rounded-full text-white font-gilroy_medium">
          3 Details
        </button>
        <img className="" src={line} alt="" />
        <Link to="/flatDescription">
          <div className="w-12 h-12 rounded-full bg-[#D9D9D9] font-gilroy_semi_bold text-xl flex justify-center items-center">
            4
          </div>
        </Link>
      </div>

      <div className="flex justify-start items-center lg:mt-12 md:mt-10 mt-9 gap-6 ">
        <img className="w-8 h-8" src={home2} alt="" />
        <h1 className="text-4xl font-gilroy_semi_bold text-[#262626]">Add Details</h1>
      </div>

  

      <ScrollArea h={520} >
        <SelectAmmenitiesIcons/>
        <SelectFeatureIcon/>
        <SelectFeatureIcon/>
        {/* <NearbyPlaces/> */}
        {/* <NearbyPlaces/> */}
      </ScrollArea>
      
      <div className="max-w-5xl flex justify-between items-center my-8">
        <Link to="/addImage">
          <button className="px-14 py-3 border-[#2C2C2C] border rounded-lg flex justify-center items-center gap-2">
            <img src={arrow2} alt="" />
            Back
          </button>
        </Link>
        <Link to="/flatDescription">
          <button className="px-14 py-3 bg-[#F45C2C] rounded-lg text-white flex justify-center items-center gap-2">
            Next
            <img src={arrow1} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddDetails;
