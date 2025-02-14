import React from "react";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";

export default function GlobalNavigationBar() {
  return (
    <div className="w-full h-[4.5rem] bg-white border-b border-gray-200">
      <div className="flex items-center justify-between w-full h-full px-10">
        <Logo />
        <Button label="로그인" onClick={() => {}} fontSize="1.3rem" />
      </div>
    </div>
  );
}
