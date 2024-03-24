import React from 'react'
import { FaArrowRightLong, FaRegCopyright } from "react-icons/fa6";

function PlacesAvailable() {
  return (
    <div>        
        <div className="w-full  bg-zinc-200 grid grid-cols-1 sm:grid-cols-2 min-[950px]:grid-cols-4 lg:grid-cols-4 gap-3 p-4">
    <div className="h-[16vh] mx-auto min-w-56  bg-zinc-50 flex flex-col flex-shrink-0 flex-wrap justify-evenly items-center rounded-md">
      <img
        className="h-1/2 w-1/2  object-contain position-center"
        src="https://cdn-icons-png.flaticon.com/128/1283/1283983.png"
        alt=""
      />
      <div className="w-[80%] h-[1px] bg-black mt-3"></div>
      <h5 className="tracking-tight font-semibold text-sm ">Mumbai</h5>
    </div>
    <div className="h-[16vh] mx-auto min-w-56 bg-zinc-50 flex flex-col justify-center items-center rounded-md">
      <img
        className="h-1/2 w-1/2  object-contain position-center"
        src="https://cdn-icons-png.flaticon.com/128/1283/1283983.png"
        alt=""
      />
      <div className="w-[80%] h-[1px] bg-black mt-3"></div>
      <h5 className="tracking-tight font-semibold text-sm">Mumbai</h5>
    </div>
    <div className="h-[16vh] mx-auto min-w-56 bg-zinc-50 flex flex-col justify-center items-center rounded-md">
      <img
        className="h-1/2 w-1/2  object-contain position-center"
        src="https://cdn-icons-png.flaticon.com/128/1283/1283983.png"
        alt=""
      />
      <div className="w-[80%] h-[1px] bg-black mt-3"></div>
      <h5 className="tracking-tight font-semibold text-sm">Mumbai</h5>
    </div>
    <div className="h-[16vh] mx-auto min-w-56 bg-zinc-50 flex flex-col justify-center items-center rounded-md">
      <img
        className="h-1/2 w-1/2  object-contain position-center"
        src="https://cdn-icons-png.flaticon.com/128/1283/1283983.png"
        alt=""
      />
      <div className="w-[80%] h-[1px] bg-black mt-3"></div>
      <h5 className="tracking-tight font-semibold text-sm">Mumbai</h5>
    </div>
  </div>
</div>
  )
}

export default PlacesAvailable