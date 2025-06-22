import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const mockDeals = [
  { id: 1, lat: 36.174, lng: -115.137, address: "3009 Merritt Ave", price: "$325,000", type: "Flip" },
  { id: 2, lat: 33.448, lng: -112.074, address: "Burned Duplex", price: "$35,000", type: "Fire" },
  { id: 3, lat: 34.512, lng: -110.078, address: "44 Acres, AZ", price: "$150,000", type: "Land" },
];

export default function DealMap() {
  return (
    <div className="h-[90vh] w-full z-0">
      <MapContainer center={[35.5, -112]} zoom={6} scrollWheelZoom={true} className="h-full w-full z-0">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mockDeals.map((deal) => (
          <Marker key={deal.id} position={[deal.lat, deal.lng]}>
            <Popup>
              <strong>{deal.address}</strong><br />
              {deal.type} – {deal.price}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
