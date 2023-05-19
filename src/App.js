import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import { Footer } from "./components/footer/Footer";
import { Pagar } from "./pages/Pagar";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <ScrollToTop />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/pagar" element={<Pagar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
