import "./styles/App.css";
import Navbar from "../src/shared/navbar/navBar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../src/pages/home/hero";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
