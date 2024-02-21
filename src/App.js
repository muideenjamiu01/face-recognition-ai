import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FaceDetector from "./pages/FaceDetector";

function Hello() {
  return <div>Hello</div>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/face-detector" element={<FaceDetector />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
