import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from "./components/MyNavbar";
import AllProducts from "../src/pages/AllProdcts";
import Spotlight from "./pages/Spotlight";

function App() {
  return (
    <>
      <MyNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/spotlight" element={<Spotlight />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
