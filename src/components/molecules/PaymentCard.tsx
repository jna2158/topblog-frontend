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
    <>
      <img src={image} alt="credit" className="card-image" />
      <Button
        label={buttonLabel}
        onClick={onClick}
        className={`shadow-md w-full  text-gray-600 text-2xl h-[3.7rem] ${
          image.includes("credit2")
            ? "bg-[#ffffd0]"
            : image.includes("pro2")
            ? "bg-[#EEFEE6]"
            : "bg-[#e9e6e6]"
        }`}
      />
    </>
  );
}
