import React from "react";
import Button from "../atoms/Button";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { downloadService } from "../../service/DownloadService";

type DownloadButtonProps = {
  os: "Windows" | "Mac";
};

const handleDownload = async (os: string) => {
  const res = await downloadService.download(os);
  console.log(res.data.launcher_url);
  window.open(res.data.launcher_url, "_self");
};

export default function DownloadButton({ os }: DownloadButtonProps) {
  return (
    <Button
      label={`${os} 다운로드`}
      onClick={() => handleDownload(os)}
      fontSize="18px"
      icon={os === "Windows" ? faWindows : faApple}
      className="bg-gray-100 border border-gray-400 text-black hover:bg-gray-200"
    />
  );
}
