import React from "react";

export default function OpenChating() {
  return (
    <div className="flex flex-col items-center justify-center h-[65vh]">
      <div className="flex items-center mt-6 gap-x-10">
        <img
          src="/images/scanner.png"
          alt="카카오톡 문의하기"
          className="w-[16rem] h-[16rem] object-cover"
        />
        <img
          src="/images/kakao.png"
          alt="카카오톡 문의하기"
          className="w-[13rem] h-[13rem] object-cover"
        />
      </div>
      <div className="text-3xl text-green-500 mb-2 mt-7">
        카카오톡 오픈채팅 문의하기
      </div>
      <div className="text-xl text-green-500">문의 가능 시간 08:00 ~ 23:00</div>
    </div>
  );
}
