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

  // URL 파라미터에 따라 모달을 여는 함수
  const handleModalOpen = (
    param: string,
    setModalOpen: (open: boolean) => void
  ) => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get(param);

    switch (status) {
      case "true":
        setModalOpen(true);
        setStatus("success");
        break;
      case "false":
        setModalOpen(true);
        setStatus("fail");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleModalOpen("success", setCreditModalOpen);
  }, [setCreditModalOpen, setStatus]);

  useEffect(() => {
    handleModalOpen("pro", setProModalOpen);
  }, [setProModalOpen, setStatus]);

  const imageStyle = { width: "100%", maxWidth: "1000px", margin: "0 auto" };
  const relativeStyle = {
    position: "relative" as const,
    width: "100%",
    margin: "0 auto",
    maxWidth: "1000px",
  };

  return (
    <>
      <div style={relativeStyle}>
        <img
          src="/images/topblog_1_01.jpg"
          alt="logo"
          style={{ width: "100%" }}
        />
      </div>

      <div style={relativeStyle}>
        <img
          src="/images/topblog_1_02.gif"
          alt="logo"
          style={{ width: "100%" }}
        />
      </div>

      <img src="/images/topblog_1_03.jpg" alt="logo" style={imageStyle} />
      <img src="/images/topblog_1_04.jpg" alt="logo" style={imageStyle} />
      <img src="/images/topblog_1_05.jpg" alt="logo" style={imageStyle} />
      <img src="/images/topblog_1_06.jpg" alt="logo" style={imageStyle} />
      <img src="/images/topblog_1_07.jpg" alt="logo" style={imageStyle} />
      <img src="/images/topblog_1_08.jpg" alt="logo" style={imageStyle} />

      <div style={relativeStyle}>
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

      <img src="/images/topblog_1_10.jpg" alt="logo" style={imageStyle} />
      <img src="/images/topblog_1_11.jpg" alt="logo" style={imageStyle} />
      <img src="/images/topblog_1_12.jpg" alt="logo" style={imageStyle} />

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
