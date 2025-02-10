import React, { useState } from "react";
import CreditPaymentButton from "../../components/molecules/CreditPaymentButton";
import CreditPaymentWidget from "../../components/organisms/CreditPaymentWidget";

export default function CreditCheckout() {
  const [widgets, setWidgets] = useState<any>(null);

  return (
    <>
      <CreditPaymentWidget widgets={widgets} setWidgets={setWidgets} />
      <CreditPaymentButton widgets={widgets} />
    </>
  );
}
