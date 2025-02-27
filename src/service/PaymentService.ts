import axios from "axios";

export const paymentService = {
  // 결제 내역 조회
  getPaymentHistory: async (page: number, search: string) => {
    const token = localStorage.getItem("access");
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/payments/payments-list`,
      {
        params: {
          page,
          page_size: 10,
          search,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },
};
