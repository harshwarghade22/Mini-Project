import React from "react";
import line from "../Images/Line 98dash.png";
import home2 from "../Images/Vector2222.png";
import item1 from "../Images/Rectangle 506v1111.png";
import item2 from "../Images/Group 48096857v2222.png";
import item3 from "../Images/Group 48096853v3333.png";
import arrow1 from "../Images/Arrow 2.png";
import arrow2 from "../Images/Arrow 21234.png";
import { Link } from "react-router-dom";
import FileUpload from "../File-upload/FileUpload";
import { ScrollArea } from "@mantine/core";

const Hero2 = () => {
  return (
    <>
      <div className="max-w-5xl  mx-auto py-4">
        <div className="top  flex justify-start items-center gap-1">
          <Link to="/addLocation">
            <div className="w-12 h-12 rounded-full bg-black text-white flex justify-center items-center">
              1
            </div>
          </Link>
          <img className="" src={line} alt="" />
          <button className="px-5 py-3 bg-[#F45C2C] rounded-full text-white font-gilroy_medium">
            2 Images
          </button>
          <img className="" src={line} alt="" />

          <Link to="/addDetails">
            <div className="w-12 h-12 rounded-full bg-[#D9D9D9] font-gilroy_semi_bold text-xl flex justify-center items-center">
              3
            </div>
          </Link>
          <img className="" src={line} alt="" />
          <Link to="/flatDescription">
            <div className="w-12 h-12 rounded-full bg-[#D9D9D9] font-gilroy_semi_bold text-xl flex justify-center items-center">
              4
            </div>
          </Link>
        </div>

        <div className="flex justify-start items-center lg:mt-12 md:mt-10 mt-8 gap-4 mb-4">
          <img className="w-10 h-10" src={home2} alt="" />
          <h1 className="text-3xl font-gilroy_semi_bold text-[#262626]">
            ADD IMAGES
          </h1>
        </div>

        {/* <ScrollArea h={450} type="never">
        <div className="max-w-6xl grid lg:grid-cols-12 gap-4 border rounded-lg border-[#9B9B9B] px-4 py-4 my-8">
          <div className="lg:col-span-8 md:col-span-6 col-span-12 grid-rows-2 lg:px-1 px-4">
            <img
              className="rounded-lg md:w-full md:h-[268px] sm:w-[628px] sm:h-[268px]  md:object-cover object-scale-down lg:mb-4 md:mb-8 mb-4 "
              src={item1}
              alt=""
            />
            <div className="grid grid-cols-2  gap-4">
              <img
                className="rounded-lg w-full h-full  md:object-cover object-scale-down"
                src={item2}
                alt=""
              />
              <FileUpload />
            </div>
          </div>

          <div className="lg:col-span-4 md:col-span-6 col-span-12  grid  lg:grid-cols-1 grid-cols-2 gap-4 px-4">
            <img
              className=" rounded-lg w-full h-[268px] mb-6  md:object-cover object-scale-down"
              src={item3}
              alt=""
            />
           <FileUpload />
          </div>
        </div>

      </ScrollArea> */}

        <ScrollArea h={530} type="never">
          <div className="max-w-7xl grid w-full h-full  border rounded-lg border-[#9B9B9B] lg:p-2 p-4 my-2">
            <div className="top grid md:grid-cols-12 gap-3">
              <img
                className="col-span-8   rounded-lg lg:w-full  md:h-[268px] sm:w-[658px] sm:h-[268px]  md:object-cover object-scale-down lg:mb-4 md:mb-8 mb-4 "
                src={item1}
                alt=""
              />
              <img
                className="col-span-4 rounded-lg lg:w-full  md:h-[268px] w-[500px] h-[268px]  md:object-cover "
                src={item2}
                alt=""
              />
            </div>

            <div className="flex  flex-wrap gap-5 lg:my-2 my-8">
              <img
                className=" rounded-lg lg:w-[350px] lg:h-[268px] md:w-[300px]  md:h-[268px] sm:w-[280px] sm:h-[268px] mb-6  object-cover object-center "
                src={item3}
                alt=""
              />
              <FileUpload />
              <FileUpload />
            </div>
          </div>
        </ScrollArea>

        <div className="max-w-7xl flex justify-between items-center md:my-6 my-10 mx-8 md:mx-0">
          <Link to="/addLocation">
            <button className="md:px-14 md:py-3 px-5 py-3 border-[#2C2C2C] border rounded-lg flex justify-center items-center gap-2">
              <img src={arrow2} alt="" />
              Back
            </button>
          </Link>

          <Link to="/addDetails">
            {" "}
            <button className="md:px-14 md:py-3 px-5 py-3 bg-[#F45C2C] rounded-lg text-white flex justify-center items-center gap-2">
              Next
              <img src={arrow1} alt="" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero2;
