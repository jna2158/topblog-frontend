import React from "react";
import PaymentCard from "../../components/molecules/PaymentCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import LoginPopup from "../../components/organisms/LoginPopup";
import useModalStore from "../../store/useModalStore";
import ProModalStep1 from "../../components/organisms/pro/ProModalStep1";
import ProModalStep2 from "../../components/organisms/pro/ProModalStep2";

export default function Pro() {
  const navigate = useNavigate();
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const { setProModalOpen, proModal } = useModalStore();
  const [proModalStep, setProModalStep] = useState(1);
  const [depositor, setDepositor] = useState("");

  const handleClickBtn = (amount: number, day: number) => {
    setProModalOpen(true, { day, amount });
    setProModalStep(1);
  };

  return (
    <>
      <div className="center p-10 gap-24">
        <section className="card flex flex-col gap-4">
          <h2 className="text-4xl font-Jua font-semibold">30일</h2>
          <PaymentCard
            image="/images/pro/pro1.png"
            buttonLabel="프로버전 구매하기"
            onClick={() => handleClickBtn(19900, 30)}
          />
        </section>
        <section className="card flex flex-col gap-4">
          <h2 className="text-5xl font-Jua font-semibold">180일</h2>
          <PaymentCard
            image="/images/pro/pro2.png"
            buttonLabel="프로버전 구매하기"
            onClick={() => handleClickBtn(52000, 180)}
          />
        </section>
        <section className="card flex flex-col gap-4">
          <h2 className="text-4xl font-Jua font-semibold">365일</h2>
          <PaymentCard
            image="/images/pro/pro3.png"
            buttonLabel="프로버전 구매하기"
            onClick={() => handleClickBtn(171000, 365)}
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

      {proModal.isOpen && proModalStep === 1 && (
        <ProModalStep1
          data={proModal.data}
          setProModalStep={setProModalStep}
          setDepositor={setDepositor}
        />
      )}

      {proModal.isOpen && proModalStep === 2 && (
        <ProModalStep2 data={proModal.data} depositor={depositor} />
      )}
    </>
  );
}
