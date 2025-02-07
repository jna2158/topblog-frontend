import React, { useState } from "react";
import PaymentButton from "../components/molecules/PaymentButton";
import PaymentWidget from "../components/organisms/PaymentWidget";

export default function Checkout() {
  const [widgets, setWidgets] = useState<any>(null);

  return (
    <>
      <PaymentWidget widgets={widgets} setWidgets={setWidgets} />
      <PaymentButton widgets={widgets} />
    </>
  );
}
