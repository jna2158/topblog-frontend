import React from "react";
import ProCheckout from "../../pages/pro/ProCheckout";
import usePaymentStore from "../../store/usePaymentStore";
import Success from "../../pages/pro/Success";
import Fail from "../../pages/pro/Fail";

export default function ProPaymentPopup() {
  const { status } = usePaymentStore();

  return (
    <div className="popup-overlay">
      <div className="popup">
        {status === "success" ? (
          <Success />
        ) : status === "fail" ? (
          <Fail />
        ) : (
          <ProCheckout />
        )}
      </div>
    </div>
  );
}
