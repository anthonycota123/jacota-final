import React, { useState } from "react";

const contractors = [
  { name: "JA Cota Inc.", trade: "Framing", location: "Las Vegas", priority: true },
  { name: "NextGen Electric", trade: "Electrical", location: "Henderson" },
  { name: "Sunset Concrete", trade: "Concrete", location: "North Las Vegas" },
  { name: "Titan Roofing", trade: "Roofing", location: "Las Vegas" }
];

export default function ContractorFinder() {
  const [trade, setTrade] = useState("");
  const [location, setLocation] = useState("");

  const results = contractors.filter(
    (c) =>
      (!trade || c.trade.toLowerCase().includes(trade.toLowerCase())) &&
      (!location || c.location.toLowerCase().includes(location.toLowerCase()))
  );

  return (
    <div className="max-w-3xl mx-auto p-8 text-white">
      <h2 className="text-3xl font-bold mb-6 text-yellow-400">Contractor Finder</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <input type="text" placeholder="Trade (e.g. Electrical)" className="p-3 text-black rounded" value={trade} onChange={(e) => setTrade(e.target.value)} />
        <input type="text" placeholder="Location (e.g. Las Vegas)" className="p-3 text-black rounded" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <ul className="space-y-4">
        {results.map((c, i) => (
          <li key={i} className={`p-4 rounded shadow border ${c.priority ? "border-yellow-500 bg-neutral-800" : "border-neutral-700 bg-neutral-900"}`}>
            <p className="text-lg font-semibold text-yellow-300">{c.name}</p>
            <p className="text-sm text-zinc-300">{c.trade} – {c.location}</p>
            {c.priority && <span className="text-xs text-yellow-400">⭐ Featured by JA Cota</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
