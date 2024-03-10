import React from "react";
import Card2 from "./Card2";
import { data } from "../data.js";
import { useState } from "react";
import Arrow from "./Icons/Arrow.jsx";
import Multiselect from "multiselect-react-dropdown";
import FilterArrow from "./Icons/FilterArrow.jsx";

function Filters() {
  const [listedProperties, setListedProperties] = useState(data);
  const [filterData, setFilterData] = useState(data);
  const [priceValue, setPriceValue] = useState("");
  const [Location, setLocation] = useState([
    "Mumbai",
    "Andheri",
    "Mira-Road",
    "Borivali",
  ]);

  // useEffect(() => {
  //   const getLocationNames = data.map(item => item.location);
  //   setLocation(getLocationNames);
  // }, [data]);

  const handleLocationChange = (selectedLocations) => {
    const searchProperties = listedProperties.filter((property) =>
      selectedLocations.some((location) =>
        property.location.toLowerCase().includes(location.toLowerCase())
      )
    );
    setFilterData(searchProperties);
  };

  //search filter input handler
  const changeHandler = (e) => {
    setInputText(e.target.value);
  };

  //price filter handler
  const priceChangeHandler = (e) => {
    const selectedRange = e.target.value;
    setPriceValue(selectedRange);

    if (selectedRange) {
      const [min, max] = selectedRange.split("-").map(Number);
      const priceFilter = listedProperties.filter(
        (item) => item.price >= min && item.price <= max
      );
      setFilterData(priceFilter);
    } else {
      setFilterData(listedProperties);
    }
  };

  return (
    <div  className="">
      
      <div className="search w-11/12 mx-auto bg-[#FFFFFF]  flex flex-col xl:flex-row item-start lg:items-center justify-evenly space-y-4 xl:space-y-0 border-t-[1px] pt-2 border-black  ">
        <div className="left h-full flex justify-start lg:justify-center items-start gap-4 md:gap-8">
          <h1 className="text-3xl text-start font-['Gilroy-Medium'] text-zinc-800 font-medium tracking-tight">
            Mumbai,
          </h1>
          <Multiselect
            className="w-[300px] max-w-xs h-full"
            isObject={false}
            options={Location}
            onSelect={handleLocationChange}
            onRemove={handleLocationChange}
            showCheckbox
          />

          <div className="price flex justify-center items-center border-zinc-600 border-opacity-50 border-[1px] rounded-full ">
            <select
              value={priceValue}
              onChange={priceChangeHandler}
              className="py-3  px-4 rounded-full z-10 hover:scale-105 hover:bg-gradient-to-t from-zinc-300 ease-in-out duration-700 "
            >
              <option value="">Select Price</option>
              <option value="2000 - 3000">2000 - 3000</option>
              <option value="3500 - 5000">3500 - 5000</option>
              <option value="5500 - 7000">5500 - 7000</option>
              <option value="7500 - 9000">7500 - 9000</option>
              <option value="9500 - 12000">9500 - 12000</option>
              <option value="12500 - 15000">12500 - 15000</option>
            </select>
          </div>
        </div>

        <div className="right h-full  flex justify-start lg:justify-center items-start gap-4 md:gap-8">
          <div className="min-w-fit w-full flex justify-center items-center gap-6  rounded-full shadow-lg  p-1  ">
            <h1 className="text-xl font-['Gilroy-Medium'] tracking-tight ">
              Mumbai
            </h1>
            <h1 className="text-xl font-['Gilroy-Medium'] tracking-tight border-l-2 pl-4">
              1 BHK
            </h1>
            <h1 className="text-xl font-['Gilroy-Medium'] tracking-tight border-l-2 pl-4">
              3 Mates
            </h1>
            <button className="rounded-full shadow-lg bg-[#F1F1F1] w-10 h-10 flex justify-center items-center p-2">
              <FilterArrow />
            </button>
          </div>
          <button className="bg-[#F45C2C] py-2 px-6 rounded-full flex justify-center items-center gap-2  text-white text-xl font-['Gilroy-Medium']">
            Go <Arrow />
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-[#F45C2C] font-semibold text-2xl  px-20 opacity-85">
          <span className="text-zinc-700 opacity-50">Spaces near </span>
          Metro Station
        </h1>

        <div className=" card w-full  border-1 py-10  px-4">
          <div className="w-full  bg-[#FFFFFF] pt-4 px-10  flex justify-center items-center flex-wrap ">
            {filterData.map((item, index) => (
              <Card2 key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
