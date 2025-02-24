import React from "react";
import Button from "../../atoms/Button";
import useUserStore from "../../../store/useUserStore";
import { v4 as uuidv4 } from "uuid";

export default function CreditPaymentButton({
  widgets,
  amount,
}: {
  widgets: any;
  amount: number;
}) {
  const { user } = useUserStore();

  const creditToAmount: { [key: number]: number } = {
    10800: 10000,
    28800: 30000,
    84000: 100000,
  };

  const handleClickPaymentBtn = async () => {
    if (!widgets) return;
    if (!user) return;

    try {
      await widgets.requestPayment({
        orderId: uuidv4(),
        orderName: "크레딧 충전",
        successUrl:
          window.location.href +
          "?success=true&credit=" +
          creditToAmount[Number(amount)] +
          "&amount=" +
          amount,
        failUrl:
          window.location.href +
          "?success=false&credit=" +
          creditToAmount[Number(amount)] +
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
      className="ml-[2.5%] bg-blue-400 w-[95%]"
      onClick={handleClickPaymentBtn}
    />
  );
}
