import React from "react";
import usePaymentStore from "../../store/usePaymentStore";

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
    <div className="popup-container">
      <div className="popup">
        <h1 className="text-3xl font-bold mb-4">결제를 완료했어요!</h1>
        <p className="text-lg mb-2">결제 키: {paymentKey}</p>
        <p className="text-lg mb-2">주문 ID: {orderId}</p>
        <p className="text-lg">결제 금액: {amount}원</p>
        <button className="button" onClick={handleClickConfirmBtn}>
          확인
        </button>
      </div>
    </div>
  );
}
