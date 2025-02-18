import React, { useEffect } from "react";
import { loadTossPayments } from "@tosspayments/tosspayments-sdk";

export default function ProPaymentWidget({
  widgets,
  setWidgets,
  amount,
}: {
  widgets: any;
  setWidgets: any;
  amount: string;
}) {
  const clientKey = process.env.REACT_APP_TOSS_PAYMENTS_CLIENT_KEY || "";

  // 결제위젯 로드
  useEffect(() => {
    const fetchPaymentWidgets = async () => {
      try {
        const tossPayments = await loadTossPayments(clientKey);
        const newWidgets = tossPayments.widgets({
          customerKey: "jna2158",
        });

        await newWidgets.setAmount({
          currency: "KRW",
          value: parseInt(amount),
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
  }, [clientKey, amount]);

  return (
    <div className="relative">
      <div id="payment-method" className="mt-6"></div>
    </div>
  );
}
