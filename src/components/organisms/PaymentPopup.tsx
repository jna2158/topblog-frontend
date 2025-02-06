import React from "react";
import Checkout from "../../pages/Checkout";
import { useState } from "react";
import Success from "../../pages/Success";

export default function PaymentPopup() {
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  return (
    <div className="popup-container">
      <div className="popup">
        {isPaymentSuccess ? (
          <Success />
        ) : (
          <Checkout setIsPaymentSuccess={setIsPaymentSuccess} />
        )}
      </div>
    </div>
  );
}
