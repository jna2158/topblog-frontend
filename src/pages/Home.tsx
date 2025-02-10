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
      <div
        style={{
          position: "relative",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <img
          src="/images/topblog_1_01.jpg"
          alt="logo"
          style={{ width: "100%" }}
        />
        <button
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            border: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          버튼
        </button>
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <img
          src="/images/topblog_1_02.gif"
          alt="logo"
          style={{ width: "100%" }}
        />
      </div>
      <img
        src="/images/topblog_1_03.jpg"
        alt="logo"
        style={{ width: "100%" }}
      />
      <img
        src="/images/topblog_1_04.jpg"
        alt="logo"
        style={{ width: "100%" }}
      />
      <img
        src="/images/topblog_1_05.jpg"
        alt="logo"
        style={{ width: "100%" }}
      />
      <img
        src="/images/topblog_1_06.jpg"
        alt="logo"
        style={{ width: "100%" }}
      />
      <img
        src="/images/topblog_1_07.jpg"
        alt="logo"
        style={{ width: "100%" }}
      />
      <img
        src="/images/topblog_1_08.jpg"
        alt="logo"
        style={{ width: "100%" }}
      />
      <div
        style={{
          position: "relative",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <img
          src="/images/topblog_1_09.gif"
          alt="gif"
          style={{
            position: "absolute",
            top: "8%",
            width: "100%",
          }}
        />
        <img
          src="/images/topblog_1_09.jpg"
          alt="logo"
          style={{ width: "100%" }}
        />
      </div>
      <img
        src="/images/topblog_1_10.jpg"
        alt="logo"
        style={{ width: "100%" }}
      />
      <img
        src="/images/topblog_1_11.jpg"
        alt="logo"
        style={{ width: "100%" }}
      />
      <img
        src="/images/topblog_1_12.jpg"
        alt="logo"
        style={{ width: "100%" }}
      />

      {/* <Button
        label="크레딧 충전하기"
        onClick={() => setCreditModalOpen(true)}
      />
      {creditModal.isOpen && <CreditPaymentPopup />}

      <Button label="Pro 버전 결제하기" onClick={() => setProModalOpen(true)} />
      {proModal.isOpen && <ProPaymentPopup />}

      <Button label="환불하기" onClick={() => {}} /> */}
    </>
  );
}
