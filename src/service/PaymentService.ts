import axios from "axios";

export const paymentService = {
  // 크레딧 구매 신청하기
  purchaseCredit: async (price: number, amount: number) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/payments/random-username`,
      { amount_schedule: price, product: "credit " + amount }
    );
    return response.data;
  },

  // 프로버전 구매 신청하기
  purchasePro: async (price: number, day: number) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/payments/random-username`,
      { amount_schedule: price, product: "pro " + day }
    );
    return response.data;
  },
  // 결제 내역 조회
  getPaymentHistory: async (page: number, search: string) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/payments/payments-list`,
      {
        params: {
          page,
          page_size: 10,
          search,
        },
      }
    );
    return response.data;
  },
};
