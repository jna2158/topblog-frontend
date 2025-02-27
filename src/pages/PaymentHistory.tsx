import React, { useEffect, useState } from "react";
import useUserStore from "../store/useUserStore";
import { paymentService } from "../service/PaymentService";
import dayjs from "dayjs";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";

export default function PaymentHistory() {
  const { user } = useUserStore();
  const [history, setHistory] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");

  const statusMap: Record<string, string> = {
    DONE: "결제 완료",
  };

  // 결제 내역 조회
  const fetchHistory = async () => {
    await paymentService
      .getPaymentHistory(currentPage, search)
      .then((res) => {
        setHistory(res.data.results);
        setTotalPages(Math.ceil(res.data.count / itemsPerPage));
        setTotal(res.data.count);
      });
  };

  useEffect(() => {
    if (!user) return;
    fetchHistory();
  }, [user, currentPage]);

  return (
    <section className="px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        {user?.name}님의 결제/환불 내역
      </h1>
      {user?.staff && (
        <input
          type="text"
          placeholder="검색"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              fetchHistory();
              setCurrentPage(1);
            }
          }}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
      )}
      <p className="text-sm text-gray-600 mb-4">총 {total}건</p>
      <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="table-header">번호</th>
            {user?.staff && <th className="table-header">아이디</th>}
            <th className="table-header">주문번호</th>
            <th className="table-header">날짜</th>
            <th className="table-header">유형</th>
            <th className="table-header">금액</th>
            <th className="table-header">상태</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item: any, index: number) => (
            <tr
              key={item.id}
              className="hover:bg-gray-100 transition duration-200"
            >
              <td className="table-data">{index + 1}</td>
              {user?.staff && (
                <td className="table-data">{item.user_email || "-"}</td>
              )}
              <td className="table-data">
                <span className="truncate">{item.id ? `${item.id}` : "-"}</span>
                {/* <button
                  onClick={() => navigator.clipboard.writeText(item.id || "-")}
                  className="ml-2 text-blue-500 hover:text-blue-700"
                >
                  복사
                </button> */}
              </td>
              <td className="table-data">
                {dayjs(item.approved_at).format("YYYY-MM-DD")}
              </td>
              <td className="table-data">{item.order_name}</td>
              <td className="table-data">{item.amount.toLocaleString()}</td>
              <td className="table-data">
                <span
                  className={`inline-block px-3 py-1 text-sm font-semibold text-white rounded-full ${
                    item.status === "DONE" ? "bg-blue-500" : "bg-gray-500"
                  }`}
                >
                  {statusMap[item.status]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-8">
        <ReactPaginate
          previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
          nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={(selected) => setCurrentPage(selected.selected + 1)}
          containerClassName={"flex list-none p-0"}
          pageClassName={"mx-1"}
          pageLinkClassName={"pagination-link"}
          previousClassName={"mx-1"}
          nextClassName={"mx-1"}
          previousLinkClassName={"pagination-link"}
          nextLinkClassName={"pagination-link"}
          disabledClassName={"opacity-50 cursor-not-allowed"}
          activeLinkClassName={"bg-blue-500 text-white"}
          forcePage={currentPage - 1}
        />
      </div>
    </section>
  );
}
