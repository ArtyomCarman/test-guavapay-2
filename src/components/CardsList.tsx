import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCards } from "../services/cards.service";
import { Card } from "../types/Cards.types";
import { Pagination } from "./Pagination";

const LIMIT = "10";

export const CardsList = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [status, setStatus] = useState<status>("success");
  const [total, setTotal] = useState<null | string>(null);
  const [page, setPage] = useState("1");

  useEffect(() => {
    const getCards = async () => {
      try {
        setStatus("pending");
        setTotal(null);
        const [data, totalElements] = await fetchCards({
          _page: page,
          _limit: LIMIT,
        });
        setTotal(totalElements);
        setCards(data);
        setStatus("success");
      } catch (error) {
        setStatus("error");
      }
    };
    getCards();
  }, [page]);

  return (
    <>
      <h1>Cards</h1>
      {status === "error" && <h1>Произошка ошибка при загрузке</h1>}
      {status === "pending" && <h1>Пожалуйста, подождите, идёт загрузке...</h1>}
      {status === "success" && (
        <>
          <ul>
            {cards.map((item) => (
              <li key={item.cardID}>
                <Link to={item.cardID.toString()}>{item.cardAccount}</Link>
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
