import React, { useEffect, useState } from "react";
import { styled, connect, Global, decode } from "frontity";
import Footer from "../footer";
import Link from "../link";

function ElectricalPanelUpgrades({ state, actions }) {
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
                NEED MORE POWER? REACH OUT TO A LOCAL ELECTRICIAN.
              </h1>
              <h3 style={{ color: "#1f40a3" }}>
                ASK ABOUT AN ELECTRICAL PANEL INSTALLATION IN AUSTIN, TX
              </h3>
              <div style={{ color: "gray" }}>
                <p>
                  As you update your home with new technology, remember to
                  update your home's electrical system. Today's homes use far
                  more electricity for electronics and appliances than they did
                  15 years ago. Older homes simply weren't designed to handle
                  the amount of energy we need today. This difference results in
                  blown fuses, tripped circuit breakers and flickering lights.
                </p>
                <p>
                  An electrical panel upgrade from Pritchard Electric, LLC will
                  give your home the power it needs, so the system won't
                  overload and trip the breakers.
                </p>
                <p>
                  Schedule an electrical panel installation today by calling our
                  Austin, TX location.
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
                src="http://pritchardelectric.net/files/2019/01/62Untitled-6-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered.jpg?w=1440&h=1080&a=t"
              />
            </div>
          </div>

          <div className="services1060Width" style={{ display: "none" }}>
            <div>
              <img
                style={{
                  width: "90vw",
                }}
                src="http://pritchardelectric.net/files/2019/01/62Untitled-6-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered.jpg?w=1440&h=1080&a=t"
              />
            </div>
            <div>
              <h1 style={{ margin: "0px", color: "#1f40a3" }}>
                NEED MORE POWER? REACH OUT TO A LOCAL ELECTRICIAN.
              </h1>
              <h3 style={{ color: "#1f40a3" }}>
                ASK ABOUT AN ELECTRICAL PANEL INSTALLATION IN AUSTIN, TX
              </h3>
              <div style={{ color: "gray" }}>
                <p>
                  As you update your home with new technology, remember to
                  update your home's electrical system. Today's homes use far
                  more electricity for electronics and appliances than they did
                  15 years ago. Older homes simply weren't designed to handle
                  the amount of energy we need today. This difference results in
                  blown fuses, tripped circuit breakers and flickering lights.
                </p>
                <p>
                  An electrical panel upgrade from Pritchard Electric, LLC will
                  give your home the power it needs, so the system won't
                  overload and trip the breakers.
                </p>
                <p>
                  Schedule an electrical panel installation today by calling our
                  Austin, TX location.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ color: "#1f40a3" }}>
              WHY YOU SHOULD MAKE AN ELECTRICAL PANEL UPGRADE YOUR TOP PRIORITY
            </h3>
            <div style={{ color: "gray" }}>
              <p>
                An outdated electrical system isn't just an inconvenience. It's
                a serious safety hazard. Overloaded wiring can cause:
              </p>
              <ul>
                <li>Hot light switches</li>
                <li>Sparking outlets</li>
                <li>Electrical fires</li>
              </ul>
              <p>
                If you live in the Austin, TX area and haven't had an electrical
                panel upgrade in the last 10 years, it's time for an inspection.
              </p>
              <p>
                Call 512-252-4699 to set up an electrical panel installation
                appointment right away.
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

export default connect(ElectricalPanelUpgrades);
