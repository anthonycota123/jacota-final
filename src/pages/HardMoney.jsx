import React, { useState } from "react";

const dummyLenders = [
  { name: "Vegas Hard Money", rate: "10%", zip: "89101" },
  { name: "QuickFlip Loans", rate: "9.5%", zip: "89108" },
  { name: "HML Express", rate: "11%", zip: "89030" },
];

export default function HardMoney() {
  const [zip, setZip] = useState("");
  const results = dummyLenders.filter((l) => zip === "" || l.zip.includes(zip));

  return (
    <div className="max-w-2xl mx-auto p-8 text-white">
      <h2 className="text-3xl font-bold mb-6 text-yellow-400">One-Click Hard Money</h2>
      <input
        type="text"
        placeholder="Enter ZIP Code"
        className="p-3 w-full text-black rounded mb-4"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
      />
      <ul className="space-y-4">
        {results.map((l, i) => (
          <li key={i} className="p-4 border border-yellow-600 bg-neutral-800 rounded shadow">
            <p className="font-bold text-yellow-300">{l.name}</p>
            <p className="text-sm text-zinc-400">Rate: {l.rate} | ZIP: {l.zip}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
