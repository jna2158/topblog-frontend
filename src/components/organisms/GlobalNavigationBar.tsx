import React from "react";
import Logo from "../atoms/Logo";
import PaymentDropdownButton from "../molecules/button/PaymentDropdownButton";
import DownloadDropdownButton from "../molecules/button/DownloadDropdownButton";
import LoginButton from "../molecules/button/LoginButton";
import IntroButton from "../molecules/button/IntroButton";
import Drawer from "./Drawer";

export default function GlobalNavigationBar() {
  return (
    <header className="h-[7vh] border-b border-[#ddd] bg-white">
      <div className="flex items-center justify-between h-full max-w-[90vw] m-auto px-4">
        <Logo />
        <nav className="hidden md:flex items-center space-x-7">
          <IntroButton />
          <PaymentDropdownButton />
          <DownloadDropdownButton />
          <LoginButton />
        </nav>
        <div className="md:hidden">
          <Drawer />
        </div>
      </div>
    </header>
  );
}
