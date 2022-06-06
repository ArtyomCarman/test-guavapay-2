import { Link, useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const breadcrumbs = pathname
    .substring(1)
    .split("/")
    .map((el, index, arr) =>
      index !== arr.length - 1 ? (
        <span key={index}>
          <Link to={el}>{el} </Link>
          {" / "}
        </span>
      ) : (
        el
      )
    );

  return <h3>{breadcrumbs.length !== 1 ? breadcrumbs : null}</h3>;
};
