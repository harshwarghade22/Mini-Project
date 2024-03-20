import React,{useState} from 'react'
import { IoBed } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";
import Reserve from './Reserve';
import ReserveDate from './ReserveDate';



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
    <div className=''>
        <ReserveDate/>
    </div>
  )
}

export default Reserve2
