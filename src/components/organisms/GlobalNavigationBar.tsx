import React, { useState } from "react";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import PaymentDropdownButton from "../molecules/button/PaymentDropdownButton";
import DownloadDropdownButton from "../molecules/button/DownloadDropdownButton";

export default function GlobalNavigationBar() {
  return (
    <div className="w-full h-[4.5rem] bg-white py-12">
      <div className="flex items-center justify-between w-full h-full px-20">
        <Logo />
        <div className="relative">
          <PaymentDropdownButton />
          <DownloadDropdownButton />
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
