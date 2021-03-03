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
          display: dropdown ? "block" : "none",
        }}
      >
        <Link href="#">RESIDENTIAL ELECTRICAL SERVICES</Link>
        <br />
        <br />
        <Link href="#">ELECTRICAL PANEL UPGRADES</Link>
        <br />
        <br />
        <Link href="#">COMMERCIAL ELECTRICAL SERVICES</Link>
        <br />
        <br />
        <Link href="#">LIGHTING SERVICES</Link>
        <br />
        <br />
      </div>
    </>
  );
}

export default ServicesTab;
