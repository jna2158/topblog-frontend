import React from "react";
import Xmark from "../../atoms/Xmark";
import useModalStore from "../../../store/useModalStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWebAwesome } from "@fortawesome/free-solid-svg-icons";
import Button from "../../atoms/Button";
import { paymentService } from "../../../service/PaymentService";

export default function ProModalStep1({
  data,
  setProModalStep,
  setDepositor,
}: {
  data: { day: number; amount: number };
  setProModalStep: (step: number) => void;
  setDepositor: (depositor: string) => void;
}) {
  const { setProModalOpen } = useModalStore();

  const formattedPrice = new Intl.NumberFormat().format(Number(data.amount));

  const handleClickBtn = async () => {
    const res = await paymentService.purchasePro(Number(data.amount), data.day);
    setDepositor(res.data.random_username);
    setProModalStep(2);
  };

  return (
    <div className="popup-overlay">
      <div className="absolute popup w-96">
        <Xmark setIsOpen={setProModalOpen} />
        <div className="text-left">
          <header className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pro 버전 구매 안내
            </h2>
          </header>

          <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg shadow-sm p-4 mb-4">
            <FontAwesomeIcon
              icon={faWebAwesome}
              className="text-4xl text-yellow-400 mr-3"
            />
            <div>
              <p className="text-2xl font-semibold">{data.day}일 버전 구매</p>
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
            className="w-full bg-gradient-to-r from-green-500 to-green-600 font-medium py-3 hover:opacity-90 transition-all"
          />
        </div>
      </div>
    </div>
  );
}
