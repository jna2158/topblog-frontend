import axios from "axios";

export const downloadService = {
  // 다운로드 URL 요청
  download: async (os: string) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/update-checker/launcher-url`,
      {
        params: {
          os,
        },
      }
    );
    return response.data;
  },
};
