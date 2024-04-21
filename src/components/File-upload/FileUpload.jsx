// import React, { useState, useRef } from "react";
// import { FileButton, Button, Group, Text } from "@mantine/core";
// import { MdOutlineAddAPhoto } from "react-icons/md";
// import { CiCircleRemove } from "react-icons/ci";
// import buttonStyles from "./FileUpload.module.css";

// function FileUpload() {
//   const [file, setFile] = useState(null);
//   const resetRef = useRef(null);

//   const clearFile = () => {
//     setFile(null);
//     resetRef.current && resetRef.current();
//   };

//   const handleFileChange = (uploadedFile) => {
//     setFile(uploadedFile);
//   };

//   return (
//     <>
//       <FileButton
//         resetRef={resetRef}
//         onChange={handleFileChange}
//         accept="image/png,image/jpeg"
//       >
//         {(props) =>
//           !file ? (
//             <div
//               className="rounded-lg lg:w-[350px] lg:h-[268px]   md:w-[280px] md:h-[268px] sm:w-[280p6] sm:h-[268px] border-dashed  border-[1px]  border-black relative flex justify-center items-center"
//               {...props}
//             >
//               <Button
//                 className={`lg:w-[350px] lg:h-[268px]   md:w-[280px] md:h-[268px] sm:w-[280px] sm:h-[268px] rounded-lg  ${buttonStyles.button}`}
//               >
//                 <MdOutlineAddAPhoto className="text-black text-center text-5xl opacity-20" />
//               </Button>
//             </div>
//           ) : (
//             <div
//               className={buttonStyles.fileDisplay}
//               style={{ position: "relative" }}
//             >
//               <img
//                 className="rounded-lg lg:w-[350px] lg:h-[268px] md:w-[280px] md:h-[268px] sm:w-[280px] sm:h-[268px]  object-cover object-center  "
//                 src={URL.createObjectURL(file)}
//                 alt="Uploaded File"
//               />
//               <Button
//                 className={`close-btn  absolute lg:top-0  top-8 opacity-0 hover:opacity-100 hover:bg-zinc-300 right-1 m-2 ${buttonStyles.button} ${buttonStyles.remove} `}
//                 onClick={clearFile}
//               >
//                 <CiCircleRemove className="text-3xl font-bold text-red-400" />
//               </Button>
//             </div>
//           )
//         }
//       </FileButton>
//     </>
//   );
// }

// export default FileUpload;


import React, { useState, useRef } from "react";
import { FileButton, Button, Group, Text } from "@mantine/core";
import { MdOutlineAddAPhoto } from "react-icons/md";

import { MdFindReplace } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import buttonStyles from "./FileUpload.module.css";

function FileUpload() {
  const [file, setFile] = useState(null);
  const resetRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const clearFile = () => {
    setFile(null);
    resetRef.current && resetRef.current();
  };

  const handleFileChange = (uploadedFile) => {
    setFile(uploadedFile);
  };

  return (
    <>
      <FileButton
        resetRef={resetRef}
        onChange={handleFileChange}
        accept="image/png,image/jpeg"
      >
        {(props) => (
          <div
            className={`relative flex justify-center items-center lg:w-[350px] lg:h-[226px] md:w-[280px] md:h-[226px] sm:w-[280px] sm:h-[226px] bg-[#D9D9D9] ${
              hovered ? "cursor-pointer" : ""
            }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            {...props}
          >
            {!file ? (
              <Button
                className={`rounded-lg   ${buttonStyles.button}`}
              >
                <MdOutlineAddAPhoto className="text-black text-center text-5xl opacity-20 " />
              </Button>
            ) : (
              <>
                <img
                  className="rounded-lg lg:w-[350px] lg:h-[226px] md:w-[280px] md:h-[226px] sm:w-[280px] sm:h-[226px]  object-cover object-center"
                  src={URL.createObjectURL(file)}
                  alt="Uploaded File"
                />
                {hovered && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <Button
                        className={`text-white ${buttonStyles.button}`}
                        onClick={() => clearFile()}
                      >
                        <MdDelete className="text-3xl font-bold text-black" />
                        <span className="text-lg font-gilroy_semi_bold"> Remove </span>
                      </Button>
                      <Button
                        as="label"
                        className={`text-white ${buttonStyles.button}`}
                        htmlFor="file-input"
                      >
                        <MdFindReplace className="text-3xl font-bold text-white" />
                        <span className="text-lg font-gilroy_semi_bold"> Replace </span>
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </FileButton>
    </>
  );
}

export default FileUpload;
