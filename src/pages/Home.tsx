import React, { useEffect } from "react";
import Button from "../components/atoms/Button";
import useModalStore from "../store/useModalStore";
import usePaymentStore from "../store/usePaymentStore";
import CreditPaymentPopup from "../components/organisms/CreditPaymentPopup";
import ProPaymentPopup from "../components/organisms/ProPaymentPopup";

export default function Home() {
  const { creditModal, setCreditModalOpen } = useModalStore();
  const { proModal, setProModalOpen } = useModalStore();
  const { setStatus } = usePaymentStore();

  // 결제 완료 후 결제완료 팝업 열기
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("success");
    switch (status) {
      case "true":
        setCreditModalOpen(true);
        setStatus("success");
        break;
      case "false":
        setCreditModalOpen(true);
        setStatus("fail");
        break;
      default:
        break;
    }
  }, [setCreditModalOpen, setStatus]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("pro");

    switch (status) {
      case "true":
        setProModalOpen(true);
        setStatus("success");
        break;
      case "false":
        setProModalOpen(true);
        setStatus("fail");
        break;
      default:
        break;
    }
  }, [setProModalOpen, setStatus]);
  return (
    <>
      <Button
        label="크레딧 충전하기"
        onClick={() => setCreditModalOpen(true)}
      />
      {creditModal.isOpen && <CreditPaymentPopup />}

      <Button label="Pro 버전 결제하기" onClick={() => setProModalOpen(true)} />
      {proModal.isOpen && <ProPaymentPopup />}
    </>
  );
}
