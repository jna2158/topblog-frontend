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

  const statusMap: Record<string, string> = {
    DONE: "결제 완료",
  };

  useEffect(() => {
    if (!user) return;

    paymentService.getPaymentHistory(currentPage).then((res) => {
      setHistory(res.data.results);
      setTotalPages(Math.ceil(res.data.count / itemsPerPage));
      setTotal(res.data.count);
    });
  }, [user, currentPage]);

  return (
    <section className="px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        {user?.name}님의 결제/환불 내역
      </h1>
      <p className="text-sm text-gray-600 mb-4">총 {total}건</p>
      <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="py-4 px-6 border-b-2 border-gray-200 bg-gray-200 text-center text-md font-semibold text-gray-700 uppercase tracking-wider">
              날짜
            </th>
            <th className="py-4 px-6 border-b-2 border-gray-200 bg-gray-200 text-center text-md font-semibold text-gray-700 uppercase tracking-wider">
              유형
            </th>
            <th className="py-4 px-6 border-b-2 border-gray-200 bg-gray-200 text-center text-md font-semibold text-gray-700 uppercase tracking-wider">
              금액
            </th>
            {/* <th className="py-4 px-6 border-b-2 border-gray-200 bg-gray-200 text-center text-md font-semibold text-gray-700 uppercase tracking-wider">
              사용 기한
            </th> */}
            <th className="py-4 px-6 border-b-2 border-gray-200 bg-gray-200 text-center text-md font-semibold text-gray-700 uppercase tracking-wider">
              상태
            </th>
          </tr>
        </thead>
        <tbody>
          {history?.map((item: any) => (
            <tr
              key={item.id}
              className="hover:bg-gray-100 transition duration-200"
            >
              <td className="py-4 px-6 border-b border-gray-200 text-center">
                {dayjs(item.approved_at).format("YYYY-MM-DD")}
              </td>
              <td className="py-4 px-6 border-b border-gray-200 text-center">
                {item.order_name}
              </td>
              <td className="py-4 px-6 border-b border-gray-200 text-center">
                {item.amount.toLocaleString()}
              </td>
              {/* <td className="py-4 px-6 border-b border-gray-200 text-center">
                {item.days}일
              </td> */}
              <td className="py-4 px-6 border-b border-gray-200 text-center">
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
          pageLinkClassName={
            "px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-300 transition duration-200"
          }
          previousClassName={"mx-1"}
          nextClassName={"mx-1"}
          previousLinkClassName={
            "px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-300 transition duration-200"
          }
          nextLinkClassName={
            "px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-300 transition duration-200"
          }
          disabledClassName={"opacity-50 cursor-not-allowed"}
          activeLinkClassName={"bg-blue-500 text-white"}
        />
      </div>
    </section>
  );
}
