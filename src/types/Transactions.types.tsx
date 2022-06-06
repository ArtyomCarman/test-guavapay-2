export interface TransactionType {
  transactionID: string;
  cardAccount: string;
  cardID: string;
  amount: number;
  currency: number;
  transactionDate: string;
  merchantInfo: string;
}

export type FetchTransactions = (
  params?: Record<string, string>
) => Promise<[TransactionType[], string | null]>;
export type FetchTransactionsItem = (id?: string) => Promise<TransactionType>;
