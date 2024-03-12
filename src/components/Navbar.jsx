import React from 'react'
import { CgProfile } from "react-icons/cg";


function Navbar() {
  return (
    <div className='w-[80vw] md:w-11/12  max-w-screen-2xl mx-auto h-20 border-b border-b-black flex justify-between items-center'>
        <div className=' text-3xl font-gilroy_semi_bol font-semibold'>Conti<span className='text-orange-400'>new...</span></div>
        <div className='hidden md:flex justify-between gap-8 text-gray-400 font-gilroy_medium'>
            <a href="/"><div className='hover:text-black text-sm'>Home</div></a>
            <a href=""><div className='hover:text-black text-sm'>Mates</div></a>
            <a href=""><div className='hover:text-black text-sm'>Rent More</div></a>
            <a href=""><div className='hover:text-black text-sm'>Services</div></a>
        </div>
        <div className=''>
          <a href="">
          <div className='h-[39px] border border-black rounded-full flex justify-center items-center hover:bg-black hover:text-white'>
                <div className='text-2xl'><CgProfile/></div>
                <div className='px-2 py-4 text-center text-sm font-gilroy_medium '>Profile</div>
            </div>
          </a>
        </div>
      </div>
  )
}

export default Navbar