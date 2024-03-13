import React from "react";

function Check() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl  mx-auto grid lg:grid-cols-2  border-[1px] border-gray-700 ">
        <div>
          <img
            className=" w-full h-full object-fill object-center"
            src="https://s3-alpha-sig.figma.com/img/553f/2e6a/a9776d21879cc686f573ce4296d0b322?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gYi47-56ApUi~7JmOEgGujxqQ6I0-71SlFyNkJlHv6TXUt7W798oeXJGVfI~eFhbbf99jMBxG1PSxYz7T~JqVxdDV4yN2C4-CScNHhO1kcujcIa7eGx8ysgY3xEWMS5ph4GvLQj~rrwjmMiGNtWoWnfKq-w8Wp4UwvZEN-kfPM8vA~FOsNP-DlEdcWeifJ3~wsX5d4Cjce0941q0m3gL4AwT0Qg386LR8DIj0MjuJ~X3JGmwB-c418ph1opv8~-AZtKyW9cPzA3f0yR9iqDn4jiqr1QkaPAKHEFlmc7kXCDynLfsnWFbmkiGIRcP3t1uXTJwtdGW1uORON79B0mlMA__"
            alt=""
          />
        </div>
        <div className="grid sm:grid-rows-5 py-2">
          <div className="row-span-1 border-b border-black">
            <div className="sm:px-12 px-8 py-8 ">
              <h1>Nirvana J.</h1>
              <h3>check in date: 08 feb</h3>
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
                  <h1>Monthly rent after 3 Months : </h1>
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
            <div className="grid sm:grid-cols-2 my-4  border-[1px] border-black/50  gap-1 ">
              <img
                className="col-span-1  w-full h-full p-4"
                src="https://s3-alpha-sig.figma.com/img/bf6f/dc0a/360f947d848e6810b77b33a452a3507a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Djm4w-ODMOAUFxhkWdu6Oyaukldi9DTGD0U8qHJSrI6LmrK-ooc74ilYdCJTvGJJVus2loRSr~vYTSw8~HdU6WtCx6BdZTGPA710OUftDB0~KzyyqJUaCYGL6Wl5L-RMj4M0jg1tYqGCPm5miTGTq~h2GyIt5Uwpu1g8VHX~lVzHRC4~rN8XES8CnNkTc2VEA3q9Tq-9REWy0gY4Q7Q~9v42tDgFc3Zjx~qpLFUrBZM8VQ5W1eyR2dVpqYciOSO7LRCFS5xVFFR6HZ1VLQogSeRTBhoAmWTVSwhzIqXvPbZ2e7lqq0J6W3O7ol9hmBlBaxhrkpVveS6LNnI8egCd4w__"
                alt=""
              />
              <div className="flex flex-col justify-start px-2  py-2">
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

                <button className="px-2 py-2 rounded-full bg-[#00df9a] text-black my-4">
                  Navigate
                </button>
              </div>
            </div>
          </div>

          <div className="row-span-1 grid lg:grid-rows-2 sm:px-12 px-8">
            <div className="grid lg:grid-cols-2 gap-4 mb-4 ">
              <button className="sm:text-base lg:text-lg md:text-xl text-sm font-bold px-4 py-2 bg-[#00df9a] text-black">
                Cancelation
              </button>
              <button className="sm:text-base lg:text-lg md:text-xl text-sm font-bold px-4 py-2 bg-blue-400 text-black">
                Add tiffin service
              </button>
            </div>
            <p className="sm:text-lg text-sm text-center">
              <span className="font-bold sm:text-lg text-sm">Note :</span> Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Error,
              aperiam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Check;
