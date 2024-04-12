import { Button } from '@mantine/core';
import SinglePerson from '../../assets/SinglePerson';
import DoublePerson from '../../assets/DoublePerson';
import ThreePerson from '../../assets/ThreePerson';
import FourPerson from '../../assets/FourPerson';
import classes from "./OccupancySelect.module.css";

/* eslint-disable react/prop-types */
export default function OccupancySelect({ selectedOccupancy, setSelectedOccupancy }) {
    return (
        <div className="bg-white px-3 py-2 rounded-3xl shadow-cardshadow border">
            <h3 className="text-sm font-medium capitalize">Select occupancy</h3>
            <div className='flex flex-wrap items-center gap-1 mt-2'>
                <Button classNames={{ root: classes.root }} data-selected={selectedOccupancy === 1} variant="outline" leftSection={<SinglePerson />} onClick={()=> setSelectedOccupancy(1)}>Private Apartment</Button>
                <Button classNames={{ root: classes.root }} data-selected={selectedOccupancy === 2} variant="outline" leftSection={<DoublePerson />} onClick={()=> setSelectedOccupancy(2)}>Double Sharing</Button>
                <Button classNames={{ root: classes.root }} data-selected={selectedOccupancy === 3} variant="outline" leftSection={<ThreePerson />} onClick={()=> setSelectedOccupancy(3)}>Triple Sharing</Button>
                <Button classNames={{ root: classes.root }} data-selected={selectedOccupancy === 4} variant="outline" leftSection={<FourPerson/>} onClick={()=> setSelectedOccupancy(4)}>Quadruple Sharing</Button>
            </div>
        </div>
    )
}