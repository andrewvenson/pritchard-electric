import React, { useState } from "react";
import { styled, connect, Global, decode } from "frontity";

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
        <a href="#">RESIDENTIAL ELECTRICAL SERVICES</a>
        <br />
        <br />
        <a href="#">ELECTRICAL PANEL UPGRADES</a>
        <br />
        <br />
        <a href="#">COMMERCIAL ELECTRICAL SERVICES</a>
        <br />
        <br />
        <a href="#">LIGHTING SERVICES</a>
        <br />
        <br />
      </div>
    </>
  );
}

export default ServicesTab;
