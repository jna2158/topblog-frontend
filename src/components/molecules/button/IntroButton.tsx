import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface IntroButtonProps {
  drawClick?: () => void;
}

export default function IntroButton({ drawClick }: IntroButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <li
      className={`cursor-pointer px-4 py-2 rounded-full ${
        location.pathname === "/" ? "bg-black text-white" : "hover:text-black"
      }`}
      style={{ listStyleType: "none" }}
      onClick={() => {
        navigate("/");
        drawClick?.();
      }}
    >
      소개하기
    </li>
  );
}
