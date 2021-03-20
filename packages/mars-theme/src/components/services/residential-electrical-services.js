import React, { useEffect, useState } from "react";
import { styled, connect, Global, decode } from "frontity";
import Footer from "../footer";
import Link from "../link";

function ResidentialElectrical({ state, actions }) {
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
                NEED A LOCAL ELECTRICIAN IN AUSTIN, TX?
              </h1>
              <h3 className="goto" style={{ color: "#1f40a3" }}>
                PRITCHARD ELECTRIC, LLC HANDLES ELECTRIC REPAIR WORK &
                RESIDENTIAL ELECTRICAL SERVICES
              </h3>
              <div className="text" style={{ color: "gray" }}>
                <p>
                  A flickering or unreliable light is more than an annoyance.
                  It's usually the sign of bad or overburdened wiring. Pritchard
                  Electric, LLC of Austin, Texas provides electric repair work
                  for lighting, outlets and other residential appliances.
                </p>
                <p>
                  If you need an electric repair or upgrade done, call
                  512-252-4699 today.
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
                src="https://manage.pritchardelectric.net/wp-content/uploads/2021/03/electrical-panel-upgrades.jpg"
              />
            </div>
          </div>

          <div className="services1060Width" style={{ display: "none" }}>
            <div>
              <img
                style={{
                  width: "100%",
                }}
                src="https://manage.pritchardelectric.net/wp-content/uploads/2021/03/electrical-panel-upgrades.jpg"
              />
            </div>
            <div>
              <h1
                className="service"
                style={{ margin: "0px", color: "#1f40a3" }}
              >
                NEED A LOCAL ELECTRICIAN IN AUSTIN, TX?
              </h1>
              <h3 className="goto" style={{ color: "#1f40a3" }}>
                PRITCHARD ELECTRIC, LLC HANDLES ELECTRIC REPAIR WORK &
                RESIDENTIAL ELECTRICAL SERVICES
              </h3>
              <div className="text" style={{ color: "gray" }}>
                <p>
                  A flickering or unreliable light is more than an annoyance.
                  It's usually the sign of bad or overburdened wiring. Pritchard
                  Electric, LLC of Austin, Texas provides electric repair work
                  for lighting, outlets and other residential appliances.
                </p>
                <p>
                  If you need an electric repair or upgrade done, call
                  512-252-4699 today.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="goto" style={{ color: "#1f40a3" }}>
              TALK TO AN ELECTRICAL INSTALLATION TECH ABOUT HOME UPGRADES
            </h3>
            <div className="text" style={{ color: "gray" }}>
              <p>
                Is your family using more electricity than your home can
                provide? An electricity installation or upgrade could solve your
                problem. A residential electrician from Pritchard Electric can
                add new circuits to your electrical panel or upgrade your home's
                wiring.
              </p>
              <p>We have the experience and licensing to safely install:</p>
              <ul>
                <li>Outlets</li>
                <li>Switches</li>
                <li>Lighting</li>
                <li>Ceiling Fans</li>
                <li>Smoke alarms</li>
              </ul>
              <p>We also work with appliance and telephone wiring.</p>
              <p>
                Discuss your needs and concerns with an electricity installation
                expert in Austin, TX today.
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

export default connect(ResidentialElectrical);
