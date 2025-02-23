import axios from "axios";

export const paymentService = {
  // 크레딧 결제 처리
  creditPayment: async (
    paymentKey: string,
    orderId: string,
    amount: number,
    credit: number
  ) => {
    const token = localStorage.getItem("access");
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/payments/confirm-credit`,
      {
        paymentKey,
        orderId,
        amount,
        credit,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },
};
