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
import SimpleMap from '../Gmap/GMap';
import MyComponent from '../Gmap/GMap2';

function LocationDetails() {
  return (
    <div className="max-w-5xl mx-auto py-4">
      <div className="top flex justify-start items-center gap-1">
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

      <div className="flex justify-start items-center md:mt-10 mt-4 gap-4 px-4 md:px-4 ">
        <img className="w-10 h-10 hidden md:block" src={home2} alt="" />
        <h1 className="text-4xl font-gilroy_semi_bold text-[#262626]">
          Where's your place located ?
        </h1>
      </div>

      <div className='md:max-w-5xl h-[535px] md:h-[500px] my-4 md:my-5 relative '>
        <div className='relative h-full overflow-hidden px-4 md:px-0'>
          {/* <MyComponent/> */}
          <Map/>
        </div>
        <div className='search w-[60%] h-[10%] mx-auto bg-slate-100 rounded-full flex items-center gap-3 pl-6 absolute top-6 left-0 right-0'>
          <Find/>
          <div className='font-gilroy_regular'>
            <SearchLocation/>
          </div>
        </div>
      </div>

      <div className="max-w-5xl flex justify-between items-center my-8 mx-8 md:mx-0">
        <button className="md:px-14 md:py-3 px-5 py-3 border-[#2C2C2C] border rounded-lg flex justify-center items-center gap-2">
          <img src={arrow2} alt="" />
          Back
        </button>
        <Link to="/addLocation/confirmAddress">
          {" "}
          <button className="md:px-14 md:py-3 px-5 py-3 bg-[#F45C2C] rounded-lg text-white flex justify-center items-center gap-2">
            Next
            <img src={arrow1} alt="" />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LocationDetails
