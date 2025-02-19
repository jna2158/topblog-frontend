import React, { useState } from "react";
import Button from "../../atoms/Button";
import useDownloadProgram from "../../../hooks/useDownloadProgram";

export default function PaymentDropdownButton() {
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
        fontSize="1.3rem"
        className="bg-white text-gray-600"
      />
      {isDropdownVisible && (
        <div className="dropdown w-[180px]">
          <div
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => downloadProgram("Windows")}
          >
            Windows 다운로드
          </div>
          <div
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => downloadProgram("Mac")}
          >
            Mac 다운로드
          </div>
        </div>
      )}
    </span>
  );
}
