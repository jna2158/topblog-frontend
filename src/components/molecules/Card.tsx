import React from "react";

interface CardProps {
  name: string;
}

export default function Card({ name }: CardProps) {
  return (
    <section className="w-full h-[30%]">
      <img
        src={`/images/banner/${name}.png`}
        alt="credit-banner"
        className="w-full h-full object-cover rounded-xl cursor-pointer"
      />
    </section>
  );
}
