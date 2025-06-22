import React from "react";
import { MapPin, Search, Sparkles } from "lucide-react";

export default function JACotaDashboard() {
  return (
    <div className="relative min-h-screen font-[Montserrat] text-white bg-neutral-950">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-construction-workers-on-new-home-site-2520/1080p.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 bg-black/80 min-h-screen">
        <header className="p-6 flex justify-between items-center shadow-xl bg-neutral-900/90 backdrop-blur border-b border-yellow-600">
          <h1 className="text-4xl font-extrabold tracking-tight text-yellow-400">JA Cota Inc.</h1>
          <div className="flex items-center gap-4">
            <input
              placeholder="Search jobs, leads, or deals..."
              className="w-80 px-4 py-2 rounded text-black"
            />
            <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold flex items-center">
              <Search className="w-4 h-4 mr-2" /> Search
            </button>
          </div>
        </header>
        <main className="p-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
                <>
                  <MapPin className="w-4 h-4 mr-2" /> Explore Map
                </>
              ),
            },
            {
              title: "Tony’s Weekly Wisdom",
              desc: "“If it don’t cash flow — let that deal go.”",
              btn: (
                <>
                  <Sparkles className="w-4 h-4 mr-2" /> New Quote
                </>
              ),
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-neutral-800 border border-yellow-700 rounded-xl p-6 shadow-xl hover:shadow-yellow-600 transition duration-300"
            >
              <h2 className="text-2xl font-bold mb-2 text-yellow-400">{card.title}</h2>
              <p className="text-sm text-zinc-300 italic mb-4">{card.desc}</p>
              <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 rounded">
                {card.btn}
              </button>
            </div>
          ))}
        </main>
        <footer className="p-6 text-center text-xs text-zinc-400 border-t border-yellow-600">
          Built by <strong className="text-yellow-500">Tony Flips</strong> • Las Vegas, NV
        </footer>
      </div>
    </div>
  );
}
