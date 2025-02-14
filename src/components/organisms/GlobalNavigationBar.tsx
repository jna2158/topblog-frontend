import React from "react";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";

export default function GlobalNavigationBar() {
  return (
    <div className="w-full h-[4.5rem] bg-white py-12">
      <div className="flex items-center justify-between w-full h-full px-20">
        <Logo />
        <div>
          <Button
            label="구매하기"
            onClick={() => {}}
            fontSize="1.3rem"
            className="bg-white text-gray-600"
          />
          <Button
            label="다운로드"
            onClick={() => {}}
            fontSize="1.3rem"
            className="bg-white text-gray-600 pr-10"
          />
          <Button
            label="로그인"
            onClick={() => {}}
            fontSize="1.3rem"
            className="bg-primary text-gray-600"
          />
        </div>
      </div>
    </div>
  );
}
