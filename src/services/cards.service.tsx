import { FetchCards, FetchCardsItem } from "../types/Cards.types";

const URL = "http://localhost:3333/cards";

export const fetchCards: FetchCards = async (params) => {
  const response = await fetch(URL + "?" + new URLSearchParams(params));
  const data = await response.json();

  const total = response.headers.get("X-Total-Count");

  return [data, total];
};

export const fetchCardsItem: FetchCardsItem = async (id) => {
  const response = await fetch(`${URL}/${id}`);
  const data = await response.json();

  return data[0];
};
