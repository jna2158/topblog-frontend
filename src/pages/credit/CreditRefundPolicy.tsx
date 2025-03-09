import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function CreditRefundPolicy() {
  const navigate = useNavigate();

  return (
    <section className="px-32 py-16">
      <div className="flex items-baseline gap-4">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="text-lg cursor-pointer"
          onClick={() => navigate("/credit")}
        />
        <h1 className="text-2xl mb-8">크레딧 환불정책</h1>
      </div>
      <p className="text-gray-500 bg-gray-100 p-4 rounded-lg">
        제 4조 (크레딧 환불)
        <br />
        회원은 구매한 크레딧에 대해 환불을 회사에 요청할 수 있습니다. 크레딧
        환불은 회사가 별도로 안내하는 정책 및 방법에 따라 진행됩니다.
        <br />
        <br />
        용어 정의
        <br />
        &nbsp;- 크레딧: 회사에서 제공하는 서비스 이용을 위해 회원이 구매하는
        충전 포인트
        <br />
        &nbsp;- 실제 결제 금액: 할인율 등 적용 후 회원에게 지급된 최종 결제 금액
        <br />
        &nbsp;- 영업일: 주말 및 공휴일을 제외한 회사의 정상 영업일
        <br />
        &nbsp;- 차감율(0.9): 카드 수수료 및 운영비용 10%를 차감한 값을 의미하며,
        환불 금액 산정 시 적용됩니다.
        <br />
        <br />
        가. 환불 금액 산정 기준
        <br />
        환불 금액은 아래 공식에 따라 산출합니다.
        <br />
        <br />
        [환불 금액] = (남은 크레딧 수 / 총 구매 크레딧 수) × (실제 결제 금액) ×
        0.9
        <br />
        <br />
        실제 결제 금액은 할인율 적용 후 지급된 금액이며, 0.9은 카드 수수료 및
        운영비용 10%를 차감한 값입니다.
        <br />
        <br />
        나. 전액 환불 조건
        <br />
        7일 이내에, 단 한 개의 크레딧도 사용되지 않은 경우 전액 환불이
        가능합니다.
        <br />
        <br />
        다. 부분 사용 시 환불 산정
        <br />
        구매한 크레딧 중 1크레딧이라도 사용된 경우, 전액 환불은 불가능하며, 남은
        크레딧 수에 대해 위 산정식을 적용하여 환불 금액을 산출합니다.
        <br />
        예를 들어, 10,000 크레딧 구매 후 1크레딧이라도 사용되었다면, 사용된
        크레딧은 환불 대상에서 제외되고 남은 크레딧에 대해서만 환불 금액이
        계산됩니다.
        <br />
        <br />
        라. 구매 내역 우선 환불 원칙
        <br />
        환불은 회원의 가장 최근 크레딧 구매 내역부터 처리되며, 만약 최근 구매
        내역에 해당하는 크레딧이 환불되지 않은 경우, 그 이전의 구매 내역은 환불
        대상에서 제외됩니다.
        <br />
        <br />
        마. 환불 불가 기준 및 예외 사항
        <br />
        서비스 악용 등 부정한 행위가 확인된 경우 환불이 불가하며, 서비스 이용 중
        정책 위반으로 계정이 정지된 경우에도 환불이 불가능합니다. 또한,
        천재지변, 질병 등 불가피한 사유 또는 서비스 자체의 중대한 문제(예:
        장기간 서버 장애)로 인해 정상적인 이용이 어려운 경우에는 회사가
        예외적으로 환불 요청을 검토할 수 있으며, 이와 관련한 예외 사항의 판단 및
        적용은 회사의 내부 심사 기준에 따릅니다.
        <br />
        <br />
        바. 환불 절차
        <br />
        회원은 카카오톡 고객센터를 통해 크레딧 환불을 신청하며, 신청 접수 후
        회사는 신청 내역을 확인하여 7영업일 이내에 환불 처리를 완료합니다. 환불
        승인 여부는 신청일로부터 3영업일 이내에 회원에게 통보되며,
        <br />
        환불 금액은 원 결제 수단으로 지급되고 초기 구매 방식과 일관되게
        적용됩니다.
      </p>
    </section>
  );
}
