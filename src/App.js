import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function Hello() {
  return <div>Hello</div>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
