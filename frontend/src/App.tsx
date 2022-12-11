import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import MainPage from "./pages/MainPage";
import CreatePage from "./pages/CreatePage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/add-product" element={<CreatePage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
