import React from "react";
import Multiselect from "multiselect-react-dropdown";
import { data } from "../data.js";
import { useState } from "react";
import Card from "./Card.jsx";

function Hero() {
  const [listedProperties, setListedProperties] = useState(data);
  const [filterData, setFilterData] = useState(data);
  const [priceValue, setPriceValue] = useState("");
  const [Location, setLocation] = useState([
    "Mumbai",
    "Andheri",
    "Mira-Road",
    "Borivali",
  ]);

  const handleLocationChange = (selectedLocations) => {
    const searchProperties = listedProperties.filter((property) =>
      selectedLocations.some((location) =>
        property.location.toLowerCase().includes(location.toLowerCase())
      )
    );
    setFilterData(searchProperties);
  };

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
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-6 ">
        <div className="col-span-1 pt-2">
          <h1 className='text-3xl font-medium font-["Gilroy Medium"] mt-6'>
            Mumbai,
          </h1>
        </div>
        <div className="col-span-3  sm:flex justify-start items-center  gap-4 my-6">
          <Multiselect
            className="rounded-full  border-none border-opacity-0 col-span-1"
            isObject={false}
            options={Location}
            toggelOptionList={true}
            onSelect={handleLocationChange}
            onRemove={handleLocationChange}
            showCheckbox
          />
          <select
            value={priceValue}
            onChange={priceChangeHandler}
            className="py-3 w-40 px-4 border-[1px] border-black z-10 ease-in-out duration-700 sm:mt-0  rounded-full shadow-xl my-4 sm:my-0"
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

        <div className="col-span-2 flex justify-between items-center lg:ml-4 ">
          <div className="flex justify-center items-center gap-8 lg:gap-4 shadow-2xl ">
            <h1 className="md:text-lg sm:text-base text-sm font-['Gilroy-Medium'] tracking-tight  ">
              Mumbai
            </h1>
            <h1 className="md:text-lg sm:text-base text-sm font-['Gilroy-Medium'] tracking-tight  ">
              1 BHK
            </h1>
            <h1 className="md:text-lg sm:text-base text-sm font-['Gilroy-Medium'] tracking-tight  ">
              3 Mates
            </h1>
            <button className="rounded-full md:text-lg sm:text-base text-sm shadow-lg bg-[#F1F1F1] w-10 h-10 flex justify-center items-center ">
              check
            </button>
          </div>
          <button className="py-2 px-4 rounded-full bg-[#00df9a] text-black font-bold mx-auto">
            Go
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto ">
        <h1 className="text-[#F45C2C] font-semibold text-2xl  opacity-85 my-6">
          <span className="text-zinc-700 opacity-50">Spaces near </span>
          "Metro Station"
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mt-10">
        {filterData.map((item, index) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Hero;
