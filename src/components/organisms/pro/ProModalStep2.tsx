import React from "react";
import useModalStore from "../../../store/useModalStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWebAwesome } from "@fortawesome/free-solid-svg-icons";
import Button from "../../atoms/Button";

export default function ProModalStep2({
  data,
  depositor,
}: {
  data: { day: number; amount: number };
  depositor: string;
}) {
  const { setProModalOpen } = useModalStore();

  const formattedPrice = new Intl.NumberFormat().format(Number(data.amount));

  return (
    <div className="popup-overlay">
      <div className="absolute popup w-auto">
        <div className="text-center mb-[1.5vw]">
          <FontAwesomeIcon
            icon={faWebAwesome}
            className="text-5xl text-yellow-400 mb-[0.5vw]"
          />
          <h2 className="text-[1.5vw] font-bold text-gray-900">
            {data.day}일 신청이 완료되었습니다!
          </h2>
        </div>

        {/* <p className="text-[1.1vw] text-center text-gray-800 mb-[1vw]">
          {data.day}일 버전 구매 신청이 완료되었습니다!
        </p> */}

        <p className="text-[1.2vw] text-center">
          <span className="font-bold">입금자명을 반드시</span>
          <div>
            <span className="text-[2vw] font-bold text-red-500 mx-[0.5vw]">
              {depositor}
            </span>
            <span className="font-bold">로 <br />입력</span>해주어야 확인이
            가능합니다.
          </div>
        </p>

        <div className="bg-gray-50 mt-[1vw] p-[1vw] rounded-lg shadow-sm text-[1.1vw]">
          <ol className="list-decimal list-inside text-gray-700 space-y-[0.8vw]">
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
            <li>
              10~20분 내 확인 후, 프로버전으로 자동 업그레이드됩니다.
            </li>
            <li>현 시간부로 30분 이내에 이체가 완료되어야 합니다.</li>
          </ol>
        </div>
        <Button
          onClick={() => setProModalOpen(false)}
          label="확인"
          className="w-full bg-gradient-to-r from-green-500 to-green-600 font-medium py-3 mt-[2vw] rounded-lg transition-all"
        />
      </div>
    </div>
  );
}
