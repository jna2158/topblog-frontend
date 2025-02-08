import React, { useEffect } from "react";
import Button from "../components/atoms/Button";
import CreditPaymentPopup from "../components/organisms/CreditPaymentPopup";
import useModalStore from "../store/useModalStore";
import usePaymentStore from "../store/usePaymentStore";

export default function Home() {
  const { paymentsModal, setPaymentsModalOpen } = useModalStore();
  const { setStatus } = usePaymentStore();

  // 결제 완료 후 결제완료 팝업 열기
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("success");

    switch (status) {
      case "true":
        setPaymentsModalOpen(true);
        setStatus("success");
        break;
      case "false":
        setPaymentsModalOpen(true);
        setStatus("fail");
        break;
      default:
        setPaymentsModalOpen(false);
        setStatus("pending");
        break;
    }
  }, [setPaymentsModalOpen, setStatus]);

  return (
    <>
      <Button
        label="크레딧 충전하기"
        onClick={() => setPaymentsModalOpen(true)}
      />
      {paymentsModal.isOpen && <CreditPaymentPopup />}
    </>
  );
}
