import React from "react";
import Button from "../atoms/Button";
import usePaymentStore from "../../store/usePaymentStore";

export default function PaymentButton({ widgets }: { widgets: any }) {
  const { status, setStatus } = usePaymentStore();

  const handleClickPaymentBtn = async () => {
    if (!widgets) return;
    console.log("1번");
    try {
      await widgets.requestPayment({
        orderId: "Z8FY0cyOVhKYDFZNlj1iI",
        orderName: "토스 티셔츠 외 2건",
        successUrl: window.location.href + "?success=true",
        failUrl: window.location.href + "?success=false",
        customerEmail: "customer123@gmail.com",
        customerName: "김토스",
        customerMobilePhone: "01012341234",
      });
    } catch (error) {
      console.error("결제 요청 중 오류가 발생했습니다", error);
    }
  };

  return <Button label="결제하기" onClick={handleClickPaymentBtn} />;
}
