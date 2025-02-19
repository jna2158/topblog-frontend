import React from "react";
import Logo from "../atoms/Logo";
import Button from "../atoms/Button";
import { useState } from "react";
import useUserStore from "../../store/useUserStore";
import { authService } from "../../service/AuthService";
import Xmark from "../atoms/Xmark";
import useBlockScroll from "../../hooks/useBlockScroll";

export default function LoginPopup({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ type: "", message: "" });
  const { setUser } = useUserStore();
  useBlockScroll();

  // 로그인하기
  const handleClick = async () => {
    if (id === "") {
      setError({ type: "id", message: "아이디를 입력해주세요." });
      return;
    } else if (password === "") {
      setError({ type: "password", message: "비밀번호를 입력해주세요." });
      return;
    }

    try {
      const res = await authService.login(id, password);
      setUser(res.data.user);
      setIsOpen(false);
    } catch (error) {
      setError({
        type: "error",
        message: "아이디 또는 비밀번호가 일치하지 않습니다.",
      });
    }
  };

  return (
    <div className="popup-overlay">
      <div className="absolute popup w-1/4">
        <Xmark setIsOpen={setIsOpen} />

        <section className="center mb-3">
          <Logo />
        </section>

        <p className="text-center text-green-900 m-4 text-sm">
          * 회원가입은 프로그램에서 진행해주세요
        </p>

        <form
          className="space-y-2 flex-col gap-3 center"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="아이디"
            className="input"
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="text-red-500">{error.message}</p>

          <Button
            label="로그인"
            onClick={handleClick}
            className="text-gray-600 w-[80%]"
          />
        </form>
      </div>
    </div>
  );
}
