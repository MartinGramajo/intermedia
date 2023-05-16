import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Routes >
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
