import Button from "../atoms/Button";
import React from "react";

export default function PaymentCard({
  image,
  buttonLabel,
  onClick,
}: {
  image: string;
  buttonLabel: string;
  onClick: () => void;
}) {
  return (
    <div className="flex flex-col gap-5">
      <img src={image} alt="credit" className="card-image object-cover" />
      <Button
        label={buttonLabel}
        onClick={onClick}
        className={`w-full bg-[#e9e6e6] text-gray-600 text-2xl h-[4rem] ${
          image.includes("credit2") ? "bg-[#f3f3b0]" : ""
        }`}
      />
    </div>
  );
}
