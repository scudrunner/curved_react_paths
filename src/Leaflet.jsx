import React from "react";
import "leaflet/dist/leaflet.css";
import { Map, TileLayer } from "react-leaflet";
import LeafletBezier from "./LeafletBezier";

export default function Leaflet() {
  const position = [51.505, -0.09];

  return (
    <Map center={position} zoom={3} style={{ height: "100vh" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LeafletBezier />
    </Map>
  );
}
