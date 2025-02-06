import React, { useState, useEffect } from "react";
import PaymentButton from "../components/molecules/PaymentButton";
import PaymentWidget from "../components/organisms/PaymentWidget";

export default function Checkout({
  setIsPaymentSuccess,
}: {
  setIsPaymentSuccess: (isPaymentSuccess: boolean) => void;
}) {
  const [widgets, setWidgets] = useState<any>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("success") === "true") {
      setIsPaymentSuccess(true);
    }
  }, [setIsPaymentSuccess]);

  const handlePaymentSuccess = () => {
    setIsPaymentSuccess(true);
    setWidgets(null);
  };

  return (
    <>
      <PaymentWidget widgets={widgets} setWidgets={setWidgets} />
      <PaymentButton widgets={widgets} onSuccess={handlePaymentSuccess} />
    </>
  );
}
