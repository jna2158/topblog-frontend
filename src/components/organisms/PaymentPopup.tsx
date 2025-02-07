import React from "react";
import Checkout from "../../pages/Checkout";
import Success from "../../pages/Success";
import Fail from "../../pages/Fail";
import usePaymentStore from "../../store/usePaymentStore";
import { useEffect } from "react";

export default function PaymentPopup() {
  const { status } = usePaymentStore();

  useEffect(() => {
    console.log("status", status);
  }, [status]);

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
