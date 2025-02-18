import React from "react";
import usePaymentStore from "../../store/usePaymentStore";
import Button from "../../components/atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Success() {
  const urlParams = new URLSearchParams(window.location.search);
  const paymentKey = urlParams.get("paymentKey");
  const orderId = urlParams.get("orderId");
  const amount = urlParams.get("amount");
  const { setStatus } = usePaymentStore();

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
        <Button
          label="확인"
          onClick={handleClickConfirmBtn}
          className="w-full bg-blue-400"
        />
      </div>
    </div>
  );
}
