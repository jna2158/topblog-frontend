import React from "react";
import usePaymentStore from "../../store/usePaymentStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/atoms/Button";

export default function Success() {
  const urlParams = new URLSearchParams(window.location.search);
  const paymentKey = urlParams.get("paymentKey");
  const orderId = urlParams.get("orderId");
  const amount = urlParams.get("amount");
  const { setStatus } = usePaymentStore();

  const handleClickConfirmBtn = () => {
    setStatus("pending");
    window.location.href = "/";
  };

  return (
    <div className="popup-overlay">
      <div className="popup center flex-col gap-4 p-10 w-1/4">
        <FontAwesomeIcon
          icon={faCircleExclamation}
          className="text-red-500 text-8xl"
        />

        <h1 className="text-3xl font-semibold mb-4">결제를 실패했어요..</h1>
        <p className="text-sm text-gray-500">
          자세한 사항은 카카오톡 채널을 통해 문의해주세요.
        </p>
        <Button
          label="확인"
          onClick={handleClickConfirmBtn}
          className="w-full bg-red-400"
        />
      </div>
    </div>
  );
}
