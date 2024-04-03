import React from 'react'

import { Link } from 'react-router-dom'
import line from "../Images/Line 98dash.png";

import arrow1 from "../Images/Arrow 2.png";
import arrow2 from "../Images/Arrow 21234.png";
import Map from '../Map';

function ConfirmAddress() {
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

      <div className='w-[1000px] h-[582px] mx-auto my-8 flex gap-8 '>
        <div className='w-[45%] h-full'>
          <h1 className='font-gilroy_semi_bold text-4xl'>Confirm Address</h1>
          <div className='h-[85%] mt-12 border border-black rounded-md flex-col'>
            <div className='h-[16.7%] border-b border-black flex items-center pl-5'>
              <h1 className=''>FlatNo.</h1>
            </div>
            <div className='h-[16.7%] border-b border-black flex items-center pl-5'>
              <h1 className=''>Street/Locality etc</h1>
            </div>
            <div className='h-[16.7%] border-b border-black flex items-center pl-5'>
              <h1 className=''>Landmarks</h1>
            </div>
            <div className='h-[16.7%] border-b border-black flex-col pt-4 pl-5'>
              <h1 className=''>City/District</h1>
              <h1 className=''>Mumbai</h1>
            </div>
            <div className='h-[16.7%] border-b border-black flex-col pt-4 pl-5'>
              <h1 className=''>State/UT</h1>
              <h1 className=''>Maharashtra</h1>
            </div>
            <div className='h-[16.7%] flex-col pt-4 pl-5'>
              <h1 className=''>Country</h1>
              <h1 className=''>India</h1>
            </div>
          </div>
        </div>
        <div className='w-[55%] border overflow-hidden'>
          <Map/>
        </div>
      </div>

      

      <div className="max-w-6xl flex justify-between items-center my-8">
        <Link to="/addLocation">
          <button className="px-8 py-2 border-[#2C2C2C] border rounded-full flex justify-center items-center gap-2">
            <img src={arrow2} alt=""/>
            Back
          </button>
        </Link>
        
        <Link to="/addImage">
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

export default ConfirmAddress
