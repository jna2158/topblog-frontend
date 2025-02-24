import React from "react";
import usePaymentStore from "../../store/usePaymentStore";
import Button from "../../components/atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { paymentService } from "../../service/PaymentService";
import { useEffect } from "react";

export default function Success() {
  const urlParams = new URLSearchParams(window.location.search);
  const paymentKey = urlParams.get("paymentKey");
  const orderId = urlParams.get("orderId");
  const amount = urlParams.get("amount");
  const credit = urlParams.get("credit");

  const { setStatus } = usePaymentStore();

  // 결제 승인 요청
  useEffect(() => {
    if (!paymentKey || !orderId || !amount) return;

    paymentService.creditPayment(
      paymentKey,
      orderId,
      Number(amount),
      Number(credit)
    );
  }, [amount, orderId, paymentKey, credit]);

  const handleClickConfirmBtn = () => {
    setStatus("pending");
    window.location.href = "/credit";
  };

  return (
    <div className="popup-overlay">
      <div className="popup center flex-col gap-4 p-10 w-1/4">
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="text-blue-500 text-8xl"
        />

        <h1 className="text-3xl font-semibold mb-4">결제를 완료했어요</h1>
        <p className="text-sm text-gray-500">
          결제 내역은 결제/환불 내역 페이지를 통해 확인할 수 있어요
        </p>
        <Button
          label="확인"
          onClick={handleClickConfirmBtn}
          className="w-full bg-blue-400"
        />
      </div>
    </div>
  );
}
