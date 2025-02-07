import React, { useEffect } from "react";
import Button from "../components/atoms/Button";
import PaymentPopup from "../components/organisms/PaymentPopup";
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
      <Button label="결제하기" onClick={() => setPaymentsModalOpen(true)} />
      {paymentsModal.isOpen && <PaymentPopup />}
    </>
  );
}
