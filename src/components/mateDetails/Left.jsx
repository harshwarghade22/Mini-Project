import React from "react";
import users from "../Images/image.png";
import userLogo from "../Images/Group 48096603userLogo.png";
import { useLocation } from "react-router-dom";

function Left() {
  const location = useLocation();
  const img = location.state ? location.state.img : ""; // Extract image URL

  return (
    <div className="left  lg:col-span-4 md:col-span-12 md:grid-rows-12  md:mb-6">
      <div className="row-span-4">
        <div>
          <img
            className="lg:w-[475px] w-full h-[333px] object-cover rounded-xl"
            src={img} // Use the extracted image URL
            alt=""
          />
        </div>
      </div>

      <div className="row-span-2 grid lg:grid-cols-3  my-8">
        <div className="col-span-1 md:my-0 my-2">
          <h1 className="text-textGray md:text-base text-sm">
            Working profession
          </h1>
          <h1 className="font-gilroy_bold md:text-2xl text-xl">Allen runner</h1>
        </div>
        <div className="col-span-2 flex justify-between items-center px-4">
          <img src={users} alt="" className="w-8 h-auto" />
          <h1 className="font-gilroy_medium text-sm">Roommates</h1>
          <img src={userLogo} alt="" className="w-20 h-auto" />
        </div>
      </div>

      <div className="row-span-2 my-8 ">
        <div className="lg:grid-cols-3  flex justify-between items-center lg:gap-4">
          <div className="col-span-1">
            <h1 className="font-gilroy_medium text-textGray text-lg">
              Rent pp
            </h1>
            <h1 className="font-gilroy_bold text-xl"> 8000/mo</h1>
          </div>

          <div className="col-span-1">
            <h1 className="font-gilroy_medium text-textGray text-lg">
              looking For
            </h1>
            <h1 className="font-gilroy_bold text-xl">Male</h1>
          </div>

          <div className="col-span-1">
            <h1 className="font-gilroy_medium text-textGray text-lg">
              Looking For
            </h1>
            <h1 className="font-gilroy_bold text-xl">FlatMate</h1>
          </div>
        </div>
      </div>

      <div className="row-span-2  my-12">
        <h1 className="text-textGray md:text-lg text-base">Description</h1>
        <p className="md:text-base text-sm font-gilroy_medium text-left">
          If you are interested in sharing this apartment and believe we would
          be a good fit as roommates, please don't hesitate to reach out. I am
          excited to meet someone who shares similar values and is looking for a
          comfortable and enjoyable living arrangement.
        </p>
      </div>

      <div className="row-span-2 flex flex-wrap gap-4 mt-20">
        <div className="bg-customGray text-sm  font-bold px-2 py-1  font-gilroy_medium">
          #NoSmoke
        </div>

        <div className="bg-customGray text-sm  font-bold px-2 py-1 font-gilroy_medium">
          #Content
          <span className="text-sm font-light">WithHomeWorkout</span>
        </div>

        <div className="bg-customGray text-sm  font-bold px-2 py-1 font-gilroy_medium">
          #Alternative
          <span className="text-sm font-light">Housekeeping</span>
        </div>

        <div className="bg-customGray text-sm  font-bold px-2 py-1 font-gilroy_medium">
          #NoNonVeg
        </div>

        <div className="bg-customGray text-sm  font-bold px-2 py-1 font-gilroy_medium">
          #NoNonVeg
        </div>
      </div>
    </div>
  );
}

export default Left;
