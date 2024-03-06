import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FaceDetector from "./pages/FaceDetector";
import StartPage from "./pages/StartPage";
import Success from "./pages/Success";
import Home from "./pages/Home";
import Header from "./components/Header";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
         <section className="">
            <Routes>
              <Route path="/face-detector" element={<FaceDetector />} />
              <Route path="/" element={<Home />} />
              <Route path="/start" element={<StartPage />} />
              <Route path="/success" element={<Success />} />
            </Routes>
         </section>
         <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
