import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CreditForUsePopup from "../../components/organisms/CreditForUsePopup";
import PaymentCard from "../../components/molecules/PaymentCard";
import useModalStore from "../../store/useModalStore";
import CreditPaymentPopup from "../../components/organisms/CreditPaymentPopup";
import usePaymentStore from "../../store/usePaymentStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Credit() {
  const navigate = useNavigate();
  const [isCreditForUsePopupOpen, setIsCreditForUsePopupOpen] = useState(false);
  const { creditModal, setCreditModalOpen } = useModalStore();

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
      <div className="center p-10 gap-24">
        <section className="card flex flex-col gap-4">
          <PaymentCard
            image="/images/credit/credit1.png"
            buttonLabel="크레딧 충전하기"
            onClick={() => setCreditModalOpen(true, "10000")}
          />
        </section>
        <section className="card flex flex-col gap-4">
          <PaymentCard
            image="/images/credit/credit2.png"
            buttonLabel="크레딧 충전하기"
            onClick={() => setCreditModalOpen(true, "30000")}
          />
        </section>
        <section className="card flex flex-col gap-4">
          <PaymentCard
            image="/images/credit/credit3.png"
            buttonLabel="크레딧 충전하기"
            onClick={() => setCreditModalOpen(true, "100000")}
          />
        </section>
      </div>

      <div className="flex flex-col gap-5 pl-[9vw]">
        <p
          className="text-gray-700 flex items-center gap-1 cursor-pointer"
          onClick={() => navigate("/credit/refund-policy")}
        >
          <FontAwesomeIcon icon={faCircleCheck} className="text-green-500" />
          환불정책 이용안내
        </p>

        <p
          className="text-gray-700 flex items-center gap-1 cursor-pointer"
          onClick={() => setIsCreditForUsePopupOpen(true)}
        >
          <FontAwesomeIcon icon={faCircleCheck} className="text-green-500" />
          크레딧 이용안내
        </p>
      </div>

      {isCreditForUsePopupOpen && (
        <CreditForUsePopup setIsOpen={setIsCreditForUsePopupOpen} />
      )}

      {creditModal.isOpen && <CreditPaymentPopup />}
    </>
  );
}
