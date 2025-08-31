import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import NoMatch from "./pages/NoMatch";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [log, setLog] = useState(null);
  const [search, setSearch] = useState("");
  const [priceSort, setPriceSort] = useState(null); // "asc" ou "desc"
  const [priceRange, setPriceRange] = useState([0, 500]); // min et max

  return (
    <Router>
      <Header
        log={log}
        setLog={setLog}
        search={search}
        setSearch={setSearch}
        priceSort={priceSort}
        setPriceSort={setPriceSort}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              priceSort={priceSort}
              priceRange={priceRange}
            />
          }
        />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/signup" element={<SignUp log={log} setLog={setLog} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
