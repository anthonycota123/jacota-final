import React from "react";

const dummyDeals = [
  { address: "3009 Merritt Ave", city: "Las Vegas", zip: "89102", price: "$325,000", type: "Fix & Flip" },
  { address: "44 Acres - Churchill Rd", city: "Snowflake", zip: "85937", price: "$150,000", type: "Land Wholesale" },
  { address: "Burned Duplex", city: "Phoenix", zip: "85041", price: "$35,000", type: "Fire Damage" },
];

export default function DealMap() {
  return (
    <div className="p-8 text-white max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">Live Deal Map (Beta)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyDeals.map((deal, i) => (
          <div key={i} className="border border-yellow-600 bg-neutral-900 rounded-xl p-4 shadow">
            <p className="text-lg font-semibold text-yellow-300">{deal.address}</p>
            <p className="text-sm text-zinc-300 italic">{deal.city}, {deal.zip}</p>
            <p className="text-sm text-white mt-2">{deal.type} — <strong>{deal.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}
