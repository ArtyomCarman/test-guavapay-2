import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import { CardsList } from "./components/CardsList";
import { CardsListItem } from "./components/CardsListItem";
import { NotFound } from "./components/NotFound";
import { Transactions } from "./components/Transactions";
import { Transaction } from "./components/Transaction";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<h1>Home Page</h1>} />
          <Route path="cards" element={<CardsList />} />
          <Route path="cards/:cardId" element={<CardsListItem />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="transactions/:transactionId" element={<Transaction />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
