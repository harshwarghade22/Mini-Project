import React from "react";
import Multiselect from "multiselect-react-dropdown";
import { data } from "../data.js";
import { useState } from "react";
import Card from "./Card.jsx";
import Arrow from "../components/Icons/Arrow.jsx";
import FilterArrow from "../components/Icons/FilterArrow.jsx";
import LocationSelect from "./location-select/LocationSelect.jsx";
import PriceSelect from "./price-select/PriceSelect.jsx";
import FilterBtn from "./filter-btn/FilterBtn.jsx";
import { Link } from "react-router-dom";

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
      <div className="max-w-7xl mx-auto  grid md:grid-cols-12">
        <div className="xl:col-span-1 col-span-1 my-4 lg:px-2 px-4">
          <h1 className='lg:text-xl md:text-2xl text-2xl font-medium font-["Gilroy Medium"]'>
            Mumbai,
          </h1>
        </div>

        <div className="xl:col-span-8  md:col-span-12 px-4 lg:flex lg:justify-between justify-start ">
          <div className="my-4">
            <LocationSelect />
          </div>
          <div className="my-4">
            <PriceSelect />
          </div>
          <div className="my-4">
            {" "}
            <FilterBtn />
          </div>
        </div>

        <div className="xl:col-span-1 md:col-span-4 xl:p-4 py-10 px-4">
          <button className="py-2 px-4  rounded-full bg-[#F45C2C] text-white font-medium  flex justify-between items-center">
            Go <Arrow />
          </button>
        </div>

        <div className="xl:col-span-2 md:col-span-6 lg:px-0 px-4">
          <div className="flex justify-between items-center  md:my-4  shadow-xl rounded-full xl:p-2 sm:px-8 px-6 py-4 ">
            <div className=" ">
              <h1 className="xl:text-base lg:text-xl md:text-2xl sm:text-2xl text-2xl  text-center  font-['Gilroy-Medium'] tracking-tight ">
                Mumbai
              </h1>
            </div>
            <div className="border-r border-l  border-[#6F6F6F] xl:px-1 lg:px-16 md:px-4 sm:px-16 xs:px-2 px-2">
              <h1 className="xl:text-base lg:text-xl md:text-2xl sm:text-xl text-2xl text-center  font-['Gilroy-Medium'] tracking-tight  ">
                1 BHK
              </h1>
            </div>
            <div className="">
              <h1 className="xl:text-base lg:text-xl md:text-2xl sm:text-xl text-2xl  font-['Gilroy-Medium'] tracking-tight  ">
                3 Mates
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto xl:px-4 px-2 ">
        <h1 className="text-[#9B9B9B]  font-semibold text-2xl my-4">
          <span className="">Spaces near </span>
          "Metro Station"
        </h1>
      </div>

      <div className="max-w-7xl mx-auto  xl:grid-cols-3 lg:grid-cols-2 grid gap-8 mt-4">
        {filterData.map((item, index) => (
          <Link to="/details">
            <Card key={item.id} data={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Hero;
