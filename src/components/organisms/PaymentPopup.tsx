import React from "react";
import Checkout from "../../pages/Checkout";
import Success from "../../pages/Success";
import Fail from "../../pages/Fail";
import usePaymentStore from "../../store/usePaymentStore";

export default function PaymentPopup() {
  const { status } = usePaymentStore();

  return (
    <div className="popup-overlay">
      <div className="popup">
        {status === "success" ? (
          <Success />
        ) : status === "fail" ? (
          <Fail />
        ) : (
          <Checkout />
        )}
      </div>
    </div>
  );
}
