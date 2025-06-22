import React from "react";

export default function Dashboard() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', textAlign: 'center', padding: '4rem' }}>
      <h1 style={{ fontSize: '2.5rem' }}>JA Cota Software</h1>
      <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>“If it don’t cash flow — let that deal go.”</p>
      <div style={{ marginTop: '2rem' }}>
        <button style={{ padding: '1rem 2rem', margin: '0.5rem', fontWeight: 'bold' }}>Analyze Deal</button>
        <button style={{ padding: '1rem 2rem', margin: '0.5rem', fontWeight: 'bold' }}>Find Contractor</button>
        <button style={{ padding: '1rem 2rem', margin: '0.5rem', fontWeight: 'bold' }}>Explore Map</button>
      </div>
    </div>
  );
}