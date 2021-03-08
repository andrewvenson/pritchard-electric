import React, { useEffect, useState } from "react";
import { styled, connect, Global, decode } from "frontity";
import Footer from "../footer";
import Link from "../link";

function CommercialElectrical({ state, actions }) {
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
      <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
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
                style={{
                  margin: "0px",
                  color: "#1f40a3",
                }}
              >
                PROTECT YOUR ASSETS WITH AN ELECTRICAL SAFETY INSPECTION
              </h1>
              <h3 style={{ color: "#1f40a3" }}>
                SET UP COMMERCIAL SAFETY SERVICES IN AUSTIN, TX
              </h3>
              <div className="text" style={{ color: "gray" }}>
                <p>
                  Commercial properties use far more electricity than the
                  average home. Because your building is using high levels of
                  energy, you need regular safety inspections. Pritchard
                  Electric, LLC’s electrical safety inspection team will survey
                  your facility and note any electrical problems.
                </p>
                <p>
                  You can also take advantage of our energy-saving upgrades and
                  energy management systems.
                </p>
                <p>
                  Keep your property, tenants and workers safe. Call right away
                  to schedule an electrical safety inspection in the Austin,
                  Texas area.
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
                src="https://manage.pritchardelectric.net/wp-content/uploads/2021/03/commercial-electrical-services.jpg"
              />
            </div>
          </div>

          <div className="services1060Width" style={{ display: "none" }}>
            <div>
              <img
                style={{
                  width: "90vw",
                }}
                src="https://manage.pritchardelectric.net/wp-content/uploads/2021/03/commercial-electrical-services.jpg"
              />
            </div>
            <div>
              <h1
                style={{
                  margin: "0px",
                  color: "#1f40a3",
                }}
              >
                PROTECT YOUR ASSETS WITH AN ELECTRICAL SAFETY INSPECTION
              </h1>
              <h3 style={{ color: "#1f40a3" }}>
                SET UP COMMERCIAL SAFETY SERVICES IN AUSTIN, TX
              </h3>
              <div className="text" style={{ color: "gray" }}>
                <p>
                  Commercial properties use far more electricity than the
                  average home. Because your building is using high levels of
                  energy, you need regular safety inspections. Pritchard
                  Electric, LLC’s electrical safety inspection team will survey
                  your facility and note any electrical problems.
                </p>
                <p>
                  You can also take advantage of our energy-saving upgrades and
                  energy management systems.
                </p>
                <p>
                  Keep your property, tenants and workers safe. Call right away
                  to schedule an electrical safety inspection in the Austin,
                  Texas area.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ color: "#1f40a3" }}>
              OFFERING COMMERCIAL ELECTRICAL SERVICES AND MAINTENANCE WORK
            </h3>
            <div className="text" style={{ color: "gray" }}>
              <p>
                Regular electrical maintenance is your key to operating a safe
                commercial property that can keep up with ever-changing energy
                needs. Pritchard Electric offers commercial electrical services
                contracts to property owners of Austin, TX.
              </p>
              <p>We can install, troubleshoot and repair:</p>
              <ul>
                <li>Interior lighting systems</li>
                <li>Supplemental power sources</li>
                <li>Security lighting</li>
                <li>Emergency power sources</li>
                <li>Parking lot lighting</li>
                <li>Underground electrical systems</li>
              </ul>
              <p>
                Commercial and industrial equipment often requires professional
                installation and electrical hookups. If you’re upgrading your
                appliances or business machinery, let us know.
              </p>
              <p>
                To set up a commercial electrical services contract, call
                512-252-4699 now.
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

export default connect(CommercialElectrical);
