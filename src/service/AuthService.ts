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
}

export const authService = new AuthService();
