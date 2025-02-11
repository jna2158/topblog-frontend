import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <section
      className="flex items-center cursor-pointer"
      onClick={() => navigate("/")}
    >
      <img src="/images/logo.png" alt="logo" className="w-12 h-12" />
      <span className="text-3xl font-bold text-primary cursor-pointer ml-[-0.9rem]">
        opBlog
      </span>
    </section>
  );
}
