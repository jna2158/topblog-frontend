import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CreditRefundPolicyPopup from "../../components/organisms/CreditRefundPolicyPopup";
import CreditForUsePopup from "../../components/organisms/CreditForUsePopup";
import PaymentCard from "../../components/molecules/PaymentCard";

export default function Credit() {
  const [isRefundPolicyPopupOpen, setIsRefundPolicyPopupOpen] = useState(false);
  const [isCreditForUsePopupOpen, setIsCreditForUsePopupOpen] = useState(false);

  return (
    <>
      <div className="center p-10 gap-24">
        <PaymentCard
          image="/images/credit/credit1.png"
          buttonLabel="크레딧 충전하기"
          onClick={() => {}}
        />
        <PaymentCard
          image="/images/credit/credit2.png"
          buttonLabel="크레딧 충전하기"
          onClick={() => {}}
        />
        <PaymentCard
          image="/images/credit/credit3.png"
          buttonLabel="크레딧 충전하기"
          onClick={() => {}}
        />
      </div>

      <div className="flex flex-col gap-5 pl-[9vw]">
        <p
          className="text-gray-700 flex items-center gap-1 cursor-pointer"
          onClick={() => setIsRefundPolicyPopupOpen(true)}
        >
          <FontAwesomeIcon icon={faCircleCheck} className="text-green-500" />
          환불정책 확인하기
        </p>

        <p
          className="text-gray-700 flex items-center gap-1 cursor-pointer"
          onClick={() => setIsCreditForUsePopupOpen(true)}
        >
          <FontAwesomeIcon icon={faCircleCheck} className="text-green-500" />
          크레딧 이용안내
        </p>
      </div>

      {isRefundPolicyPopupOpen && (
        <CreditRefundPolicyPopup setIsOpen={setIsRefundPolicyPopupOpen} />
      )}

      {isCreditForUsePopupOpen && (
        <CreditForUsePopup setIsOpen={setIsCreditForUsePopupOpen} />
      )}
    </>
  );
}
