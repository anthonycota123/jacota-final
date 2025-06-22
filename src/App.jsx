import React from "react";
import { MapPin, Search, Sparkles } from "lucide-react";

export default function JACotaDashboard() {
  return (
    <div className="relative min-h-screen font-sans text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-construction-workers-on-new-home-site-2520/1080p.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 bg-black/70 min-h-screen">
        <header className="p-6 flex justify-between items-center shadow-xl bg-zinc-950/80 backdrop-blur">
          <h1 className="text-3xl font-bold">JA Cota Software</h1>
          <div className="flex items-center gap-4">
            <input
              placeholder="Search properties or contractors..."
              className="w-80 px-4 py-2 rounded text-black"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded flex items-center">
              <Search className="w-4 h-4 mr-2" /> Search
            </button>
          </div>
        </header>
        <main className="p-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {[
            {
              title: "Live Deal Analyzer",
              desc: "Run instant numbers on flips, rentals, and wholesale deals with one click.",
              btn: "Analyze Deal",
            },
            {
              title: "Find a Contractor",
              desc: "Search our verified contractor network by zip code and trade.",
              btn: "Find Now",
            },
            {
              title: "One-Click Hard Money",
              desc: "Get hard money lenders based on your deal’s location and numbers.",
              btn: "Show Lenders",
            },
            {
              title: "Interactive Map",
              desc: "Scroll through maps like Redfin/Zillow to hunt live off-market deals.",
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
              className="bg-zinc-800 p-6 rounded shadow-lg text-white"
            >
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-sm text-zinc-300 italic">{card.desc}</p>
              <button className="mt-4 w-full bg-blue-700 text-white py-2 rounded">
                {card.btn}
              </button>
            </div>
          ))}
        </main>
        <footer className="p-6 text-center text-xs text-zinc-500">
          Built by <strong className="text-white">Tony Flips</strong> • Las Vegas, NV
        </footer>
      </div>
    </div>
  );
}
