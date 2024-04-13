import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Card from "./Card.jsx";
import LocationSelect from "./location-select/LocationSelect.jsx";
import PriceSelect from "./price-select/PriceSelect.jsx";
import FilterBtn from "./filter-btn/FilterBtn.jsx";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Hero() {
    const serverURL = import.meta.env.VITE_SERVER_URL
    const readAuthToken = import.meta.env.VITE_STRAPI_READ_AUTH_TOKEN
    const params = useLocation()

    const [listedProperties, setListedProperties] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [priceValue, setPriceValue] = useState("");
    const [location, setLocation] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchFlats() {
            try {
                let { state, flatSize, occupancy } = params.state
                let url = `flats?${location.map(city => `filters[$or][0][$and][0][city][$eq]=${city}&`)}${state && `filters[$or][0][$and][1][state][$eq]=${state}&`}${flatSize && `filters[$or][0][$and][1][flatSize][$eq]=${flatSize}&`}${occupancy && `filters[$or][0][$and][1][occupancy][$eq]=${occupancy}&`}populate=*`
                console.log(url)
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: `${serverURL}/api/${url}`,
                    headers: {
                        'Authorization': readAuthToken
                    }
                };

                const res = await axios.request(config)

                // res.data.data.forEach(item => {
                //     item.attributes.slides = item.attributes.slides.data.map(slide => ({ url: serverURL + slide.attributes.url }));
                // });

                // console.log(res.data.data)
                setFilterData(res.data.data)
                setIsLoading(false);

            } catch (err) {
                console.log(err)
                setIsLoading(false);
            }
        }

        fetchFlats();
    }, [params, location])


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
        isLoading ?
            (<div className=" flex flex-1 justify-center items-center h-[80vh]">
                <iframe src="https://lottie.host/embed/b20d59fa-5545-4b28-868a-928d04ac8649/NmBCzgR33r.json"></iframe>
            </div >)

            :

            (<div className="py-4 px-4 ">
                <div className="max-w-7xl mx-auto grid md:grid-cols-12">
                    <div className="xl:col-span-1 col-span-1 my-4 lg:px-2 px-4">
                        <h1 className="lg:text-xl md:text-2xl text-2xl font-medium font-gilroy_medium">
                            Mumbai,
                        </h1>
                    </div>

                    <div className="xl:col-span-11  md:col-span-12 px-4 lg:flex lg:justify-between justify-start ">
                        <div className="my-4">
                            <LocationSelect setLocation={setLocation} />
                        </div>
                        <div className="my-4">
                            <PriceSelect />
                        </div>
                        <div className="my-4">
                            {" "}
                            <FilterBtn />
                        </div>
                    </div>
                </div>

                {filterData.length ?
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
