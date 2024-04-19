import React, { useEffect, useState } from "react";
import { MdGroups } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { amenities, features, mobilities } from "./Icons";

import { Link, useParams } from "react-router-dom";
import MyComponent from './Gmap/GMap2'
import { queryOptions, useQuery } from "@tanstack/react-query";
import { getFlatDataFromId } from "../utils/qs";
import axios from "axios";

function Details() {
    const serverURL = import.meta.env.VITE_SERVER_URL
    const readAuthToken = import.meta.env.VITE_STRAPI_READ_AUTH_TOKEN
    const { id } = useParams()

    const [slides, setSlides] = useState([]);
    const [currentIndx, setCurrentIndx] = useState(0);
    const [flat, setFlat] = useState(undefined);

    async function fetchFlats() {
        let url = getFlatDataFromId(id);

        console.log(`${serverURL}/api/flats?${url}`)

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${serverURL}/api/flats?${url}`,
            headers: {
                'Authorization': readAuthToken
            }
        };

        const res = await axios.request(config)
        return res.data.data;
    }

    function groupOptions(key) {
        return (
            queryOptions({
                queryKey: key,
                queryFn: fetchFlats,
                staleTime: 5 * 1000,
            })
        )
    }

    const { data, isPending, isFetching } = useQuery(groupOptions(['flat', id]))


    useEffect(() => {
        if (data != undefined && !isFetching && !isPending) {
            console.log('data', data)
            setFlat(data[0])
            setSlides(data[0].attributes.slides.data.map(image => `${image.attributes.url}`))
        }
    }, [data, isPending, isFetching])

    const nextSlide = () => {
        const isLastSlide = currentIndx === slides.length - 1;
        if (isLastSlide) {
            setCurrentIndx(0);
        } else {
            setCurrentIndx(currentIndx + 1);
        }
    };
    const prevSlide = () => {
        const isFirstSlide = currentIndx === 0;
        const indx = isFirstSlide ? slides.length - 1 : currentIndx - 1;
        setCurrentIndx(indx);
    };

    return (
        (flat != undefined) ?
            (<div className="sm:px-14 ">
                <h1 className="mt-2 mb-3 font-gilroy_medium">Home/Flats/Description</h1>

                <div className="h-[30vh] md:h-[70vh] mx-auto border rounded-lg md:flex gap-4 p-4">
                    <div
                        style={{ backgroundImage: `url(${slides.length && slides[currentIndx]})` }}
                        className="md:w-3/5 h-full  border border-gray-400 rounded-lg  bg-center bg-cover flex justify-end items-end"
                    >
                        <div className="text-6xl flex text-white">
                            <IoIosArrowDropleftCircle
                                onClick={prevSlide}
                                className="hover:scale-125"
                            />{" "}
                            <IoIosArrowDroprightCircle
                                onClick={nextSlide}
                                className="hover:scale-125"
                            />
                        </div>
                    </div>

                    {/* <div className='w-2/5 border border-gray-400 rounded-lg bg-[url("https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg")] bg-center bg-cover grayscale'></div> */}

                    <div className='hidden md:block w-2/5 border border-gray-400 rounded-lg overflow-hidden'>
                        {/* <Map/> */}
                        {/* <SimpleMap/> */}
                        <MyComponent />
                    </div>
                </div>
                <div className="md:h-[100px] h-[200px] max-w-full mx-auto mt-6 border-b-2 border-t-2 flex p-5">
                    <div className="md:w-full w-[50vw] border-r-2 md:flex md:justify-between">
                        <div className="lg:w-[196px] h-[60px] bg-slate-200 rounded-full py-2 px-6 mb-4">
                            <p className="text-xs font-gilroy_light">Starts from</p>
                            <p className="text-xl font-gilroy_bold">Rs.{flat.attributes.price}/mo</p>
                        </div>
                        <div className="h-[60px] bg-slate-200 rounded-full mr-4 flex md:justify-between justify-center items-center px-4 gap-2 ml-3">
                            <div className="text-3xl">
                                <MdGroups />
                            </div>
                            <div className="text-gray-800">Roomates</div>
                            <div className="gap-1 hidden md:flex">
                                <div className='md:w-[50px] md:h-[50px] border border-black rounded-full bg-[url("https://images.unsplash.com/photo-1554126807-6b10f6f6692a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg")] bg-center bg-cover'></div>
                                <div className='w-[50px] h-[50px] border border-black rounded-full bg-[url("https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg")] bg-center bg-cover'></div>
                                <div className="w-[50px] h-[50px] border border-black rounded-full bg-gray-800">
                                    <p className="flex justify-center py-3 text-xl font-gilroy_light text-white">
                                        VAC
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/5 lg:border-r-2 md:flex justify-center gap-5 lg:px-10 font-gilroy_medium md:p-0 p-5">
                        <Link
                            to="/reservedate"
                            className="md:w-1/2 w-full md:h-full border h-1/2 rounded-md border-black flex justify-center items-center hover:bg-black hover:text-white mx-auto mb-2"
                        >
                            Scedule a visit
                        </Link>

                        <Link
                            to="/reserve1"
                            className="md:w-1/2 w-full md:h-full h-1/2 bg-orange-500 border rounded-md flex justify-center items-center gap-1 text-white hover:bg-black mx-auto"
                        >
                            Reserve{" "}
                            <span className="text-white text-xl">
                                <FaArrowRight />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="h-[500px] mb-10 flex flex-col gap-5 p-5">
                    <div className="grid grid-cols-1 md:grid-cols-2  md:h-[calc(100vh - 100px)] bg-slate-100 rounded-3xl">
                        <div className="flex flex-col">
                            <div className="py-5 px-10 font-gilroy_medium text-2xl">
                                Amenities
                            </div>
                            <div className="md:ml-10 ml-4 md:mb-7 flex flex-wrap gap-4">
                                {flat.attributes.amenities != undefined && flat.attributes.amenities.data.map((item, index) => (
                                    <div className="w-[70px] h-[80px] flex flex-col justify-between items-center" key={index}>
                                        <div className="h-5/6 bg-white w-full flex justify-center items-center rounded-2xl">
                                            {amenities[item.attributes.amenity]}
                                        </div>
                                        <div className="text-xs">{item.attributes.amenity}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className=" mt-10 mb-10 md:border-l-2  border-gray-300 flex flex-col items-center justify-center gap-4">
                            <div className="font-gilroy_semi_bold text-2xl  text-center mt-5">
                                Furnish your space by your hand
                            </div>
                            <Link to="/">
                                <div className="w-[20vw] h-[55px] border-black border rounded-lg font-gilroy_medium text-center pt-3 hover:bg-black hover:text-white lg:text-lg text-sm">
                                    Customize your avatar
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 w-full h-2/5 rounded-3xl">
                        <div className="w-full md:w-1/2 h-full bg-slate-100 rounded-3xl">
                            <div className="pt-5 pb-3 px-10 font-gilroy_medium text-2xl">
                                Features
                            </div>
                            <div className="flex md:flex-row justify-start gap-7 px-10 py-5">
                                {flat.attributes.features != undefined && flat.attributes.features.data.map((item, index) => (
                                    <div className="w-[70px] h-[80px] flex flex-col justify-between items-center" key={index}>
                                        <div className="h-5/6 bg-white w-full flex justify-center items-center rounded-2xl">
                                            {features[item.attributes.feature]}
                                        </div>
                                        <div className="text-xs">{item.attributes.feature}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 h-full bg-slate-100 rounded-3xl mt-5 md:mt-0">
                            <div className="pt-5 pb-3 px-10 font-gilroy_medium text-2xl">
                                Mobility
                            </div>
                            <div className="flex md:flex-row justify-start gap-7 px-10">
                                {flat.attributes.mobilities != undefined && flat.attributes.mobilities.data.map((item, index) => (
                                    <div className="w-[70px] h-[80px] flex flex-col justify-between items-center" key={index}>
                                        <div className="h-5/6 bg-white w-full flex justify-center items-center rounded-2xl">
                                            {mobilities[item.attributes.mobility]}
                                        </div>
                                        <div className="text-xs">{item.attributes.mobility}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
            :
            (<></>)
    );
}

export default Details;
