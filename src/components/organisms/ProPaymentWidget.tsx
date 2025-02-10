import {
  loadTossPayments,
  TossPaymentsPayment,
} from "@tosspayments/tosspayments-sdk";
import React, { useEffect, useState } from "react";
import Button from "../atoms/Button";

const clientKey = process.env.REACT_APP_TOSS_PAYMENTS_API_KEY || "";

export default function ProPaymentWidget() {
  const [payment, setPayment] = useState<TossPaymentsPayment | null>(null);

  useEffect(() => {
    async function fetchPayment() {
      try {
        const tossPayments = await loadTossPayments(clientKey);
        const payment = tossPayments.payment({
          customerKey: "jna2158",
        });

        await payment.requestBillingAuth({
          method: "CARD",
          successUrl: window.location.origin + "?pro=true",
          failUrl: window.location.origin + "?pro=false",
          customerEmail: "customer123@gmail.com",
          customerName: "김토스",
        });

        setPayment(payment);
      } catch (error) {
        console.error("Error fetching payment:", error);
      }
    }
    fetchPayment();
  }, [clientKey]);

  return <Button label="카드 등록하기" onClick={() => {}} />;
}
