import React from "react";
import useUserStore from "../../../store/useUserStore";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  // 로그아웃 버튼 클릭
  const handleClickLogoutBtn = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div
      className="text-[1.1vw] p-2 hover:bg-gray-100 cursor-pointer"
      onClick={handleClickLogoutBtn}
    >
      로그아웃
    </div>
  );
}
