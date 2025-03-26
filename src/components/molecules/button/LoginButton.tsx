import Button from "../../atoms/Button";
import React, { useState } from "react";
import LoginPopup from "../../organisms/LoginPopup";
import useUserStore from "../../../store/useUserStore";
import LogoutButton from "./LogoutButton";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function LoginButton() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const { user } = useUserStore();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  // 로그인 버튼 클릭 시 로그인 팝업 열림
  const handleClickLoginButton = () => {
    setIsLoginPopupOpen(true);
    setDropdownVisible(false);
  };

  return (
    <div>
      {!user ? (
        <>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-gray-700 font-semibold">
            <li
              className={`cursor-pointer px-4 py-2 rounded-full ${
                false ? "bg-black text-white" : "hover:text-black"
              } md:hidden`}
              onClick={handleClickLoginButton}
            >
              로그인
            </li>
          </ul>
          <FontAwesomeIcon
            icon={faArrowRightToBracket}
            onClick={handleClickLoginButton}
            className="hidden md:inline-block text-gray-700 hover:text-black text-[2rem] cursor-pointer"
          />
        </>
      ) : (
        <span
          className="relative"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <div>
            <Button
              label={user.name + "님"}
              onClick={() => {}}
              fontSize="1.3vw"
              className="text-gray-700 font-semibold bg-white hover:text-black"
            />
          </div>
          {isDropdownVisible && (
            <div className="dropdown w-auto bg-white shadow-lg">
              <div
                className="text-[1.1vw] p-2 hover:bg-gray-100 cursor-pointer"
                onClick={(event) => {
                  setDropdownVisible(false);
                  navigate("/open-chatting");
                  event.stopPropagation();
                }}
              >
                문의하기
              </div>
              <div
                className="text-[1.1vw] p-2 hover:bg-gray-100 cursor-pointer"
                onClick={(event) => {
                  setDropdownVisible(false);
                  navigate("/payment-history");
                  event.stopPropagation();
                }}
              >
                결제 내역
              </div>
              <LogoutButton />
            </div>
          )}
        </span>
      )}
      {isLoginPopupOpen && <LoginPopup setIsOpen={setIsLoginPopupOpen} />}
    </div>
  );
}
