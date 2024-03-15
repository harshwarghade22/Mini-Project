import React from "react";
import NavArrow from "./Icons/NavArrow";

function Check() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl  mx-auto grid lg:grid-cols-2  border-[1px] border-gray-700 ">
        <div className="relative">
          <img
            className=" w-full h-full object-cover object-center"
            src="https://s3-alpha-sig.figma.com/img/553f/2e6a/a9776d21879cc686f573ce4296d0b322?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gYi47-56ApUi~7JmOEgGujxqQ6I0-71SlFyNkJlHv6TXUt7W798oeXJGVfI~eFhbbf99jMBxG1PSxYz7T~JqVxdDV4yN2C4-CScNHhO1kcujcIa7eGx8ysgY3xEWMS5ph4GvLQj~rrwjmMiGNtWoWnfKq-w8Wp4UwvZEN-kfPM8vA~FOsNP-DlEdcWeifJ3~wsX5d4Cjce0941q0m3gL4AwT0Qg386LR8DIj0MjuJ~X3JGmwB-c418ph1opv8~-AZtKyW9cPzA3f0yR9iqDn4jiqr1QkaPAKHEFlmc7kXCDynLfsnWFbmkiGIRcP3t1uXTJwtdGW1uORON79B0mlMA__"
            alt=""
          />
          <div className="w-full h-full bg-black/30 absolute left-0 top-0 z-10"></div>
          <div class="col flex justify-center items-center">
            <div class="absolute left-[25%] top-[15%] flex flex-col justify-center items-center z-20">
              <h1 class="sm:text-2xl md:text-3xl text-lg text-white font-bold">
                Congratulation!
              </h1>
              <p class="sm:text-lg text-sm text-[#AFAFAF] font-medium text-center font-['Gilroy-regular'] my-4">
                Flat has been successfully reserved
              </p>
            </div>
          </div>

          <div class="col flex justify-center items-center">
            <div class="absolute left-[28%] top-[40%] flex flex-col justify-center items-center text-white z-20 my-8">
              <button class="py-4 px-4 border-white border-2 sm:text-base lg:text-lg md:text-xl">
                Reservation no : HSR10120LA
              </button>
            </div>
          </div>

          <div className="w-[30px] h-full bg-white/40 absolute sm:left-[18%] left-[16%]  top-0"></div>
          <div className="w-[20px] h-full bg-white/40 absolute sm:left-[25%] left-[24%] top-0"></div>
          <div className="w-[10px] h-full bg-white/40 absolute sm:left-[30%] left-[30%] top-0"></div>
          <div className="w-[25px] h-full bg-white/40 absolute sm:right-[8%] right-[10%] top-0"></div>
        </div>
        <div className="grid sm:grid-rows-5 py-2">
          <div className="row-span-1 border-b border-black">
            <div className="sm:px-12 px-8 py-8 ">
              <h1 className="md:text-2xl sm:text-xl text-sm my-2 font-bold font-['Gilroy Medium']">
                Nirvana J.
              </h1>
              <h3 className="md:text-xl sm:text-lg text-base">
                check in date: 08/ 06/ 2023
              </h3>
            </div>
          </div>
          <div className="grid  row-span-1 border-b-4 border-gray  ">
            <div className="sm:flex justify-between items-center sm:px-12 px-8  py-8">
              <div className="grid sm:grid-rows-6">
                <div className="grid sm:grid-cols-2 row-span-2  ">
                  <h1>Monthly rent before 3 Months : </h1>
                  <h1 className="sm:text-end mb-4 sm:my-0 font-bold tracking-tight ">
                    5000/mo
                  </h1>
                </div>
                <div className="grid sm:grid-cols-2 row-span-2 ">
                  <h1>
                    Monthly rent <span className="font-bold">after</span> 3
                    Months :{" "}
                  </h1>
                  <h1 className="sm:text-end mb-4 sm:my-0 font-bold tracking-tight ">
                    5000/mo
                  </h1>
                </div>
                <div className="grid sm:grid-cols-2 row-span-2 ">
                  <h1>Deposit</h1>
                  <h1 className="sm:text-end mb-4 sm:my-0  font-bold tracking-tight ">
                    * 1 Month of rent *
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-2  sm:px-12 px-8 py-4  ">
            <div className="grid sm:grid-cols-2 my-4  border-[1px] border-black/50  gap-1 bg-[#F3F5F7] ">
              <img
                className="col-span-1  w-full h-full p-4"
                src="https://s3-alpha-sig.figma.com/img/bf6f/dc0a/360f947d848e6810b77b33a452a3507a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Djm4w-ODMOAUFxhkWdu6Oyaukldi9DTGD0U8qHJSrI6LmrK-ooc74ilYdCJTvGJJVus2loRSr~vYTSw8~HdU6WtCx6BdZTGPA710OUftDB0~KzyyqJUaCYGL6Wl5L-RMj4M0jg1tYqGCPm5miTGTq~h2GyIt5Uwpu1g8VHX~lVzHRC4~rN8XES8CnNkTc2VEA3q9Tq-9REWy0gY4Q7Q~9v42tDgFc3Zjx~qpLFUrBZM8VQ5W1eyR2dVpqYciOSO7LRCFS5xVFFR6HZ1VLQogSeRTBhoAmWTVSwhzIqXvPbZ2e7lqq0J6W3O7ol9hmBlBaxhrkpVveS6LNnI8egCd4w__"
                alt=""
              />
              <div className="flex flex-col justify-start px-2   py-2">
                <p className="sm:text-base text-sm mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  similique eveniet harum excepturi recusandae aperiam adipisci.
                </p>
                <h3 className="sm:text-base text-sm ">
                  <span className="font-bold">6</span> km from borivali
                </h3>
                <h3 className="sm:text-base text-sm">
                  <span className="font-bold">5</span> km from metro station
                </h3>

                <button className="py-2 rounded-full bg-[#F3F5F7] border border-gray-600/50 text-black my-4 flex justify-center items-center gap-4">
                  Navigate <NavArrow />
                </button>
              </div>
            </div>
          </div>

          <div className="row-span-1 grid lg:grid-rows-2 sm:px-12 px-8">
            <div className="grid lg:grid-cols-2 gap-4 mb-4 ">
              <button className="sm:text-base lg:text-lg md:text-xl text-sm font-medium px-4 py-1 bg-white border-[1px] border-black text-black">
                Cancelation
              </button>
              <button className="sm:text-base lg:text-lg md:text-xl text-sm font-medium px-4 py-1 bg-[#F45C2C] border-[1px] border-black text-white">
                Add tiffin service
              </button>
            </div>
            <p className="sm:text-lg text-sm text-center bg-[#F3F5F7] py-4 ">
              <span className="font-bold sm:text-lg text-sm">Note :</span>{" "}
              Kindly take your ID card during visit for authentication
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Check;
