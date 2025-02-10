import React from "react";
import usePaymentStore from "../../store/usePaymentStore";

export default function Success() {
  const { setStatus } = usePaymentStore();

  const handleClickConfirmBtn = () => {
    setStatus("pending");
    window.location.href = "/";
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h1 className="text-3xl font-bold mb-4">
          정기 결제 요청을 완료했어요!
        </h1>
        <p className="text-lg">결제 금액: 19,900원</p>
        <button className="button" onClick={handleClickConfirmBtn}>
          확인
        </button>
      </div>
    </div>
  );
}
