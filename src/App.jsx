import React from "react";
import { MapPin, Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function JACotaDashboard() {
  return (
    <div className="relative min-h-screen font-[Montserrat] text-white bg-neutral-950 overflow-hidden">
      {/* Background Video with Fallback Image */}
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30">
        <source src="https://cdn.coverr.co/videos/coverr-construction-workers-on-new-home-site-2520/1080p.mp4" type="video/mp4" />
        <img src="/bg.jpg" alt="Construction Background" className="w-full h-full object-cover" />
      </video>

      <div className="relative z-10 backdrop-blur-md bg-black/70 min-h-screen">
        <header className="p-6 flex flex-col md:flex-row justify-between items-center border-b border-yellow-500">
          <h1 className="text-4xl font-extrabold tracking-tight text-yellow-400">JA Cota Inc.</h1>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <input
              placeholder="Search jobs, leads, or deals..."
              className="w-80 px-4 py-2 rounded text-black shadow-lg"
            />
            <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold flex items-center rounded shadow">
              <Search className="w-4 h-4 mr-2" /> Search
            </button>
          </div>
        </header>

        <main className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "Live Deal Analyzer",
              desc: "Run numbers on flips, rentals, and wholesale deals in seconds.",
              btn: "Analyze Deal",
            },
            {
              title: "Find a Contractor",
              desc: "Search and connect with verified trade pros — starting with you.",
              btn: "Find Now",
            },
            {
              title: "One-Click Hard Money",
              desc: "Get matched with lenders by deal type and location.",
              btn: "Show Lenders",
            },
            {
              title: "Interactive Map",
              desc: "Browse deals live on map — just like Redfin or PropStream.",
              btn: (
                <><MapPin className="w-4 h-4 mr-2" /> Explore Map</>
              ),
            },
            {
              title: "Tony’s Weekly Wisdom",
              desc: "“If it don’t cash flow — let that deal go.”",
              btn: (
                <><Sparkles className="w-4 h-4 mr-2" /> New Quote</>
              ),
            }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-neutral-900 border border-yellow-700 rounded-xl p-6 shadow-2xl hover:shadow-yellow-500/50 transition duration-300 backdrop-blur-md bg-opacity-70"
            >
              <h2 className="text-2xl font-bold mb-2 text-yellow-400">{card.title}</h2>
              <p className="text-sm text-zinc-300 italic mb-4">{card.desc}</p>
              <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 rounded shadow">
                {card.btn}
              </button>
            </motion.div>
          ))}
        </main>

        <footer className="p-6 text-center text-xs text-zinc-400 border-t border-yellow-600">
          Built by <strong className="text-yellow-500">Tony Flips</strong> • Las Vegas, NV
        </footer>
      </div>
    </div>
  );
}
