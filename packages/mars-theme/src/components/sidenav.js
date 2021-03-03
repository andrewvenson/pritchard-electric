import React, { useState } from "react";
import Link from "./link";

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
        <Link
          link="/"
          onClick={() => {
            props.setSideNav(!props.sidenav);
          }}
        >
          HOME
        </Link>
      </div>
      <div style={{ marginBottom: 10 }}>
        <div style={{ marginBottom: 10 }}>SERVICES ›</div>
        <div style={{ paddingLeft: 25 }}>
          <div style={{ marginBottom: 10 }}>
            <Link
              onClick={() => {
                props.setSideNav(!props.sidenav);
              }}
            >
              RESIDENTIAL ELECTRICAL SERVICES
            </Link>
          </div>
          <div style={{ marginBottom: 10 }}>
            <Link
              onClick={() => {
                props.setSideNav(!props.sidenav);
              }}
            >
              ELECTRICAL PANEL UPGRADES
            </Link>
          </div>
          <div style={{ marginBottom: 10 }}>
            <Link
              onClick={() => {
                props.setSideNav(!props.sidenav);
              }}
            >
              COMMERCIAL ELECTRICAL SERVICES
            </Link>
          </div>
          <div style={{ marginBottom: 10 }}>
            <Link
              onClick={() => {
                props.setSideNav(!props.sidenav);
              }}
            >
              LIGHTING SERVICES
            </Link>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: 10 }}>
        <Link
          onClick={() => {
            props.setSideNav(!props.sidenav);
          }}
          link="/gallery"
        >
          GALLERY
        </Link>
      </div>
      <div style={{ marginBottom: 10 }}>
        <Link
          onClick={() => {
            props.setSideNav(!props.sidenav);
          }}
          link="/faq"
        >
          FAQ
        </Link>
      </div>
      <div style={{ marginBottom: 10 }}>
        <Link
          onClick={() => {
            props.setSideNav(!props.sidenav);
          }}
          link="/contact"
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
}

export default SideNav;
