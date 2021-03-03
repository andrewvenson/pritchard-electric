import React from "react";
import YellowPhone from "../static/images/call.png";

function MobileNav() {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "none",
        justifyContent: "center",
        padding: "15px",
        boxShadow: "inset 0 8px 8px -6px lightgray",
        borderBottom: "1px solid lightgray",
        color: "#f4bb36",
      }}
      className="mobileNav"
    >
      <a
        href="tel:+1-512-252-4699"
        title="(512) 252-4699"
        style={{
          color: "#f4bb36",
          display: "flex",
          fontWeight: "500",
          fontSize: "14px",
        }}
      >
        <span style={{ marginRight: "5px" }}>
          <img src={YellowPhone} width="18px" height="18px" />
        </span>
        <span>(512) 252-4699</span>
      </a>
    </div>
  );
}

export default MobileNav;
