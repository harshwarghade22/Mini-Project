import React, { useState } from "react";
import Reserve from "./Reserve";
import DateLeft from "./Icons/DateLeft";
import DateRight from "./Icons/DateRight";
import CalendarIcon from "./Icons/CalendarIcon";
import { useEffect } from "react";
import { DatePicker } from "@mantine/dates";

function ReserveDate() {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = months[month];

  const [dateFinal, setDateFinal] = useState(date);

  const handleDateChange = (clickedDay) => {
    const selectedDate = new Date(year, month, clickedDay);
    setDateFinal(selectedDate);
  };

  //console.log(dateFinal);

  const [time, setTime] = useState(null);

  const morning = () => {
    setTime("Morning");
  };

  const afternoon = () => {
    setTime("Afternoon");
  };

  const evening = () => {
    setTime("Evening");
  };

  const night = () => {
    setTime("Night");
  };

  return (
    <div className="w-[90%] mx-auto flex flex-col lg:flex-row justify-evenly mt-4 p-5 font-gilroy_regular">
      <Reserve />
      <div className="lg:w-[40%] w-full mt-5 lg:mt-0 flex flex-col">
        <p className="text-xl">Schedule Date & Visiting Time</p>
        <div className="w-full h-[22%] bg-slate-100 mt-5 rounded-lg">
          <div className="flex gap-2 px-5 py-3 border-b border-b-slate-400 text-black">
            <p>
              {monthName} {year}
            </p>
            <DateLeft />
            <DateRight />
          </div>
          <div className="flex justify-between lg:justify-around pt-4 px-2">
            <div
              className="h-[8vh] w-[6vw] bg-white rounded-lg flex items-center justify-center text-lg text-black hover:bg-black hover:text-white"
              onClick={() => {
                handleDateChange({ day });
              }}
            >
              {day}
            </div>
            <div
              className="h-[8vh] w-[4vw] bg-white rounded-lg flex items-center justify-center text-lg text-black hover:bg-black hover:text-white"
              onClick={() => {
                handleDateChange(day + 1);
              }}
            >
              {day + 1}
            </div>
            <div
              className="h-[8vh] w-[4vw] bg-white rounded-lg flex items-center justify-center text-lg text-black hover:bg-black hover:text-white"
              onClick={() => {
                handleDateChange(day + 2);
              }}
            >
              {day + 2}
            </div>
            <div
              className="h-[8vh] w-[4vw] bg-white rounded-lg flex items-center justify-center text-lg text-black hover:bg-black hover:text-white"
              onClick={() => {
                handleDateChange(day + 3);
              }}
            >
              {day + 3}
            </div>
            <div
              className="h-[8vh] w-[4vw] bg-white rounded-lg flex items-center justify-center text-lg text-black hover:bg-black hover:text-white"
              onClick={() => {
                handleDateChange(day + 4);
              }}
            >
              {day + 4}
            </div>
            <div
              className="h-[8vh] w-[4vw] bg-white rounded-lg flex items-center justify-center text-lg text-black hover:bg-black hover:text-white"
              onClick={() => {
                handleDateChange(day + 5);
              }}
            >
              {day + 5}
            </div>
            <div
              className="h-[8vh] w-[4vw] bg-gray-400 rounded-lg flex justify-center items-center"
              onClick={<DatePicker />}
            >
              <CalendarIcon />
            </div>
          </div>
        </div>
        <div className="w-full h-full lg:h-[18%] bg-slate-100 mt-3 rounded-md flex gap-3 lg:justify-center justify-around items-center text-black">
          <div
            className="w-[7vw] h-[10vh] bg-white rounded-lg text-center text-sm  pt-3 hover:bg-black hover:text-white"
            onClick={morning}
          >
            <p>Morning</p>
            <p className="text-slate-400">9am to 12pm</p>
          </div>
          <div
            className="w-[7vw] h-[10vh] bg-white rounded-lg text-center text-sm  pt-3 hover:bg-black hover:text-white"
            onClick={afternoon}
          >
            <p>Afternoon</p>
            <p className="text-slate-400">12pm to 4pm</p>
          </div>
          <div
            className="w-[7vw] h-[10vh] bg-white rounded-lg text-center text-sm  pt-3 hover:bg-black hover:text-white"
            onClick={evening}
          >
            <p>Evening</p>
            <p className="text-slate-400">4pm to 7pm</p>
          </div>
          <div
            className="w-[7vw] h-[10vh] bg-white rounded-lg text-center text-sm  pt-3 hover:bg-black hover:text-white"
            onClick={night}
          >
            <p>Night</p>
            <p className="text-slate-400">7pm to 10pm</p>
          </div>
        </div>

        <div className="h-[32%] mt-3 bg-slate-100">
          <p className="font-gilroy_semi_bold text-gray-600 text-xl pb-5 ">
            Vistor info
          </p>
          <label
            for="first_name"
            class="block text-lg pl-6 font-gilroy_regular text-gray-900 "
          >
            Name
          </label>
          <input
            type="text"
            className="bg-slate-100 w-4/5 border-b mx-6 border-b-gray-400"
            id="first_name"
          />
          <label
            for="first_name"
            class="block text-lg pl-6 pt-6 font-gilroy_regular text-gray-900 "
          >
            Number
          </label>
          <div className="flex gap-2">
            <div className="bg-slate-100 w-1/5 border-b mx-6 border-b-gray-400 text-center text-xl">
              +91
            </div>
            <input
              type="text"
              className="bg-slate-100 w-4/5 border-b mr-20 border-b-gray-400"
              id="first_name"
            />
          </div>
        </div>

        <div className="flex justify-between h-[8%] mt-8 border-t border-t-gray-400 pt-3">
          <div className="w-[60%] flex justify-around  rounded-full">
            <div className="w-[40%] border rounded-full flex justify-center items-center">{`${dateFinal.getDate()}/${dateFinal.getMonth()}/${dateFinal.getFullYear()}`}
            </div>
            <div className="w-[40%] border rounded-full flex justify-center items-center">
              {time}
            </div>
          </div>
          <div className="w-[30%] border rounded-lg bg-orange-600 flex justify-center items-center font-gilroy_regular text-white p-3">
            Schedule a visit
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReserveDate;
