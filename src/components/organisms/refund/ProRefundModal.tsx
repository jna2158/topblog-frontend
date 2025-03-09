import React from "react";
import Xmark from "../../atoms/Xmark";

export default function ProRefundModal({
  setProRefundModalOpen,
  refundDetail,
}: {
  setProRefundModalOpen: (open: boolean) => void;
  refundDetail: any;
}) {
  return (
    <div className="popup-overlay flex items-center justify-center">
      <div className="relative popup w-96 bg-white rounded-lg shadow-lg">
        <Xmark setIsOpen={setProRefundModalOpen} />
        <div className="p-6 text-left">
          <header className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Pro 환불 안내
            </h2>
          </header>
          <div className="refund-details space-y-3 text-gray-700">
            <p>할인율: {refundDetail.discount_rate}%</p>
            <p>안내 메시지: {refundDetail.message}</p>
            <p>상품 정가: {refundDetail.original_price.toLocaleString()}원</p>
            <p>
              환불 가능 금액: {refundDetail.refund_amount.toLocaleString()}원
            </p>
            <p>남은 일수: {refundDetail.remaining_days}일</p>
            <p>사용 일수: {refundDetail.used_days}일</p>
          </div>
        </div>
      </div>
    </div>
  );
}
