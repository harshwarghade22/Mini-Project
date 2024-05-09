import React, { useState } from "react";
import Reserve from "./Reserve";
import DateLeft from "./Icons/DateLeft";
import DateRight from "./Icons/DateRight";
import CalendarIcon from "./Icons/CalendarIcon";
import { useEffect } from "react";
import { DatePicker } from "@mantine/dates";
import { ScrollArea, Box } from '@mantine/core';
import { Link } from "react-router-dom";

function ReserveDate() {
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
  const date = new Date();
  const day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();

  //console.log(month)
  let monthName = months[month - 1];

  const left = () => {
    //console.log("Left");
    month = month - 1;
    monthName = months[month - 1];
    console.log(monthName);
  };
  const right = () => {
    //console.log("Right");
    month = month + 1;
    monthName = months[month - 1];
    console.log(monthName);
  };

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
    <div className="max-w-screen-2xl mx-auto mt-20 md:mt-5 flex justify-between flex-col lg:flex-row">
      <Reserve />
      <div className="lg:w-[40%] w-[90%] mx-auto flex flex-col mt-4 md:mt-0">
        <p className="text-xl">Schedule Date & Visiting Time</p>
        <div className="w-full h-[150px] md:h-[22%] bg-slate-100 mt-5 rounded-lg">
          <div className="flex gap-2 px-5 py-3 border-b border-b-slate-400 text-black">
            <p>
              {monthName} {year}
            </p>
            <button onClick={left}>
              <DateLeft />
            </button>

            <button onClick={right}>
              <DateRight />
            </button>
          </div>
          
        <ScrollArea
          w={435}
          h={120}
          className="block md:hidden"
        >
          <Box w={600}>
          <div className="h-full flex flex-wrap gap-7 lg:justify-around pt-4 px-2">
            <div
              className="h-[55px] w-[55px] lg:w-[4vw] bg-white rounded-lg flex items-center justify-center text-lg text-black hover:bg-black hover:text-white"
              onClick={() => {
                handleDateChange({ day });
              }}
            >
              {day}
            </div>
            <div
              className="h-[55px] w-[55px] lg:w-[4vw] bg-white rounded-lg flex items-center justify-center text-lg text-black hover:bg-black hover:text-white"
              onClick={() => {
                handleDateChange(day + 1);
              }}
            >
              {day + 1}
            </div>
            <div
              className="h-[55px] w-[55px] lg:w-[4vw] bg-white rounded-lg flex items-center justify-center text-lg text-black hover:bg-black hover:text-white"
              onClick={() => {
                handleDateChange(day + 2);
              }}
            >
              {day + 2}
            </div>
            <div
              className="h-[55px] w-[55px] lg:w-[4vw] bg-white rounded-lg flex items-center justify-center text-lg text-black hover:bg-black hover:text-white"
              onClick={() => {
                handleDateChange(day + 3);
              }}
            >
              {day + 3}
            </div>
            <div
              className="h-[55px] w-[55px] lg:w-[4vw] bg-white rounded-lg flex items-center justify-center text-lg text-black hover:bg-black hover:text-white"
              onClick={() => {
                handleDateChange(day + 4);
              }}
            >
              {day + 4}
            </div>
            <div
              className="h-[55px] w-[55px] lg:w-[4vw] bg-white rounded-lg flex items-center justify-center text-lg text-black hover:bg-black hover:text-white"
              onClick={() => {
                handleDateChange(day + 5);
              }}
            >
              {day + 5}
            </div>
            <div
              className="h-[55px] w-[55px] lg:w-[4vw] bg-gray-400 rounded-lg flex justify-center items-center"
              onClick={<DatePicker />}
            >
              <CalendarIcon />
            </div>
          </div>
          </Box>
        </ScrollArea>

        <div className="h-full flex-wrap gap-4 lg:justify-around pt-4 px-2 hidden sm:flex">
            <div
              className="h-[55px] w-[55px] lg:w-[4vw] bg-white rounded-lg flex items-center justify-center text-lg text-black hover:bg-black hover:text-white"
              onClick={() => {
                handleDateChange({ day });
              }}
            >
              {day}
            </div>
            <div
              className="h-[55px] w-[55px] lg:w-[4vw] bg-white rounded-lg flex items-center justify-center text-lg text-black hover:bg-black hover:text-white"
              onClick={() => {
                handleDateChange(day + 1);
              }}
            >
              {day + 1}
            </div>
            <div
              className="h-[55px] w-[55px] lg:w-[4vw] bg-white rounded-lg flex items-center justify-center text-lg text-black hover:bg-black hover:text-white"
              onClick={() => {
                handleDateChange(day + 2);
              }}
            >
              {day + 2}
            </div>
            <div
              className="h-[55px] w-[55px] lg:w-[4vw] bg-white rounded-lg flex items-center justify-center text-lg text-black hover:bg-black hover:text-white"
              onClick={() => {
                handleDateChange(day + 3);
              }}
            >
              {day + 3}
            </div>
            <div
              className="h-[55px] w-[55px] lg:w-[4vw] bg-white rounded-lg flex items-center justify-center text-lg text-black hover:bg-black hover:text-white"
              onClick={() => {
                handleDateChange(day + 4);
              }}
            >
              {day + 4}
            </div>
            <div
              className="h-[55px] w-[55px] lg:w-[4vw] bg-white rounded-lg flex items-center justify-center text-lg text-black hover:bg-black hover:text-white"
              onClick={() => {
                handleDateChange(day + 5);
              }}
            >
              {day + 5}
            </div>
            <div
              className="h-[55px] w-[55px] lg:w-[4vw] bg-gray-400 rounded-lg flex justify-center items-center"
              onClick={<DatePicker />}
            >
              <CalendarIcon />
            </div>
          </div>

        </div>
        <ScrollArea
          w={435}
          h={130}
          className="block md:hidden"
        >
          <Box w={600}>
            <div className="w-full h-[100px] lg:h-[18%] bg-slate-100 mt-3 rounded-md flex gap-3 lg:justify-center justify-around flex-wrap items-center text-black">
            <div
              className="lg:w-[7vw] lg:h-[10vh] h-[70px] w-[120px] bg-white rounded-lg text-center text-sm  pt-3 hover:bg-black hover:text-white"
              onClick={morning}
            >
              <p>Morning</p>
              <p className="text-slate-400">9am to 12pm</p>
            </div>
            <div
              className="lg:w-[7vw] lg:h-[10vh] h-[70px] w-[120px]  bg-white rounded-lg text-center text-sm  pt-3 hover:bg-black hover:text-white"
              onClick={afternoon}
            >
              <p>Afternoon</p>
              <p className="text-slate-400">12pm to 4pm</p>
            </div>
            <div
              className="lg:w-[7vw] lg:h-[10vh] h-[70px] w-[120px]  bg-white rounded-lg text-center text-sm  pt-3 hover:bg-black hover:text-white"
              onClick={evening}
            >
              <p>Evening</p>
              <p className="text-slate-400">4pm to 7pm</p>
            </div>
            <div
              className="lg:w-[7vw] lg:h-[10vh] h-[70px] w-[120px]  bg-white rounded-lg text-center text-sm  pt-3 hover:bg-black hover:text-white"
              onClick={night}
            >
              <p>Night</p>
              <p className="text-slate-400">7pm to 10pm</p>
            </div>
            </div>
          </Box>
        </ScrollArea>
        <div className="w-full h-[100px] lg:h-[18%] bg-slate-100 mt-3 rounded-md md:flex hidden gap-3 lg:justify-center justify-around flex-wrap items-center text-black">
            <div
              className="lg:w-[7vw] lg:h-[10vh] h-[70px] w-[120px] bg-white rounded-lg text-center text-sm  pt-3 hover:bg-black hover:text-white"
              onClick={morning}
            >
              <p>Morning</p>
              <p className="text-slate-400">9am to 12pm</p>
            </div>
            <div
              className="lg:w-[7vw] lg:h-[10vh] h-[70px] w-[120px]  bg-white rounded-lg text-center text-sm  pt-3 hover:bg-black hover:text-white"
              onClick={afternoon}
            >
              <p>Afternoon</p>
              <p className="text-slate-400">12pm to 4pm</p>
            </div>
            <div
              className="lg:w-[7vw] lg:h-[10vh] h-[70px] w-[120px]  bg-white rounded-lg text-center text-sm  pt-3 hover:bg-black hover:text-white"
              onClick={evening}
            >
              <p>Evening</p>
              <p className="text-slate-400">4pm to 7pm</p>
            </div>
            <div
              className="lg:w-[7vw] lg:h-[10vh] h-[70px] w-[120px]  bg-white rounded-lg text-center text-sm  pt-3 hover:bg-black hover:text-white"
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
            <div className="w-[40%] border rounded-full flex justify-center items-center">
              {`${dateFinal.getDate()}/${
                dateFinal.getMonth() + 1
              }/${dateFinal.getFullYear()}`}
            </div>
            <div className="w-[40%] border rounded-full flex justify-center items-center">
              {time}
            </div>
          </div>
          
          <Link to="/check" className="w-[30%] border rounded-lg bg-orange-600 flex justify-center items-center font-gilroy_regular text-white p-3">
            Schedule a visit
          </Link >
        </div>
      </div>
    </div>
  );
}

export default ReserveDate;
