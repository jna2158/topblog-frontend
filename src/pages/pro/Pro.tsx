import React from "react";
import PaymentCard from "../../components/molecules/PaymentCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ProRefundPolicyPopup from "../../components/organisms/ProRefundPolicyPopup";
export default function Pro() {
  const [isRefundPolicyPopupOpen, setIsRefundPolicyPopupOpen] = useState(false);

  return (
    <>
      <div className="center p-10 gap-24">
        <PaymentCard
          image="/images/pro/pro1.png"
          buttonLabel="프로버전 구매하기"
          onClick={() => {}}
        />
        <PaymentCard
          image="/images/pro/pro2.png"
          buttonLabel="프로버전 구매하기"
          onClick={() => {}}
        />
        <PaymentCard
          image="/images/pro/pro3.png"
          buttonLabel="프로버전 구매하기"
          onClick={() => {}}
        />
      </div>

      <p
        className="text-gray-700 flex items-center gap-1 cursor-pointer pl-[9vw]"
        onClick={() => setIsRefundPolicyPopupOpen(true)}
      >
        <FontAwesomeIcon icon={faCircleCheck} className="text-green-500" />
        환불정책 확인하기
      </p>

      {isRefundPolicyPopupOpen && (
        <ProRefundPolicyPopup setIsOpen={setIsRefundPolicyPopupOpen} />
      )}
    </>
  );
}
