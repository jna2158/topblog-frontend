import React, { useState } from "react";
import ProPaymentWidget from "../../components/organisms/ProPaymentWidget";
import ProPaymentButton from "../../components/molecules/ProPaymentButton";

export default function ProCheckout() {
  const [widgets, setWidgets] = useState<any>(null);

  return (
    <>
      <ProPaymentWidget  />
      <ProPaymentButton widgets={widgets} />
    </>
  );
}
