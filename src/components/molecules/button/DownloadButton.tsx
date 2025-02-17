import React from "react";
import Button from "../../atoms/Button";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import useDownloadProgram from "../../../hooks/useDownloadProgram";

type DownloadButtonProps = {
  os: "Windows" | "Mac";
};

export default function DownloadButton({ os }: DownloadButtonProps) {
  const downloadProgram = useDownloadProgram;

  return (
    <Button
      label={`${os} 다운로드`}
      onClick={() => downloadProgram(os)}
      fontSize="18px"
      icon={os === "Windows" ? faWindows : faApple}
      className="bg-gray-100 border border-gray-400 text-black hover:bg-gray-200"
    />
  );
}
