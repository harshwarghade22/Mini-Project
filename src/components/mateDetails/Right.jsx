import React from "react";
import home1 from "../Images/Rectangle 93.png";
import location from "../Images/Vector.png";
import rect106 from "../Images/Rectangle 106.png";
import rect2896 from "../Images/Rectangle 2896.png";
import rect2895 from "../Images/Rectangle 2895.png";
import rect2894 from "../Images/Rectangle 2894.png";
import fridge from "../Images/Isolation_Mode.png";
import layer1 from "../Images/Layer_1.png";
import icon3 from "../Images/Group 48096360.png";
import icon4 from "../Images/Layer_1 (1).png";
import icon5 from "../Images/Layer_1 (2).png";
import icon6 from "../Images/Layer_1 (3).png";
import icon7 from "../Images/Group 48096361 (1).png";
import icon8 from "../Images/Layer_1 (5).png";
import icon9 from "../Images/548-Bed, Hotel, Single, Sleep, Frame.png";
import icon10 from "../Images/Group 48096362img10.png";
import { GoHeart } from "react-icons/go";
import { IoMdCall } from "react-icons/io";

function Right() {
  return (
    <div className="right lg:col-span-8 md:col-span-12  grid md:grid-rows-10 sm:my-0 my-8 px-4">
      <div className="grid grid-cols-3  md:row-span-4 gap-4  border border-[#BBBBBB] p-4">
        {/* //left col */}
        <div className="col-span-1 ">
          <img src={home1} alt="" />

          <div className="row-span-1 flex justify-center items-center gap-4 md:my-4 my-2 ">
            <img src={location} alt="" />
            <h1 className="font-['Gilroy-Regular'] md:text-sm text-xs border-b border-black">
              Bangalore,HSR Layout B40 001 10
            </h1>
          </div>
        </div>

        {/* //center col */}
        <div className="col-span-1 md:grid-rows-2 ">
          <img src={rect106} alt="" />
          <img src={rect2896} alt="" className="mt-8" />
        </div>

        {/* //right col */}

        <div className="col-span-1 md:grid-rows-2 gap-4">
          <img src={rect2895} alt="" className="row-span-1 object-cover" />
          <img src={rect2894} alt="" className="mt-8" />
        </div>
      </div>

      <div className="md:row-span-6 my-8 px-4">
        <div className="grid sm:grid-cols-4 my-8 grid-cols-2 sm:flex justify-start items-center md:gap-12 sm:gap-8 gap-4 ">
          <div className="rounded-full px-4 py-2   bg-[#F3F5F7] font-['Gilroy-SemiBold'] md:tect-lg text-base ">
            Ammenities
          </div>
          <div className="rounded-full px-4 py-2 bg-[#F3F5F7]  font-['Gilroy-SemiBold'] md:text-lg border-[#9B9B9B] border">
            Features
          </div>
          <div className="rounded-full px-4 py-2 bg-[#F3F5F7]  font-['Gilroy-SemiBold'] md:text-lg border-[#9B9B9B] border">
            Mobility
          </div>
          <div className="rounded-full px-4 py-2  bg-[#F3F5F7] font-['Gilroy-SemiBold'] md:text-lg border-[#9B9B9B] border">
            Connectivity
          </div>
        </div>

        <div className="grid md:grid-cols-12  gap-4 my-16 border-b border-[#9B9B9B] pb-12 bg-[#F3F5F7]">
          <div className="icons lg:col-span-8 md:col-span-12 lg:border-r  border-[#B3B3B3] md:my-4  p-2">
            <div className="flex flex-wrap  items-center gap-8">
              <div className="">
                <img src={fridge} alt="" className="mx-auto" />
                <h3 className="text-sm text-center">Refrigerator</h3>
              </div>

              <div className="">
                <img src={layer1} alt="" className="mx-auto" />
                <h3 className="text-sm text-center">Wardrobe</h3>
              </div>
              <div className="">
                <img src={icon3} alt="" className="mx-auto" />
                <h3 className="text-sm text-center">TV</h3>
              </div>
              <div className="">
                <img src={icon4} alt="" className="mx-auto" />
                <h3 className="text-sm text-center">Desk Table</h3>
              </div>
              <div className="">
                <img src={icon5} alt="" className="mx-auto" />
                <h3 className="text-sm text-center">Curtains</h3>
              </div>
              <div className="">
                <img src={icon6} alt="" className="mx-auto" />
                <h3 className="text-sm text-center">Washing..</h3>
              </div>
              <div className="">
                <img src={icon7} alt="" className="mx-auto" />
                <h3 className="text-sm text-center">Office chair</h3>
              </div>
              <div className="">
                <img src={icon8} alt="" className="mx-auto" />
                <h3 className="text-sm text-center">Dining Table</h3>
              </div>
              <div className="">
                <img src={icon9} alt="" className="mx-auto" />
                <h3 className="text-sm text-center">Single Bed</h3>
              </div>
              <div className="">
                <img src={icon10} alt="" className="mx-auto" />
                <h3 className="text-sm text-center">Table Lamp</h3>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 md:col-span-12 m-auto flex flex-col justify-center items-center ">
            <h1 className="font-['Gilroy-SemiBold'] md:text-base font-bold text-center mx-auto ">
              Furnish your space by your Hand
            </h1>
            <button className="px-4 py-2 font-['Gilroy-Medium'] border border-[#262626] my-4">
              Customize with avatar
            </button>
          </div>
        </div>
        <div className="flex lg:justify-end  justify-center items-center gap-4 ">
          <button className="p-2 border border-[#434343]">
            {<GoHeart className="text-2xl" />}
          </button>
          <button className="p-2 border border-[#434343]">
            {<IoMdCall className="text-2xl" />}
          </button>
          <button className="rounded-xl px-12 py-2 bg-black text-white">
            connect
          </button>
        </div>
      </div>
    </div>
  );
}

export default Right;
