import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 p-3 mt-5 bg-white">
      <div className="center mx-auto flex-col">
        <p className="text-gray-500 text-[13px] text-center">
          상호명 : 틴터뷰 | 사업장 주소 : 서울특별시 영등포구 영등포로47길 16,
          루브르하우스 704호 | 대표자명 : 조재영 | 개인정보관리책임자 : 조재영 |
          사업자등록번호 : 172-02-03375
          <br />
          유선번호 : 010-6387-9981 | 호스팅 사업자 : Amazon Web Service(AWS)
        </p>
        <br />
        <p className="text-gray-400 text-[12px] text-center">
          저희 틴터뷰(TInterview) 는 네이버 블로그 자동 포스팅 프로그램의 판매
          프로그램을 운영하고 있으며, 거래의 당사자는 판매자(저희)임을
          알려드립니다.
          <br />
          저희 틴터뷰는 네이버 블로그 자동 포스팅 프로그램 및 관련 상품, 정보,
          거래에 대해 최선을 다해 책임을 지며, 모든 의무를 성실히 이행할 것을
          약속드립니다.
          <br />
          또한, 저희 top-blog.net 사이트에 게시된 프로그램, 판매자 정보, 거래
          정보, 콘텐츠 및 UI 등은 저작권법, 콘텐츠산업진흥법 등 관련 법령에 따라
          보호되며, 무단 복제, 전송, 배포, 스크래핑 등의 행위는 엄격히
          금지됩니다
        </p>
        <br />
        <p className="text-gray-300 text-sm text-center">
          Copyright © 2025 TInterview Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
