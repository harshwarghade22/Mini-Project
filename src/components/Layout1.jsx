import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaArrowRightLong, FaRegCopyright } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { useState } from "react";
function Layout1() {
    const [where,setwhere]=useState(0)
    const [size,setsize]=useState(0)
    const [Mates,setMates]=useState(0)
    const handleWhere=()=>{
        setwhere(!where)
        setsize(0)
        setMates(0)
    }
    const handleSize=()=>{
        setsize(!size)
        setwhere(0)
        setMates(0)
        
    }
    const handleMates=()=>{
        setMates(!Mates)
        setsize(0)
        setwhere(0)
    }
  return (
    <div className='Layout-1 bg-zinc-500 h-screen w-full grid grid-cols-1 grid-rows-4 gap-[2px] mx-auto p-[1px] '>
    {/* Layout-1 */}
    <div className=" md:grid md:grid-cols-6 gap-[2px] ">
      <div className="bg-zinc-50 md:col-span-2"></div>
      <div className="bg-zinc-50 md:col-span-2 text-center flex flex-col justify-center">
        <h1 className="text-2xl font-semibold">
          The ideal search for flat share ends here
        </h1>
        <h1>discover your unique space with more than 10000 flats on rent</h1>
      </div>
      <div className="bg-zinc-50 col-span-2"></div>
      {/* <div className="bg-zinc-50"></div> */}
    </div>

    <div className="bg-zinc-500 grid md:grid-cols-6 md:row-span-2 gap-[2px] ">
      <div className="bg-zinc-50">
        <img className="object-cover h-full p-2" src="https://s3-alpha-sig.figma.com/img/553f/2e6a/a9776d21879cc686f573ce4296d0b322?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PNtL5R8eDtr2CMRxA346hgdPMpLo-swT2GlHlLl5IAA74duXzfGXWPhjH12WDz4h6AwgBVnKbi805EQR2S4YQ2lTFOBugLGqWVe9ANsFk9AyeHQhtcjemi6tmaFhhWpxedqE3Kk3mSd3j~T~IDR-PuyZQwfiiqiywEbJ7RVCPkT0g3uKIl5mK~CQJvNRVIeoZ5ilQZah8lwdUuaBsHg8NWS1RNbfDmRP8ypyc8T2uLlDGjLz2Y4oDcopVd25EpXcu1UoH4zjlij5p60oSREBCjw1LvLoR3w024bJQ4BozGrhFr0cjIG3GB5yynZk69jHfIqEt-Revi2Q2Kavy2aQzg__" alt="" />
      </div>
      <div className="bg-zinc-50 md:col-span-4 flex justify-start items-center pt-[6vw] px-3 flex-col gap-[2px] p-2">
      <div className="bg-white px-2 max-w-[520px]  flex  justify-evenly gap-[4px] drop-shadow-lg items-center rounded-full top-[45%] pt-2">
  <input onClick={handleWhere} className="bg-zinc-200 max-w-[125px] rounded-full h-[80%] p-2 font-semibold text-base text-center mb-2 flex-grow md:flex-grow-0" placeholder="Mumbai" type="text" />
  <div className="font-bold hidden md:block">|</div>
  <input onClick={handleSize} className="bg-zinc-200 max-w-[125px] rounded-full h-[80%] p-2 font-semibold text-base text-center mb-2 flex-grow md:flex-grow-0" placeholder="1BHK" type="text" />
  <div className="font-bold hidden md:block">|</div>
  <input onClick={handleMates} className="bg-zinc-200 max-w-[125px] rounded-full h-[80%] p-2 font-semibold text-base text-center mb-2 flex-grow md:flex-grow-0" placeholder="3 Mates" type="text" />
  {/* <GiHamburgerMenu/> */}
  <button className="bg-orange-600 flex justify-evenly gap-2 items-center px-2 py-1 font-semibold rounded-full text-white mb-2 flex-grow md:flex-grow-0">GO<FaArrowRightLong/></button>
</div>


        <div className={`bg-zinc-200 p-5 mx-auto flex rounded-3xl h-[70%] w-[65%] ease-in-out duration-5 ${where ? "" : "hidden"}`}>
          <ul className="font-semibold tracking-wide">
            <li className="hover:scale-105 hover:w-full hover:bg-zinc-300 px-5 py-1 rounded-xl">Bangalore</li>
            <li className="hover:scale-105 hover:w-full hover:bg-zinc-300 px-5 py-1 rounded-xl">Gurugram</li>
            <li className="hover:scale-105 hover:w-full hover:bg-zinc-300 px-5 py-1 rounded-xl">Chennai</li>
            <li className="hover:scale-105 hover:w-full hover:bg-zinc-300 px-5 py-1 rounded-xl">Mumbai</li>
          </ul>
        </div>
        <div className={`bg-zinc-200 p-5 mx-auto flex rounded-3xl h-[70%] w-[65%] justify-center ease-in-out duration-5 ${size ? "" : "hidden"}`}>
          <ul className="font-semibold tracking-wide">
            <li className="hover:scale-105 hover:w-full hover:bg-zinc-300 px-5 py-1 rounded-xl">1bhk</li>
            <li className="hover:scale-105 hover:w-full hover:bg-zinc-300 px-5 py-1 rounded-xl">2bhk</li>
            <li className="hover:scale-105 hover:w-full hover:bg-zinc-300 px-5 py-1 rounded-xl">3bhk</li>
            <li className="hover:scale-105 hover:w-full hover:bg-zinc-300 px-5 py-1 rounded-xl">1rk</li>
          </ul>
        </div>
        <div className={`bg-zinc-200 p-5 mx-auto flex rounded-3xl h-[70%] w-[65%] justify-end text-left ease-in-out duration-5 ${Mates ? "" : "hidden"}`}>
          <ul className="font-semibold tracking-wide">
            <li className="hover:scale-105 hover:w-full hover:bg-zinc-300 px-2 py-1 rounded-xl">single</li>
            <li className="hover:scale-105 hover:w-full hover:bg-zinc-300 px-2 py-1 rounded-xl">Double</li>
            <li className="hover:scale-105 hover:w-full hover:bg-zinc-300 px-2 py-1 rounded-xl">Triple</li>
            <li className="hover:scale-105 hover:w-full hover:bg-zinc-300 px-2 py-1 rounded-xl">Quadruple</li>
          </ul>
        </div>
      </div>
      <div className="bg-zinc-50">
        <img className="p-3 grayscale h-full" src="https://s3-alpha-sig.figma.com/img/af61/1bad/3ae5dd2be4fa580e1439179f68be94de?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NdV8Ifly4XFlXF6YqTKcSiC5X5gLti2d7u4o0HKA~5Pe1GX1rOrGyLSdPDcNMg2GVmEqfUBmC-SEXBoWMuujJY~u-b16hAP~SGOEYlvlmjTLWmyi5F~gGAMso7pBLnnXLCYcLFNmAuywJvHsaeocvjZ~I4iLbqikvF0YW5EFtpQlEhz1t8djd9daRNlXn07r4fKCXYYSjgtM6y~25n04~bOSWuysTVA7QB~qtx3qo7ziJ7o4QDBEsA-1HJCzL0~5dHVje7I8rt6G75XEC7ng6MsKIXJqZH96Ga4jySwYhcyTG0pGwDs5jb1ylSXKx1xvumau4vSQ2XknLIGS3FEF7A__" alt="" />
      </div>
    </div>

    <div className="bg-zinc-500 grid grid-cols-6  gap-[2px]">
      <div className="bg-zinc-50 md:col-span-3">
        <img className="p-3 grayscale object-cover w-full h-[150px] " src="https://s3-alpha-sig.figma.com/img/4546/2521/bb10066d5108ed30250d32f9bc9d5657?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gphqz8b4UzM3ylJ4E9f7hFWMKnL5B0PCU-EX089kobSj6RifFEcLTlFyGoLvFhqoctAAHznTLPZcXdp9ysDSeDvJALPd8OnDeO-vSI3jyH51djByzjC80affKWG5YiwAMPuTEQsfSk2OoAE4vhBs8fTslEGcp5n3o8hePnN2sm0yvbf0XWHqUAfAtW6B424mKBQGgSMQG-eOyALlCBh7Xz6FGW7z~4KHUlJG-UOl15ELuiv~78i~9T1KC8WI7z5MADjCrOBXDAr-ZL90oKv~ISahrvzuekcPQu83a5sDL0OixCJRBcWbBrDQ2lq-iCPorUisR4eMMunMXhetdm1SYA__" alt="" />
      </div>
      {/* <div className="bg-zinc-50"></div>
      <div className="bg-zinc-50"></div> */}
      <div className="bg-zinc-50 md:col-span-3">
        <img className="p-3 grayscale object-cover w-full h-[150px]" src="https://s3-alpha-sig.figma.com/img/33fc/4b7c/4a048e0a55eaea6c186287e1b998c549?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HFT-P4wsOeReHgWctd7b~sV4AgdplpS24p1QeaLFtZcPcGBmViBP5Dv17Bl2nRaE4502FWI9FQ6bj0AXOgDyOdEshG~OnDA1HV6c5w93ygzipbcvf6jAuJLQuqBHsZw1w~2RWrTljrb2YC81nwm8yNMGfSxtTr1a0w2HCsJNmEgWptxDCrwBNhOzGxqx4qveYkQ-VLcl4uk5EhA5J4OUTTu8WZgLPpYnx4eJkuoTqeq89ROzlemjMQBF55DFaoTBvWvIfMVApTtEBfRUiAN1KJmMOUqmR9ngU4LeIHhl~GWeu5unxgF7pCETNKrz-DwzzEHB5118jM2p4zj32NXDew__" alt="" />
      </div>
      {/* <div className="bg-zinc-50"></div>
      <div className="bg-zinc-50"></div> */}
    </div>
  </div>
  )
}

export default Layout1