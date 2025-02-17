import React from "react";
import Button from "../atoms/Button";

export default function ProRefundPolicyPopup({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <div className="popup-overlay">
      <div className="popup text-gray-500">
        <h1>프로버전 환불정책</h1>
        <p>
          <span>1. 환불 가능 시점</span>
        </p>
        <Button
          label="닫기"
          onClick={() => setIsOpen(false)}
          className="bg-gray-400 w-[30%]"
        />
      </div>
    </div>
  );
}
