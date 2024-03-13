import React, { useState } from 'react'
import { MdGroups } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Fridge from './Icons/Fridge';
import Wardrobe from './Icons/Wardrobe';
import Tv from './Icons/Tv';
import Desk from './Icons/Desk';
import Curtains from './Icons/Curtains';
import WM from './Icons/WM';
import OfficeChair from './Icons/OfficeChair';
import Dinning from './Icons/Dinning';
import Bed from './Icons/Bed';
import Tablelamp from './Icons/Tablelamp';
import Lift from './Icons/Lift';
import Water from './Icons/Water';
import Security from './Icons/Security';
import DeskTable from './Icons/DeskTable';
import Metro from './Icons/Metro';

import Bus from './Icons/Bus';












function Details() {
  
  const slides=[
    {url:'https://d2blna3sxzw742.cloudfront.net/Property-Photos/46-Thumbnail_1.jpg'},
    {url:'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2022/Jul/22/Photo_h400_w540/GR2-305273-1442031_400_540.jpeg'},
    {url:'https://d2blna3sxzw742.cloudfront.net/Property-Photos/46-Thumbnail_1.jpg'},
    {url:'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2022/Jul/22/Photo_h400_w540/GR2-305273-1442031_400_540.jpeg'},
  ]

  const [currentIndx,setCurrentIndx]=useState(0)

  const nextSlide=()=>{
    const isLastSlide=currentIndx === slides.length-1
    if(isLastSlide){
      setCurrentIndx(0)
    }else{
      setCurrentIndx(currentIndx+1)
    }

  }
  const prevSlide=()=>{
    const isFirstSlide=currentIndx===0
    const indx=isFirstSlide ? slides.length-1 : currentIndx-1
    setCurrentIndx(indx)
  }  

  return (
    <div className='md:px-14 px-14'>
      <h1 className='mt-2 mb-3 font-gilroy_medium'>Home/Flats/Description</h1>
      
      <div className='h-[30vh] md:h-[70vh] mx-auto border rounded-lg md:flex gap-4 p-4'>
        <div style={{backgroundImage:`url(${slides[currentIndx].url})`}} className='md:w-3/5 h-full  border border-gray-400 rounded-lg  bg-center bg-cover flex justify-end items-end'>
           <div className='text-6xl flex text-white'><IoIosArrowDropleftCircle onClick={prevSlide} className='hover:scale-125'/> <IoIosArrowDroprightCircle onClick={nextSlide} className='hover:scale-125'/></div>
        </div>
        
        <div className='w-2/5 border border-gray-400 rounded-lg bg-[url("https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg")] bg-center bg-cover grayscale'>
        </div>
      </div>
      <div className='md:h-[100px] h-[200px] max-w-full mx-auto mt-6 border-b-2 border-t-2 flex p-5'>
        <div className='md:w-full w-[50vw] border-r-2 md:flex md:justify-between'>
            <div className='lg:w-[196px] h-[60px] bg-slate-200 rounded-full py-2 px-6 mb-4'>
                <p className='text-xs font-gilroy_light'>Starts from</p>
                <p className='text-xl font-gilroy_bold'>Rs.10,000/mo</p>
            </div>
            <div className='h-[60px] bg-slate-200 rounded-full mr-4 flex md:justify-between justify-center items-center px-4 gap-2 ml-3'>
              <div className='text-3xl'><MdGroups/></div>
              <div className='text-gray-800'>Roomates</div>
              <div className='gap-1 hidden md:flex'>
                <div className='md:w-[50px] md:h-[50px] border border-black rounded-full bg-[url("https://images.unsplash.com/photo-1554126807-6b10f6f6692a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg")] bg-center bg-cover'>
                </div>
                <div className='w-[50px] h-[50px] border border-black rounded-full bg-[url("https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg")] bg-center bg-cover'>
                </div>
                <div className='w-[50px] h-[50px] border border-black rounded-full bg-gray-800'>
                  <p className='flex justify-center py-3 text-xl font-gilroy_light text-white'>VAC</p>
                </div>
              </div>
              
            </div>
        </div>
        <div className='w-3/5 lg:border-r-2 md:flex justify-center gap-5 lg:px-10 font-gilroy_medium md:p-0 p-5'>
            <a href="" className='md:w-1/2 w-full md:h-full border h-1/2 rounded-md border-black flex justify-center items-center hover:bg-black hover:text-white mx-auto mb-2'>Scedule a visit</a>
            
            <a href="/reserve1" className='md:w-1/2 w-full md:h-full h-1/2 bg-orange-500 border rounded-md flex justify-center items-center gap-1 text-white hover:bg-black mx-auto'>Reserve <span className='text-white text-xl'><FaArrowRight/></span></a>
            
        </div>
      </div>
      <div className='h-[500px] border-b-2 border-gray-300 mb-10 flex flex-col gap-5 p-5'>
      <div className='w-full h-3/5 bg-slate-100 rounded-3xl flex'>
        <div className='w-3/5 h-full flex flex-col'>
          <div className='py-5 px-10 font-gilroy_medium text-2xl'>Amenities</div>
          <div className='w-[643px] h-[193px] ml-10 mb-7 flex flex-wrap gap-9'>
            <div className='w-[70px] h-[80px] flex flex-col justify-between items-center'>
              <div className='h-5/6 bg-white w-full flex justify-center items-center rounded-2xl'>
                
                <Fridge/>
              </div>
              <div className='text-xs'>Name</div>
            </div>
            <div className='w-[70px] h-[80px] flex flex-col justify-between items-center'>
              <div className='h-5/6 bg-white w-full flex justify-center items-center rounded-2xl'>
                <Wardrobe/>
              </div>
              <div className='text-xs'>Name</div>
            </div>
            <div className='w-[70px] h-[80px] flex flex-col justify-between items-center'>
              <div className='h-5/6 bg-white w-full rounded-2xl'>
                <Tv/>
              </div>
              <div className='text-xs'>Name</div>
            </div>
            <div className='w-[70px] h-[80px] flex flex-col justify-between items-center'>
              <div className='h-5/6 bg-white w-full flex justify-center items-center rounded-2xl'>
                <Desk/>
              </div>
              <div className='text-xs'>Name</div>
            </div>
            <div className='w-[70px] h-[80px] flex flex-col justify-between items-center'>
              <div className='h-5/6 bg-white w-full flex justify-center items-center rounded-2xl'>
                <Curtains/>
              </div>
              <div className='text-xs'>Name</div>
            </div>
            <div className='w-[70px] h-[80px] flex flex-col justify-between items-center'>
              <div className='h-5/6 bg-white w-full flex justify-center items-center rounded-2xl'>
                <WM/>
              </div>
              <div className='text-xs'>Name</div>
            </div>
            <div className='w-[70px] h-[80px] flex flex-col justify-between items-center'>
              <div className='h-5/6 bg-white w-full flex justify-center items-center rounded-2xl'>
                <OfficeChair/>
              </div>
              <div className='text-xs'>Name</div>
            </div>
            <div className='w-[70px] h-[80px] flex flex-col justify-between items-center'>
              <div className='h-5/6 bg-white w-full flex justify-center items-center rounded-2xl'>
                <Dinning/>
              </div>
              <div className='text-xs'>Name</div>
            </div>
            <div className='w-[70px] h-[80px] flex flex-col justify-between items-center'>
              <div className='h-5/6 bg-white w-full flex justify-center items-center rounded-2xl'>
                <Bed/>
              </div>
              <div className='text-xs'>Name</div>
            </div>
            <div className='w-[70px] h-[80px] flex flex-col justify-between items-center'>
              <div className='h-5/6 bg-white w-full  flex justify-center items-center rounded-2xl'>
                <Tablelamp/>
              </div>
              <div className='text-xs'>Name</div>
            </div>
           
          </div>
        </div>

        <div className='w-2/5 mt-10 mb-10 border-l-2 border-gray-300 flex flex-col items-center  gap-10'>
          <div className='font-gilroy_semi_bold text-2xl w-[276px] h-[50px] text-center mt-5'>Furnish your space by your hand</div>
          <a href=""><div className='w-[321px] h-[55px] border-black border rounded-lg font-gilroy_medium text-center py-3 hover:bg-black hover:text-white'>Customize your avatar</div></a>
        </div>
      </div>

        <div className=' w-full h-2/5 rounded-3xl flex justify-between gap-5'>
          <div className='w-1/2 h-full bg-slate-100 rounded-3xl'>
          <div className='pt-5 pb-3 px-10 font-gilroy_medium text-2xl'>Features</div>       
          <div className='flex justify-start gap-7 px-10'>
            <div className='w-[70px] h-[80px] flex flex-col justify-between items-center'>
              <div className='h-5/6 bg-white w-full flex justify-center items-center rounded-2xl'>
                <Lift/>
              </div>
              <div className='text-xs'>Name</div>
            </div>
            <div className='w-[70px] h-[80px] flex flex-col justify-between items-center'>
              <div className='h-5/6 bg-white w-full flex justify-center items-center rounded-2xl'>
                <Water/>
              </div>
              <div className='text-xs'>Name</div>
            </div>
            <div className='w-[70px] h-[80px] flex flex-col justify-between items-center'>
              <div className='h-5/6 bg-white w-full flex justify-center items-center rounded-2xl'>
                <Security/>
              </div>
              <div className='text-xs'>Name</div>
            </div>
            <div className='w-[70px] h-[80px] flex flex-col justify-between items-center'>
              <div className='h-5/6 bg-white w-full flex justify-center items-center rounded-2xl'>
                <DeskTable/>
              </div>
              <div className='text-xs'>Name</div>
            </div>
          </div>
          </div>
          <div className='w-1/2 h-full bg-slate-100 rounded-3xl'>
          <div className='pt-5 pb-3 px-10 font-gilroy_medium text-2xl'>Mobility</div>
          <div className='flex justify-start gap-7 px-10'>
            <div className='w-[70px] h-[80px] flex flex-col justify-between items-center'>
              <div className='h-5/6 bg-white w-full'>
                <Metro/>
              </div>
              <div className='text-xs'>Name</div>
            </div>
            <div className='w-[70px] h-[80px] flex flex-col justify-between items-center'>
              <div className='h-5/6 bg-white w-full flex justify-center items-center rounded-2xl'>
              <Bus/>
              </div>
              <div className='text-xs'>Name</div>
            </div>
            <div className='w-[70px] h-[80px] flex flex-col justify-between items-center'>
              <div className='h-5/6 bg-white w-full flex justify-center items-center rounded-2xl'>
                <Bus/>
              </div>
              <div className='text-xs'>Name</div>
            </div>
            
          </div>
          
          </div>
        </div>
      </div>


      



      

      
    </div>
  )
}

export default Details
