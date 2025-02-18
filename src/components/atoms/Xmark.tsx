import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Xmark({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <button
      className="absolute top-0 right-0 mr-4 mt-2 text-gray-500 text-xl"
      onClick={() => setIsOpen(false)}
    >
      <FontAwesomeIcon icon={faXmark} />
    </button>
  );
}
