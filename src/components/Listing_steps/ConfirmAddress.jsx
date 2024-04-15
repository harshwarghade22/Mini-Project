import React from "react";

import { Link } from "react-router-dom";
import line from "../Images/Line 98dash.png";

import arrow1 from "../Images/Arrow 2.png";
import arrow2 from "../Images/Arrow 21234.png";
import Map from "../Map";
import { FlatName } from "./IPComponents/FlatName";
import { Street } from "./IPComponents/Street";
import { LandMarks } from "./IPComponents/LandMarks";
import SimpleMap from "../Gmap/GMap";
import MyComponent from '../Gmap/GMap2';


function ConfirmAddress() {
  return (
    <div className="max-w-6xl mx-auto py-4 px-4">
      <div className="top  flex justify-start items-center gap-1">
        <button className="px-4 py-3 bg-[#F45C2C] rounded-full text-white font-gilroy_medium">
          1 Location
        </button>
        <img className="" src={line} alt="" />
        <Link to="/addImage">
          <div className="w-12 h-12 rounded-full bg-[#D9D9D9] font-gilroy_semi_bold text-xl flex justify-center items-center">
            2
          </div>
        </Link>
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

      <div className="max-w-5xl lg:w-[1000px] h-[582px] mx-auto my-4 flex flex-col md:flex-row gap-8 ">
        <div className="max-w-5xl md:w-[45%] h-full">
          <h1 className="font-gilroy_semi_bold text-2xl md:text-4xl">
            Confirm Address
          </h1>
          <div className="h-[85%] mt-6 md:mt-12 border border-black rounded-md flex-col">
            <div className="h-[16.7%] border-b border-black flex items-center pl-5 ">
              {/* <div className='font-gilroy_regular'>
                <FlatName />
              </div> */}
              <div class="relative z-0">
                <input
                  type="text"
                  id="floating_standard"
                  class="block  py-3.5 px-0 w-[400px] text-lg text-gray-900 bg-transparent border-0 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                />
                <label
                  for="floating_standard"
                  class="absolute text-lg font-gilroy_medium text-[#676767] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#676767] peer-focus:dark:text-[#676767] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Flat No./Apartment Name...etc
                </label>
              </div>
            </div>
            <div className="h-[16.7%] border-b border-black flex items-center pl-5">
            <div class="relative z-0">
                <input
                  type="text"
                  id="floating_standard"
                  class="block py-3.5 px-0 w-[400px] text-lg text-gray-900 bg-transparent border-0 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                />
                <label
                  for="floating_standard"
                  class="absolute text-lg font-gilroy_medium text-[#676767] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#676767] peer-focus:dark:text-[#676767] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Street/Locality...etc
                </label>
              </div>
            </div>
            <div className="h-[16.7%] border-b border-black flex items-center pl-5">
            <div class="relative z-0">
                <input
                  type="text"
                  id="floating_standard"
                  class="block py-3.5 px-0 w-[400px] text-lg text-gray-900 bg-transparent border-0 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                />
                <label
                  for="floating_standard"
                  class="absolute text-lg font-gilroy_medium text-[#676767] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#676767] peer-focus:dark:text-[#676767] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Lanmarks...
                </label>
              </div>
            </div>
            <div className="h-[16.7%] border-b border-black flex-col md:pt-4 pt-2 pl-5">
              <h1 className="font-gilroy_regular text-xs">City/District</h1>
              <h1 className="font-gilroy_bold text-lg">Mumbai</h1>
            </div>
            <div className="h-[16.7%] border-b border-black flex-col md:pt-4 pt-2 pl-5">
              <h1 className="font-gilroy_regular text-xs">State/UT</h1>
              <h1 className="font-gilroy_bold text-lg">Maharashtra</h1>
            </div>
            <div className="h-[16.7%] flex-col md:pt-4 pt-2 pl-5">
              <h1 className="font-gilroy_regular text-xs">Country</h1>
              <h1 className="font-gilroy_bold text-lg">India</h1>
              {/* <SelectCountry/> */}
            </div>
          </div>
        </div>
        <div className="w-full md:w-[55%] border overflow-hidden">
          {/* <Map /> */}
          {/* <SimpleMap/> */}
          <MyComponent/>
          
        </div>
      </div>

      <div className="max-w-6xl flex justify-between items-center my-10">
        <Link to="/addLocation">
          <button className="px-14 py-3 border-[#2C2C2C] border rounded-lg flex justify-center items-center gap-2">
            <img src={arrow2} alt="" />
            Back
          </button>
        </Link>

        <Link to="/addImage">
          {" "}
          <button className="px-14 py-3 bg-[#F45C2C] rounded-lg text-white flex justify-center items-center gap-2">
            Next
            <img src={arrow1} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ConfirmAddress;
