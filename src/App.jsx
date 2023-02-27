import { StrictMode } from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <BrowserRouter>
      <StrictMode>
        <header>
          <Link to="/">Adopt Me</Link>
        </header>
          <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </StrictMode>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
