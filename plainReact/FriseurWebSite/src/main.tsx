import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import PreisListePage from "./assets/PreisListePage/PreisListePage.tsx";
import UeberSalonPage from "./assets/UeberSalonPage/UeberSalonPage.tsx";
import AnfahrtPage from "./assets/AnfahrtPage/AnfahrtPage.tsx";
import KontaktPage from "./assets/KontaktPage/Kontaktpage.tsx";

const root = document.getElementById("root");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    <Routes>
      <Route path="PreisListe" element={<PreisListePage />} />
    </Routes>
    <Routes>
      <Route path="UeberSalon" element={<UeberSalonPage />} />
    </Routes>
    <Routes>
      <Route path="Anfahrt" element={<AnfahrtPage />} />
    </Routes>
    <Routes>
      <Route path="Kontakt" element={<KontaktPage />} />
    </Routes>
  </BrowserRouter>,
);
