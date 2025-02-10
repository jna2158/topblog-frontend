import React from "react";
import CreditCheckout from "../../pages/credit/CreditCheckout";
import usePaymentStore from "../../store/usePaymentStore";
import Success from "../../pages/credit/Success";
import Fail from "../../pages/credit/Fail";

export default function CreditPaymentPopup() {
  const { status } = usePaymentStore();
  console.log("status", status);
  return (
    <div className="popup-overlay">
      <div className="popup">
        {status === "success" ? (
          <Success />
        ) : status === "fail" ? (
          <Fail />
        ) : (
          <CreditCheckout />
        )}
      </div>
    </div>
  );
}
