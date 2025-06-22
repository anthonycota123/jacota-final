import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MapPin, Hammer, DollarSign, Search } from "lucide-react";
import { motion } from "framer-motion";
import DealAnalyzer from "./pages/DealAnalyzer";
import ContractorFinder from "./pages/ContractorFinder";

function Home() {
  return (
    <div className="bg-neutral-950 text-white font-[Montserrat]">
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 bg-black">
        <div className="max-w-3xl z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-4">
            Las Vegas’ Elite Real Estate Platform
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl mb-6">
            Run deals. Find pros. Dominate flips. Built for serious investors and contractors.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/deal-analyzer">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded shadow-lg transition">
                Start Analyzing
              </button>
            </Link>
            <Link to="/contractor-finder">
              <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold px-6 py-3 rounded shadow-lg transition">
                Hire JA Cota
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gradient-to-br from-yellow-700/10 to-yellow-500/5 text-center px-4">
        <p className="text-2xl italic text-yellow-300 max-w-3xl mx-auto">
          “If it don’t cash flow — let that deal go.”
        </p>
        <p className="text-sm mt-2 text-zinc-400">— Tony Flips</p>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Deal Analyzer",
            icon: <Search className="w-8 h-8" />,
            desc: "Run flip, rental, or wholesale numbers in seconds.",
            link: "/deal-analyzer"
          },
          {
            title: "Contractor Finder",
            icon: <Hammer className="w-8 h-8" />,
            desc: "Find trusted pros in your area — or get hired.",
            link: "/contractor-finder"
          },
          {
            title: "Hard Money Search",
            icon: <DollarSign className="w-8 h-8" />,
            desc: "Instant matches for lenders based on deal type.",
          },
          {
            title: "Live Deal Map",
            icon: <MapPin className="w-8 h-8" />,
            desc: "Browse live property deals across Las Vegas and beyond.",
          },
        ].map((tool, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-neutral-900 border border-yellow-600 rounded-xl p-6 shadow-lg text-center transition"
          >
            <div className="flex justify-center mb-4 text-yellow-400">{tool.icon}</div>
            <h3 className="text-xl font-bold text-yellow-300 mb-2">{tool.title}</h3>
            <p className="text-sm text-zinc-400">{tool.desc}</p>
            {tool.link && (
              <Link to={tool.link}>
                <button className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded shadow">
                  Open
                </button>
              </Link>
            )}
          </motion.div>
        ))}
      </section>

      <footer className="p-6 text-center text-xs text-zinc-500 border-t border-yellow-700">
        &copy; 2025 JA Cota Inc. — Built by Tony Flips
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deal-analyzer" element={<DealAnalyzer />} />
        <Route path="/contractor-finder" element={<ContractorFinder />} />
      </Routes>
    </Router>
  );
}
