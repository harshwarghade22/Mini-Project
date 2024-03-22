import React, { useState } from 'react'
import Navbar from './Navbar'
import { IoBed } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import Reserve from './Reserve';



function Reserve1() {

    const [price,setPrice]=useState(null);
    const [sharing,setSharing] = useState(null);

    const priceTriple = ()=>{
        setPrice(7000);
        setSharing('triple');
    }

    const priceDouble = ()=>{
        setPrice(11000);
        setSharing('double');
    }

    const pricePrivate = ()=>{
        setPrice(18000);
        setSharing('private');
    }


  return (
    <>
      <div className='max-w-screen-2xl mx-auto mt-20 md:mt-5 flex justify-between space-y-10 flex-col lg:flex-row'>
        <Reserve/>
        <div className='w-[90%] sm:w-[80%] lg:w-[35%] mx-auto flex flex-col'>
            <div className=' flex justify-between'>
                <div className='w-[100px] h-full  flex flex-col justify-center items-center gap-2'>
                    <p className='font-gilroy_semi_bold text-center text-sm'>Select pricing</p>
                    <div className='w-[45px] h-[45px] rounded-full border-black border flex justify-center items-center text-2xl bg-black text-white'>
                        <IoBed/>
                    </div>
                </div>
                <div className='w-[100px] h-full  flex flex-col justify-center items-center gap-2'>
                    <p className='font-gilroy_semi_bold text-center text-sm text-gray-400'>Select date</p>
                    <div className='w-[45px] h-[45px] rounded-full border-black border flex'></div>
                </div>
                <div className='w-[100px] h-full  flex flex-col justify-center items-center gap-2'>
                    <p className='font-gilroy_semi_bold text-center text-sm text-gray-400'>Confirm & Pay</p>
                    <div className='w-[45px] h-[45px] rounded-full border-black border flex'></div>
                </div>
            </div>
            <div className='h-[107px] mt-6'>
                <p className='font-gilroy_semi_bold text-gray-600 text-xl'>Select Occupancy</p>
                <div className='flex justify-between mt-2 gap-4 lg:gap-0 text-sm lg:text-base'>
                        <div className={` border border-black rounded-xl ${sharing === 'triple' ? 'bg-black text-white' : 'hover:bg-black hover:text-white'} p-2`} onClick={priceTriple}>
                            <p className='font-gilroy_regular'>Triple Sharing</p>
                            <p className='font-gilroy_bold' >₹7000/mo</p>
                        </div> 
                        <div className={`border border-black rounded-xl ${sharing === 'double' ? 'bg-black text-white' : 'hover:bg-black hover:text-white'} p-2`} onClick={priceDouble}>
                            <p className='font-gilroy_regular'>Double Sharing</p>
                            <p className='font-gilroy_bold'>₹11000/mo</p>
                        </div>
                        <div className={`border border-black rounded-xl ${sharing === 'private' ? 'bg-black text-white' : 'hover:bg-black hover:text-white'} p-2`} onClick={pricePrivate}>
                            <p className='font-gilroy_regular'>Private Sharing</p>
                            <p className='font-gilroy_bold'>₹18000/mo</p>
                        </div>
                </div>
            </div>
            <div className='h-[225px] mt-3 bg-slate-100'>
                <p className='font-gilroy_semi_bold text-gray-600 bg-white text-xl pb-2'>Occupant info</p>
                <label for="first_name" class="block mb-2 text-lg pl-6 pt-6 font-gilroy_regular text-gray-900 ">Name</label>
                <input type="text" className='bg-slate-100 w-4/5 border-b mx-6 border-b-gray-400' id="first_name" />
                <label for="first_name" class="block mb-2 text-lg pl-6 pt-6 font-gilroy_regular text-gray-900 ">Number</label>
                <div className='flex gap-2'>
                
                <div className='bg-slate-100 w-1/5 border-b mx-6 border-b-gray-400 text-center text-xl'>
                    
                    +91
                </div>
                <input type="text" className='bg-slate-100 w-4/5 border-b mr-20 border-b-gray-400' id="first_name" />
                </div>
                
            </div>
            <div className='h-[100px] border-t border-t-gray-400  flex justify-between py-5 mt-10'>
                
                <div className='w-[130px] h-[50px] rounded-full bg-slate-200 text-center pt-3 font-gilroy_regular'>
                ₹{price}/mo
                </div>
                <a href="/reserve2">
                <div className='w-[130px] h-[50px] rounded-lg bg-orange-600 text-white text-center font-gilroy_regular hover:bg-black hover:text-white flex justify-center items-center gap-1'>
                    <p>Next</p>
                    <FaArrowRight/> 
                </div>
                </a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Reserve1
