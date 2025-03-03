import axios from "axios";

// Axios 인터셉터 설정
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 401 에러 처리
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized access - redirecting to login");
      window.location.href = "/";
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);
