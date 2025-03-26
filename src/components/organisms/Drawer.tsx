import React, { useState, useEffect, useRef } from "react";
import IntroButton from "../molecules/button/IntroButton";
import PaymentDropdownButton from "../molecules/button/PaymentDropdownButton";
import DownloadDropdownButton from "../molecules/button/DownloadDropdownButton";
import LoginButton from "../molecules/button/LoginButton";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <button className="text-[3vw] text-gray-700" onClick={toggleDrawer}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          ref={drawerRef}
          className={`fixed right-0 top-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button className="p-2 text-black" onClick={toggleDrawer}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <nav className="flex flex-col p-4 space-y-4">
            <IntroButton drawClick={() => setIsOpen(false)} />
            <PaymentDropdownButton drawClick={() => setIsOpen(false)} />
            <DownloadDropdownButton drawClick={() => setIsOpen(false)} />
            <LoginButton />
          </nav>
        </div>
      </div>
    </div>
  );
}
