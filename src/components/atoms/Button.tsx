import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return <button className="button" onClick={onClick}>{label}</button>;
}
