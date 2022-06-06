import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTransactions } from "../services/transactions.service";
import { TransactionType } from "../types/Transactions.types";
import { Pagination } from "./Pagination";

const LIMIT = "1";

export const Transactions = () => {
  const [transaction, setTransaction] = useState<TransactionType[]>([]);
  const [status, setStatus] = useState<status>("success");
  const [total, setTotal] = useState<null | string>(null);
  const [page, setPage] = useState("1");

  useEffect(() => {
    const getTransactions = async () => {
      try {
        setStatus("pending");
        setTotal(null);
        const [data, totalElements] = await fetchTransactions({
          _page: page,
          _limit: LIMIT,
        });
        setTotal(totalElements);
        setTransaction(data);
        setStatus("success");
      } catch (error) {
        setStatus("error");
      }
    };

    getTransactions();
  }, [page]);

  return (
    <>
      <h1>Transactions</h1>
      {status === "error" && <h1>Произошка ошибка при загрузке</h1>}
      {status === "pending" && <h1>Пожалуйста, подождите, идёт загрузке...</h1>}
      {status === "success" && (
        <>
          <ul>
            {transaction.map((item) => (
              <li key={item.transactionID}>
                <Link to={item.transactionID}>
                  Transaction {item.transactionID}
                </Link>
              </li>
            ))}
          </ul>
          <hr />
          <Pagination total={total} limit={10} setPage={setPage} page={page} />
        </>
      )}
    </>
  );
};

type status = "success" | "pending" | "error";
