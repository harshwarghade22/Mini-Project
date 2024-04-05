import React from "react";
import {
  fridge,
  layer1,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
} from "../mateDetails/Icons";
import Wardrobe from "../Icons/Wardrobe";
import Bed from "../Icons/Bed";
import Tv from "../Icons/Tv";
import Desk from "../Icons/Desk";
import Curtains from "../Icons/Curtains";
import Fridge from "../Icons/Fridge";
import OfficeChair from "../Icons/OfficeChair";
import Tablelamp from "../Icons/Tablelamp";
import Dinning from "../Icons/Dinning";
import WM from "../Icons/WM";

const SelectAmmenitiesIcons = () => {
  return (
    <div className="icons max-w-5xl md:my-4 bg-[#F3F5F7] p-4 my-4 rounded-md">
      <h1 className="text-xl font-gilroy_semi_bold text-[#434343] sm:my-4 sm:mt-0 mt-4 mb-8 ">
        Select Ammenities
      </h1>
      {/* <div className="flex flex-wrap items-center gap-8 ">
        <div className="">
          <img src={fridge} alt="" className="mx-auto" />
          <h3 className="text-sm text-center">Refrigerator</h3>
        </div>
        <div className="">
          <img src={fridge} alt="" className="mx-auto" />
          <h3 className="text-sm text-center">Refrigerator</h3>
        </div>
        <div className="">
          <img src={fridge} alt="" className="mx-auto" />
          <h3 className="text-sm text-center">Refrigerator</h3>
        </div>
        <div className="">
          <img src={fridge} alt="" className="mx-auto" />
          <h3 className="text-sm text-center">Refrigerator</h3>
        </div>

        <div className="">
          <img src={fridge} alt="" className="mx-auto" />
          <h3 className="text-sm text-center">Refrigerator</h3>
        </div>

        <div className="">
          <img src={fridge} alt="" className="mx-auto" />
          <h3 className="text-sm text-center">Refrigerator</h3>
        </div>

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
      </div> */}
      <div className="flex flex-wrap gap-8">
        <div className="flex-col justify-center">
          <div className="w-[65px] h-[65px] bg-white rounded-lg p-2 flex justify-center items-center ">
            <Wardrobe />
          </div>
          <h1>Wardrobe</h1>
        </div>

        <div className="flex-col justify-center">
          <div className="w-[65px] h-[65px] bg-white rounded-lg p-2 flex justify-center items-center">
            <Bed />
          </div>
          <h1>Single Bed</h1>
        </div>

        <div className="flex-col justify-center text-center">
          <div className="w-[65px] h-[65px] bg-white rounded-lg p-2 flex justify-center items-center ">
            <Tv />
          </div>
          <h1>TV</h1>
        </div>

        <div className="flex-col justify-center">
          <div className="w-[65px] h-[65px] bg-white rounded-lg p-2 flex justify-center items-center ">
            <Desk />
          </div>
          <h1>Desk table</h1>
        </div>

        <div className="flex-col justify-center">
          <div className="w-[65px] h-[65px] bg-white rounded-lg p-2 flex justify-center items-center ">
            <Curtains />
          </div>
          <h1>Curtains</h1>
        </div>

        <div className="flex-col justify-center">
          <div className="w-[65px] h-[65px] bg-white rounded-lg p-2 flex justify-center items-center ">
            <Fridge />
          </div>
          <h1>Refrigerator</h1>
        </div>

        <div className="flex-col justify-center">
          <div className="w-[65px] h-[65px] bg-white rounded-lg p-2 flex justify-center items-center ">
            <OfficeChair />
          </div>
          <h1>Office Chair</h1>
        </div>

        <div className="flex-col justify-center">
          <div className="w-[65px] h-[65px] bg-white rounded-lg p-2 flex justify-center items-center ">
            <Tablelamp />
          </div>
          <h1>Table lamp</h1>
        </div>

        <div className="flex-col justify-center">
          <div className="w-[65px] h-[65px] bg-white rounded-lg p-2 flex justify-center items-center ">
            <WM />
          </div>
          <h1>Washing..</h1>
        </div>

        <div className="flex-col justify-center">
          <div className="w-[65px] h-[65px] bg-white rounded-lg p-2 flex justify-center items-center ">
            <Dinning />
          </div>
          <h1>Dining Table</h1>
        </div>

      </div>
    </div>
  );
};

export default SelectAmmenitiesIcons;
