import React, { useEffect } from "react";
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
    const [Location, setLocation] = useState([
        "Mumbai",
        "Andheri",
        "Mira-Road",
        "Borivali",
    ]);

    useEffect(() => {
        async function fetchFlats() {
            try {
                let { city, flatSize, occupancy } = params.state
                let url = `flats?${city && `filters[$and][0][city][$eq]=${city}&`}${flatSize && `filters[$and][0][flatSize][$eq]=${flatSize}&`}${occupancy && `filters[$and][0][occupancy][$eq]=${occupancy}&`}populate=*`

                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: `${serverURL}/api/${url}`,
                    headers: {
                        'Authorization': readAuthToken
                    }
                };

                const res = await axios.request(config)

                res.data.data.forEach(item => {
                    item.attributes.slides = item.attributes.slides.data.map(slide => ({ url: serverURL + slide.attributes.url }));
                });


                console.log(res.data.data)
                setFilterData(res.data.data)

            } catch (err) {
                console.log(err)
            }
        }

        fetchFlats();
    }, [params])


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
            <div className="max-w-7xl mx-auto grid md:grid-cols-12">
                <div className="xl:col-span-1 col-span-1 my-4 lg:px-2 px-4">
                    <h1 className="lg:text-xl md:text-2xl text-2xl font-medium font-gilroy_medium">
                        Mumbai,
                    </h1>
                </div>

                <div className="xl:col-span-11  md:col-span-12 px-4 lg:flex lg:justify-between justify-start ">
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
            </div>

            <div className="max-w-7xl mx-auto xl:px-4 px-2 ">
                <h1 className="text-borderGray font-semibold text-2xl my-4">
                    <span className="">Spaces near </span>
                    "Metro Station"
                </h1>
            </div>

            <div className="max-w-7xl mx-auto  xl:grid-cols-3 lg:grid-cols-2 grid gap-8 mt-4">
                {filterData.map((item, index) => (
                    <div >
                        <Card key={index} data={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hero;
