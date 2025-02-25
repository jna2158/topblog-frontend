import React from "react";
import Button from "../../atoms/Button";
import useUserStore from "../../../store/useUserStore";
import { v4 as uuidv4 } from "uuid";

export default function ProPaymentButton({
  widgets,
  amount,
}: {
  widgets: any;
  amount: number;
}) {
  const { user } = useUserStore();

  const proToDays: { [key: number]: number } = {
    19900: 30,
    52000: 180,
    171000: 365,
  };

  const handleClickPaymentBtn = async () => {
    if (!widgets) return;
    if (!user) return;

    try {
      await widgets.requestPayment({
        orderId: uuidv4(),
        orderName: "Pro 버전 구매",
        successUrl:
          window.location.href +
          "?success=true&days=" +
          proToDays[Number(amount)] +
          "&amount=" +
          amount,
        failUrl:
          window.location.href +
          "?success=false&days=" +
          proToDays[Number(amount)] +
          "&amount=" +
          amount,
        customerEmail: user.email,
        customerName: user.name,
      });
    } catch (error) {
      console.error("결제 요청 중 오류가 발생했습니다", error);
    }
  };

  return (
    <Button
      label="결제하기"
      onClick={handleClickPaymentBtn}
      className="bg-blue-400 w-[95%]"
    />
  );
}
