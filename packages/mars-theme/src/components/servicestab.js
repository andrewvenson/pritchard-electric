import React, { useState } from "react";
import Link from "./link";

function ServicesTab() {
  const [dropdown, showDropdown] = useState(false);
  return (
    <>
      <a
        onMouseEnter={() => {
          showDropdown(true);
        }}
        onMouseLeave={() => {
          showDropdown(false);
        }}
      >
        SERVICES ›
      </a>
      <div
        className="serviceTab"
        onMouseOver={() => {
          showDropdown(true);
        }}
        onMouseLeave={() => {
          showDropdown(false);
        }}
        style={{
          padding: 10,
          borderRadius: "3px",
          width: 150,
          position: "absolute",
          backgroundColor: "#1f40a3",
          zIndex: "10000",
          display: dropdown ? "block" : "none",
        }}
      >
        <Link link="/residential-electrical-services">
          RESIDENTIAL ELECTRICAL SERVICES
        </Link>
        <br />
        <br />
        <Link link="/electrical-panel-upgrades">ELECTRICAL PANEL UPGRADES</Link>
        <br />
        <br />
        <Link link="/commercial-electrical-services">
          COMMERCIAL ELECTRICAL SERVICES
        </Link>
        <br />
        <br />
        <Link link="/lighting-services">LIGHTING SERVICES</Link>
        <br />
        <br />
      </div>
    </>
  );
}

export default ServicesTab;
