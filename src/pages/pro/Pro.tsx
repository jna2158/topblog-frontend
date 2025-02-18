import React from "react";
import PaymentCard from "../../components/molecules/PaymentCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

export default function Pro() {
  const navigate = useNavigate();

  return (
    <>
      <div className="center p-10 gap-24">
        <section className="card flex flex-col gap-4">
          <h2 className="text-4xl font-Jua font-semibold">30일</h2>
          <PaymentCard
            image="/images/pro/pro1.png"
            buttonLabel="프로버전 구매하기"
            onClick={() => {}}
          />
        </section>
        <section className="card flex flex-col gap-4">
          <h2 className="text-5xl font-Jua font-semibold">180일</h2>
          <PaymentCard
            image="/images/pro/pro2.png"
            buttonLabel="프로버전 구매하기"
            onClick={() => {}}
          />
        </section>
        <section className="card flex flex-col gap-4">
          <h2 className="text-4xl font-Jua font-semibold">365일</h2>
          <PaymentCard
            image="/images/pro/pro3.png"
            buttonLabel="프로버전 구매하기"
            onClick={() => {}}
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
    </>
  );
}
