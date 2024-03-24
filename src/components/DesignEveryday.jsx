import React from 'react'
import { FaArrowRightLong, FaRegCopyright } from "react-icons/fa6";
function DesignEveryday() {
  return (
    <div>
<div className='message h-screen w-screen bg-zinc-200 mt-[0vh] grid grid-cols-6 grid-rows-5 gap-0'>
    {/* Row 1, Column 1 */}
    {/* style={{ gridColumn: '1 / span 2' }} */}
    <div className="border border-zinc-200 md:border-zinc-400  bg-zinc-200  col-span-2 ">
    <div className='leading-none mb-3 text-center pb-3 pt-2 md:flex md:flex-col md:pt-4'>
            <h1 className='md:text-2xl text-lg text-zinc-800 font-semibold '>Design your every</h1>
            <h1 className='md:text-2xl text-lg text-zinc-800 font-semibold '>day food plate</h1>
        </div>
    </div>
    
    <div className="border border-zinc-400 bg-zinc-200"style={{ gridColumn: '3 / span 2' }}></div>
    {/* Row 1, Column 4 */}
    {/* Row 1, Columns 5 and 6 (merged) */}
    <div className="border border-zinc-400 bg-zinc-200" style={{ gridColumn: '5 / span 2' }}>
        <img className='h-full w-full object-cover grayscale' src="https://s3-alpha-sig.figma.com/img/cc7a/390f/0a713b7a49582f0d37b2beaed3c0cf2f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lgqXzIecVkhlsnu~Hga-Nx4reRoFvIiNWXRjjrapEzK1Jv8ljD6Q2nhsK5xFp5P7-8e9TBkATUOZdbN-JDABX2972W5szIjR~vCVUEpg48l4x91wP6PC4JYvl9eE2w1F93p09IfuVJjRA5pd7BE7bY5xCgl-iXrU~3ExoWDyYB7uYhlMD9bv70waaeAN4Lbvx1gX0lCxbfj8UleAsE-ZJIBOwudYrewtcAs1t0VCsU-mVnvt~W2e9daEvEIerLhe3PSJdm29S6p6UB45oYUmkb1uSuMyHkH2EzioXSowmRWLM8SBjTN421WY1ljihLw7fdgCFvMPHmxJJCMP2Cpxeg__" alt="" />
    </div>

    {/* Row 2, Column 1 */}
    <div className="border border-zinc-400 bg-zinc-600 row-span-2 hidden  "></div>
    {/* Row 2, Column 2 */}
    <div className="border border-zinc-400 bg-zinc-200 p-2 col-span-2 md:p-5"style={{ gridRow: '2 / span 2' }}>
    <img className='h-full w-full object-cover grayscale' src="https://s3-alpha-sig.figma.com/img/77ff/30be/f7df0e98972d7fe3943ea08619056531?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kxk90ggKrCYpuZcwYdbDmRjpXj4mdVCtcogXI9nLwBLSAHA8c05u4BNcE3n0EFKSVjBrYBgWkeEPg639j2PKUnL6YXQgDtzhPKztUhAUUK6~uhEm8gT56oj6yYdXGOio32XELP63WKrqvKsAIJWgv~ek5c~TTITgOUc9hYEdkXxgFE5NbnQuZxXVKoBSDJ7VmAJMNsia-ReNiTk9k~9w0GPu9SgY-f053VUCowT7LNWfrK5oK4CwHvabxIHcJqGAYB0rNmb6hVmxYrsc713~m4ihm4aVk5X0RoT2dDp~XnNPUunBuYXqA9kY-zCbkFeaNHJASMLQJiDaHvgOYW~OJw__" alt="" />

    </div>
    {/* Row 2, Column 3 */}
    <div className="border border-zinc-400 bg-zinc-200 md:pt-3 pl-3 col-span-4 md:col-span-2 leading-none" >
        <h1 className='text-xl md:text-2xl text-zinc-800 font-semibold'>Unleash.</h1>
        <h1 className='text-xl md:text-2xl text-zinc-800 font-semibold'>The way of life.</h1>
        <h5 className='text-zinc-400 text-sm'>/step a bit more of a beat</h5>
    </div>
    {/* Row 2, Column 4 */}
    {/* Row 2, Column 5 */}
    <div className="border border-zinc-400 bg-zinc-200 p-3 hidden md:block col-span-2" >
        <h1 className='text-xl font-semibold'>/ease commuting</h1>
    </div>
    {/* Row 2, Column 6 */}

    {/* Row 3, Column 1 */}
    <div className="border border-zinc-400 bg-zinc-800 hidden row-span-2"></div>
    {/* Row 3, Column 2 */}
    {/* <div className="border border-zinc-400 bg-zinc-200">
        <img className='h-full w-full object-cover grayscale' src="https://s3-alpha-sig.figma.com/img/77ff/30be/f7df0e98972d7fe3943ea08619056531?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kxk90ggKrCYpuZcwYdbDmRjpXj4mdVCtcogXI9nLwBLSAHA8c05u4BNcE3n0EFKSVjBrYBgWkeEPg639j2PKUnL6YXQgDtzhPKztUhAUUK6~uhEm8gT56oj6yYdXGOio32XELP63WKrqvKsAIJWgv~ek5c~TTITgOUc9hYEdkXxgFE5NbnQuZxXVKoBSDJ7VmAJMNsia-ReNiTk9k~9w0GPu9SgY-f053VUCowT7LNWfrK5oK4CwHvabxIHcJqGAYB0rNmb6hVmxYrsc713~m4ihm4aVk5X0RoT2dDp~XnNPUunBuYXqA9kY-zCbkFeaNHJASMLQJiDaHvgOYW~OJw__" alt="" />
    </div> */}
    {/* Row 3, Columns 3 and 4 (merged) */}
    <div className="border border-zinc-400 bg-zinc-200 p-2" style={{ gridColumn: '3 / span 2' }}>
        <p className='text-zinc-800 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, doloremque tenetur! Quia fugit quam cumque.</p>
    </div>
    {/* Row 3, Column 5 */}
    <div className="border border-zinc-400 bg-zinc-200"style={{ gridColumn: '5 / span 2' }}></div>
    {/* Row 3, Column 6 */}

    {/* Row 4, Column 1 */}
    <div className="border border-zinc-400 bg-zinc-200 hidden md:col-span-2 md:row-span-2 md:block col-span-4 ">
        {/* <img className='h-full w-full object-cover grayscale' src="https://i.pinimg.com/236x/19/67/dd/1967ddeb64c46314f41e085beafd12a8.jpg" alt="" /> */}

    </div>
    {/* Row 4, Column 2 */}
    {/* <div className="border border-zinc-400 bg-zinc-200"></div> */}
    {/* Row 4, Column 3 */}
    <div className="border border-zinc-400 bg-zinc-200 p-2" style={{ gridColumn: '3 / span 2',gridRow:'4/ span 2' }}>
        <div className=' px-2 py-3 min-w-[40%]  md:max-w-[70%] text-sm  font-semibold flex justify-center items-center rounded-full bg-orange-600 text-white'>Explore more<FaArrowRightLong className='ml-2 text-sm' /></div>
    </div>
    {/* Row 4, Column 4 */}
    {/* Row 4, Column 5 */}
    <div className="border border-zinc-400 bg-zinc-200"style={{ gridColumn: '5 / span 2',gridRow:'4/ span 2' }}>
    <img className='h-full w-full object-cover grayscale' src="https://s3-alpha-sig.figma.com/img/ced3/9348/ae8f7a20ce4618ab1387cef5f727441f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qQUx-8h8KNIFafN8o-3LWcRrIBls1CfjXDgilYQsxcMpeW2iuini5GpIscHRQRQUrGOD4l3V8FdTmgWjPljg6gAF8ZYwJqJuyTRD7IYOgyvhTM2zUjNSY8nuWeJiLSg5uP5rgotpMvLHj2P2~7z~KzoQcy3VY6crDYLGaSroBxnhin-R-Jq2-zeGEbGHh3ML-mv0SWf54~RxM0EFNAMe9vfUrqYviKb1zsy4PuM3oig3QEpwIKEDvoHTWGTLY584fVXqhdT1BOBO5yUKo0sPy76h9WblfJFPQ7MLJnFV7Cx97DuhhFvkAXnu68pDYHkvPQ5cSBQQwPxX4~3AKnh26g_" alt="" />

    </div>
    {/* Row 4, Column 6 */}

    {/* Row 5, Column 1 */}
    {/* Row 5, Column 2 */}
    {/* Row 5, Column 3 */}
    {/* Row 5, Column 4 */}
    {/* Row 5, Column 5 */}
    {/* <div className="border border-zinc-400 bg-zinc-200" style={{ gridColumn: '5 / span 2' }}>
        <img className='h-full w-full object-cover grayscale' src="https://s3-alpha-sig.figma.com/img/ced3/9348/ae8f7a20ce4618ab1387cef5f727441f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qQUx-8h8KNIFafN8o-3LWcRrIBls1CfjXDgilYQsxcMpeW2iuini5GpIscHRQRQUrGOD4l3V8FdTmgWjPljg6gAF8ZYwJqJuyTRD7IYOgyvhTM2zUjNSY8nuWeJiLSg5uP5rgotpMvLHj2P2~7z~KzoQcy3VY6crDYLGaSroBxnhin-R-Jq2-zeGEbGHh3ML-mv0SWf54~RxM0EFNAMe9vfUrqYviKb1zsy4PuM3oig3QEpwIKEDvoHTWGTLY584fVXqhdT1BOBO5yUKo0sPy76h9WblfJFPQ7MLJnFV7Cx97DuhhFvkAXnu68pDYHkvPQ5cSBQQwPxX4~3AKnh26g_" alt="" />

    </div> */}
    {/* Row 5, Column 6 */}
</div>
    </div>
  )
}

export default DesignEveryday