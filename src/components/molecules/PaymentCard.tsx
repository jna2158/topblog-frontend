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
    <section className="card">
      <img src={image} alt="credit" className="card-image" />
      <Button
        label={buttonLabel}
        onClick={onClick}
        className="w-full bg-[#e9e6e6] text-gray-600 text-2xl h-[4rem]"
      />
    </section>
  );
}
