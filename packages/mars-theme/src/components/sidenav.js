import React, { useState } from "react";
function SideNav(props) {
  return (
    <div
      className="sideNav"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 280,
        height: "100vh",
        backgroundColor: "#1f40a3",
        zIndex: "999999",
        display: props.sidenav ? "flex" : "none",
        flexDirection: "column",
        color: "white",
        padding: 10,
        fontStyle: "uppercase",
      }}
    >
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            right: 10,
            top: 0,
            cursor: "pointer",
          }}
          onClick={() => {
            props.setSideNav(!props.sidenav);
          }}
        >
          X
        </div>
      </div>
      <div style={{ marginBottom: 10 }}>
        <a href="/">HOME</a>
      </div>
      <div style={{ marginBottom: 10 }}>
        <div style={{ marginBottom: 10 }}>
          <a>SERVICES ›</a>
        </div>
        <div style={{ paddingLeft: 25 }}>
          <div style={{ marginBottom: 10 }}>
            <a>RESIDENTIAL ELECTRICAL SERVICES</a>
          </div>
          <div style={{ marginBottom: 10 }}>
            <a>ELECTRICAL PANEL UPGRADES</a>
          </div>
          <div style={{ marginBottom: 10 }}>
            <a>COMMERCIAL ELECTRICAL SERVICES</a>
          </div>
          <div style={{ marginBottom: 10 }}>
            <a>LIGHTING SERVICES</a>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: 10 }}>
        <a href="/gallery">Gallery</a>
      </div>
      <div style={{ marginBottom: 10 }}>
        <a href="/faq">FAQ</a>
      </div>
      <div style={{ marginBottom: 10 }}>
        <a href="/contact">CONTACT</a>
      </div>
    </div>
  );
}

export default SideNav;
