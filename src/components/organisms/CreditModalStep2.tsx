import React from "react";
import Xmark from "../atoms/Xmark";
import useModalStore from "../../store/useModalStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import Button from "../atoms/Button";

export default function CreditModalStep2({
  data,
  depositor,
}: {
  data: { amount: string; price: string };
  depositor: string;
}) {
  const { setCreditModalOpen } = useModalStore();

  const formattedPrice = new Intl.NumberFormat().format(Number(data.price));

  return (
    <div className="popup-overlay">
      <div className="absolute popup w-1/3">
        <div className="text-center mb-[1.5vw]">
          <FontAwesomeIcon
            icon={faMoneyCheckDollar}
            className="text-blue-500 text-[3.5vw] mb-[0.5vw]"
          />
          <h2 className="text-[1.5vw] font-bold text-gray-900">
            크레딧 신청이 완료되었습니다!
          </h2>
        </div>

        {/* <p className="text-[1.1vw] text-center text-gray-800">
          크레딧 구매 신청이 완료되었습니다!
          <br />
        </p> */}

        <p className="text-[1.2vw] text-center">
          <span className="font-bold">입금자명을 반드시</span>
          <div className="mt-[-0.5vw]">
            <span className="text-[2vw] font-bold text-red-500 mx-[0.5vw]">
              {depositor}
            </span>
            <span className="font-bold">로 입력</span>해주어야 확인이
            가능합니다.
          </div>
        </p>

        <div className="bg-gray-50 mt-[1vw] p-[1vw] rounded-lg shadow-sm text-[1.1vw]">
          <ol className="list-decimal list-inside text-gray-700">
            <li>
              아래 계좌로{" "}
              <span className="text-[1.2vw] font-bold text-blue-600">
                {formattedPrice}원
              </span>{" "}
              을 입금해주세요.
              <br />
              <div className="bg-white p-[0.6vw] rounded-md border border-gray-300 inline-block mt-[1vw]">
                <span className="text-[1.2vw] font-bold text-gray-700">
                  국민{" "}
                  <span className="text-[1.2vw] font-bold">
                    040037-04-008437
                  </span>{" "}
                  조재영(틴터뷰)
                </span>
              </div>
            </li>
            <li className="mt-[0.8vw]">
              10~20분 내 확인 후, 자동으로 크레딧이 지급됩니다.
            </li>
            <li className="mt-[0.8vw]">
              현 시간부로 30분 이내에 이체가 완료되어야 합니다.
            </li>
          </ol>
        </div>

        {/* 확인 버튼 */}
        <Button
          onClick={() => setCreditModalOpen(false)}
          label="확인"
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 font-medium mt-[2vw] rounded-lg transition-all"
        />
      </div>
    </div>
  );
}
