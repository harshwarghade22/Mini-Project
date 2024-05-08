import React from "react";

import RoomateCard from "./RoomateCard";
import LocationSelect from "../location-select/LocationSelect";
import PriceSelect from "../price-select/PriceSelect";
import FilterBtn from "../filter-btn/FilterBtn";
import GenderSelect from "../gender-select/genderSelect";
import profile1 from "../Images/Rectangle 105.png";
import Contact from "../Icons/Contact";
import Fav from "../Icons/Fav";
import { Link } from "react-router-dom";


function RoomatesListing({mates=[
  {
    profession:"Student",
    name:"Emma",
    age:"22",
    gender:"Female",
    budget:"8000Rs",
    lookingfor:"Female",
    img:"https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    profession:"Student",
    name:"Ava",
    age:"24",
    gender:"Female",
    budget:"4000Rs",
    lookingfor:"Female",
    img:"https://images.unsplash.com/photo-1556347961-f9521a88cb8a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    profession:"Corporate Worker",
    name:"Steve",
    age:"21",
    gender:"Male",
    budget:"2000Rs",
    lookingfor:"Male",
    img:"https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    profession:"Professor",
    name:"John",
    age:"30",
    gender:"Male",
    budget:"6000Rs",
    lookingfor:"Male",
    img:"https://images.unsplash.com/photo-1631052066165-9720608b36da?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    profession:"Student",
    name:"Linaa",
    age:"24",
    gender:"Female",
    budget:"9000Rs",
    lookingfor:"Female",
    img:"https://images.unsplash.com/photo-1617922001439-4a2e6562f328?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    profession:"Influencer",
    name:"Zoya",
    age:"21",
    gender:"Female",
    budget:"3000Rs",
    lookingfor:"Female",
    img:"https://images.unsplash.com/photo-1616091093714-c64882e9ab55?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    profession:"Corporate Employee",
    name:"Alexx",
    age:"22",
    gender:"Male",
    budget:"7000Rs",
    lookingfor:"Male",
    img:"https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    profession:"Student",
    name:"Joeey",
    age:"22",
    gender:"Male",
    budget:"10000Rs",
    lookingfor:"Male",
    img:"https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
]}) {
  return (
    <div>
      <div className="max-w-7xl w-[90%] mx-auto sm:w-full col-span-7 flex flex-col sm:flex-row justify-start flex-wrap gap-4 my-6 sm:px-4 ">
        <LocationSelect />
        <PriceSelect />
        <GenderSelect />
        <FilterBtn />
      </div>
      <div className="w-[85%] lg:max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  md:grid-cols-3 gap-8 mt-10">
        {mates.map((mate) => (
          <RoomateCard key={mate.name} mate={mate} />
        ))}
      </div>
    </div>
  );
}

export default RoomatesListing;
