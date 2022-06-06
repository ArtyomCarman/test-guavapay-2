import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { Breadcrumbs } from "./Breadcrumbs";

function App() {
  return (
    <>
      <nav className="app-nav">
        <Link to="/">Home</Link>
        <Link to="cards">Cards</Link>
        <Link to="transactions">Transactions</Link>
      </nav>
      <main>
        <Breadcrumbs />
        <Outlet />
      </main>
    </>
  );
}

export default App;
