import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  fontSize?: string;
}

export default function Button({ label, onClick, fontSize }: ButtonProps) {
  return (
    <button className="button" onClick={onClick} style={{ fontSize }}>
      {label}
    </button>
  );
}
