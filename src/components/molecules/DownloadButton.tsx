import React from "react";
import Button from "../atoms/Button";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";

type DownloadButtonProps = {
  type: "windows" | "mac";
};

export default function DownloadButton({ type }: DownloadButtonProps) {
  return (
    <Button
      label={`${type} 다운로드`}
      onClick={() => {}}
      fontSize="18px"
      icon={type === "windows" ? faWindows : faApple}
      className="bg-gray-100 border border-gray-400 text-black hover:bg-gray-200"
    />
  );
}
