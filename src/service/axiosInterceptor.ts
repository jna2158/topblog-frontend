import axios from "axios";

// Axios 인터셉터 설정
axios.interceptors.request.use(
  (config) => {
    // 요청이 전송되기 전에 작업 수행
    console.log("Request sent:", config);
    return config;
  },
  (error) => {
    // 요청 오류가 있는 경우 작업 수행
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // 응답 데이터가 있는 경우 작업 수행
    console.log("Response received:", response);
    return response;
  },
  (error) => {
    // 응답 오류가 있는 경우 작업 수행
    if (error.response && error.response.status === 401) {
      // 401 에러 처리
      console.log("Unauthorized access - redirecting to login");
      window.location.href = "/";
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);
