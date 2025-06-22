import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DealAnalyzer from "./pages/DealAnalyzer";
import ContractorFinder from "./pages/ContractorFinder";
import HardMoney from "./pages/HardMoney";
import DealMap from "./pages/DealMap";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/deal-analyzer" element={<DealAnalyzer />} />
      <Route path="/contractor-finder" element={<ContractorFinder />} />
      <Route path="/hard-money" element={<HardMoney />} />
      <Route path="/deal-map" element={<DealMap />} />
    </Routes>
  );
}
