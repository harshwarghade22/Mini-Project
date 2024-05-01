import React from 'react'
import {NavLink,Route,Routes } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import Flatmates from './Flatmates';
import Flat from './Flat';
import image1 from '../Images/Rectangle 2927.png';
import image2 from '../Images/Rectangle 2926.png';
import image3 from '../Images/Rectangle 2928.png';
function Page2() {
  return (
    <div>
      <div className='bg-zinc-50 h-screen w-full flex overflow-hidden'>
      <div className='hidden  grid-rows-4 grid-cols-5 col-span-2 border border-black w-[65%] h-[100%] lg:grid '>
         <div className=' col-span-2 row-span-3 overflow-hidden object-center'>
          <img src={image2} alt="" />
         </div>
         <div></div>
         <div className="col-span-2 overflow-hidden">
          <img src={image1} alt="" />
         </div>
         {/* <div></div> */}

         {/* <div></div>
         <div></div> */}
         <div className='border border-black col-span-3 row-span-2 py-6 px-9'>
          <h1 className='text-zinc-900 text-3xl tracking-tight font-semibold py-2'>Create Profile</h1>
          <h5 className='font-semibold text-sm'>Select your preference</h5>

         </div>
         {/* <div></div>
         <div></div>
 */}
         {/* <div></div>
         <div></div> */}
         {/* <div></div>
         <div></div>
         <div></div> */}

         <div></div>
         <div></div>
         <div className=' col-span-2'>
          <img src={image3} alt="" />
         </div>
         <div></div>
         </div>
         <div className='mx-auto m-1 overflow-hidden w-fit lg:w-[27.5%] flex flex-col'>
            <div className=' option w-full h-[20%]  flex items-start justify-center flex-col p-2 mx-auto'>
              <h5 className='text-zinc-800 font-semibold'>I'm looking for</h5>
              <div className='flex pt-3 md:gap-6 gap-4 mx-auto'> 
              {/* px-10 py-1 border-zinc-800 border-2 rounded font-semibold flex gap-2 text-lg items-center bg-zinc-100' */}
              <NavLink to="/flat" className={({ isActive }) =>
     isActive ? "px-4 lg:px-8 py-1 border-zinc-800 border-2 rounded font-semibold flex gap-2 text-lg items-center text-white bg-zinc-800" : "px-4 lg:px-8 py-1 border-zinc-800 border-2 rounded font-semibold flex gap-2 text-lg items-center bg-zinc-100"
  }
>
              <IoIosHome />Flat
              </NavLink>
              <NavLink to="/flatmates" className={({ isActive }) =>
     isActive ? "px-4 lg:px-8 py-1 border-zinc-800 border-2 rounded font-semibold flex gap-2 text-lg items-center text-white bg-zinc-800" : "px-4 lg:px-8 py-1 border-zinc-800 border-2 rounded font-semibold flex gap-2 text-lg items-center bg-zinc-100"
  }>
              <FaUsers />Flatmates
              </NavLink>
              </div>
            </div>


      <Routes>
      <Route path="/" element={<Flatmates/>}>
        <Route
          path="flatmates"
          element={<Flatmates/>}
        />
        <Route 
        path="flat" 
        element={<Flat/>} 
        />
      </Route>
      </Routes>
        

         </div>

    </div>
    </div>
  )
}

export default Page2
