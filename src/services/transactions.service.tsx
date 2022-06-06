import {
  FetchTransactions,
  FetchTransactionsItem,
} from "../types/Transactions.types";

const URL = "http://localhost:3333/transactions";

export const fetchTransactions: FetchTransactions = async (params) => {
  const response = await fetch(URL + "?" + new URLSearchParams(params));
  const data = await response.json();

  const total = response.headers.get("X-Total-Count");

  return [data, total];
};

export const fetchTransactionsItem: FetchTransactionsItem = async (id) => {
  const response = await fetch(`${URL}/${id}`);
  const data = await response.json();

  return data[0];
};
