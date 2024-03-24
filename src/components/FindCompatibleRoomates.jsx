import { FaArrowRightLong, FaRegCopyright } from "react-icons/fa6";
import React from "react";
import image1 from "../icons/FOl6squXIAESX6c 1.png";
import image2 from "../icons/FOl6squXIAESX6c 3img2.png";

function FindCompatibleRoomates() {
  return (
    <div>
      <div className="message h-[70vh] md:h-[90vh] w-screen grid grid-rows-3 md:grid-cols-3 grid-cols-2 gap-0">
        {/* Row 1, Column 1 */}
        <div
          className="border border-zinc-500 bg-orange-600 flex items-center"
          style={{ gridRow: "1 / span 2" }}
        >
          <img
            className="lg:h-full lg:w-full object-cover position-center"
            src={image1}
            alt=""
          />
        </div>
        {/* Row 1, Column 2 */}
        <div
          className="border border-zinc-50 bg-orange-600 text-white flex flex-col "
          style={{ gridRow: "1 / span 2" }}
        >
          <div className="md:mb-4 md:ml-7 mt-5 md:text-3xl text-lg px-4 md:px-0">
            <h1 className=" font-semibold text-left">Find</h1>
            <h1 className=" font-semibold text-left">Compatible</h1>
            <h1 className=" font-semibold text-left">Roommates</h1>
          </div>
          <div className="text-left text-sm md:text-xl mt-8 ">
            <p className="align-center w-[90%] md:ml-7 ml-0 px-4 md:px-0 text-[14px] md:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates numquam blanditiis, quis laboriosam facere similique
              aliquid illum. Recusandae, ex voluptatem.
            </p>
          </div>
        </div>
        {/* Row 1, Column 3 */}
        <div
          className="border border-zinc-50 bg-orange-600 hidden md:block "
          style={{ gridRow: "1 / span 2" }}
        ></div>
        {/* Row 2, Column 1 */}
        <div className="border border-zinc-50 bg-orange-600 hidden md:block"></div>
        {/* Row 2, Column 2 */}
        <div className="border border-zinc-50 bg-orange-600 flex md:justify-center items-start md:pt-5  pl-10 pt-16">
          <div className="px-5 py-3 md:w-[40%] rounded-full bg-white flex items-center justify-center text-zinc-900 font-semibold">
            Start now <FaArrowRightLong className="ml-2 text-sm" />
          </div>
        </div>
        {/* Row 2, Column 3 */}
        <div className="border border-zinc-50 bg-orange-600 flex flex-end sm:p-0 pr-8">
          <img
            className="h-full w-full  object-cover object-right-top"
            src={image2}
            alt=""
          />
        </div>
        {/* Row 3, Column 1 */}
        <div className="border border-zinc-50 bg-orange-600"></div>
        {/* Row 3, Column 2 */}
        <div className="border border-zinc-50 bg-orange-600"></div>
        {/* Row 3, Column 3 */}
        <div className="border border-zinc-50 bg-orange-600 h-3/4">
          <img src="" alt="" />
        </div>{" "}
        {/* Adjust height for row 3 */}
      </div>
    </div>
  );
}

export default FindCompatibleRoomates;
