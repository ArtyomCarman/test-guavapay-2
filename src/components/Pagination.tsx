import { FC } from "react";
import "./Pagination.css";

interface PaginationProps {
  total: string | null;
  limit: number;
  setPage: any;
  page: string;
}

export const Pagination: FC<PaginationProps> = ({
  total,
  limit,
  page,
  setPage,
}) => {
  return (
    <div className="pagination">
      {total && +total > limit
        ? [...Array(Math.ceil(+total / limit))].map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(`${index + 1}`)}
              className={`pagination-button ${
                +page === +index + 1 ? "pagination-active-button" : ""
              }`}
            >
              {index + 1}
            </button>
          ))
        : null}
    </div>
  );
};
