import React from "react";
import Button from "../atoms/Button";

export default function PaymentButton({
  widgets,
  onSuccess,
}: {
  widgets: any;
  onSuccess: () => void;
}) {
  const handleClickPaymentBtn = async () => {
    if (!widgets) return;

    try {
      await widgets.requestPayment({
        orderId: "Z8FY0cyOVhKYDFZNlj1iI",
        orderName: "토스 티셔츠 외 2건",
        successUrl: window.location.href + "?success=true",
        failUrl: window.location.origin + "/fail",
        customerEmail: "customer123@gmail.com",
        customerName: "김토스",
        customerMobilePhone: "01012341234",
      });
      onSuccess();
    } catch (error) {
      console.error("결제 요청 중 오류가 발생했습니다", error);
    }
  };

  return <Button label="결제하기" onClick={handleClickPaymentBtn} />;
}
