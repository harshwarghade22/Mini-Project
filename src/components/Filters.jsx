import React from "react";
import Multiselect from "multiselect-react-dropdown";
import { data } from "../data.js";
import { useState } from "react";
import Card from "./Card.jsx";
import Arrow from "../components/Icons/Arrow.jsx";
import FilterArrow from "../components/Icons/FilterArrow.jsx";
import LocationSelect from "./location-select/LocationSelect.jsx";
import PriceSelect from "./price-select/PriceSelect.jsx";

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
    <div className="py-4 px-4 ">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12  ">
        <div className="col-span-1 pt-2">
          <h1 className='sm:textlg lg:text-xl md:text-2xl font-medium font-["Gilroy Medium"] mt-6'>
            Mumbai,
          </h1>
        </div>
        <div className="col-span-7  sm:flex justify-start items-center gap-4 my-6 sm:px-4">
          <LocationSelect />
          <PriceSelect />
        </div>

        <div className="col-span-4 flex justify-between items-center lg:ml-4 ">
          <div className="flex justify-center items-center gap-8 lg:gap-4 shadow-2xl  ">
            <h1 className="md:text-lg sm:text-base text-sm font-['Gilroy-Medium'] tracking-tight border-r border-gray-500/50 px-2 text-center ">
              Mumbai
            </h1>
            <h1 className="md:text-lg sm:text-base text-sm font-['Gilroy-Medium'] tracking-tight border-r border-gray-500/50 px-2 text-center ">
              1 BHK
            </h1>
            <h1 className="md:text-lg sm:text-base text-sm font-['Gilroy-Medium'] tracking-tight border-r border-gray-500/50 px-2 text-center ">
              3 Mates
            </h1>
            <button className="rounded-full md:text-lg sm:text-base text-sm shadow-lg bg-[#F1F1F1] w-10 h-10 flex justify-center items-center ">
              <FilterArrow />
            </button>
          </div>
          <button className="py-2 px-4 rounded-full bg-[#F45C2C] text-white font-medium mx-auto flex justify-between items-center gap-4">
            Go <Arrow />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto ">
        <h1 className="text-orange-400 font-semibold text-2xl my-4">
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
