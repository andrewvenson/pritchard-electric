import React, { useEffect, useState } from "react";
import { styled, connect, Global, decode } from "frontity";
import Footer from "../footer";
import Link from "../link";

function Lighting({ state, actions }) {
  //useEffect(() => {
  //actions.source.fetch("/home-post", { force: true });
  //}, []);

  //const data = state.source.get("/home-post/");

  //   if (data.isPost) {
  //     const category = state.source.post[data.id];
  //     const firstHeader = category.content.rendered;
  return (
    <main
      style={{
        width: "100%",
        boxShadow: "inset 0 8px 8px -6px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "35px" }}
      >
        <section
          style={{
            maxWidth: "986.97px",
            padding: "15px",
          }}
        >
          <div
            className="servicesDesktopWidth"
            style={{
              display: "grid",
              gridTemplateColumns: "50% 50%",
              columnGap: "10px",
            }}
          >
            <div>
              <h1
                className="service"
                style={{
                  margin: "0px",
                  color: "#1f40a3",
                }}
              >
                ILLUMINATE YOUR AUSTIN, TX HOME
              </h1>
              <h3 className="goto" style={{ color: "#1f40a3" }}>
                DISCOVER THE POSSIBILITIES OF HOME AND LANDSCAPE LIGHTING
                INSTALLATION SERVICES
              </h3>
              <div className="text" style={{ color: "gray" }}>
                <p>
                  Any electrical repair company can replace bulbs and ballasts.
                  Pritchard Electric, LLC of Austin, Texas offers comprehensive
                  home and landscape lighting installation services. We can
                  install, upgrade or replace any lighting feature inside or
                  outside your home.
                </p>
                <p>
                  Increase your home’s security by adding motion sensor lighting
                  outdoors. Beautify your yard with a landscape lighting
                  installation. Modernize your home with wall sconce lighting
                  installation. Make coming home after dark safer with a
                  lighting control system. If any part of your home’s lighting
                  system isn’t meeting your needs, call 512-252-4699 today.
                </p>
              </div>
            </div>
            <div>
              <img
                style={{
                  maxWidth: "493.48px",
                  maxHeight: "370.11px",
                  width: "45vw",
                }}
                src="https://manage.pritchardelectric.net/wp-content/uploads/2021/03/lighting-services.jpg"
              />
            </div>
          </div>

          <div className="services1060Width" style={{ display: "none" }}>
            <div>
              <img
                style={{
                  width: "100%",
                }}
                src="https://manage.pritchardelectric.net/wp-content/uploads/2021/03/lighting-services.jpg"
              />
            </div>
            <div>
              <h1
                className="service"
                style={{ margin: "0px", color: "#1f40a3" }}
              >
                ILLUMINATE YOUR AUSTIN, TX HOME
              </h1>
              <h3 className="goto" style={{ color: "#1f40a3" }}>
                DISCOVER THE POSSIBILITIES OF HOME AND LANDSCAPE LIGHTING
                INSTALLATION SERVICES
              </h3>
              <div className="text" style={{ color: "gray" }}>
                <p>
                  Any electrical repair company can replace bulbs and ballasts.
                  Pritchard Electric, LLC of Austin, Texas offers comprehensive
                  home and landscape lighting installation services. We can
                  install, upgrade or replace any lighting feature inside or
                  outside your home.
                </p>
                <p>
                  Increase your home’s security by adding motion sensor lighting
                  outdoors. Beautify your yard with a landscape lighting
                  installation. Modernize your home with wall sconce lighting
                  installation. Make coming home after dark safer with a
                  lighting control system. If any part of your home’s lighting
                  system isn’t meeting your needs, call 512-252-4699 today.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="goto" style={{ color: "#1f40a3" }}>
              START PLANNING A LIGHTING SERVICE UPGRADE
            </h3>
            <div className="text" style={{ color: "gray" }}>
              <p>
                One of the most effective ways to upgrade your home’s lighting
                is through a lighting control system installation. This lighting
                service allows you to control a range of lighting
                fixtures—indoors and outdoors—from a single device. Combine this
                with other lighting controls, like dimmers and timers, and
                you’ll have a complete lighting safety system.
              </p>
              <p>
                Talk to a lighting service technician in Austin, TX if you want
                to:
              </p>
              <ul>
                <li>Upgrade or retrofit your current lighting</li>
                <li>Install track, accent or recessed lighting</li>
                <li>Replace outdated kitchen and bathroom lighting</li>
              </ul>
              <p>
                We can even set up holiday lighting. Contact Pritchard Electric
                today to update your home’s lighting quickly, safely and
                affordably.
              </p>
            </div>
            <br />
            <Link
              style={{
                padding: 10,
                border: "none",
                backgroundColor: "#f4bb36",
                color: "white",
                fontSize: 20,
                fontWeight: "light",
              }}
              link="/contact"
            >
              LEARN MORE ›
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

export default connect(Lighting);
