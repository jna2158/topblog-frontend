import React, { useEffect } from "react";
import useModalStore from "../store/useModalStore";
import usePaymentStore from "../store/usePaymentStore";
import GlobalNavigationBar from "../components/organisms/GlobalNavigationBar";
import CardList from "../components/organisms/CardList";
import BackgroundImageContainer from "../components/organisms/BackgroundImageContainer";
import DownloadButton from "../components/molecules/DownloadButton";

export default function Home() {
  const { setCreditModalOpen } = useModalStore();
  const { setProModalOpen } = useModalStore();
  const { setStatus } = usePaymentStore();

  // URL 파라미터에 따라 모달 열기 및 상태 설정
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const handleModal = (
      param: string,
      setModalOpen: (open: boolean) => void
    ) => {
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

    handleModal("success", setCreditModalOpen);
    handleModal("pro", setProModalOpen);
  }, [setCreditModalOpen, setProModalOpen, setStatus]);

  return (
    <>
      <GlobalNavigationBar />
      <CardList />
      <section className="center gap-4 mt-12 mb-10">
        <DownloadButton os="Windows" />
        <DownloadButton os="Mac" />
      </section>
      <BackgroundImageContainer />

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
