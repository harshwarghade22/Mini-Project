import React from "react";
import line from "../Images/Line 98dash.png";
import home2 from "../Images/Vector2222.png";
import arrow1 from "../Images/Arrow 2.png";
import arrow2 from "../Images/Arrow 21234.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const FlatDescription = () => {
  const [selectedPreferences, setSelectedPreferences] = useState([]);

  // Function to toggle the selected state of a preference
  const togglePreference = (preference) => {
    if (selectedPreferences.includes(preference)) {
      setSelectedPreferences(
        selectedPreferences.filter((item) => item !== preference)
      );
    } else {
      setSelectedPreferences([...selectedPreferences, preference]);
    }
  };

  const [selectedOccupancies, setSelectedOccupancies] = useState([]);

  // Function to toggle the selected state of an occupancy option
  const toggleOccupancy = (occupancy) => {
    setSelectedOccupancies(occupancy === selectedOccupancies ? null : occupancy);
  };

  const [selectedRentOptions, setSelectedRentOptions] = useState(null);

  // Function to toggle the selected state of a flat rent option
  const toggleRentOption = (option) => {
    setSelectedRentOptions(option === selectedRentOptions ? null : option);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="top  flex justify-start items-center gap-1">
        <Link to="/addLocation">
          <div className="w-12 h-12 rounded-full bg-black text-white flex justify-center items-center">
            1
          </div>
        </Link>

        <img className="" src={line} alt="" />
        <Link to="/addImage">
          <div className="w-12 h-12 rounded-full bg-black text-white flex justify-center items-center">
            2
          </div>
        </Link>
        <img className="" src={line} alt="" />
        <Link to="/addDetails">
          <div className="w-12 h-12 rounded-full bg-black text-white flex justify-center items-center">
            3
          </div>
        </Link>
        <img className="" src={line} alt="" />

        <button className="px-8 py-3 bg-[#F45C2C] rounded-full text-white font-gilroy_medium">
          4 Flat Description
        </button>
      </div>

      <div className="flex justify-start items-center lg:mt-14 md:mt-10 mt-8 gap-4 ">
        <img className="w-10 h-10" src={home2} alt="" />
        <h1 className="text-3xl font-gilroy_semi_bold text-[#262626]">
          FLAT DESCRIPTION
        </h1>
      </div>

      <div className="max-w-6xl h-[480px] flex flex-col gap-4 mt-4">
        <div className="w-full flex gap-12 pt-10">
          <div className="w-2/5">
            <h1 className="text-2xl font-gilroy_semi_bold">Flat rent</h1>
            <input
              className="w-full pl-4 h-16 mt-2 text-xl font-gilroy_medium bg-slate-100 rounded-md border-none"
              type="text"
              placeholder="Rs"
            />
          </div>
          <div className="w-2/5">
            <h1 className="text-2xl font-gilroy_semi_bold">Flat</h1>
            <div className="flex justify-between gap-5">
              <button
                className={`w-1/4 p-4 mt-2 border rounded-lg font-gilroy_medium ${
                  selectedRentOptions === "1BHK"
                    ? "border-2 border-black"
                    : "border-[#C4C4C4]"
                }`}
                onClick={() => toggleRentOption("1BHK")}
              >
                1BHK
              </button>
              <button
                className={`w-1/4 p-4 mt-2 border rounded-lg font-gilroy_medium ${
                  selectedRentOptions === "2BHK"
                    ? "border-2 border-black"
                    : "border-[#C4C4C4]"
                }`}
                onClick={() => toggleRentOption("2BHK")}
              >
                2BHK
              </button>
              <button
                className={`w-1/4 p-4 mt-2 border rounded-lg font-gilroy_medium ${
                  selectedRentOptions === "3BHK"
                    ? "border-2 border-black"
                    : "border-[#C4C4C4]"
                }`}
                onClick={() => toggleRentOption("3BHK")}
              >
                3BHK
              </button>
              <button
                className={`w-1/4 p-4 mt-2 border rounded-lg font-gilroy_medium ${
                  selectedRentOptions === "4BHK"
                    ? "border-2 border-black"
                    : "border-[#C4C4C4]"
                }`}
                onClick={() => toggleRentOption("4BHK")}
              >
                4BHK
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-12 pt-10">
          <div className="w-2/5">
            <h1 className="text-2xl font-gilroy_semi_bold">Size</h1>
            <input
              className="w-full h-16 mt-2 pl-4 text-xl font-gilroy_medium bg-slate-100 rounded-md"
              type="text"
              placeholder="(sqft)"
            />
          </div>
          <div className="w-2/5">
            <h1 className="text-2xl font-gilroy_semi_bold">Occupancy</h1>
            <div className="flex justify-between gap-5">
              <button
                className={`w-1/4 p-4 mt-2 border rounded-lg font-gilroy_medium ${
                  selectedOccupancies==="Private"
                    ? "border-2 border-black"
                    : "border-[#C4C4C4]"
                }`}
                onClick={() => toggleOccupancy("Private")}
              >
                Private
              </button>
              <button
                className={`w-1/4 p-4 mt-2 border rounded-lg font-gilroy_medium ${
                  selectedOccupancies==="Double"
                    ? "border-2 border-black"
                    : "border-[#C4C4C4]"
                }`}
                onClick={() => toggleOccupancy("Double")}
              >
                Double
              </button>
              <button
                className={`w-1/4 p-4 mt-2 border rounded-lg font-gilroy_medium ${
                  selectedOccupancies==="Triple"
                    ? "border-2 border-black"
                    : "border-[#C4C4C4]"
                }`}
                onClick={() => toggleOccupancy("Triple")}
              >
                Triple
              </button>
              <button
                className={`w-1/4 p-4 mt-2 border rounded-lg font-gilroy_medium ${
                  selectedOccupancies==="Quadrapule"
                    ? "border-2 border-black"
                    : "border-[#C4C4C4]"
                }`}
                onClick={() => toggleOccupancy("Quadrapule")}
              >
                Quadrapule
              </button>
            </div>
          </div>
        </div>
        <div className="preferences mt-8">
          <h1 className="text-2xl font-gilroy_semi_bold">Preferences</h1>
          <div className="w-11/12 flex gap-12 mt-4">
            <button
              className={`px-10 py-4 border rounded-full text-xl font-gilroy_medium ${
                selectedPreferences.includes("No Drinking")
                  ? "border-black"
                  : "border-[#C4C4C4]"
              }`}
              onClick={() => togglePreference("No Drinking")}
            >
              No Drinking
            </button>
            <button
              className={`px-10 py-4 border rounded-full text-xl font-gilroy_medium ${
                selectedPreferences.includes("Age 25+")
                  ? "border-black"
                  : "border-[#C4C4C4]"
              }`}
              onClick={() => togglePreference("Age 25+")}
            >
              Age 25+
            </button>
            <button
              className={`px-10 py-4 border rounded-full text-xl font-gilroy_medium ${
                selectedPreferences.includes("No Non-veg")
                  ? "border-black"
                  : "border-[#C4C4C4]"
              }`}
              onClick={() => togglePreference("No Non-veg")}
            >
              No Non-veg
            </button>
            <button
              className={`px-10 py-4 border rounded-full text-xl font-gilroy_medium ${
                selectedPreferences.includes("College")
                  ? "border-black"
                  : "border-[#C4C4C4]"
              }`}
              onClick={() => togglePreference("College")}
            >
              College
            </button>
            <button
              className={`px-10 py-4 border rounded-full text-xl font-gilroy_medium ${
                selectedPreferences.includes("Family")
                  ? "border-black"
                  : "border-[#C4C4C4]"
              }`}
              onClick={() => togglePreference("Family")}
            >
              Family
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl flex justify-between sm:mt-8">
        <Link to="/addDetails">
          <button className="px-12 py-3 border-[#2C2C2C] border rounded-lg flex justify-center items-center gap-2">
            <img src={arrow2} alt="" />
            Back
          </button>
        </Link>
        <button className="px-12 py-3 bg-[#F45C2C] rounded-lg text-white flex justify-center items-center gap-2">
          Complete Listing
          <img src={arrow1} alt="" />
        </button>
       
      </div>
    </div>
  );
};

export default FlatDescription;
