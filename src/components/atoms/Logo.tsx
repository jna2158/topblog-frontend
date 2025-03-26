import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <section
      className="flex items-center cursor-pointer"
      onClick={() => navigate("/")}
    >
      <img src="/images/logo.png" alt="logo" className="w-10 h-10 mb-[9px]" />
      <span className="text-2xl font-medium text-primary cursor-pointer ml-[-1rem]">
        opBlog
      </span>
    </section>
  );
}
