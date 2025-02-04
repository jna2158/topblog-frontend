import React, { useEffect, useState } from "react";
import { loadTossPayments } from "@tosspayments/tosspayments-sdk";

function App() {
  const [widgets, setWidgets] = useState<any>(null);
  const [paymentMethodWidget, setPaymentMethodWidget] = useState<any>(null);
  const [isCouponApplied, setIsCouponApplied] = useState<boolean>(false);
  const [isRequestingPayment, setIsRequestingPayment] =
    useState<boolean>(false);
  const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";

  useEffect(() => {
    async function fetchPaymentWidgets() {
      try {
        const tossPayments = await loadTossPayments(clientKey);
        const widgets = tossPayments.widgets({
          customerKey: "3Os2OLZBkMsoWblwpkGIJ",
        });
        setWidgets(widgets);

        await widgets.setAmount({
          currency: "KRW",
          value: 50000,
        });

        if (!paymentMethodWidget) {
          const paymentMethodWidget = await widgets.renderPaymentMethods({
            selector: "#payment-method",
            variantKey: "DEFAULT",
          });
          setPaymentMethodWidget(paymentMethodWidget);
        }

        await widgets.renderAgreement({
          selector: "#agreement",
        });
      } catch (error) {
        console.error("결제위젯을 불러올 수 없습니다", error);
      }
    }

    fetchPaymentWidgets();

    return () => {
      console.log("Cleanup called");
      if (paymentMethodWidget) {
        paymentMethodWidget.destroy();
        setPaymentMethodWidget(null);
      }
      if (widgets) {
        widgets.cleanup();
        setWidgets(null);
      }
    };
  }, []);

  const handleCouponChange = async () => {
    if (!widgets) return;

    const newAmount = isCouponApplied ? 50000 : 45000;
    await widgets.setAmount({
      currency: "KRW",
      value: newAmount,
    });
    setIsCouponApplied(!isCouponApplied);
  };

  const handleClickPaymentBtn = async () => {
    if (!widgets || isRequestingPayment) return;

    setIsRequestingPayment(true);
    try {
      await widgets.requestPayment({
        orderId: "Z8FY0cyOVhKYDFZNlj1iI",
        orderName: "토스 티셔츠 외 2건",
        successUrl: window.location.origin + "/success.html",
        failUrl: window.location.origin + "/fail.html",
        customerEmail: "customer123@gmail.com",
        customerName: "김토스",
        customerMobilePhone: "01012341234",
      });
    } catch (error) {
      console.error("결제 요청 중 오류가 발생했습니다", error);
    } finally {
      setIsRequestingPayment(false);
    }
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          id="coupon-box"
          checked={isCouponApplied}
          onChange={handleCouponChange}
        />
        <label htmlFor="coupon-box"> 5,000원 쿠폰 적용 </label>
      </div>
      <div id="payment-method"></div>
      <div id="agreement"></div>
      <button
        className="button"
        id="payment-button"
        style={{ marginTop: "30px" }}
        onClick={handleClickPaymentBtn}
        disabled={isRequestingPayment}
      >
        결제하기
      </button>
    </>
  );
}

export default App;
