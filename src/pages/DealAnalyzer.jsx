import React, { useState } from "react";

export default function DealAnalyzer() {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [arv, setArv] = useState("");
  const [rehab, setRehab] = useState("");
  const [closing, setClosing] = useState("");
  const [results, setResults] = useState(null);

  const analyze = () => {
    const price = parseFloat(purchasePrice) || 0;
    const value = parseFloat(arv) || 0;
    const repairs = parseFloat(rehab) || 0;
    const fees = parseFloat(closing) || 0;
    const totalCost = price + repairs + fees;
    const profit = value - totalCost;
    const roi = profit > 0 ? ((profit / totalCost) * 100).toFixed(1) : 0;
    const maxOffer = value * 0.7 - repairs;

    setResults({
      profit: profit.toFixed(0),
      roi,
      maxOffer: maxOffer.toFixed(0),
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-8 text-white">
      <h2 className="text-3xl font-bold mb-6 text-yellow-400">Deal Analyzer</h2>
      <div className="grid gap-4">
        <input type="number" placeholder="Purchase Price" className="p-3 text-black rounded" value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value)} />
        <input type="number" placeholder="ARV (After Repair Value)" className="p-3 text-black rounded" value={arv} onChange={(e) => setArv(e.target.value)} />
        <input type="number" placeholder="Rehab Cost" className="p-3 text-black rounded" value={rehab} onChange={(e) => setRehab(e.target.value)} />
        <input type="number" placeholder="Closing/Holding Costs" className="p-3 text-black rounded" value={closing} onChange={(e) => setClosing(e.target.value)} />
        <button onClick={analyze} className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded">Analyze</button>
      </div>
      {results && (
        <div className="mt-6 bg-neutral-900 p-6 rounded shadow text-sm border border-yellow-600">
          <p><strong>Estimated Profit:</strong> ${results.profit}</p>
          <p><strong>ROI:</strong> {results.roi}%</p>
          <p><strong>Max Offer (70% Rule):</strong> ${results.maxOffer}</p>
        </div>
      )}
    </div>
  );
}
