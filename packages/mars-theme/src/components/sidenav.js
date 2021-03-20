import React, { useState, useEffect } from "react";
import { Head, connect, decode } from "frontity";
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
          style={{ color: props.state.router.link == "/" && "#f4bb36" }}
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
              style={{
                color:
                  props.state.router.link ==
                    "/residential-electrical-services/" && "#f4bb36",
              }}
              link="/residential-electrical-services"
            >
              RESIDENTIAL ELECTRICAL SERVICES
            </Link>
          </div>
          <div style={{ marginBottom: 10 }}>
            <Link
              onClick={() => {
                props.setSideNav(!props.sidenav);
              }}
              style={{
                color:
                  props.state.router.link == "/electrical-panel-upgrades/" &&
                  "#f4bb36",
              }}
              link="electrical-panel-upgrades"
            >
              ELECTRICAL PANEL UPGRADES
            </Link>
          </div>
          <div style={{ marginBottom: 10 }}>
            <Link
              onClick={() => {
                props.setSideNav(!props.sidenav);
              }}
              style={{
                color:
                  props.state.router.link ==
                    "/commercial-electrical-services/" && "#f4bb36",
              }}
              link="/commercial-electrical-services"
            >
              COMMERCIAL ELECTRICAL SERVICES
            </Link>
          </div>
          <div style={{ marginBottom: 10 }}>
            <Link
              onClick={() => {
                props.setSideNav(!props.sidenav);
              }}
              style={{
                color:
                  props.state.router.link == "/lighting-services/" && "#f4bb36",
              }}
              link="/lighting-services"
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
          style={{ color: props.state.router.link == "/gallery/" && "#f4bb36" }}
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
          style={{ color: props.state.router.link == "/faq/" && "#f4bb36" }}
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
          style={{ color: props.state.router.link == "/contact/" && "#f4bb36" }}
          link="/contact"
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
}

export default connect(SideNav);
