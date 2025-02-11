import React from "react";

interface CardProps {
  name: string;
}

export default function Card({ name }: CardProps) {
  return (
    <section className="w-full h-[310px]">
      <img
        src={`/images/banner/${name}.png`}
        alt="credit-banner"
        className="w-full h-full object-cover rounded-xl cursor-pointer"
      />
    </section>
  );
}
/*
서로이웃 추가 100명
댓글달기 100개
대댓글달기 200개

*/