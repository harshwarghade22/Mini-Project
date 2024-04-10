/* eslint-disable react/prop-types */
import Mumbai from "../assets/mumbai.jpg";
import Hyderabad from "../assets/hyderabad.jpg";
import Delhi from "../assets/delhi.jpg";
import Goa from "../assets/goa.jpg";
import clsx from "clsx";

export default function CitySelect({ selectedCity, setSelectedCity}) {
    return (
        <div className="bg-white grid grid-cols-4 place-content-center gap-6 px-3 py-2 rounded-3xl shadow-cardshadow border">
            <button onClick={() => setSelectedCity("mumbai")} className={clsx("col-span-1 px-1 py-2 min-w-16 flex flex-col justify-center mx-auto items-center bg-secondarygray rounded-md", selectedCity === "mumbai" && "border-2 border-borderGray")}>
                <img src={Mumbai} alt="mumbai" />
                <span className="text-xs font-normal text-foregroundgray">Mumbai</span>
            </button>
            <button onClick={() => setSelectedCity("hyderabad")} className={clsx("col-span-1 px-1 py-2 min-w-16 flex flex-col justify-center mx-auto items-center bg-secondarygray rounded-md", selectedCity === "hyderabad" && "border-2 border-borderGray")}>
                <img src={Hyderabad} alt="hyderabad" />
                <span className="text-xs font-normal text-foregroundgray">Hyderabad</span>
            </button>
            <button onClick={() => setSelectedCity("delhi")} className={clsx("col-span-1 px-1 py-2 min-w-16 flex flex-col justify-center mx-auto items-center bg-secondarygray rounded-md", selectedCity === "delhi" && "border-2 border-borderGray")}>
                <img src={Delhi} alt="delhi" />
                <span className="text-xs font-normal text-foregroundgray">Delhi</span>
            </button>
            <button onClick={() => setSelectedCity("goa")} className={clsx("col-span-1 px-1 py-2 min-w-16 flex flex-col justify-center mx-auto items-center bg-secondarygray rounded-md", selectedCity === "goa" && "border-2 border-borderGray")}>
                <img src={Goa} alt="goa" />
                <span className="text-xs font-normal text-foregroundgray">Goa</span>
            </button>
        </div>
    )
}