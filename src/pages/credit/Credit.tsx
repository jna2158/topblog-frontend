import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CreditForUsePopup from "../../components/organisms/CreditForUsePopup";
import PaymentCard from "../../components/molecules/PaymentCard";
import { useNavigate } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import LoginPopup from "../../components/organisms/LoginPopup";
import useModalStore from "../../store/useModalStore";

export default function Credit() {
  const navigate = useNavigate();
  const [isCreditForUsePopupOpen, setIsCreditForUsePopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const { setCreditModalOpen } = useModalStore();

  // 크레딧 구매 안내 모달 열기
  const handleClickBtn = (amount: string) => {
    setCreditModalOpen(true, amount);
  };

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

      {isLoginPopupOpen && <LoginPopup setIsOpen={setIsLoginPopupOpen} />}
    </>
  );
}
