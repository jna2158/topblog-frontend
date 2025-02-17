import React from "react";
import useUserStore from "../store/useUserStore";

export default function PaymentHistory() {
  const { user } = useUserStore();

  return (
    <section className="px-32 py-32">
      <h1 className="text-3xl mb-8">{user?.name}님의 결제/환불 내역</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
              날짜
            </th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
              유형
            </th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
              금액
            </th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
              사용 기한
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b border-gray-200">2023-10-01</td>
            <td className="py-2 px-4 border-b border-gray-200">구매</td>
            <td className="py-2 px-4 border-b border-gray-200">₩10,000</td>
            <td className="py-2 px-4 border-b border-gray-200">2024-10-01</td>
          </tr>
          {/* 추가적인 행을 여기에 추가하세요 */}
        </tbody>
      </table>
    </section>
  );
}
