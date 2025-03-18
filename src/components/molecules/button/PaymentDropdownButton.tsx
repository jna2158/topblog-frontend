import React, { useState } from "react";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router-dom";

export default function PaymentDropdownButton() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <span
      className="relative"
      onMouseOver={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      <Button
        label="구매하기"
        onClick={() => {}}
        fontSize="1.3vw"
        className="bg-white text-gray-600"
      />
      {isDropdownVisible && (
        <div className="dropdown w-[10vw] top-[3vw]">
          <div
            className="text-[1vw] p-2 hover:bg-gray-100 cursor-pointer"
            onClick={(event) => {
              setDropdownVisible(false);
              navigate("/credit");
              event.stopPropagation();
            }}
          >
            크레딧 구매
          </div>
          <div
            className="text-[1vw] p-2 hover:bg-gray-100 cursor-pointer"
            onClick={(event) => {
              setDropdownVisible(false);
              navigate("/pro");
              event.stopPropagation();
            }}
          >
            프로버전 구매
          </div>
        </div>
      )}
    </span>
  );
}
