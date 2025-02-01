import React, { useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

export default function Map() {
  // Define the coordinates for Gelora Bung Karno
  const geloraCoords: [number, number] = [-6.221990991705258, 106.8051173674806];

  // Create a ref to access the Leaflet marker instance directly
  const markerRef = useRef<L.Marker>(null);

  useEffect(() => {
    if (markerRef.current) {
      // Update the marker's position imperatively using the Leaflet API
      markerRef.current.setLatLng(geloraCoords);
    }
  }, [geloraCoords]);

  return (
    <MapContainer center={geloraCoords} zoom={24} scrollWheelZoom={false} className="rounded-lg shadow-md shadow-stone-700">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={geloraCoords} ref={markerRef}>
        <Popup>Gelora Bung Karno, Jakarta, Indonesia</Popup>
      </Marker>
    </MapContainer>
  );
}
