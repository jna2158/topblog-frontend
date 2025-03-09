import React from "react";
import Xmark from "../../atoms/Xmark";

export default function CreditRefundModal({
  setCreditRefundModalOpen,
  refundDetail,
}: {
  setCreditRefundModalOpen: (open: boolean) => void;
  refundDetail: any;
}) {
  return (
    <div className="popup-overlay flex items-center justify-center">
      <div className="relative popup w-96 bg-white rounded-lg shadow-lg">
        <Xmark setIsOpen={setCreditRefundModalOpen} />
        <div className="p-6 text-left">
          <header className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              크레딧 환불 안내
            </h2>
          </header>
          <div className="refund-details space-y-3 text-gray-700">
            <p>안내 메시지: {refundDetail.message}</p>
            <p>상품 정가: {refundDetail.original_price.toLocaleString()}원</p>
            <p>
              환불 가능 금액: {refundDetail.refund_amount.toLocaleString()}원
            </p>
            <p>
              총 구매 크레딧 수:{" "}
              {refundDetail.paid_credit_amount.toLocaleString()}
            </p>
            <p>
              남은 크레딧 수: {refundDetail.remaining_credits.toLocaleString()}
            </p>
            <p>
              사용한 크레딧 수: {refundDetail.used_credits.toLocaleString()}
            </p>
            <p>실제 결제 금액: {refundDetail.actual_paid.toLocaleString()}원</p>
            <p>구매 일자: {refundDetail.purchase_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
