import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface PaymentDropdownButtonProps {
  drawClick?: () => void;
}

export default function PaymentDropdownButton({
  drawClick,
}: PaymentDropdownButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-gray-700 font-semibold">
      <li
        className={`cursor-pointer px-4 py-2 rounded-full ${
          location.pathname === "/credit"
            ? "bg-black text-white"
            : "hover:text-black"
        }`}
        onClick={(event) => {
          navigate("/credit");
          event.stopPropagation();
          drawClick?.();
        }}
      >
        크레딧 구매
      </li>
      <li
        className={`cursor-pointer px-4 py-2 rounded-full ${
          location.pathname === "/pro"
            ? "bg-black text-white"
            : "hover:text-black"
        }`}
        onClick={(event) => {
          navigate("/pro");
          event.stopPropagation();
          drawClick?.();
        }}
      >
        PRO 버전 구매
      </li>
    </ul>
  );
}
