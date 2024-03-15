import { CgProfile } from "react-icons/cg";
import { FaArrowRightLong, FaRegCopyright } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";

export default function Home() {
    return (
        <div className='overflow-x-hidden font-gilroy_regular'>
            <div className='bg-zinc-50 h-screen w-full'>
                {/* <div className='bg-zinc-50 w-full h-[10vh] flex justify-between items-center border-b-2 border-zinc-300'>
                    <div className='logo text-2xl font-semibold text-black ml-2'>Urban<span className='text-orange-400'>Rent...</span></div>
                    <div className='links flex gap-10'>
                        <a className='text-sm font-semibold text-zinc-600' href="#">Home</a>
                        <a className='text-sm font-semibold text-zinc-600' href="#">Mates</a>
                        <a className='text-sm font-semibold text-zinc-600' href="#">Rent More</a>
                        <a className='text-sm font-semibold text-zinc-600' href="#">Service</a>
                    </div>
                    <div className='profile h-[5vh] w-[7vw] bg-zinc-50  rounded-xl mr-5 border-b-2 border-zinc-500 flex justify-evenly items-center'>
                        <div className='h-[20px] w-[20px] rounded-full'><CgProfile className='h-full w-full' /></div>
                        <h1>Profile</h1>
                    </div>
                </div> */}
                <div className='central bg-zinc-50 h-[90vh] w-full grid grid-cols-10 grid-rows-3'>
                    {/* Manually creating grid boxes */}
                    <div className='bg-white border-[1px] border-zinc-300  flex justify-center items-center'>1</div>
                    <div className='bg-white border-[1px] border-zinc-300  flex justify-center items-center'>2</div>
                    <div className='bg-white border-[1px] border-zinc-300  flex flex-col items-center  text-2xl pt-10' style={{ gridColumn: '3 / span 6' }}><h1>The Ideal search for flat share ends here!</h1>
                        <h4 className='text-sm text-zinc-500'>discover your unique space with more than 100000 flats on rent</h4>
                    </div>
                    <div className='bg-white border-[1px] border-zinc-300  flex justify-center items-center'>9</div>
                    <div className='bg-white border-[1px] border-zinc-300  flex justify-center items-center'>10</div>
                    <div className='bg-white border-[1px] border-zinc-300  flex justify-center items-center'>11</div>
                    <div className='bg-white border-[1px] border-zinc-300  flex justify-center items-center '>
                        <img className='h-full w-full object-cover position-center ' src="https://s3-alpha-sig.figma.com/img/aaf1/0737/7548d474584c66ddac61baecec0dddd1?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PkodptmllSzenZ2k8iThDpD2tacZVbVvKFTm1xLUhcs9eS59gr9-Lo8IijWTFhiRSoamZh3g1UYC4P8gfvac8IAA3QfzxXYFUpo5MaKQJzgywccCgaCoGtV1nmYvA4I-Y5ifz94x~RGpmBlhQoA~TYQ~nQec34YZ1Iifm4P4MRI-1WUyZJS7Vg62wQsTHu03DsHoQ2r31ggZNCIaXgW8RBIrVgvwEsHiq3x8PEP7jV1TT-AvKlB1VsCPqyO8RhuuU9a20kDYP54ItyAMjT2Abd2FErIE9KsBYpcPUohUaCDaCzoTqc5D57OFaZK1YavGxdRBGNee8nmgMCEOX1yVjg__" alt="" />
                    </div>
                    <div className='bg-white border-[1px] border-zinc-300  flex justify-center ' style={{ gridColumn: '3 / span 6' }}>
                        <div className='h-[8vh] w-[30vw] bg-zinc-50 rounded-full gap-5 drop-shadow-xl mt-[1vh] flex p-2 items-center justify-evenly'>
                            <h1 className='text-[1em] font-semibold  '>Mumbai</h1>
                            <div>|</div>
                            <h1 className='text-[1em] font-semibold '>1BHK</h1>
                            <div>|</div>
                            <h1 className='text-[1em] font-semibold '>3 Mates</h1>
                            <div className='h-[28px] w-[28px] bg-zinc-300 rounded-full flex items-center justify-center'><GiHamburgerMenu className='text-sm' /></div>
                        </div>
                        <a href="/carts">
                            <div className='h-[7vh] w-[7vw] bg-orange-600 text-white rounded-full mt-[1.5vh] ml-3 flex items-center text-lg justify-center '>
                                Go<FaArrowRightLong className='ml-2 text-sm' />
                            </div>
                        </a>

                    </div>
                    <div className='bg-white border-[1px] border-zinc-300  flex justify-center items-center'>19</div>
                    <div className='bg-white border-[1px] border-zinc-300  flex justify-center items-center'>20</div>
                    <div className='bg-white border-[1px] border-zinc-300  flex justify-center items-center'>21</div>
                    <div className='bg-white border-[1px] border-zinc-300  flex justify-center items-center'>22</div>
                    <div className='bg-white border-[1px] border-zinc-300  flex justify-end items-center p-4 ' style={{ gridColumn: '3 / span 3' }}>
                        <img className='h-[15vh] w-[60vw] object-cover position-top grayscale ' src="https://s3-alpha-sig.figma.com/img/4546/2521/bb10066d5108ed30250d32f9bc9d5657?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6I1II7JfLQsrTah4tGPlp2rtkHwT04uDFbgbp~ysG0QxZ~pMDP6l8HBrQtc869NCxytuFLnymG58MVYioBbhvr6YM5BSf2qZ95NLVPLQZNJ1N1XQ3sneR15iFm4feVGs0qLmfkEyy083PpJNeMeJ3iQUYiCtpq0ve3cbKiZYRgXJISSz45hOMMFOv-BqvRtEIcaHv~CPiOkSyrIWSsewicxk2xLL0vkki2dPB7AQcg2iDt9xpyG1Zf-KOa9f1Uy8hsuHlIeeyLnqedp5e7KdM53GXqmPMYhqhSkQmcGs807LZgurOsstORTHu76NsM6kaJu8W1y2UWeaaqhpMEn6Q__" alt="" />
                    </div>
                    <div className='bg-white border-[1px] border-zinc-300  flex justify-center items-center'>26</div>
                    <div className='bg-white border-[1px] border-zinc-300  flex justify-center items-center'>27</div>
                    <div className='bg-white border-[1px] border-zinc-300  flex justify-center items-center'>
                        <img className='w-full h-full object-cover position-center grayscale rounded-tr-full pb-4' src="https://s3-alpha-sig.figma.com/img/5470/783e/8b0f2707055ab143a8c2086d55b7b856?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gPVr39EUuc8k2XsxoVSAt5Xr6ZFTWEAmmRcv29UAavESxi5HUJ-Vtd6w09SboMWisbPCgiRImu0tVBFscbjZbDkft1F8UOwYVVZcDA33R02bN~zPTyQZg7T1F9o6C8T6bU0h0UFpTySR6fx3pX2vvztMqQ7CknUGscVV~XgL5eNK0rlqkMJAqh8QeCOS7Uajy9hPwOZlU0JIJChM-bAGNXne10LNP8LvyXx4cPpHVX4U6TIDQufcbj9NQhvcgDK0sx8I0SPVR4ku1RkQHxKV54-jDPBwef6aPjNHJlGt99KQZb6kDB3m-SUvmstWV7yH8mT~S0H3Rm2Rtq8au08Nkw__" alt="" />
                    </div>
                    <div className='bg-white border-[1px] border-zinc-300  flex justify-center items-center'>29</div>
                    <div className='bg-white border-[1px] border-zinc-300  flex justify-center items-center'>30</div>
                </div>
            </div>
            <div className='w-full h-[80vh] bg-zinc-100 flex flex-col'>
                <div className='w-full h-[10vh] bg-zinc-100 flex flex-col justify-evenly'>
                    <div className='h-[1vh] w-full bg-zinc-200'></div>
                    <div className='h-[1vh] w-full bg-zinc-200'></div>
                    <div className='h-[1vh] w-full bg-zinc-200'></div>
                    <div className='h-[1vh] w-full bg-zinc-200'></div>
                    <div className='h-[1vh] w-full bg-zinc-200'></div>
                    <div className='h-[1vh] w-full bg-zinc-200'></div>


                </div>
                <div className='w-full h-[60vh] bg-zinc-200 pl-[10vw] pr-[10vw] flex gap-10 items-center flex-wrap '>
                    <div className='h-[16vh] w-[7vw] bg-zinc-50 flex flex-col justify-center items-center rounded-md'>
                        <img className='h-1/2 w-1/2  object-cover position-center' src="https://cdn-icons-png.flaticon.com/128/1283/1283983.png" alt="" />
                        <div className='w-[80%] h-[1px] bg-black mt-3'></div>
                        <h5 className='tracking-tight font-semibold text-sm'>Mumbai</h5>
                    </div>
                    <div className='h-[16vh] w-[7vw] bg-zinc-50 flex flex-col justify-center items-center rounded-md'>
                        <img className='h-1/2 w-1/2  object-cover position-center' src="https://cdn-icons-png.flaticon.com/128/2448/2448610.png" alt="" />
                        <div className='w-[80%] h-[1px] bg-black mt-3'></div>
                        <h5 className='tracking-tight font-semibold text-sm'>Mumbai</h5>
                    </div>
                    <div className='h-[16vh] w-[7vw] bg-zinc-50 flex flex-col justify-center items-center rounded-md'>
                        <img className='h-1/2 w-1/2  object-cover position-center' src="https://cdn-icons-png.flaticon.com/128/10706/10706892.png" alt="" />
                        <div className='w-[80%] h-[1px] bg-black mt-3'></div>
                        <h5 className='tracking-tight font-semibold text-sm'>Mumbai</h5>
                    </div>
                    <div className='h-[16vh] w-[7vw] bg-zinc-50 flex flex-col justify-center items-center rounded-md'>
                        <img className='h-1/2 w-1/2  object-cover position-center' src="https://cdn-icons-png.flaticon.com/128/11240/11240902.png" alt="" />
                        <div className='w-[80%] h-[1px] bg-black mt-3'></div>
                        <h5 className='tracking-tight font-semibold text-sm'>Mumbai</h5>
                    </div>
                    <div className='h-[16vh] w-[7vw] bg-zinc-50 flex flex-col justify-center items-center rounded-md'>
                        <img className='h-1/2 w-1/2  object-cover position-center' src="https://cdn-icons-png.flaticon.com/128/1283/1283983.png" alt="" />
                        <div className='w-[80%] h-[1px] bg-black mt-3'></div>
                        <h5 className='tracking-tight font-semibold text-sm'>Mumbai</h5>
                    </div>
                    <div className='h-[16vh] w-[7vw] bg-zinc-50 flex flex-col justify-center items-center rounded-md'>
                        <img className='h-1/2 w-1/2  object-cover position-center' src="https://cdn-icons-png.flaticon.com/128/2160/2160071.png" alt="" />
                        <div className='w-[80%] h-[1px] bg-black mt-3'></div>
                        <h5 className='tracking-tight font-semibold text-sm'>Mumbai</h5>
                    </div>
                    <div className='h-[16vh] w-[7vw] bg-zinc-50 flex flex-col justify-center items-center rounded-md'>
                        <img className='h-1/2 w-1/2  object-cover position-center' src="https://cdn-icons-png.flaticon.com/128/3078/3078988.png" alt="" />
                        <div className='w-[80%] h-[1px] bg-black mt-3'></div>
                        <h5 className='tracking-tight font-semibold text-sm'>Mumbai</h5>
                    </div>
                    <div className='h-[16vh] w-[7vw] bg-zinc-50 flex flex-col justify-center items-center rounded-md'>
                        <img className='h-1/2 w-1/2  object-cover position-center' src="https://cdn-icons-png.flaticon.com/128/1283/1283983.png" alt="" />
                        <div className='w-[80%] h-[1px] bg-black mt-3'></div>
                        <h5 className='tracking-tight font-semibold text-sm'>Mumbai</h5>
                    </div>
                    <div className='h-[16vh] w-[7vw] bg-zinc-50 flex flex-col justify-center items-center rounded-md'>
                        <img className='h-1/2 w-1/2  object-cover position-center' src="https://cdn-icons-png.flaticon.com/128/1283/1283983.png" alt="" />
                        <div className='w-[80%] h-[1px] bg-black mt-3'></div>
                        <h5 className='tracking-tight font-semibold text-sm'>Mumbai</h5>
                    </div>
                    <div className='h-[16vh] w-[7vw] bg-zinc-50 flex flex-col justify-center items-center rounded-md'>
                        <img className='h-1/2 w-1/2  object-cover position-center' src="https://cdn-icons-png.flaticon.com/128/1283/1283983.png" alt="" />
                        <div className='w-[80%] h-[1px] bg-black mt-3'></div>
                        <h5 className='tracking-tight font-semibold text-sm'>Mumbai</h5>
                    </div>
                    <div className='h-[16vh] w-[7vw] bg-zinc-50 flex flex-col justify-center items-center rounded-md'>
                        <img className='h-1/2 w-1/2  object-cover position-center' src="https://cdn-icons-png.flaticon.com/128/1283/1283983.png" alt="" />
                        <div className='w-[80%] h-[1px] bg-black mt-3'></div>
                        <h5 className='tracking-tight font-semibold text-sm'>Mumbai</h5>
                    </div>
                    <div className='h-[16vh] w-[7vw] bg-zinc-50 flex flex-col justify-center items-center rounded-md'>
                        <img className='h-1/2 w-1/2  object-cover position-center' src="https://cdn-icons-png.flaticon.com/128/1283/1283983.png" alt="" />
                        <div className='w-[80%] h-[1px] bg-black mt-3'></div>
                        <h5 className='tracking-tight font-semibold text-sm'>Mumbai</h5>
                    </div>
                    <div className='h-[16vh] w-[7vw] bg-zinc-50 flex flex-col justify-center items-center rounded-md'>
                        <img className='h-1/2 w-1/2  object-cover position-center' src="https://cdn-icons-png.flaticon.com/128/1283/1283983.png" alt="" />
                        <div className='w-[80%] h-[1px] bg-black mt-3'></div>
                        <h5 className='tracking-tight font-semibold text-sm'>Mumbai</h5>
                    </div>
                    <div className='h-[16vh] w-[7vw] bg-zinc-50 flex flex-col justify-center items-center rounded-md'>
                        <img className='h-1/2 w-1/2  object-cover position-center' src="https://cdn-icons-png.flaticon.com/128/1283/1283983.png" alt="" />
                        <div className='w-[80%] h-[1px] bg-black mt-3'></div>
                        <h5 className='tracking-tight font-semibold text-sm'>Mumbai</h5>
                    </div>
                    <div className='h-[16vh] w-[7vw] bg-zinc-50 flex flex-col justify-center items-center rounded-md'>
                        <img className='h-1/2 w-1/2  object-cover position-center' src="https://cdn-icons-png.flaticon.com/128/1283/1283983.png" alt="" />
                        <div className='w-[80%] h-[1px] bg-black mt-3'></div>
                        <h5 className='tracking-tight font-semibold text-sm'>Mumbai</h5>
                    </div>
                    <div className='h-[16vh] w-[7vw] bg-zinc-50 flex flex-col justify-center items-center rounded-md'>
                        <img className='h-1/2 w-1/2  object-cover position-center' src="https://cdn-icons-png.flaticon.com/128/1283/1283983.png" alt="" />
                        <div className='w-[80%] h-[1px] bg-black mt-3'></div>
                        <h5 className='tracking-tight font-semibold text-sm'>Mumbai</h5>
                    </div>

                </div>
                <div className='w-full h-[10vh] bg-zinc-100 flex flex-col justify-evenly'>
                    <div className='h-[1vh] w-full bg-zinc-200'></div>
                    <div className='h-[1vh] w-full bg-zinc-200'></div>
                    <div className='h-[1vh] w-full bg-zinc-200'></div>
                    <div className='h-[1vh] w-full bg-zinc-200'></div>
                    <div className='h-[1vh] w-full bg-zinc-200'></div>
                    <div className='h-[1vh] w-full bg-zinc-200'></div>


                </div>
            </div>
            <div className='bg-zinc-50 h-screen w-full p-5 fit'>
                <div className='h-[20vh] w-full  flex  justify-evenly items-center bg-zinc-50'>
                    <img src="./src/assets/Group 48096305.png" alt="" />
                    <img src="./src/assets/Group.png" alt="" />
                    <div className='text-3xl font-semibold text-zinc-800 text-center flex flex-col items-center '>
                        <h1>Keep the standard of living</h1>
                        <h1><span className='text-orange-600'>alive</span> at any location</h1>
                        <div className='w-[15vw] h-[2px] bg-zinc-300 mt-5'></div>
                    </div>
                    <img className="-rotate-[300deg]" src="./src/assets/Group.png" alt="" />
                    <img src="./src/assets/Isolation Mode.png" alt="" />

                </div>
                <div className='h-[50vh] w-full bg-zinc-100 flex justify-center items-center space-x-10 '>
                    <img src="./src/assets/Group 48096313.png" alt="" />
                    <div className='h-[45vh] w-[15vw] bg-zinc-200 shadow-2xl'>
                        <img className="h-full w-full object-contain" src="./src/assets/Group 48096306.png" alt="" />
                    </div>
                    <img className="pl-[2vw]" src="./src/assets/Group 48096314.png" alt="" />                </div>
                <div className='h-[30vh] w-full bg-zinc-50 flex  mt-2 '>
                    <img className='pl-[7vw] pb-[10vh] image1 w-[20%] scale-150 h-[150%] object-contain position-center -rotate-12 grayscale' src="https://s3-alpha-sig.figma.com/img/d5a1/5ac5/ce5ea6752b97dd19dc17b6b02166d2d0?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7JcEBJZ4AGveZg-hGawLQB18Kn6YmKagLgT4rJRJlRGTGMdWvNJ5kcIH9mectwKG0u~FlvDV9QCeFPL0VacKDJnHd4iV87AZv0EbuenUFtKqi2biCu5gzw8bNVoNX8osU7F7kIuJr6cdPJQTYt4rqtvEN3VBn0Bzkrgsx9R3rck1Gx0elYFN6oM2IHGkCytcuO8fv3f18NvcAG1gL2yu~SIb2BHH6ze7EmxHvR7auwhQ0~P8dgd9MJZQgp0KnWJzDrZxFwEBDTx947fsZkUp71--fcPncrs-mm~n~O56xk7SRgrDSSAesMBuXvh7ogk~8LY~OFW50U6K7ZejeJNgQ__" alt="" />
                    <div className='centre flex flex-col justify-center items-center '>
                        <h5 className='w-1/3 text-center font-semibold text-sm text-zinc-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam error voluptatum eum voluptates minus autem obcaecati incidunt eos tempore maxime.</h5>
                        <div className='px-4 py-2 mt-5 bg-orange-600 text-white rounded-full flex justify-center items-center'>Start Now<FaArrowRightLong className='ml-2 text-sm' /></div>
                    </div>
                    <img className='pr-[7vw] pb-[5vh] image2 w-[20%] scale-[1.7]  -rotate-12 h-[120%] object-contain position-center grayscale' src="./src/assets/Group 48096312.png" alt="" />

                </div>

            </div>
            <div className='message h-[90vh] w-screen bg-orange-600 mt-[12vh] grid grid-rows-3 grid-cols-3 gap-0'>
                {/* Row 1, Column 1 */}
                <div className="border border-zinc-50 bg-orange-600" style={{ gridRow: '1 / span 2' }}>
                    <img className='h-full w-full object-cover position-center' src="https://s3-alpha-sig.figma.com/img/c3d8/0f88/98cb5bd63294bec18af8076109177703?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nxk5Q8fGdie8phaxUQE7wmGD944Mb63PmUm0xZe7GL2bAgucCvLBtz5hEFplrephvgGaOwFyHDb6VkZqLHExqK4ZcKziALqIiLVzHz-ikOF~u9blW9Yg3BtRkkQgXKNUBwQobCY6KjDGawUgO7SIHRuBnoaSBIzAJiyjahDFrJHjv~PAne9eTR~lyE1JtMLBCwlmdn2exiq3JHfFfQrbyaTc05EKd7HU7EmgF3pyqTonOn6aKuogBBIFb7MEGL2QV7L7fbS4fe4snvAQ84BXAYmLRBXapTyR-gJ8mJs~xLYIl3RAFOYr3jVkOVh8DVBj5-YXP1PuyVwGyViF8NrfcQ__" alt="" />
                </div>
                {/* Row 1, Column 2 */}
                <div className="border border-zinc-50 bg-orange-600 text-white flex flex-col  " style={{ gridRow: '1 / span 2' }}>
                    <div className='mb-4 ml-7 mt-5'>
                        <h1 className='text-3xl font-semibold text-left'>Find</h1>
                        <h1 className='text-3xl font-semibold text-left'>Compatible</h1>
                        <h1 className='text-3xl font-semibold text-left'>Roommates</h1>
                    </div>
                    <div className='text-left '>
                        <p className='align-center w-[90%] ml-7 mt-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates numquam blanditiis, quis laboriosam facere similique aliquid illum. Recusandae, ex voluptatem.</p>
                    </div>
                </div>
                {/* Row 1, Column 3 */}
                <div className="border border-zinc-50 bg-orange-600" style={{ gridRow: '1 / span 2' }}></div>

                {/* Row 2, Column 1 */}
                <div className="border border-zinc-50 bg-orange-600"></div>
                {/* Row 2, Column 2 */}
                <div className="border border-zinc-50 bg-orange-600 flex justify-center items-start pt-5">
                    <div className='px-5 py-3 w-[40%] rounded-full bg-white flex items-center justify-center'>Start now <FaArrowRightLong className='ml-2 text-sm' /></div>
                </div>
                {/* Row 2, Column 3 */}
                <div className="border border-zinc-50 bg-orange-600 flex flex-end">
                    <img className='h-full w-full  object-contain position-top' src="https://s3-alpha-sig.figma.com/img/4e3b/4c2b/4290560665328eadded26e53e375acf7?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nQSQeMM7oRSros2zBhN1SDG35dquhQIKCIqdlQyUGA38s~LDd-QsuCQ4LceSf8Bb7xdp2qpVSJ26nYWlc0BlcaJfO3IqjZYoCLFKzOVlCO1U1bO9sTNW~KrYWMbrP2qpOek82hh6DsoghhxPLw~yHpIIZM1VHtjKb0OUshZHp9ApI0V3dKg1u9bTBzah2rnqgodHGmctRTsSGZoXQonBWYsTaApQ1S23KrOmng~NDEkRgcM1OEY3fxYRYg~aUC4FgDj~8jCgG5Gt~oHg05JNEQGnsWSCKW3nU6JGiygmOmL38ajwqIiRgdmQxpzinBmsWQdWT8b9Zz9J5z57WiLhYg__" alt="" />
                </div>

                {/* Row 3, Column 1 */}
                <div className="border border-zinc-50 bg-orange-600"></div>
                {/* Row 3, Column 2 */}
                <div className="border border-zinc-50 bg-orange-600"></div>
                {/* Row 3, Column 3 */}
                <div className="border border-zinc-50 bg-orange-600 h-3/4">
                    <img src="" alt="" />
                </div> {/* Adjust height for row 3 */}
            </div>
            <div className='h-[30vh] w-full bg-zinc-50 flex flex-col justify-evenly'>
                <div className='h-[3vh] w-full bg-zinc-300'></div>
                <div className='h-[3vh] w-full bg-zinc-300'></div>
                <div className='h-[3vh] w-full bg-zinc-300'></div>
                <div className='h-[3vh] w-full bg-zinc-300'></div>
                <div className='h-[3vh] w-full bg-zinc-300'></div>
                <div className='h-[3vh] w-full bg-zinc-300'></div>
            </div>
            <div className='message h-screen w-screen bg-zinc-200 mt-[0vh] grid grid-cols-6 grid-rows-5 gap-0'>
                {/* Row 1, Column 1 */}
                <div className="border border-zinc-500 bg-zinc-200">
                    <h1 className='text-xl text-zinc-800 font-semibold p-3'>/and finally</h1>
                </div>
                {/* Row 1, Column 2 */}
                <div className="border border-zinc-400 bg-zinc-200 flex flex-col pl-3 pt-3">
                    <div className='leading-none mb-3'>
                        <h1 className='text-xl text-zinc-800 font-semibold '>Design your every</h1>
                        <h1 className='text-xl text-zinc-800 font-semibold '>day food plate</h1>
                    </div>
                    <p className='text-sm text-zinc-400'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                </div>
                {/* Row 1, Column 3 */}
                <div className="border border-zinc-400 bg-zinc-200"></div>
                {/* Row 1, Column 4 */}
                <div className="border border-zinc-400 bg-zinc-200"></div>
                {/* Row 1, Columns 5 and 6 (merged) */}
                <div className="border border-zinc-400 bg-zinc-200" style={{ gridColumn: '5 / span 2' }}>
                    <img className='h-full w-full object-cover grayscale' src="https://s3-alpha-sig.figma.com/img/cc7a/390f/0a713b7a49582f0d37b2beaed3c0cf2f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lgqXzIecVkhlsnu~Hga-Nx4reRoFvIiNWXRjjrapEzK1Jv8ljD6Q2nhsK5xFp5P7-8e9TBkATUOZdbN-JDABX2972W5szIjR~vCVUEpg48l4x91wP6PC4JYvl9eE2w1F93p09IfuVJjRA5pd7BE7bY5xCgl-iXrU~3ExoWDyYB7uYhlMD9bv70waaeAN4Lbvx1gX0lCxbfj8UleAsE-ZJIBOwudYrewtcAs1t0VCsU-mVnvt~W2e9daEvEIerLhe3PSJdm29S6p6UB45oYUmkb1uSuMyHkH2EzioXSowmRWLM8SBjTN421WY1ljihLw7fdgCFvMPHmxJJCMP2Cpxeg__" alt="" />
                </div>

                {/* Row 2, Column 1 */}
                <div className="border border-zinc-400 bg-zinc-200"></div>
                {/* Row 2, Column 2 */}
                <div className="border border-zinc-400 bg-zinc-200"></div>
                {/* Row 2, Column 3 */}
                <div className="border border-zinc-400 bg-zinc-200 pt-3 pl-3" style={{ gridColumn: '3 / span 2' }}>
                    <h1 className='text-2xl text-zinc-800 font-semibold'>Unleash.</h1>
                    <h1 className='text-2xl text-zinc-800 font-semibold'>The way of life.</h1>
                    <h5 className='text-zinc-400'>/step a bit more of a beat</h5>
                </div>
                {/* Row 2, Column 4 */}
                {/* Row 2, Column 5 */}
                <div className="border border-zinc-400 bg-zinc-200 p-3" style={{ gridColumn: '5 / span 2' }}>
                    <h1 className='text-xl font-semibold'>/ease commuting</h1>
                </div>
                {/* Row 2, Column 6 */}

                {/* Row 3, Column 1 */}
                <div className="border border-zinc-400 bg-zinc-200"></div>
                {/* Row 3, Column 2 */}
                <div className="border border-zinc-400 bg-zinc-200">
                    <img className='h-full w-full object-cover grayscale' src="https://s3-alpha-sig.figma.com/img/77ff/30be/f7df0e98972d7fe3943ea08619056531?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kxk90ggKrCYpuZcwYdbDmRjpXj4mdVCtcogXI9nLwBLSAHA8c05u4BNcE3n0EFKSVjBrYBgWkeEPg639j2PKUnL6YXQgDtzhPKztUhAUUK6~uhEm8gT56oj6yYdXGOio32XELP63WKrqvKsAIJWgv~ek5c~TTITgOUc9hYEdkXxgFE5NbnQuZxXVKoBSDJ7VmAJMNsia-ReNiTk9k~9w0GPu9SgY-f053VUCowT7LNWfrK5oK4CwHvabxIHcJqGAYB0rNmb6hVmxYrsc713~m4ihm4aVk5X0RoT2dDp~XnNPUunBuYXqA9kY-zCbkFeaNHJASMLQJiDaHvgOYW~OJw__" alt="" />
                </div>
                {/* Row 3, Columns 3 and 4 (merged) */}
                <div className="border border-zinc-400 bg-zinc-200 p-2" style={{ gridColumn: '3 / span 2' }}>
                    <p className='text-zinc-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magni natus aut, eos odit quod, inventore porro perspiciatis deleniti molestias, numquam tempore temporibus voluptas necessitatibus!</p>
                </div>
                {/* Row 3, Column 5 */}
                <div className="border border-zinc-400 bg-zinc-200"></div>
                {/* Row 3, Column 6 */}
                <div className="border border-zinc-400 bg-zinc-200"></div>

                {/* Row 4, Column 1 */}
                <div className="border border-zinc-400 bg-zinc-200">
                    <img className='h-full w-full object-cover grayscale' src="https://i.pinimg.com/236x/19/67/dd/1967ddeb64c46314f41e085beafd12a8.jpg" alt="" />

                </div>
                {/* Row 4, Column 2 */}
                <div className="border border-zinc-400 bg-zinc-200"></div>
                {/* Row 4, Column 3 */}
                <div className="border border-zinc-400 bg-zinc-200 p-5" style={{ gridColumn: '3 / span 2' }}>
                    <div className=' px-2 py-3 w-[50%]  font-semibold flex justify-center items-center rounded-full bg-orange-600 text-white'>Explore more<FaArrowRightLong className='ml-2 text-sm' /></div>
                </div>
                {/* Row 4, Column 4 */}
                {/* Row 4, Column 5 */}
                <div className="border border-zinc-400 bg-zinc-200"></div>
                {/* Row 4, Column 6 */}
                <div className="border border-zinc-400 bg-zinc-200"></div>

                {/* Row 5, Column 1 */}
                <div className="border border-zinc-400 bg-zinc-200"></div>
                {/* Row 5, Column 2 */}
                <div className="border border-zinc-400 bg-zinc-200"></div>
                {/* Row 5, Column 3 */}
                <div className="border border-zinc-400 bg-zinc-200" style={{ gridColumn: '3 / span 2' }}></div>
                {/* Row 5, Column 4 */}
                {/* Row 5, Column 5 */}
                <div className="border border-zinc-400 bg-zinc-200" style={{ gridColumn: '5 / span 2' }}>
                    <img className='h-full w-full object-cover grayscale' src="https://s3-alpha-sig.figma.com/img/ced3/9348/ae8f7a20ce4618ab1387cef5f727441f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qQUx-8h8KNIFafN8o-3LWcRrIBls1CfjXDgilYQsxcMpeW2iuini5GpIscHRQRQUrGOD4l3V8FdTmgWjPljg6gAF8ZYwJqJuyTRD7IYOgyvhTM2zUjNSY8nuWeJiLSg5uP5rgotpMvLHj2P2~7z~KzoQcy3VY6crDYLGaSroBxnhin-R-Jq2-zeGEbGHh3ML-mv0SWf54~RxM0EFNAMe9vfUrqYviKb1zsy4PuM3oig3QEpwIKEDvoHTWGTLY584fVXqhdT1BOBO5yUKo0sPy76h9WblfJFPQ7MLJnFV7Cx97DuhhFvkAXnu68pDYHkvPQ5cSBQQwPxX4~3AKnh26g_" alt="" />

                </div>
                {/* Row 5, Column 6 */}
            </div>
            <div className='h-[65vh] w-full bg-zinc-50'>
                <div className='h-[80%] w-full bg-zinc-100 flex flex-col md:flex-row'>
                    <div className='h-full w-full md:w-[40%] bg-zinc-50 flex flex-col md:justify-center md:items-start items-center pl-[5vw] gap-2 pt-6 md:pt-0'>
                        <h1 className='h-[4vh]  rounded-full bg-orange-600 text-white text-center px-2 '>Logo</h1>
                        <div className='font-bold tracking-tight text-2xl'>
                            <h1>To make sure when you are </h1>
                            <h1>independent you live like a boss</h1>
                        </div>
                        <h1 className='font-semibold text-lg tracking-tight mt-4'>Habit8,2023</h1>
                    </div>
                    <div className="h-full w-full md:w-[60%] bg-zinc-200 flex md:flex-row mx-5 md:mx-0 text-sm lg:text-xl">                                                                         
                        <div className="w-full md:w-[25%] bg-zinc-50 flex flex-col justify-center space-y-2">
                            <h4 className="text-zinc-500">FAQ's</h4>
                            <h4 className="text-zinc-900 font-semibold">How it works</h4>
                            <h4 className="text-zinc-900 font-semibold">List your property</h4>
                            <h4 className="text-zinc-900 font-semibold">See More</h4>
                        </div>
                        <div className="w-full md:w-[25%] bg-zinc-50 flex flex-col justify-center space-y-2">
                            <h4 className="text-zinc-500">Company</h4>
                            <h4 className="text-zinc-900 font-semibold">Blogs</h4>
                            <h4 className="text-zinc-900 font-semibold">Career</h4>
                            <h4 className="text-zinc-900 font-semibold">News</h4>
                        </div>
                        <div className="w-full md:w-[25%] bg-zinc-50 flex flex-col justify-center space-y-2">
                            <h4 className="text-zinc-500">Insights</h4>
                            <h4 className="text-zinc-900 font-semibold">Inventory</h4>
                            <h4 className="text-zinc-900 font-semibold">Stats</h4>
                            <h4 className="text-zinc-900 font-semibold">Investments</h4>
                        </div>
                        <div className="w-full md:w-[25%] bg-zinc-50 flex flex-col justify-center space-y-2 mr-7 md:mr-0">
                            <h4 className="text-zinc-500">Get the app</h4>
                            <button className="w-fit px-4 py-1 font-semibold border-2 rounded-full border-zinc-500 flex justify-center items-center gap-1"><DiAndroid />Android</button>
                            <button className="w-fit px-4 py-1 font-semibold border-2 rounded-full border-zinc-500 flex justify-center items-center gap-1"><FaApple />Apple</button>
                        </div>
                    </div>
                </div>
                <div className='h-[30%] md:h-[20%] w-full text-white bg-orange-600 flex flex-col md:flex-row items-center p-7'>
                    <div className='md:w-[50%]'>
                        <h4 className='font-semibold tracking-tight flex items-center '>Copyright <FaRegCopyright /> 2023 Techademy Campus</h4>
                    </div>
                    <div className='flex md:flex-row md:justify-end mt-4 md:mt-0 text-xs md:text-lg'>
                        <h4 className='mr-2 md:mr-4'>Terms of Services</h4>
                        <h4 className='mr-2 md:mr-4'>Privacy Policy</h4>
                        <h4>Cookies</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}