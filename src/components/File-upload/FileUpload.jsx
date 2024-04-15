import React, { useState, useRef } from "react";
import { FileButton, Button, Group, Text } from "@mantine/core";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import buttonStyles from "./FileUpload.module.css";

function FileUpload() {
  const [file, setFile] = useState(null);
  const resetRef = useRef(null);

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
        {(props) =>
          !file ? (
            <div
              className="rounded-lg w-full h-full border-dashed  border-[1px]  border-black relative flex justify-center items-center "
              {...props}
            >
              <Button
                className={`w-full h-full rounded-lg  ${buttonStyles.button}`}
              >
                <MdOutlineAddAPhoto className="text-black text-center text-5xl opacity-20" />
              </Button>
            </div>
          ) : (
            <div
              className={buttonStyles.fileDisplay}
              style={{ position: "relative" }}
            >
              <img
                className="rounded-lg w-full h-[226px]  md:object-cover object-scale-down"
                src={URL.createObjectURL(file)}
                alt="Uploaded File"
              />
              <Button
                className={`close-btn absolute lg:top-0  top-8 opacity-0 right-1 m-2 ${buttonStyles.button}`}
                onClick={clearFile}
              >
                <CiCircleRemove className="text-3xl text-red-400" />
              </Button>
            </div>
          )
        }
      </FileButton>
    </>
  );
}

export default FileUpload;
