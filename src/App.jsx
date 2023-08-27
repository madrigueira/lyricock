import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={Login}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
