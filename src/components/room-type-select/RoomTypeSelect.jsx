import { Chip } from '@mantine/core';
import classes from "./RoomTypeSelect.module.css";

function NoIcon(){
    return null;
}

/* eslint-disable react/prop-types */
export default function RoomTypeSelect({ selectedRoomType, setSelectedRoomType }){
    return (
        <div className="bg-white flex flex-wrap justify-between px-3 py-2 rounded-3xl shadow-cardshadow border">
            <Chip.Group multiple={false} value={selectedRoomType} onChange={setSelectedRoomType}>
                <Chip variant='light' classNames={{ iconWrapper: classes.iconWrapper, label: classes.label }} icon={NoIcon} value="1rk">1 RK</Chip>
                <Chip variant='light' classNames={{ iconWrapper: classes.iconWrapper, label: classes.label }} icon={NoIcon} value="1bhk">1 BHK</Chip>
                <Chip variant='light' classNames={{ iconWrapper: classes.iconWrapper, label: classes.label }} icon={NoIcon} value="2bhk">2 BHK</Chip>
                <Chip variant='light' classNames={{ iconWrapper: classes.iconWrapper, label: classes.label }} icon={NoIcon} value="3bhk+">3 BHK+</Chip>
            </Chip.Group>
        </div>
    )
}