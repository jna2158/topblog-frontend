import React from "react";
import PaymentCard from "../../components/molecules/PaymentCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import ProPaymentPopup from "../../components/organisms/ProPaymentPopup";
import { useNavigate } from "react-router-dom";
import useModalStore from "../../store/useModalStore";
import { useEffect } from "react";
import usePaymentStore from "../../store/usePaymentStore";

export default function Pro() {
  const navigate = useNavigate();
  const { setProModalOpen, proModal } = useModalStore();
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
    handleModal("success", setProModalOpen);
  }, [setProModalOpen, setStatus]);

  return (
    <>
      <div className="center p-10 gap-24">
        <section className="card flex flex-col gap-4">
          <h2 className="text-4xl font-Jua font-semibold">30일</h2>
          <PaymentCard
            image="/images/pro/pro1.png"
            buttonLabel="프로버전 구매하기"
            onClick={() => setProModalOpen(true, 19900)}
          />
        </section>
        <section className="card flex flex-col gap-4">
          <h2 className="text-5xl font-Jua font-semibold">180일</h2>
          <PaymentCard
            image="/images/pro/pro2.png"
            buttonLabel="프로버전 구매하기"
            onClick={() => setProModalOpen(true, 52000)}
          />
        </section>
        <section className="card flex flex-col gap-4">
          <h2 className="text-4xl font-Jua font-semibold">365일</h2>
          <PaymentCard
            image="/images/pro/pro3.png"
            buttonLabel="프로버전 구매하기"
            onClick={() => setProModalOpen(true, 171000)}
          />
        </section>
      </div>

      <p
        className="text-gray-700 flex items-center gap-1 cursor-pointer pl-[9vw]"
        onClick={() => navigate("/pro/refund-policy")}
      >
        <FontAwesomeIcon icon={faCircleCheck} className="text-green-500" />
        환불정책 확인하기
      </p>

      {proModal.isOpen && <ProPaymentPopup />}
    </>
  );
}
