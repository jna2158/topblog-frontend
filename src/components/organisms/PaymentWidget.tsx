import React, { useEffect, useState } from "react";
import { loadTossPayments } from "@tosspayments/tosspayments-sdk";

const PaymentWidget = ({
  widgets,
  setWidgets,
}: {
  widgets: any;
  setWidgets: any;
}) => {
  const clientKey = process.env.REACT_APP_TOSS_PAYMENTS_CLIENT_KEY || "";
  const [selectedProduct, setSelectedProduct] = useState(500);

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
          value: selectedProduct,
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
  }, [clientKey]);

  // 상품 선택 시 금액 변경
  useEffect(() => {
    if (widgets) {
      widgets.setAmount({
        currency: "KRW",
        value: selectedProduct,
      });
    }
  }, [selectedProduct]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">
        상품 선택
      </h2>
      <p className="text-center text-lg mb-4">
        선택된 금액: {selectedProduct}원
      </p>
      <div className="flex justify-around mb-6">
        <label className="flex items-center space-x-3">
          <input
            type="radio"
            value={500}
            checked={selectedProduct === 500}
            onChange={() => setSelectedProduct(500)}
            className="form-radio h-5 w-5 text-blue-600"
          />
          <span className="text-lg text-gray-700">500 크레딧</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="radio"
            value={1000}
            checked={selectedProduct === 1000}
            onChange={() => setSelectedProduct(1000)}
            className="form-radio h-5 w-5 text-blue-600"
          />
          <span className="text-lg text-gray-700">1,000 크레딧</span>
        </label>
      </div>
      <div id="payment-method" className="mt-6"></div>
    </div>
  );
};

export default PaymentWidget;
