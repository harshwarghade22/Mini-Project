import React from "react";

function Checkout() {
  return (
    <div className="w-full h-screen  ">
      <div className="top w-full h-[76px] bg-zinc-300 text-center">header</div>
      <div
        className="w-full  py-10 px-20 flex justify-center items-center"
        style={{ height: `calc(100vh - 76px)` }}
      >
        <div className="w-[90%] h-[90%] bg-[#F1F1F1] flex justify-between items-center border-black border-[1px] border-opacity-55 ">
          <div
            className="left w-[60%] h-full relative
          bg-[url('https://s3-alpha-sig.figma.com/img/553f/2e6a/a9776d21879cc686f573ce4296d0b322?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gYi47-56ApUi~7JmOEgGujxqQ6I0-71SlFyNkJlHv6TXUt7W798oeXJGVfI~eFhbbf99jMBxG1PSxYz7T~JqVxdDV4yN2C4-CScNHhO1kcujcIa7eGx8ysgY3xEWMS5ph4GvLQj~rrwjmMiGNtWoWnfKq-w8Wp4UwvZEN-kfPM8vA~FOsNP-DlEdcWeifJ3~wsX5d4Cjce0941q0m3gL4AwT0Qg386LR8DIj0MjuJ~X3JGmwB-c418ph1opv8~-AZtKyW9cPzA3f0yR9iqDn4jiqr1QkaPAKHEFlmc7kXCDynLfsnWFbmkiGIRcP3t1uXTJwtdGW1uORON79B0mlMA__')]
          bg-contain bg-center 
          
          "
          >
            <div className="coverImage w-full h-full absolute bg-[rgba(0,0,0,0.4)]">
              <div className="w-full z-10">
                <h1 className="text-center text-3xl text-white mt-[10%] font-['Gilroy-SemiBold'] tracking-tight">
                  Congratulations!
                </h1>
                <h2 className="text-center text-xl font-['Gilroy-Regular'] text-[#AFAFAF] tracking-tight">
                  Flat has been successfully reserved
                </h2>

                <div className="w-[full] mt-[15%] flex justify-center items-center ">
                  <button className="py-2 px-4 text-white border-white border-[1px] text-center">
                    Reservation no. RHCSA2414
                  </button>
                </div>
              </div>

              <div className="absolute top-0 left-[22%] w-[38px] h-full bg-white opacity-20"></div>
              <div className="absolute top-0 left-[29%] w-[28px] h-full bg-white opacity-20"></div>

              <div className="absolute top-0 left-[35%] w-[12px] h-full bg-white opacity-20"></div>
              <div className="absolute top-0 right-[5%] w-[30px] h-full bg-white opacity-20"></div>
            </div>
          </div>
          <div className="right w-[40%] h-full  ">
            <div className="right1 w-full h-[25%]  pl-12 py-6   border-black border-b-[1px] border-opacity-30   ">
              <h1 className="text-3xl text-[#434343] font-['Gilroy-SemiBold'] tracking-tight mb-1">
                Nirvana J.
              </h1>
              <h3 className="text-xl text-[#434343] tracking-tight ">
                check in date : 08 feb
              </h3>
            </div>

            <div className="right2 w-full h-[25%] py-4 flex justify-evenly items-center    border-black border-b-[1px] border-opacity-30">
              <div className=" w-[60%] h-full pl-12 text-[#434343] font-['Gilroy-Regular'] text-sm ">
                <h1 className="mb-2">Monthly rent for first 3 Months :</h1>
                <h1 className="mb-2">
                  Monthly rent <span className="font-semibold">after</span> 3
                  Months :{" "}
                </h1>
                <h1 className="mb-2">Deposit : </h1>
              </div>
              <div className="w-[40%] h-full text-end px-2 font-['Gilroy-Bold'] font-semibold tracking-tight text-sm  ">
                <h1>4200/mo</h1>
                <h1>7000/mo</h1>
                <h1>*1 month of rent*</h1>
              </div>
            </div>
            <div className="right3 w-full h-[50%]  py-4  ">
              <div className="w-[80%] h-[60%] mb-2 p-2 mx-auto shadow-xl  flex justify-center items-center border-black border-[1px] border-opacity-40">
                <div className="left w-[55%] h-full ">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/bf6f/dc0a/360f947d848e6810b77b33a452a3507a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Djm4w-ODMOAUFxhkWdu6Oyaukldi9DTGD0U8qHJSrI6LmrK-ooc74ilYdCJTvGJJVus2loRSr~vYTSw8~HdU6WtCx6BdZTGPA710OUftDB0~KzyyqJUaCYGL6Wl5L-RMj4M0jg1tYqGCPm5miTGTq~h2GyIt5Uwpu1g8VHX~lVzHRC4~rN8XES8CnNkTc2VEA3q9Tq-9REWy0gY4Q7Q~9v42tDgFc3Zjx~qpLFUrBZM8VQ5W1eyR2dVpqYciOSO7LRCFS5xVFFR6HZ1VLQogSeRTBhoAmWTVSwhzIqXvPbZ2e7lqq0J6W3O7ol9hmBlBaxhrkpVveS6LNnI8egCd4w__"
                    alt=""
                    className="object-cover object-center w-full h-full  "
                  />
                </div>
                <div className="right w-[45%] h-full text-xs px-2">
                  <p className="text-[10px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nobis, architecto.
                  </p>
                  <h3>
                    <span className="font-semibold">6km</span> from Borivali
                    station
                  </h3>
                  <h3>
                    <span className="font-semibold">5km</span> from metro
                    station
                  </h3>

                  <button className="py-1 px-4 border-zinc-800 border-[1px] rounded-full ml-2 mt-2">
                    Navigate
                  </button>
                </div>
              </div>

              <div className=" w-[80%] h-[30%] flex justify-between items-center  mx-auto gap-2 ">
                <button className="w-1/2 h-10 bg-white border-black border-[1px] border-opacity-60">
                  Cancellation
                </button>
                <button className="w-1/2 h-10 bg-orange-400 border-black border-[1px] border-opacity-60 ">
                  Add Tiffin Service
                </button>
              </div>
              <div className="w-[80%] h-[10%] mx-auto ">
                <p className="text-sm tracking-tight ">
                  {" "}
                  <span className="text-base font-semibold">Note :</span> Kindly
                  take your identity card during visit for authentication
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
