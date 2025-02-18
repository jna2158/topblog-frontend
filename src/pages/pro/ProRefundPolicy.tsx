import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function ProRefundPolicy() {
  const navigate = useNavigate();

  return (
    <section className="px-32 py-16">
      <div className="flex items-baseline gap-4">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="text-lg cursor-pointer"
          onClick={() => navigate("/pro")}
        />
        <h1 className="text-2xl mb-8">Pro 버전 환불정책</h1>
      </div>
      <p className="text-gray-500 bg-gray-100 p-4 rounded-lg">
        제 3조 (Pro 버전 환불)
        <br />
        회원은 회사에 환불을 요구할 수 있습니다. 환불은 회사가 안내하는 정책 및
        방법에 따라 진행됩니다.
        <br />
        회사는 다음 각 호의 방식으로 환불을 진행합니다.
        <br />
        <br />
        가. 공통 환불 기준
        <br />
        환불 금액 계산 공식 정가 ÷ 총일수 × 남은일수 × ( 1 - 할인율 ) × 0.8
        <br />
        환불은 구매일로부터 사용한 일수를 제외하여 계산되며, 일정 기간 초과 시
        환불이 불가능합니다(자세한 기준은 나항 참조). <br />
        결제 후 24시간 이내에는 전액 환불이 가능하며, 환불 금액은 원가 기준으로
        일할 계산한 후, 할인율을 적용하고 카드 수수료 및 운영 비용 20%를
        차감하여 지급됩니다.
        <br />
        <br />
        나. 상품별 환불 규정
        <br />
        &nbsp; - 1개월권(정가 22,000원, 30일) 24시간 이내 전액 환불 가능하며,
        15일 초과 사용 시 환불 불가합니다.
        <br />
        &nbsp; - 3개월권(정가 66000원, 90일) 24시간 이내 전액 환불 가능하며,
        30일 초과 사용 시 환불 불가합니다.
        <br />
        &nbsp; - 12개월권(정가 264000원, 365일) 24시간 이내 전액 환불 가능하며,
        90일 초과 사용 시 환불 불가합니다.
        <br />
        <br />
        다. 환불 불가 기준 및 예외 사항
        <br />
        환불 정책에서 일정 사용 후 환불 불가 기준을 설정하는 이유는 다음과
        같습니다
        <br />
        &nbsp; - 환불 악용 방지: 할인된 가격으로 구매 후 대부분 사용한 뒤
        환불받는 경우를 막기 위함입니다.
        <br />
        &nbsp; - 서비스 제공 비용 고려: 일정 기간 이상 사용하면 서비스 유지비,
        운영비 등이 발생하기 때문에 일정 기간 후에는 환불이 제한될 수 있습니다.
        <br />
        &nbsp; - 구독 서비스 표준 반영: 일반적으로 월 구독 서비스에서는 중도
        환불이 일정 기간 후 제한되는 것이 일반적입니다.
        <br />
        <br />
        환불 가능 기간이 초과된 경우 환불이 불가능하며, 서비스 이용 중 위반 및
        악용 행위로 인해 계정이 정지된 경우에도 환불이 불가능합니다. <br />
        다만, 기타 불가피한 사유로 환불이 필요한 경우 회사의 판단에 따라
        예외적으로 환불이 진행될 수 있습니다.
        <br />
        <br />
        &nbsp;- 천재지변, 질병 등으로 인해 서비스 이용이 불가능한 경우
        <br />
        &nbsp;- 서비스 자체의 중대한 문제(예: 장기간 서버 다운)로 인해 정상적인
        이용이 어려운 경우
        <br />
        <br />
        라. 환불 절차
        <br />
        회원이 환불을 요청하려면 카카오톡 고객센터를 통해 신청해야 하며, 신청
        접수 후 회사는 내역을 확인하고 7영업일 이내에 환불을 처리합니다.
        <br />
        환불 승인 여부는 신청일로부터 3영업일 이내에 고객에게 통보됩니다. 고객은
        환불 진행 여부를 '결제내역' 에서 확인할 수 있습니다.
        <br />
        환불 금액은 원 결제 수단으로 지급됩니다. 본 환불 정책은 회원의 권리를
        보호하는 동시에 공정한 서비스 운영을 위한 기준으로 적용됩니다.
        <br />
      </p>
    </section>
  );
}
