import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import { TipusokListPage } from "./TipusokListPage";
import { TipusSinglePage } from "./TipusSinglePage";
import { TipusCreatePage } from "./TipusCreatePage";
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/"><span className="nav-link">Típusok</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="uj-tip"><span className="nav-link">Új típus</span></NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <hr style={{ width: "70%" }}></hr>
      <hr style={{ width: "25%" }}></hr>
      <hr style={{ width: "5%" }}></hr>
      <Routes>
        <Route path="/" exact element={<TipusokListPage />} />
        <Route path="/tipus/:tipusId" exact element={<TipusSinglePage />} />
        <Route path="/uj-tip/" exact element={<TipusCreatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
