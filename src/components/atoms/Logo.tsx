import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <section
      className="flex items-center cursor-pointer"
      onClick={() => navigate("/")}
    >
      <img src="/images/logo.png" alt="logo" className="w-14 h-14 mb-[9px]" />
      <span className="text-4xl font-bold text-primary cursor-pointer ml-[-1.3rem]">
        opBlog
      </span>
    </section>
  );
}
