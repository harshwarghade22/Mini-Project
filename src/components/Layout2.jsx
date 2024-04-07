import Design from "./Design";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import bed from "../icons/Beds-single-beds-open-graph-image 1.png";
import kari from "../icons/kari-shea-tOVmshavtoo-unsplash 1.png";

function Layout2() {
  return (
    <div className=" md:hidden  bg-zinc-500 h-screen w-full grid grid-cols-1 grid-rows-6 gap-[2px] mx-auto p-[1px] Layout-2">
      {/* Layout-2 */}
      <Design />
      <div className="bg-zinc-50 row-span-2 pt-4 ">
        <div className="text-xs flex  justify-between bg-zinc-200 drop-shadow-xl max-w-[500px] mx-auto rounded-full px-2 py-1">
          <div className="flex flex-col ml-3">
            <h1 className="text-xl font-bold">Search location</h1>
            <div className="flex gap-1 text-zinc-600 font-semibold">
              <h1 className="">Mumbai</h1>
              <h1>|</h1>
              <h1>1bhk</h1>
              <h1>|</h1>
              <h1>Mates</h1>
            </div>
          </div>
          <Link
            to="/search"
            className="bg-orange-600 flex items-center font-bold text-white px-4 py-2 rounded-full"
          >
            GO <FaArrowRightLong className="ml-2" />
          </Link>
        </div>
      </div>
      <div className="bg-zinc-500 grid grid-cols-3 gap-[2px] row-span-2">
        <div className="bg-zinc-50">
          <img className="object-contain h-full grayscale" src={bed} alt="" />
        </div>
        <div className="bg-zinc-50"></div>
        <div className="bg-zinc-50">
          <img className="object-cover  h-full grayscale" src={kari} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Layout2;
