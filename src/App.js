import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import { Footer } from "./components/footer/Footer";



function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Routes >
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
