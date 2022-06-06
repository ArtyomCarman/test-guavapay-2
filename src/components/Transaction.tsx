import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchTransactionsItem } from "../services/transactions.service";
import { TransactionType } from "../types/Transactions.types";

export const Transaction = () => {
  const { transactionId } = useParams();

  const [transaction, setTransaction] = useState<TransactionType>();
  const [status, setStatus] = useState<status>("success");

  const getTransaction = async () => {
    try {
      setStatus("pending");
      const data = await fetchTransactionsItem(transactionId);
      setTransaction(data);
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  useEffect(() => {
    getTransaction();
  }, []);

  return (
    <>
      {status === "error" && <h1>Произошка ошибка при загрузке</h1>}
      {status === "pending" && <h1>Пожалуйста, подождите, идёт загрузке...</h1>}
      {status === "success" && (
        <>
          <h2>Transaction: {transactionId}</h2>
          <dl>
            <dt>Card Account</dt>
            <dd>
              <Link to={`/cards/${transaction?.cardID}`}>
                {transaction?.cardAccount}
              </Link>
            </dd>

            <dt>Amount</dt>
            <dd>{transaction?.amount}</dd>

            <dt>Currency</dt>
            <dd>{transaction?.currency}</dd>

            <dt>Transaction Date</dt>
            <dd>{transaction?.transactionDate}</dd>

            <dt>Merchant Info</dt>
            <dd>{transaction?.merchantInfo}</dd>
          </dl>
        </>
      )}
    </>
  );
};

type status = "success" | "pending" | "error";
