import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Card from "./Card.jsx";
import LocationSelect from "./location-select/LocationSelect.jsx";
import PriceSelect from "./price-select/PriceSelect.jsx";
import FilterBtn from "./filter-btn/FilterBtn.jsx";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { getFlatDataFromFilter, getFlatDataFromQuery } from "../utils/qs.js";
import { queryOptions, useQuery } from "@tanstack/react-query";
import SearchBar from "./search-bar/SearchBar.jsx";

function Hero() {
    const serverURL = import.meta.env.VITE_SERVER_URL
    const readAuthToken = import.meta.env.VITE_STRAPI_READ_AUTH_TOKEN
    const params = useLocation()

    const [filterData, setFilterData] = useState([]);
    const [location, setLocation] = useState([]);
    let { state, flatSize, occupancy } = params.state

    
    async function fetchFlats() {
        let url;
        if (location.length)
            url = getFlatDataFromFilter(state, flatSize, occupancy, location)
        else
            url = getFlatDataFromQuery(state, flatSize, occupancy)

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

    let {data: flatData, isPending: isLoading} = useQuery(groupOptions([state, flatSize, occupancy]))

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchFlats();
                console.log(res)
                setFilterData(res)
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                isLoading = false
            }
        };
        isLoading = true
        fetchData();
    }, [location])

    useEffect(() => {
        setFilterData(flatData)
    },[flatData, isLoading])


    return (
        (isLoading) ?
            (<div className=" flex flex-1 justify-center items-center h-[80vh]">
                <iframe src="https://lottie.host/embed/b20d59fa-5545-4b28-868a-928d04ac8649/NmBCzgR33r.json"></iframe>
            </div >)

            :

            (<div className="py-4 px-4 ">
                <div className="max-w-7xl mx-auto grid md:grid-cols-12">
                    <div className="xl:col-span-1 col-span-1 my-4 lg:px-2 px-4">
                        <h1 className="lg:text-2xl md:text-2xl text-2xl font-medium font-gilroy_medium">
                            Mumbai,
                        </h1>
                    </div>

                    <div className="xl:col-span-11  md:col-span-12 pl-10 lg:flex lg:justify-between justify-start ">
                        {/* <div className="my-4">
                            <LocationSelect setLocation={setLocation} />
                        </div>
                        <div className="my-4">
                            <PriceSelect />
                        </div>
                        <div className="my-4">
                            {" "}
                            <FilterBtn />
                        </div> */}

                        <SearchBar/>
                    </div>
                </div>

                {(filterData!= undefined && filterData.length) ?
                    <>
                        <div className="max-w-7xl mx-auto xl:px-4 px-2 ">
                            <h1 className="text-borderGray font-semibold text-2xl my-4">
                                <span className="">Spaces near </span>
                                "Metro Station"
                            </h1>
                        </div>

                        <div className="max-w-7xl mx-auto  xl:grid-cols-3 lg:grid-cols-2 grid gap-8 mt-4">
                            {filterData.map((item, index) => (
                                <div key={index}>
                                    <Card key={index} data={item} />
                                </div>
                            ))}
                        </div>
                    </>
                    :
                    <div className=" flex flex-1 justify-center items-center h-[80vh]">
                        <h1 className="lg:text-3xl md:text-3xl text-2xl font-medium font-gilroy_medium tracking-wider">
                            No Data...
                        </h1>
                    </div>
                }
            </div>)
    );
}

export default Hero;
