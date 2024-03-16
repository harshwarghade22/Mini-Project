import React from 'react'
import Design from './Design'
import { FaArrowRightLong, FaRegCopyright } from "react-icons/fa6";

function Layout2() {
  return (
    <div className=' md:hidden  bg-zinc-500 h-screen w-full grid grid-cols-1 grid-rows-6 gap-[2px] mx-auto p-[1px] Layout-2'>
        {/* Layout-2 */}
        <Design/>
        <div className="bg-zinc-50 row-span-2 pt-4 ">
        <div className="px-2 py-2 bg-zinc-200 drop-shadow-xl flex justify-evenly items-center mx-auto font-semibold max-w-[500px] rounded-full ">
                    <h1>Mumbai</h1>
                    <h1>|</h1>
                    <h1>1bhk</h1>
                    <h1>|</h1>
                    <h1>Mates</h1>
                    <h1>|</h1>
                    <a href="/carts">
                    <button className="bg-orange-600 text-white d rounded-full flex justify-evenly gap-2 p-1 items-center">GO <FaArrowRightLong/></button>
                    </a>
                    
        </div>
        </div>
        <div className="bg-zinc-500 grid grid-cols-3 gap-[2px] row-span-2">
            <div className="bg-zinc-50">
                <img className="object-contain p-2 h-full grayscale" src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJpZW5kc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
            <div className="bg-zinc-50">
                
            </div>
            <div className="bg-zinc-50">
                <img className="object-cover p-2 h-full grayscale" src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltfGVufDB8fDB8fHww" alt="" />
            </div>
        </div>

        

      </div>
  )
}

export default Layout2