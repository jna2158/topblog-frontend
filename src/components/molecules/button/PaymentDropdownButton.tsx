import React, { useState } from "react";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../../store/useUserStore";
import LoginPopup from "../../organisms/LoginPopup";
export default function PaymentDropdownButton() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useUserStore();

  return (
    <span
      className="relative"
      onMouseOver={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      <Button
        label="구매하기"
        onClick={() => {}}
        fontSize="1.3rem"
        className="bg-white text-gray-600"
      />
      {isDropdownVisible && (
        <div className="dropdown w-[150px]">
          <div
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              navigate("/credit");
            }}
          >
            크레딧 구매
          </div>
          <div
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              navigate("/pro");
            }}
          >
            프로버전 구매
          </div>
        </div>
      )}
    </span>
  );
}
