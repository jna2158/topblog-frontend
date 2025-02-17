import { downloadService } from "../service/DownloadService";

export default async function useDownloadProgram(os: "Windows" | "Mac") {
  const res = await downloadService.download(os);
  window.open(res.data.launcher_url, "_self");
}
