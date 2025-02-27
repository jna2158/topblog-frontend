import React from "react";
import PaymentCard from "../../components/molecules/PaymentCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import LoginPopup from "../../components/organisms/LoginPopup";

export default function Pro() {
  const navigate = useNavigate();
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  const handleClickBtn = (amount: number) => {
    // 프로버전 구매 안내 모달 열기
  };

  return (
    <>
      <div className="center p-10 gap-24">
        <section className="card flex flex-col gap-4">
          <h2 className="text-4xl font-Jua font-semibold">30일</h2>
          <PaymentCard
            image="/images/pro/pro1.png"
            buttonLabel="프로버전 구매하기"
            onClick={() => handleClickBtn(19900)}
          />
        </section>
        <section className="card flex flex-col gap-4">
          <h2 className="text-5xl font-Jua font-semibold">180일</h2>
          <PaymentCard
            image="/images/pro/pro2.png"
            buttonLabel="프로버전 구매하기"
            onClick={() => handleClickBtn(52000)}
          />
        </section>
        <section className="card flex flex-col gap-4">
          <h2 className="text-4xl font-Jua font-semibold">365일</h2>
          <PaymentCard
            image="/images/pro/pro3.png"
            buttonLabel="프로버전 구매하기"
            onClick={() => handleClickBtn(171000)}
          />
        </section>
      </div>

      <p
        className="text-blue-500 font-semibold flex items-center gap-1 cursor-pointer px-[16vw]"
        onClick={() => navigate("/pro/refund-policy")}
      >
        환불정책 안내
        <FontAwesomeIcon icon={faChevronRight} />
      </p>

      {isLoginPopupOpen && <LoginPopup setIsOpen={setIsLoginPopupOpen} />}
    </>
  );
}
