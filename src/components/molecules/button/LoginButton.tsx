import Button from "../../atoms/Button";
import React, { useState } from "react";
import LoginPopup from "../../organisms/LoginPopup";
import useUserStore from "../../../store/useUserStore";
import LogoutButton from "./LogoutButton";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
            className="text-gray-700 font-semibold bg-white"
          />
          <FontAwesomeIcon
            icon={faChevronDown}
            className="absolute text-lg right-0 top-[-2px]"
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
          className="text-gray-600 bg-[#C5FFAE] ml-10"
        />
      )}
      {isLoginPopupOpen && <LoginPopup setIsOpen={setIsLoginPopupOpen} />}
    </>
  );
}
