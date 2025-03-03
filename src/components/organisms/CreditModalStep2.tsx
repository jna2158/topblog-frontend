import React from "react";
import Xmark from "../atoms/Xmark";
import useModalStore from "../../store/useModalStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import Button from "../atoms/Button";

export default function CreditModalStep2({
  data,
}: {
  data: { amount: string; price: string };
}) {
  const { setCreditModalOpen } = useModalStore();

  const formattedPrice = new Intl.NumberFormat().format(Number(data.price));

  return (
    <div className="popup-overlay">
      <div className="absolute popup w-1/3">
        <div className="text-center mb-4">
          <FontAwesomeIcon
            icon={faMoneyCheckDollar}
            className="text-blue-500 text-5xl mb-2"
          />
          <h2 className="text-2xl font-bold text-gray-900">크레딧 구매 안내</h2>
        </div>

        <p className="text-lg font-semibold text-center text-gray-800 mb-4">
          크레딧 구매 신청이 완료되었습니다!
        </p>

        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              아래 계좌로{" "}
              <span className="text-xl font-bold text-blue-600">
                {formattedPrice}원
              </span>{" "}
              을 입금해주세요.
              <br />
              <div className="bg-white p-2 rounded-md border border-gray-300 inline-block mt-2">
                <span className="text-xl font-bold text-gray-700">
                  123-456-7890
                </span>
              </div>
            </li>
            <li>10분 이내로 계좌 조회 후 크레딧이 지급됩니다.</li>
            <li>
              입금자명을 반드시{" "}
              <span className="text-2xl font-bold text-red-500">지원_1100</span>{" "}
              로 입력해주어야 확인이 가능합니다.
            </li>
          </ol>
        </div>

        {/* 확인 버튼 */}
        <Button
          onClick={() => setCreditModalOpen(false)}
          label="확인"
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 font-medium py-3 mt-4 rounded-lg transition-all"
        />
      </div>
    </div>
  );
}
