import axios from "axios";

export const paymentService = {

  // 크레딧 구매 신청하기
  purchaseCredit: async (amount: number) => {
    const token = localStorage.getItem("access");
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/payments/purchase-credit`,
      { amount }
    );
  },

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
