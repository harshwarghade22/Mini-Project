import React from "react";
import Rail from "../Icons/Rail";

const NearbyPlaces = () => {
  return (
    <div className="max-w-5xl md:my-4 my-6 bg-[#F3F5F7] p-4 pb-7 ">
      <h1 className="text-xl font-gilroy_semi_bold text-[#434343] sm:my-4 sm:mt-0 mt-4 mb-8 ">
        Nearby Places
      </h1>
      <div className="flex flex-wrap gap-8">
        <div className="flex-col justify-center">
          <div className="w-[65px] h-[65px] bg-white rounded-lg p-2 flex justify-center items-center ">
            <Rail />
          </div>
          <h1>Railway</h1>
        </div>
        <div className="flex-col justify-center">
          <div className="w-[65px] h-[65px] bg-white rounded-lg p-2 flex justify-center items-center ">
            <Rail />
          </div>
          <h1>Railway</h1>
        </div>
        <div className="flex-col justify-center">
          <div className="w-[65px] h-[65px] bg-white rounded-lg p-2 flex justify-center items-center ">
            <Rail />
          </div>
          <h1>Railway</h1>
        </div>
      </div>
    </div>
  );
};

export default NearbyPlaces;
