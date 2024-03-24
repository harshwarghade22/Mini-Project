import { FaArrowRightLong, FaRegCopyright } from "react-icons/fa6";
import Layout2 from "./components/Layout2";
import Layout1 from "./components/Layout1";
import Footer from "./components/Footer";
import FindCompatibleRoomates from "./components/FindCompatibleRoomates";
import DesignEveryday from "./components/DesignEveryday";
import PlacesAvailable from "./components/PlacesAvailable";
export default function Home() {
  return (
    <div className="overflow-x-hidden font-gilroy_regular">
      <div className="h-screen w-full p-[1px] overflow-hidden">
        <Layout2 />
        <Layout1 />
      </div>
      <div className="w-full bg-zinc-100 flex flex-col">
        <div className="w-full h-[10vh] bg-zinc-100 flex flex-col justify-evenly">
          <div className="h-[7px] w-full bg-zinc-200"></div>
          <div className="h-[7px] w-full bg-zinc-200"></div>
          <div className="h-[7px] w-full bg-zinc-200"></div>
          <div className="h-[7px] w-full bg-zinc-200"></div>
          <div className="h-[7px] w-full bg-zinc-200"></div>
          <div className="h-[7px] w-full bg-zinc-200"></div>
        </div>
        <PlacesAvailable/>
        <div className="w-full h-[10vh] bg-zinc-100 flex flex-col justify-evenly">
          <div className="h-[7px] w-full bg-zinc-200"></div>
          <div className="h-[7px] w-full bg-zinc-200"></div>
          <div className="h-[7px] w-full bg-zinc-200"></div>
          <div className="h-[7px] w-full bg-zinc-200"></div>
          <div className="h-[7px] w-full bg-zinc-200"></div>
          <div className="h-[7px] w-full bg-zinc-200"></div>
        </div>
      </div>
            <FindCompatibleRoomates/>

      <div className="h-[10vh] md:h-[30vh] w-full bg-zinc-50 flex flex-col justify-evenly">
        <div className="h-[1vh] md:h-[3vh] w-full bg-zinc-300"></div>
        <div className="h-[1vh] md:h-[3vh] w-full bg-zinc-300"></div>
        <div className="h-[1vh] md:h-[3vh] w-full bg-zinc-300"></div>
        <div className="h-[1vh] md:h-[3vh] w-full bg-zinc-300"></div>
        <div className="h-[1vh] md:h-[3vh] w-full bg-zinc-300"></div>
        <div className="h-[1vh] md:h-[3vh] w-full bg-zinc-300"></div>
      </div>
      <DesignEveryday/>
      <Footer />
    </div>
  );
}
