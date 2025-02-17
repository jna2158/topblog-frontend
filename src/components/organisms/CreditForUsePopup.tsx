import React from "react";
import Button from "../atoms/Button";

export default function CreditForUsePopup({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <div className="popup-overlay">
      <div className="popup text-gray-500">
        <h1>크레딧 이용안내</h1>
        <p>
          <span>1. 크레딧 이용안내</span>
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
