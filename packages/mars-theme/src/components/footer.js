import React from "react";
import Link from "./link";
import ClipLoader from "react-spinners/ClipLoader";

function Footer() {
  return (
    <>
      {/* BOTTOM LOGO */}
      <div
        style={{ padding: "10px", display: "flex", justifyContent: "center" }}
      >
        <Link link="/">
          <img
            style={{ width: 145, height: 60 }}
            src="https://manage.pritchardelectric.net/wp-content/uploads/2021/03/logo.png"
          />
        </Link>
      </div>
      <div
        className="desktopFooter"
        style={{
          height: "35px",
          padding: "10px",
          backgroundColor: "#1f40a3",
          color: "white",
          fontSize: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "975px" }}>
          <span>
            Copyright © 2021 Pritchard Electric, LLC, all rights reserved.
          </span>
          <br />
          <span>Austin, TX 78754 (512) 252-4699</span>
        </div>
      </div>
      <div
        className="mobileFooter"
        style={{
          display: "none",
          textAlign: "center",
          height: "35px",
          padding: "10px 10px 10px 20px",
          backgroundColor: "#1f40a3",
          color: "white",
          fontSize: "10px",
        }}
      >
        <span>
          Copyright © 2021 Pritchard Electric, LLC, all rights reserved.
        </span>
        <br />
        <span>Austin, TX 78754 (512) 252-4699</span>
      </div>
    </>
  );
}

export default Footer;
