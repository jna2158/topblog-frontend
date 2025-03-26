import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ButtonProps {
  label: ReactNode;
  onClick: () => void;
  fontSize?: string;
  icon?: IconDefinition;
  className?: string;
}

export default function Button({
  label,
  onClick,
  fontSize,
  icon,
  className,
}: ButtonProps) {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      style={{ fontSize }}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2 " size="lg" />}
      {label}
    </button>
  );
}
