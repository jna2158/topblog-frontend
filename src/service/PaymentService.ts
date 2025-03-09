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

  // 크레딧 환불 신청하기
  refundCredit: async (id: string) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/payments/calculate-refund-credit`,
      {
        params: {
          payment_id: id,
        },
      }
    );
    return response.data;
  },

  // 프로버전 환불 신청하기
  refundPro: async (id: string) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/payments/calculate-refund-pro`,
      {
        params: {
          payment_id: id,
        },
      }
    );
    return response.data;
  },

  // 결제 내역 조회
  getPaymentHistory: async (page: number, query: string | "") => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/payments/payment-history`,
      {
        params: {
          page,
          query,
        },
      }
    );
    return response.data;
  },
};
