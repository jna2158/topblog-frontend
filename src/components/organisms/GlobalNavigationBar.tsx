import React from "react";
import Logo from "../atoms/Logo";
import PaymentDropdownButton from "../molecules/button/PaymentDropdownButton";
import DownloadDropdownButton from "../molecules/button/DownloadDropdownButton";
import LoginButton from "../molecules/button/LoginButton";

export default function GlobalNavigationBar() {
  return (
    <div className="w-full h-[4.5rem] bg-white py-12 border-b border-gray-300">
      <div className="flex items-center justify-between w-full h-full px-56">
        <Logo />
        <div className="relative">
          <PaymentDropdownButton />
          <DownloadDropdownButton />
          <LoginButton />
        </div>
      </div>
    </div>
  );
}
