import React from "react";
import Fav from "./Icons/Fav";
import Contact from "./Icons/Contact";
import { FaContao } from "react-icons/fa";
import RoomateCard from "./RoomateCard";
import LocationSelect from "./location-select/LocationSelect";
import PriceSelect from "./price-select/PriceSelect";
import FilterBtn from "./filter-btn/FilterBtn";
import GenderSelect from "./gender-select/genderSelect";
import { Link } from "react-router-dom";

function RoomatesListing() {
  return (
    <div>
      <div className=" max-w-7xl w-[90%] mx-auto sm:w-full col-span-7 flex flex-col sm:flex-row justify-start flex-wrap gap-4 my-6 sm:px-4 ">
        <LocationSelect />
        <PriceSelect />
        <GenderSelect />
        <FilterBtn />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  md:grid-cols-3 gap-8 mt-10">
        <Link to="/mateDetails">
          <RoomateCard />
        </Link>
        <Link to="/mateDetails">
          <RoomateCard />
        </Link>
        <Link to="/mateDetails">
          <RoomateCard />
        </Link>
        <Link to="/mateDetails">
          <RoomateCard />
        </Link>
        <Link to="/mateDetails">
          <RoomateCard />
        </Link>
        <Link to="/mateDetails">
          <RoomateCard />
        </Link>
        <Link to="/mateDetails">
          <RoomateCard />
        </Link>
        <Link to="/mateDetails">
          <RoomateCard />
        </Link>
        <Link to="/mateDetails">
          <RoomateCard />
        </Link>
      </div>
    </div>
  );
}

export default RoomatesListing;
