export interface Card {
  cardID: string;
  cardAccount: string;
  maskedCardNumber: string;
  expireDate: string;
  currency: "AZN" | "EUR" | "USD";
  status: "active" | "blocked";
  balance: number;
}

export type FetchCards = (
  params?: Record<string, string>
) => Promise<[Card[], string | null]>;
export type FetchCardsItem = (id?: string) => Promise<Card>;
