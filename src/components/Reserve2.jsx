import React,{useState} from 'react'
import { IoBed } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";
import Reserve from './Reserve';



function Reserve2() {
  // State to manage the current date
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateFinal,setDateFinal] = useState(new Date());

  // Function to handle date changes
  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setCurrentDate(selectedDate);
    setDateFinal(selectedDate);
  };


  return (
    <div>
      <div className='h-[600px] mr-[100px] ml-[100px] mt-5  flex gap-48'>
        <Reserve/>
        <div className='w-[450px]  flex flex-col'>
        <div className='h-[75px]  flex justify-between'>
            <div className='w-[100px] h-full  flex flex-col justify-center items-center gap-2'>
                <p className='font-gilroy_semi_bold text-center text-sm'>Select pricing</p>
                <a href="/reserve1">
                <div className='w-[45px] h-[45px] rounded-full border-black border flex justify-center items-center text-2xl bg-black text-white'>
                    <IoBed/>
                </div>
                </a>
               
            </div>
            <div className='w-[100px] h-full  flex flex-col justify-center items-center gap-2'>
                <p className='font-gilroy_semi_bold text-center text-sm text-gray-400'>Select date</p>
                <div className='w-[45px] h-[45px] rounded-full border-black border flex justify-center items-center text-2xl bg-black text-white'>
                    <BsCalendarDateFill/>
                </div>
            </div>
            <div className='w-[100px] h-full  flex flex-col justify-center items-center gap-2'>
                <p className='font-gilroy_semi_bold text-center text-sm text-gray-400'>Confirm & Pay</p>
                <div className='w-[45px] h-[45px] rounded-full border-black border flex'></div>
            </div>
        </div>

        <div className='container mx-auto px-4 py-8'>
            <div className="mb-4">
                <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Select a date:</label>
                <input
                type="date"
                id="date"
                name="date"
                value={currentDate.toISOString().slice(0, 10)}
                onChange={handleDateChange}
                className=" px-4 py-2 rounded-xl w-full font-gilroy_semi_bold bg-slate-100"
                />
            </div>
        </div>
            
            
            <div className='h-[100px] border-t border-t-gray-400 mt-44 flex justify-between p-5'>
                <div className='flex gap-2'>
                    
                    <div className='w-[130px] h-[50px] rounded-full bg-slate-200 text-center pt-3 font-gilroy_regular'>
                    70000
                    </div>
                    <div className='w-[130px] h-[50px] rounded-full bg-slate-200 text-center pt-3 font-gilroy_semi_bold'>
                    {dateFinal.getDate()}/{dateFinal.getMonth()+1}/{dateFinal.getFullYear()}
                    </div>

                </div>
                
                <a href="/reserve3">
                <div className='w-[130px] h-[50px] rounded-lg bg-orange-600 text-white text-center font-gilroy_regular hover:bg-black hover:text-white flex justify-center items-center gap-1'>
                    <p>Next</p>
                    <FaArrowRight/> 
                </div>
                </a>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Reserve2
