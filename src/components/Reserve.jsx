import React from "react";
import Fridge from "./Icons/Fridge";

function Reserve() {
  return (
    <div>
      <div className='w-[90%] md:w-[95%] lg:w-[70%] mx-auto border border-gray-200 shadow-2xl rounded-xl flex md:flex-row flex-col p-4 lg:flex-col md:mx-auto  gap-x-3'>
            <div>
            <div className='h-[200px] md:h-[85%] lg:h-[200px] md:w-[300px] lg:w-full rounded-md bg-[url("https://d2blna3sxzw742.cloudfront.net/Property-Photos/46-Thumbnail_1.jpg")] bg-center bg-cover'>
            </div>
            <div className='h-[40px] mt-3 flex gap-3'>
                <div className='w-3/5 bg-slate-200 rounded-full font-gilroy_regular  text-center py-3 text-sm'>
                    Icon <span className='underline'>Banglore,HSR Layout</span>
                </div>
                <div className='w-2/5 bg-slate-200 rounded-full text-center py-2 font-gilroy_bold text-lg'>
                 ₹7000/mo
                </div>
            </div>
            </div>
            
            <div className='h-[200px] md:h-full lg:h-[200px]  md:w-[75%] lg:w-full bg-slate-200 rounded-3xl mt-2 pb-4'>
                <p className='pt-5 px-7 font-gilroy_medium text-lg text-gray-700'>Ameneties</p>
                <div className='px-7 pt-5 flex flex-wrap gap-2'>
                    <div className='w-[45px] h-[45px] bg-white rounded-xl'>
                      
                    </div>
                    <div className='w-[45px] h-[45px] bg-white rounded-xl'></div>
                    <div className='w-[45px] h-[45px] bg-white rounded-xl'></div>
                    <div className='w-[45px] h-[45px] bg-white rounded-xl'></div>
                    <div className='w-[45px] h-[45px] bg-white rounded-xl'></div>
                    <div className='w-[45px] h-[45px] bg-white rounded-xl'></div>
                    <div className='w-[45px] h-[45px] bg-white rounded-xl'></div>
                    <div className='w-[45px] h-[45px] bg-white rounded-xl'></div>
                    <div className='w-[45px] h-[45px] bg-white rounded-xl'></div>
                    <div className='w-[45px] h-[45px] bg-white rounded-xl'></div>          
            
                </div>
            </div>
            <div className="">
            <div className='md:w-[200px] lg:w-full w-full md:h-[50%] lg:h-[50px] h-[50px] bg-slate-200 mt-3 rounded-full md:rounded-3xl flex md:flex-col lg:flex-row px-1 pb-10'>
                <p className='font-gilroy_medium text-lg text-gray-700 py-3 pl-4'>Features</p>
                <div className='pl-5 md:pt-0 pt-1 lg:pt-1 flex flex-wrap gap-2'>
                    <div className='w-[40px] h-[40px] bg-white rounded-xl'></div>
                    <div className='w-[40px] h-[40px] bg-white rounded-xl'></div>
                    <div className='w-[40px] h-[40px] bg-white rounded-xl'></div>
                    <div className='w-[40px] h-[40px] bg-white rounded-xl'></div>
                </div>
            </div>
            <div className='w-full md:h-[100px] lg:h-[50px] h-[50px] bg-slate-200 mt-3 rounded-full md:rounded-3xl flex md:flex-col lg:flex-row '>
                <p className='font-gilroy_medium text-lg text-gray-700 py-3 pl-4'>Connectivity</p>
                <div className='pl-5 md:pt-0 pt-1 lg:pt-1 flex flex-wrap gap-2'>
                    <div className='w-[40px] h-[40px] bg-white rounded-xl'></div>
                    <div className='w-[40px] h-[40px] bg-white rounded-xl'></div>
                    <div className='w-[40px] h-[40px] bg-white rounded-xl'></div>
                    
                </div>
            </div>
            </div>
            
        </div>
      {/* <div class="w-[90%] md:w-[95%] lg:w-[70%] mx-auto border-gray-200 shadow-2xl rounded-xl flex flex-col p-4 lg:flex-row bg-red-200">
        <div class='md:w-1/2 lg:w-auto h-[200px] w-full rounded-md bg-[url("https://d2blna3sxzw742.cloudfront.net/Property-Photos/46-Thumbnail_1.jpg")] bg-center bg-cover'></div>
        <div class="flex flex-col md:w-1/2 lg:w-auto h-[200px] bg-slate-200 rounded-3xl mt-2 md:mt-0 md:ml-4">
          <div class="h-[40px] mt-3 flex gap-3">
            <div class="w-3/5 bg-slate-200 rounded-full font-gilroy_regular text-center py-3 text-sm">
              Icon <span class="underline">Banglore,HSR Layout</span>
            </div>
            <div class="w-2/5 bg-slate-200 rounded-full text-center py-2 font-gilroy_bold text-lg">
              ₹7000/mo
            </div>
          </div>
          <p class="pt-5 px-7 font-gilroy_medium text-lg text-gray-700">
            Ameneties
          </p>
          <div class="px-7 pt-5 flex flex-wrap gap-2"></div>
        </div>
        <div class="flex flex-col md:w-1/2 lg:w-auto h-[200px] bg-slate-200 rounded-3xl mt-2 md:mt-0 lg:ml-4">
          <div class="h-[50px] bg-slate-200 mt-3 rounded-full flex">
            <p class="font-gilroy_medium text-lg text-gray-700 py-3 pl-4">
              Features
            </p>
            <div class="pl-5 pt-1 flex flex-wrap gap-2"></div>
          </div>
          <div class="h-[50px] bg-slate-200 mt-3 rounded-full flex">
            <p class="font-gilroy_medium text-lg text-gray-700 py-3 pl-4">
              Connectivity
            </p>
            <div class="pl-5 pt-1 flex flex-wrap gap-2"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Reserve;
