import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCardsItem } from "../services/cards.service";
import { Card } from "../types/Cards.types";

export const CardsListItem = () => {
  const { cardId } = useParams();

  const [card, setCard] = useState<Card>();
  const [status, setStatus] = useState<status>("success");

  useEffect(() => {
    const getCardsItem = async () => {
      try {
        setStatus("pending");
        const data = await fetchCardsItem(cardId);
        setCard(data);
        setStatus("success");
      } catch (error) {
        setStatus("error");
      }
    };

    getCardsItem();
  }, [cardId]);

  return (
    <>
      {status === "error" && <h1>Произошка ошибка при загрузке</h1>}
      {status === "pending" && <h1>Пожалуйста, подождите, идёт загрузке...</h1>}
      {status === "success" && (
        <>
          <h2>Card: {cardId}</h2>
          <dl>
            <dt>Card Account</dt>
            <dd>{card?.cardAccount}</dd>

            <dt>Balanc</dt>
            <dd>{card?.balance}</dd>

            <dt>Currency</dt>
            <dd>{card?.currency}</dd>

            <dt>Masked Card Number</dt>
            <dd>{card?.maskedCardNumber}</dd>

            <dt>Status</dt>
            <dd>{card?.status}</dd>

            <dt>Expire Date</dt>
            <dd>{card?.expireDate}</dd>
          </dl>
        </>
      )}
    </>
  );
};

type status = "success" | "pending" | "error";
