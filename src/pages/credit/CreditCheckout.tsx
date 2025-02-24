import React, { useState } from "react";
import CreditPaymentButton from "../../components/molecules/button/CreditPaymentButton";
import CreditPaymentWidget from "../../components/organisms/CreditPaymentWidget";
import useModalStore from "../../store/useModalStore";

export default function CreditCheckout() {
  const [widgets, setWidgets] = useState<any>(null);
  const { creditModal } = useModalStore();
  return (
    <>
      <div className="popup-overlay">
        <div className="popup w-1/3">
          <CreditPaymentWidget
            widgets={widgets}
            setWidgets={setWidgets}
            amount={creditModal.data}
          />
          <CreditPaymentButton widgets={widgets} amount={creditModal.data} />
        </div>
      </div>
    </>
  );
}
