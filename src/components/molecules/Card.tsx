import React from "react";

interface CardProps {
  name: string;
  onClick: () => void;
}

export default function Card({ name, onClick }: CardProps) {
  return (
    <div className="px-4">
      <img
        src={`/images/banner/${name}.png`}
        alt="credit-banner"
        className="w-full h-full object-cover rounded-xl cursor-pointer"
        onClick={onClick}
      />
    </div>
  );
}
