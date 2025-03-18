import React, { useState } from "react";
import Button from "../../atoms/Button";
import useDownloadProgram from "../../../hooks/useDownloadProgram";

export default function DownloadDropdownButton() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const downloadProgram = useDownloadProgram;

  return (
    <span
      className="relative"
      onMouseEnter={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      <Button
        label="다운로드"
        onClick={() => {}}
        fontSize="1.3vw"
        className="bg-white text-gray-600"
      />
      {isDropdownVisible && (
        <div className="dropdown w-[10vw]">
          <div
            className="text-[1vw] p-2 hover:bg-gray-100 cursor-pointer"
            onClick={(event) => {
              setDropdownVisible(false);
              downloadProgram("Windows");
              event.stopPropagation();
            }}
          >
            Windows 다운로드
          </div>
          <div
            className="text-[1vw] p-2 hover:bg-gray-100 cursor-pointer"
            onClick={(event) => {
              setDropdownVisible(false);
              downloadProgram("Mac");
              event.stopPropagation();
            }}
          >
            Mac 다운로드
          </div>
        </div>
      )}
    </span>
  );
}