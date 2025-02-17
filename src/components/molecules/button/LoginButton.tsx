import Button from "../../atoms/Button";
import React, { useState } from "react";
import LoginPopup from "../../organisms/LoginPopup";
import useUserStore from "../../../store/useUserStore";
import LogoutButton from "./LogoutButton";
import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const { user } = useUserStore();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {user ? (
        <span
          className="relative"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <Button
            label={user.name + "님"}
            onClick={() => {}}
            fontSize="1.3rem"
            className="text-gray-600 bg-white border border-gray-400 rounded-full px-4 py-2"
          />
          {isDropdownVisible && (
            <div className="dropdown w-40">
              <div
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate("/payment-history")}
              >
                결제 내역
              </div>
              <LogoutButton />
            </div>
          )}
        </span>
      ) : (
        <Button
          label="로그인"
          onClick={() => setIsLoginPopupOpen(true)}
          fontSize="1.3rem"
          className="text-gray-600"
        />
      )}
      {isLoginPopupOpen && <LoginPopup setIsOpen={setIsLoginPopupOpen} />}
    </>
  );
}
