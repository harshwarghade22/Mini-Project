import React from 'react'
import { Link } from 'react-router-dom'
import line from "../Images/Line 98dash.png";
import home2 from "../Images/Vector2222.png";
import arrow1 from "../Images/Arrow 2.png";
import arrow2 from "../Images/Arrow 21234.png";
import Map from '../Map';
import Find from '../../assets/Find';
import { SearchLocation } from './IPComponents/SearchLocation';
import { FlatName } from './IPComponents/FlatName';

function LocationDetails() {
  return (
    <div className="max-w-5xl mx-auto py-4 px-4">
      <div className="top  flex justify-start items-center gap-1">
        <button className="px-4 py-2 bg-[#F45C2C] rounded-full text-white font-gilroy_medium">
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

      <div className="flex justify-start items-center lg:mt-12 md:mt-10 mt-8  gap-4 ">
        <img className="w-10 h-10" src={home2} alt="" />
        <h1 className="text-4xl font-gilroy_semi_bold text-[#262626]">
          WHERE IS YOUR PLACE LOCATED ?
        </h1>
      </div>

      <div className='w-[936px] h-[480px] bg-slate-300 my-8'>
        <div className='relative h-full overflow-hidden'>
         <Map/>
        </div>
        <div className='search w-[60%] h-[10%] mx-auto bg-slate-100 rounded-full flex items-center gap-3 pl-6'>
            <Find/>
            <div className='font-gilroy_regular'>
              <SearchLocation/>
            </div>
        </div>
      </div>

        


      

      <div className="max-w-6xl flex justify-between items-center my-8">
        <button className="px-8 py-2 border-[#2C2C2C] border rounded-full flex justify-center items-center gap-2">
          <img src={arrow2} alt="" />
          Back
        </button>
        <Link to="/addLocation/confirmAddress">
          {" "}
          <button className="px-8 py-2 bg-[#F45C2C] rounded-full text-white flex justify-center items-center gap-2">
            Next
            <img src={arrow1} alt="" />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LocationDetails
