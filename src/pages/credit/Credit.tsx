import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CreditForUsePopup from "../../components/organisms/CreditForUsePopup";
import PaymentCard from "../../components/molecules/PaymentCard";
import useModalStore from "../../store/useModalStore";
import CreditPaymentPopup from "../../components/organisms/CreditPaymentPopup";
import usePaymentStore from "../../store/usePaymentStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import useUserStore from "../../store/useUserStore";
import LoginPopup from "../../components/organisms/LoginPopup";

export default function Credit() {
  const navigate = useNavigate();
  const [isCreditForUsePopupOpen, setIsCreditForUsePopupOpen] = useState(false);
  const { creditModal, setCreditModalOpen } = useModalStore();
  const { user } = useUserStore();
  const { setStatus } = usePaymentStore();
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  const handleClickBtn = (amount: string) => {
    if (!user) {
      setIsLoginPopupOpen(true);
    } else {
      setCreditModalOpen(true, amount);
    }
  };

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
  }, [setCreditModalOpen, setStatus]);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center p-4 md:p-10 gap-6 md:gap-24">
        <section className="card flex flex-col gap-4 w-[50%] md:w-1/5">
          <PaymentCard
            image="/images/credit/credit1.png"
            buttonLabel="크레딧 구매하기"
            onClick={() => handleClickBtn("10800")}
          />
        </section>
        <section className="card flex flex-col gap-4 w-[50%] md:w-1/5">
          <PaymentCard
            image="/images/credit/credit2.png"
            buttonLabel="크레딧 구매하기"
            onClick={() => handleClickBtn("28800")}
          />
        </section>
        <section className="card flex flex-col gap-4 w-[50%] md:w-1/5">
          <PaymentCard
            image="/images/credit/credit3.png"
            buttonLabel="크레딧 구매하기"
            onClick={() => handleClickBtn("84000")}
          />
        </section>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-5 px-4 md:px-[16vw]">
        <p className="text-gray-500 text-center md:text-left">
          * 위 상품의 최대 이용기간은 1년입니다.
        </p>
        <p
          className="text-blue-500 font-semibold flex items-center gap-1 cursor-pointer"
          onClick={() => navigate("/credit/refund-policy")}
        >
          환불정책 안내
          <FontAwesomeIcon icon={faChevronRight} />
        </p>
      </div>

      {isCreditForUsePopupOpen && (
        <CreditForUsePopup setIsOpen={setIsCreditForUsePopupOpen} />
      )}

      {creditModal.isOpen && <CreditPaymentPopup />}
      {isLoginPopupOpen && <LoginPopup setIsOpen={setIsLoginPopupOpen} />}
    </>
  );
}
