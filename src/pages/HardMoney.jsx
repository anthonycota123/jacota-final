import React, { useState } from "react";

const mockLenders = [
  { name: "Vegas Lending Co", zip: "89101", type: "Flip", rate: "10%", minLoan: 50000 },
  { name: "Desert Hard Money", zip: "89108", type: "Rental", rate: "9.5%", minLoan: 75000 },
  { name: "Arizona Capital Group", zip: "85041", type: "Land", rate: "11%", minLoan: 100000 },
];

export default function HardMoney() {
  const [zip, setZip] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");

  const results = mockLenders.filter((l) =>
    (!zip || l.zip === zip) &&
    (!type || l.type === type) &&
    (!amount || parseInt(amount) >= l.minLoan)
  );

  return (
    <div className="max-w-2xl mx-auto p-8 text-white">
      <h2 className="text-3xl font-bold mb-6 text-yellow-400">One-Click Hard Money</h2>
      <div className="grid gap-4">
        <input className="p-3 text-black rounded" placeholder="ZIP Code" value={zip} onChange={(e) => setZip(e.target.value)} />
        <select className="p-3 text-black rounded" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select Deal Type</option>
          <option value="Flip">Flip</option>
          <option value="Rental">Rental</option>
          <option value="Land">Land</option>
        </select>
        <input className="p-3 text-black rounded" placeholder="Loan Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>

      <ul className="mt-6 space-y-4">
        {results.map((l, i) => (
          <li key={i} className="p-4 border border-yellow-600 bg-neutral-800 rounded shadow">
            <p className="font-bold text-yellow-300">{l.name}</p>
            <p className="text-sm text-zinc-400">ZIP: {l.zip} | Type: {l.type} | Rate: {l.rate}</p>
            <button className="mt-2 px-4 py-2 bg-yellow-500 text-black font-bold rounded">Apply Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
