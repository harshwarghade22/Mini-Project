import React,{useState} from 'react'
import { IoBed } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";



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
        <div className='w-[400px] border-gray-200 shadow-2xl rounded-xl p-4'>
            <div className='w-full h-[200px] rounded-md bg-[url("https://d2blna3sxzw742.cloudfront.net/Property-Photos/46-Thumbnail_1.jpg")] bg-center bg-cover'>
            </div>
            <div className='w-full h-[40px] mt-3 flex gap-3'>
                <div className='w-3/5 bg-slate-200 rounded-full font-gilroy_regular  text-center py-3 text-sm'>
                    Icon <span className='underline'>Banglore,HSR Layout</span>
                </div>
                <div className='w-2/5 bg-slate-200 rounded-full text-center py-2 font-gilroy_bold text-lg'>
                 ₹7000/mo
                </div>
            </div>
            <div className='h-[200px] bg-slate-200 rounded-3xl mt-2'>
                <p className='pt-5 px-7 font-gilroy_medium text-lg text-gray-700'>Ameneties</p>
                <div className='px-7 pt-5 flex flex-wrap gap-2'>
                    <div className='w-[45px] h-[45px] bg-white rounded-xl'></div>
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
            <div className='w-full h-[50px] bg-slate-200 mt-3 rounded-full flex'>
                <p className='font-gilroy_medium text-lg text-gray-700 py-3 pl-4'>Features</p>
                <div className='pl-5 pt-1 flex flex-wrap gap-2'>
                    <div className='w-[40px] h-[40px] bg-white rounded-xl'></div>
                    <div className='w-[40px] h-[40px] bg-white rounded-xl'></div>
                    <div className='w-[40px] h-[40px] bg-white rounded-xl'></div>
                    <div className='w-[40px] h-[40px] bg-white rounded-xl'></div>
                </div>
            </div>
            <div className='w-full h-[50px] bg-slate-200 mt-3 rounded-full flex'>
                <p className='font-gilroy_medium text-lg text-gray-700 py-3 pl-4'>Connectivity</p>
                <div className='pl-5 pt-1 flex flex-wrap gap-2'>
                    <div className='w-[40px] h-[40px] bg-white rounded-xl'></div>
                    <div className='w-[40px] h-[40px] bg-white rounded-xl'></div>
                    <div className='w-[40px] h-[40px] bg-white rounded-xl'></div>
                    
                </div>
            </div>
        </div>
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
