import React, { useEffect } from "react";
import { amenities, features, mobilities } from "./Icons";
import { Link } from "react-router-dom";
import { useFlatContext } from "../contexts/flatContext";


function Reserve() {

    const { flat } = useFlatContext();

    useEffect(() => {
        console.log(flat);
    }, [flat])

    return (
        <div className="w-[50%]">
            <div className="hidden md:block">
                <div className="w-[90%] md:w-[95%] lg:w-[70%] mx-auto border border-gray-200 shadow-2xl rounded-xl flex flex-col md:flex-row  p-4 lg:flex-col md:mx-auto  gap-x-3">
                    <div>
                        <div className='h-[200px] md:h-[85%] lg:h-[200px] md:w-[300px] lg:w-full rounded-md bg-[url("https://d2blna3sxzw742.cloudfront.net/Property-Photos/46-Thumbnail_1.jpg")] bg-center bg-cover'>
                        </div>
                        <div className="h-[40px] mt-1 lg:mt-3 flex gap-3">
                            <div className="w-3/5 bg-slate-200 rounded-full font-gilroy_regular  text-center py-3 text-sm">
                                <span className="">{`${flat.attributes.name}, ${flat.attributes.city}`}</span>
                            </div>
                            <div className="w-2/5 bg-slate-200 rounded-full text-center py-2 font-gilroy_bold text-lg">
                                ₹{flat.attributes.price}/mo
                            </div>
                        </div>
                    </div>

                    <div className="h-[200px] md:h-full lg:h-[200px]  md:w-[75%] lg:w-full bg-slate-200 rounded-3xl mt-2 pb-4 hidden md:block">
                        <p className="pt-5 px-7 font-gilroy_medium text-lg text-gray-700">
                            Ameneties
                        </p>
                        <div className="px-7 pt-5 flex flex-wrap gap-2">
                            {flat != undefined && flat.attributes.amenities.data.map((item, index) => (
                                <div className="w-[55px] h-[55px] bg-white rounded-xl px-3 py-1" key={index}>
                                    {amenities[item.attributes.amenity]}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <div className="md:w-[200px] lg:w-full w-full md:h-[50%] lg:h-[50px] h-[50px] bg-slate-200 mt-3 rounded-full md:rounded-3xl flex md:flex-col lg:flex-row px-1 pb-10">
                            <p className="font-gilroy_medium text-lg text-gray-700 py-3 pl-4">
                                Features
                            </p>
                            <div className="pl-5 md:pt-0 pt-1 lg:pt-1 flex flex-wrap gap-2">
                                {flat && flat.attributes.features.data.map((item, index) => (
                                    <div className="w-[40px] h-[40px] bg-white rounded-xl px-2 py-1" key={index}>
                                        {features[item.attributes.feature]}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full md:h-[100px] lg:h-[50px] h-[50px] bg-slate-200 mt-3 rounded-full md:rounded-3xl flex md:flex-col lg:flex-row ">
                            <p className="font-gilroy_medium text-lg text-gray-700 py-3 pl-4">
                                Connectivity
                            </p>
                            <div className="pl-5 md:pt-0 pt-1 lg:pt-1 flex flex-wrap gap-2">
                                {flat && flat.attributes.mobilities.data.map((item, index) => (
                                    <div className="w-[40px] h-[40px] bg-white rounded-xl px-2 py-1" key={index}>
                                        {mobilities[item.attributes.mobility]}
                                    </div>
                                ))}
                            </div>
                        </div>



                    </div>







                </div>
            </div>

            <div className="w-[90%] flex md:hidden gap-5 mx-auto">
                <div className='w-[45vw] h-[17vh] sm:h-[23vh] bg-[url("https://d2blna3sxzw742.cloudfront.net/Property-Photos/46-Thumbnail_1.jpg")] bg-center bg-cover rounded-lg'>
                </div>
                <div className="w-[50%] sm:text-xl">
                    <p className="underline">Banglore,HSR Layoit</p>
                    <p className="text-xl font-gilroy_bold pt-1">Rs.4200/-</p>
                    <p className="pt-4">Deposit : 1 Month Rent</p>
                    <Link className="pt-7 text-sm underline text-blue-400" to={"#"} >Click for more details</Link>

                </div>
            </div>

        </div>

    );
}

export default Reserve;
