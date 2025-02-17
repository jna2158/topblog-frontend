import React, { useState } from "react";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router-dom";

export default function PaymentDropdownButton() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <span
      className="relative"
      onMouseEnter={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      <Button
        label="구매하기"
        onClick={() => {}}
        fontSize="1.3rem"
        className="bg-white text-gray-600"
      />
      {isDropdownVisible && (
        <div className="dropdown">
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
