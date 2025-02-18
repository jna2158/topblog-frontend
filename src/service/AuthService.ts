import axios from "axios";

export const authService = {
  // 로그인
  login: async (email: string, password: string) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/account/login`,
      {
        email,
        password,
      }
    );
    return response.data;
  },
};
