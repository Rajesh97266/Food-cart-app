import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
