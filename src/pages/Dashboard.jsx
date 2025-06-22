import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Search, Sparkles, Hammer, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export default function JACotaDashboard() {
  const navigate = useNavigate();

  const tools = [
    {
      title: "Live Deal Analyzer",
      desc: "Run numbers on flips, rentals, and wholesale deals in seconds.",
      btn: "Analyze Deal",
      icon: <Search className="w-5 h-5 mr-2" />,
      link: "/deal-analyzer",
    },
    {
      title: "Find a Contractor",
      desc: "Search and connect with verified trade pros — starting with you.",
      btn: "Find Now",
      icon: <Hammer className="w-5 h-5 mr-2" />,
      link: "/contractor-finder",
    },
    {
      title: "One-Click Hard Money",
      desc: "Get matched with lenders by deal type and location.",
      btn: "Show Lenders",
      icon: <DollarSign className="w-5 h-5 mr-2" />,
      link: "/hard-money",
    },
    {
      title: "Interactive Map",
      desc: "Browse deals live on map — just like Redfin or PropStream.",
      btn: "Explore Map",
      icon: <MapPin className="w-5 h-5 mr-2" />,
      link: "/deal-map",
    },
    {
      title: "Tony’s Weekly Wisdom",
      desc: "“If it don’t cash flow — let that deal go.”",
      btn: "Quote",
      icon: <Sparkles className="w-5 h-5 mr-2" />,
      link: "/",
    }
  ];

  return (
    <div className="bg-neutral-950 text-white font-[Montserrat] min-h-screen">
      <header className="p-6 text-center border-b border-yellow-600">
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-2">JA Cota Inc.</h1>
        <p className="text-zinc-300 text-lg">Las Vegas' #1 Contractor & Flipping Platform</p>
      </header>

      <section className="py-10 text-center bg-yellow-500/5">
        <p className="text-2xl italic text-yellow-300 max-w-2xl mx-auto">“If it don’t cash flow — let that deal go.”</p>
        <p className="text-sm text-zinc-500 mt-1">— Tony Flips</p>
      </section>

      <main className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            onClick={() => navigate(tool.link)}
            whileHover={{ scale: 1.03 }}
            className="bg-neutral-900 border border-yellow-600 p-6 rounded-xl shadow-lg hover:shadow-yellow-500/40 cursor-pointer transition"
          >
            <h2 className="text-xl font-bold text-yellow-300 mb-2">{tool.title}</h2>
            <p className="text-sm text-zinc-400 mb-4">{tool.desc}</p>
            <button className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded w-full">
              {tool.icon} {tool.btn}
            </button>
          </motion.div>
        ))}
      </main>

      <footer className="p-6 text-center text-xs text-zinc-500 border-t border-yellow-700">
        &copy; 2025 JA Cota Inc. — Built by Tony Flips
      </footer>
    </div>
  );
}
