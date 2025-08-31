import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import NoMatch from "./pages/NoMatch";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useState, useEffect } from "react";

function App() {
  const [log, setLog] = useState(null);
  const [filter, setFilter] = useState(null);

  return (
    <Router>
      <Header log={log} setLog={setLog} filter={filter} setFilter={setFilter} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/signup" element={<SignUp log={log} setLog={setLog} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
