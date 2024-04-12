import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
import CitySelect from "./components/CitySelect";
import RoomTypeSelect from "./components/room-type-select/RoomTypeSelect";
import OccupancySelect from "./components/occupancy-select/OccupancySelect";
import { FaArrowRightLong } from "react-icons/fa6";


export default function MainSearch(){
    const navigate = useNavigate()
    const [selectedCity, setSelectedCity] = useState("mumbai")
    const [selectedRoomType, setSelectedRoomType] = useState("1rk")
    const [selectedOccupancy, setSelectedOccupancy] = useState(1)
    return (
        <div className="flex flex-col p-2 space-y-4">
            <CitySelect selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
            <RoomTypeSelect selectedRoomType={selectedRoomType} setSelectedRoomType={setSelectedRoomType} />
            <OccupancySelect selectedOccupancy={selectedOccupancy} setSelectedOccupancy={setSelectedOccupancy} />
            <div className="absolute left-0 right-0 bottom-0">
                <div className="min-w-full flex justify-between px-2 py-4 border-t">
                    <Button onClick={() => navigate("/")} c={"var(--textBlack)"} variant="transparent">Cancel</Button>
                    <Button bg={"var(--bgMain)"}>Search <FaArrowRightLong className="ml-2" /></Button>
                </div>
            </div>
        </div>
    )
}