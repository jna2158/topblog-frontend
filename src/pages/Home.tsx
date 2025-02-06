import React, { useEffect } from "react";
import Button from "../components/atoms/Button";
import PaymentPopup from "../components/organisms/PaymentPopup";
import useModalStore from "../store/useModalStore";

export default function Home() {
  const { paymentsModal, setPaymentsModalOpen } = useModalStore();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("success") === "true") {
      setPaymentsModalOpen(true);
    }
  }, [setPaymentsModalOpen]);

  return (
    <>
      <div>landing</div>
      <Button label="결제하기" onClick={() => setPaymentsModalOpen(true)} />
      {paymentsModal.isOpen && <PaymentPopup />}
    </>
  );
}
