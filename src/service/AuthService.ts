import axios from "axios";

class AuthService {
  // 로그인
  async login(email: string, password: string) {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/account/login`,
      {
        email,
        password,
      }
    );
    return response.data;
  }

  // 401 에러 처리를 위한 인터셉터 설정
  setupInterceptors(onUnauthorized: () => void) {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          onUnauthorized();
        }
        return Promise.reject(error);
      }
    );
  }
}

export const authService = new AuthService();
