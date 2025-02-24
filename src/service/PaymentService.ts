import axios from "axios";

export const paymentService = {
  // 결제 처리
  payment: async (paymentKey: string, orderId: string, amount: number) => {
    const token = localStorage.getItem("access");
    console.log("token", token);
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/payments/confirm`,
      {
        paymentKey,
        orderId,
        amount,
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
