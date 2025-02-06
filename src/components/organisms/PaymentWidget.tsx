import React, { useEffect } from "react";
import { loadTossPayments } from "@tosspayments/tosspayments-sdk";

const PaymentWidget = ({
  widgets,
  setWidgets,
}: {
  widgets: any;
  setWidgets: any;
}) => {
  const clientKey = process.env.REACT_APP_TOSS_PAYMENTS_CLIENT_KEY || "";

  useEffect(() => {
    const fetchPaymentWidgets = async () => {
      try {
        const tossPayments = await loadTossPayments(clientKey);
        const newWidgets = tossPayments.widgets({
          customerKey: "jna2158",
        });

        await newWidgets.setAmount({
          currency: "KRW",
          value: 50000,
        });

        await newWidgets.renderPaymentMethods({
          selector: "#payment-method",
          variantKey: "DEFAULT",
        });

        setWidgets(newWidgets);
      } catch (error) {
        console.error("결제위젯을 불러올 수 없습니다", error);
      }
    };

    fetchPaymentWidgets();

    return () => {
      try {
        if (widgets) {
          widgets.cleanup();
          setWidgets(null);
        }
      } catch (error) {
        console.error("결제위젯을 정리할 수 없습니다", error);
      }
    };
  }, [clientKey, widgets]);

  return (
    <>
      <div id="payment-method" />
    </>
  );
};

export default PaymentWidget;
