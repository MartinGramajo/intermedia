import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import { Footer } from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { PagarVps } from "./pages/PagarVps";
import { PagarDominio } from "./pages/PagarDominio";
import { PagarHosting } from "./pages/PagarHosting";



function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <ScrollToTop />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/vps" element={<PagarVps />} />
          <Route path="/hosting" element={<PagarHosting />} />
          <Route path="/dominio" element={<PagarDominio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
