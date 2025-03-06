import React from "react";
import Xmark from "../atoms/Xmark";
import useModalStore from "../../store/useModalStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import Button from "../atoms/Button";
import { paymentService } from "../../service/PaymentService";

export default function CreditModalStep1({
  data,
  setCreditModalStep,
  setDepositor,
}: {
  data: { amount: string; price: string };
  setCreditModalStep: (step: number) => void;
  setDepositor: (depositor: string) => void;
}) {
  const { setCreditModalOpen } = useModalStore();

  const formattedAmount = new Intl.NumberFormat().format(Number(data.amount));
  const formattedPrice = new Intl.NumberFormat().format(Number(data.price));

  const handleClickBtn = async () => {
    const res = await paymentService.purchaseCredit(
      Number(data.price),
      Number(data.amount)
    );
    setDepositor(res.data.random_username);
    setCreditModalStep(2);
  };

  return (
    <div className="popup-overlay">
      <div className="absolute popup w-96">
        <Xmark setIsOpen={setCreditModalOpen} />
        <div className="text-left">
          <header className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              크레딧 구매 안내
            </h2>
          </header>

          <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg shadow-sm p-4 mb-4">
            <FontAwesomeIcon
              icon={faMoneyCheckDollar}
              className="text-4xl text-blue-500 mr-3"
            />
            <div>
              <p className="text-2xl font-semibold">{formattedAmount} 크레딧</p>
              <p className="text-lg text-gray-600">
                결제금액:{" "}
                <span className="font-semibold text-red-500">
                  {formattedPrice}
                </span>
                원
              </p>
            </div>
          </div>

          <p className="text-gray-700 text-center mb-6">
            계좌이체로 간편하게 구매하세요!
          </p>
          <Button
            onClick={handleClickBtn}
            label="구매 신청하기"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 font-medium py-3 hover:opacity-90 transition-all"
          />
        </div>
      </div>
    </div>
  );
}
