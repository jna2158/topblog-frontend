import React from "react";
import ProPaymentWidget from "../../components/organisms/ProPaymentWidget";
import useModalStore from "../../store/useModalStore";
import { useState } from "react";
import ProPaymentButton from "../../components/molecules/button/ProPaymentButton";

export default function ProCheckout() {
  const [widgets, setWidgets] = useState<any>(null);
  const { proModal } = useModalStore();

  return (
    <>
      <div className="popup-overlay">
        <div className="popup w-1/3">
          <ProPaymentWidget
            widgets={widgets}
            setWidgets={setWidgets}
            amount={proModal.data}
          />
          <ProPaymentButton widgets={widgets} />
        </div>
      </div>
    </>
  );
}
