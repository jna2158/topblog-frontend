import React, { useState, useEffect, useRef } from "react";
import Button from "../../atoms/Button";
import useDownloadProgram from "../../../hooks/useDownloadProgram";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DownloadDropdownButtonProps {
  drawClick?: () => void;
}

export default function DownloadDropdownButton({
  drawClick,
}: DownloadDropdownButtonProps) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const downloadProgram = useDownloadProgram;
  const dropdownRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDownload = (os: "Windows" | "Mac") => {
    setDropdownVisible(false);
    downloadProgram(os);
    drawClick?.();
  };

  return (
    <span className="relative hidden md:inline-block" ref={dropdownRef}>
      <Button
        label={
          <>
            다운로드 <FontAwesomeIcon icon={faDownload} />
          </>
        }
        onClick={() => setDropdownVisible(!isDropdownVisible)}
        className="bg-white text-gray-700 font-semibold hover:text-black"
      />
      {isDropdownVisible && (
        <ul className="dropdown">
          <li
            onClick={(event) => {
              handleDownload("Windows");
              event.stopPropagation();
              drawClick?.();
            }}
          >
            Windows
          </li>
          <li
            onClick={(event) => {
              handleDownload("Mac");
              event.stopPropagation();
              drawClick?.();
            }}
          >
            Mac
          </li>
        </ul>
      )}
    </span>
  );
}
