import { create } from "zustand";
import { persist } from "zustand/middleware";

// 결제 상태와 관련된 타입 정의
type PaymentState = {
  status: "pending" | "success" | "fail";
  setStatus: (status: "pending" | "success" | "fail") => void;
};

const usePaymentStore = create(
  persist<PaymentState>(
    (set) => ({
      status: "pending",
      setStatus: (status: "pending" | "success" | "fail") => {
        set({ status });
      },
    }),
    {
      name: "payment-storage",
    }
  )
);

export default usePaymentStore;
