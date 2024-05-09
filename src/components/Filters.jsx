import React, { useContext, useEffect } from "react";
import { useState } from "react";
// import Card from "./Card.jsx";
import SearchBar from "./search-bar/SearchBar.jsx";

import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Link } from "react-router-dom";



function Hero({ data = [
    

    {
        id: 2,
        name: "Mumbai plaza",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, voluptatem?",
        isVeg: true,
        gender: "Female",
        isAc: false,

        img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.5,
        price: 3500,
        location: "Andheri",
        size: "3 BHK",
        mates: 5,
        attributes: {
            slides: [

                {
                    url: "https://images.unsplash.com/photo-1620332372374-f108c53d2e03?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    url: "https://images.unsplash.com/photo-1615471618985-97108e2ba478?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },

                {
                    url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    url: "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
            ],
        }
    },

    {
        id: 3,
        name: "Bangalore Rentals",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, voluptatem?",
        isVeg: true,
        gender: "Male",
        isAc: true,

        img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 3.5,
        price: 4000,
        location: "Borivali",
        size: "2 BHK",
        mates: 4,
        attributes: {
            slides: [
                {
                    url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    url: "https://images.unsplash.com/photo-1615471618985-97108e2ba478?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    url: "https://images.unsplash.com/photo-1620332372374-f108c53d2e03?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },

                {
                    url: "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
            ],
        }
    },

    {
        id: 4,
        name: "Andheri Lanes",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, voluptatem?",
        isVeg: false,
        gender: "Male",
        isAc: true,

        img: "https://images.unsplash.com/photo-1432303492674-642e9d0944b2?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 5,
        price: 10500,
        location: "Mira-Road",
        size: "1 BHK",
        mates: 2,
        attributes: {
            slides: [
                {
                    url: "https://images.unsplash.com/photo-1615471618985-97108e2ba478?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    url: "https://images.unsplash.com/photo-1620332372374-f108c53d2e03?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    url: "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },

            ],
        }
    },

    {
        id: 5,
        name: "Band-stand dome",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, voluptatem?",
        isVeg: true,
        gender: "Female",
        isAc: true,
        img: "https://plus.unsplash.com/premium_photo-1661779601614-9206e0451077?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.9,
        price: 2500,
        location: "Mumbai",
        size: "2 BHK",
        mates: 5,
        attributes: {
            slides: [
                {
                    url: "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    url: "https://images.unsplash.com/photo-1615471618985-97108e2ba478?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    url: "https://images.unsplash.com/photo-1620332372374-f108c53d2e03?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },

            ],
        }
    },

    {
        id: 6,
        name: "Metro-Cities-stay",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, voluptatem?",
        isVeg: true,
        gender: "Male",
        isAc: false,
        img: "https://images.unsplash.com/flagged/photo-1573168710465-7f7da9a23a15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.4,
        price: 14000,
        location: "Andheri",
        size: "2BHK",
        mates: 4,
        attributes: {
            slides: [
                {
                    url: "https://images.unsplash.com/photo-1620332372374-f108c53d2e03?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    url: "https://images.unsplash.com/photo-1615471618985-97108e2ba478?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },

                {
                    url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    url: "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
            ],
        }
    },
    {
        id: 7,
        name: "Mumbai plaza",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, voluptatem?",
        isVeg: true,
        gender: "Female",
        isAc: false,

        img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.5,
        price: 3500,
        location: "Andheri",
        size: "3 BHK",
        mates: 5,
        attributes: {
            slides: [

                {
                    url: "https://images.unsplash.com/photo-1620332372374-f108c53d2e03?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    url: "https://images.unsplash.com/photo-1615471618985-97108e2ba478?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },

                {
                    url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    url: "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
            ],
        }
    },
]}) {

    return (

        <div className="py-4 px-4 ">
            <div className="max-w-7xl mx-auto grid md:grid-cols-12">
                <div className="xl:col-span-1 col-span-1 my-4 lg:px-2 px-4">
                    <h1 className="lg:text-2xl md:text-2xl text-2xl font-medium font-gilroy_medium">
                        Mumbai,
                    </h1>
                </div>

                <div className="xl:col-span-11  md:col-span-12 pl-10 lg:flex lg:justify-between justify-start ">
                    <SearchBar />
                </div>
            </div>

            <div className="max-w-7xl mx-auto  xl:grid-cols-3 lg:grid-cols-2 grid gap-8 mt-4">
                {data.map(item => (
                    <Card key={item.id} shadow="xl" padding="lg" radius="md" withBorder>
                        <Card.Section component="a" href={`/details?img=${encodeURIComponent(item.img)}`}>
                            <Image src={item.img} height={120} alt={item.name} />
                        </Card.Section>

                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>{item.name}</Text>
                            <Badge color="pink">{item.location}</Badge>
                        </Group>

                        {/* You can include additional attributes here if needed */}
                        <Text size="sm" c="dimmed">{item.desc}</Text>
                        <Link to={`/details?img=${encodeURIComponent(item.img)}`}>
                            <Button color="#F45C2C" fullWidth mt="md" radius="md">Book Now !</Button>
                        </Link>

                    </Card>
                ))}
            </div>

        </div>
    );
}

export default Hero;
