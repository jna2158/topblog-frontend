import React from "react";
import Button from "../../atoms/Button";
import useUserStore from "../../../store/useUserStore";

export default function ProPaymentButton({ widgets }: { widgets: any }) {
  const { user } = useUserStore();

  const handleClickPaymentBtn = async () => {
    if (!widgets) return;
    if (!user) return;

    try {
      await widgets.requestPayment({
        orderId: "Z8FY0cyOVhKYDFZNlj1iI",
        orderName: "Pro 버전 구매",
        successUrl: window.location.href + "?success=true",
        failUrl: window.location.href + "?success=false",
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
