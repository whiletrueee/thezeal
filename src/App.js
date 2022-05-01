import "./styles/App.css";
import Navbar from "../src/shared/navbar/navBar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../src/pages/home/hero";
import { useState } from "react";


function App() {
  const [Domain, setDomain] = useState('Health');
  return (
    <Router>
      <Navbar
        setDomain={setDomain}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Homepage
              Domain={Domain}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
