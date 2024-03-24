import { FaArrowRightLong, FaRegCopyright } from "react-icons/fa6";
import React from 'react'

function FindCompatibleRoomates() {
  return (
    <div><div className="message h-[70vh] md:h-[90vh] w-screen grid grid-rows-3 md:grid-cols-3 grid-cols-2 gap-0">
    {/* Row 1, Column 1 */}
    <div
      className="border border-zinc-500 bg-orange-600 flex items-center"
      style={{ gridRow: "1 / span 2" }}
    >
      <img
        className="lg:h-full lg:w-full object-cover position-center"
        src="https://s3-alpha-sig.figma.com/img/c3d8/0f88/98cb5bd63294bec18af8076109177703?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nxk5Q8fGdie8phaxUQE7wmGD944Mb63PmUm0xZe7GL2bAgucCvLBtz5hEFplrephvgGaOwFyHDb6VkZqLHExqK4ZcKziALqIiLVzHz-ikOF~u9blW9Yg3BtRkkQgXKNUBwQobCY6KjDGawUgO7SIHRuBnoaSBIzAJiyjahDFrJHjv~PAne9eTR~lyE1JtMLBCwlmdn2exiq3JHfFfQrbyaTc05EKd7HU7EmgF3pyqTonOn6aKuogBBIFb7MEGL2QV7L7fbS4fe4snvAQ84BXAYmLRBXapTyR-gJ8mJs~xLYIl3RAFOYr3jVkOVh8DVBj5-YXP1PuyVwGyViF8NrfcQ__"
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
        className="h-full w-full  object-contain position-top"
        src="https://s3-alpha-sig.figma.com/img/4e3b/4c2b/4290560665328eadded26e53e375acf7?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nQSQeMM7oRSros2zBhN1SDG35dquhQIKCIqdlQyUGA38s~LDd-QsuCQ4LceSf8Bb7xdp2qpVSJ26nYWlc0BlcaJfO3IqjZYoCLFKzOVlCO1U1bO9sTNW~KrYWMbrP2qpOek82hh6DsoghhxPLw~yHpIIZM1VHtjKb0OUshZHp9ApI0V3dKg1u9bTBzah2rnqgodHGmctRTsSGZoXQonBWYsTaApQ1S23KrOmng~NDEkRgcM1OEY3fxYRYg~aUC4FgDj~8jCgG5Gt~oHg05JNEQGnsWSCKW3nU6JGiygmOmL38ajwqIiRgdmQxpzinBmsWQdWT8b9Zz9J5z57WiLhYg__"
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
  )
}

export default FindCompatibleRoomates