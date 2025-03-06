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
      <div className="absolute popup w-1/3">
        <div className="text-center mb-4">
          <FontAwesomeIcon
            icon={faWebAwesome}
            className="text-5xl text-yellow-400 mr-3"
          />
          <h2 className="text-2xl font-bold text-gray-900">
            Pro 버전 구매 안내
          </h2>
        </div>

        <p className="text-lg font-semibold text-center text-gray-800 mb-4">
          {data.day}일 버전 구매 신청이 완료되었습니다!
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
            <li>
              10분 ~ 20분 이내로 계좌 조회 후 프로 버전으로 업그레이드됩니다.
            </li>
            <li>
              입금자명을 반드시{" "}
              <span className="text-2xl font-bold text-red-500">
                {depositor}
              </span>{" "}
              로 입력해주어야 확인이 가능합니다.
            </li>
          </ol>
        </div>
        <Button
          onClick={() => setProModalOpen(false)}
          label="확인"
          className="w-full bg-gradient-to-r from-green-500 to-green-600 font-medium py-3 mt-4 rounded-lg transition-all"
        />
      </div>
    </div>
  );
}
