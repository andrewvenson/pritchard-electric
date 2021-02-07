import React, { useEffect, useState } from "react";
import { styled, connect, Global, decode } from "frontity";

const Home = ({ state, actions }) => {
  useEffect(() => {
    actions.source.fetch("/home-post/");
  }, []);

  const data = state.source.get("/home-post/");

  const [color, setColor] = useState({
    one: ["#1f40a3", 1, 0.5],
    two: ["#1f40a3", 1, 0.5],
    three: ["#1f40a3", 1, 0.5],
    four: ["#1f40a3", 1, 0.5],
  });

  const serviceHover = {
    WebkitTransition: "all 1s ease-in-out",
    MozTransition: "all 1s ease-in-out",
  };

  const width = {
    width: "25vw",
    height: "35vw",
  };

  const mobileWidth = {
    width: "50vw",
    height: "65vw",
  };

  const mobile560Width = {
    width: "100vw",
    height: "110vw",
  };

  const contactInput = {
    border: "1px solid lightgray",
    height: "30px",
    width: "100%",
    backgroundColor: "whitesmoke",
    marginTop: "4px",
  };

  const contactSuggestions = {
    border: "1px solid lightgray",
    width: "100%",
    backgroundColor: "whitesmoke",
    marginTop: "4px",
  };

  if (data.isPost) {
    const category = state.source.post[data.id];
    const firstHeader = category.content.rendered;

    return (
      <div style={{ width: "100%", height: "100vh" }}>
        {/* Regular width */}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 600,
            backgroundImage:
              "url('http://pritchardelectric.net/files/2014/04/12Untitled-6-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered.jpg?&a=t')",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: 70,
              margin: 0,
              textShadow: "3px 4px 5px black",
              textTransform: "uppercase",
            }}
            dangerouslySetInnerHTML={{ __html: firstHeader }}
          ></h1>
          <p style={{ color: "white", textShadow: "3px 4px 5px black" }}>
            GET A SAFETY INSPECTION FROM A COMMERCIAL ELECTRICIAN IN AUSTIN,TX.
            PROUDLY SERVICING THE SURROUNDING AREAS.
          </p>
          <button
            style={{
              padding: 10,
              border: "none",
              backgroundColor: "#f4bb36",
              color: "white",
              fontSize: 20,
              fontWeight: "light",
            }}
          >
            CONTACT US >
          </button>
        </section>
        {/* Service Sections */}
        <section class="desktopView" style={{ width: "100%", display: "flex" }}>
          {/* Electrical Panel Upgrades */}
          <div
            style={{ ...width, position: "relative", overflow: "hidden" }}
            onMouseOver={() => {
              setColor({ ...color, one: ["#f4bb36", 1.2, 0.7] });
            }}
            onMouseLeave={() => {
              setColor({ ...color, one: ["#1f40a3", 1, 0.5] });
            }}
          >
            <div
              style={{
                ...serviceHover,
                width: "100%",
                height: "6px",
                backgroundColor: `${color.one[0]}`,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...width,
                backgroundColor: `rgba(0, 0, 0, ${color.one[2]})`,
                zIndex: 1,
                width: "100%",
                height: "100%",
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...width,
                transform: `scale(${color.one[1]}, ${color.one[1]})`,
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "absolute",
                top: 0,
                zIndex: -5,
                backgroundImage:
                  "url('http://pritchardelectric.net/files/2014/04/62Untitled-6-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered.jpg?w=316&h=421&a=t')",
              }}
            ></div>
            <div
              style={{
                ...width,
                zIndex: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                position: "absolute",
                top: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 25,
                }}
              >
                <h1>ELETRICAL PANEL UPGRADES</h1>
                <div
                  style={{ borderBottom: "1px solid white", width: "100%" }}
                ></div>
                <p>
                  MAKE FLICKERING LIGHTS AND TRIPPED CIRCUIT BREAKERS A THING OF
                  THE PAST BY GETTING AN ELECTRICAL PANEL UPGRADE.
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com"
              style={{
                display: "inline-block",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                zIndex: 999,
              }}
            />
          </div>
          {/* Residential Electrical Services */}
          <div
            style={{ ...width, position: "relative", overflow: "hidden" }}
            onMouseOver={() => {
              setColor({ ...color, two: ["#f4bb36", 1.2, 0.7] });
            }}
            onMouseLeave={() => {
              setColor({ ...color, two: ["#1f40a3", 1, 0.5] });
            }}
          >
            <div
              style={{
                ...serviceHover,
                width: "100%",
                height: "6px",
                backgroundColor: `${color.two[0]}`,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...width,
                backgroundColor: `rgba(0, 0, 0, ${color.two[2]})`,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...width,
                transform: `scale(${color.two[1]}, ${color.two[1]})`,
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "absolute",
                top: 0,
                zIndex: -5,
                backgroundImage:
                  "url('http://pritchardelectric.net/files/2014/04/32Untitled-6-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered.jpg?w=316&h=421&a=t')",
              }}
            ></div>
            <div
              style={{
                ...width,
                zIndex: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                position: "absolute",
                top: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 25,
                }}
              >
                <h1>RESIDENTIAL ELECTRICAL SERVICES</h1>
                <div
                  style={{ borderBottom: "1px solid white", width: "100%" }}
                ></div>
                <p>
                  ASK AN ELECTRICIAN TO INSTALL NEW OUTLETS, BREAKERS AND
                  APPLIANCES, OR PERFORM ELECTRICAL REPAIRS.
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com"
              style={{
                display: "inline-block",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                zIndex: 999,
              }}
            />
          </div>
          {/* Commercial Electrical Services */}
          <div
            style={{ ...width, position: "relative", overflow: "hidden" }}
            onMouseOver={() => {
              setColor({ ...color, three: ["#f4bb36", 1.2, 0.7] });
            }}
            onMouseLeave={() => {
              setColor({ ...color, three: ["#1f40a3", 1, 0.5] });
            }}
          >
            <div
              style={{
                ...serviceHover,
                width: "100%",
                height: "6px",
                backgroundColor: `${color.three[0]}`,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...width,
                backgroundColor: `rgba(0, 0, 0, ${color.three[2]})`,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...width,
                transform: `scale(${color.three[1]}, ${color.three[1]})`,
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "absolute",
                top: 0,
                zIndex: -5,
                backgroundImage:
                  "url('http://pritchardelectric.net/files/2014/04/2Untitled-6-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered.jpg?w=316&h=421&a=t')",
              }}
            ></div>
            <div
              style={{
                ...width,
                zIndex: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                position: "absolute",
                top: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 25,
                }}
              >
                <h1>COMMERCIAL ELECTRICAL SERVICES</h1>
                <div
                  style={{ borderBottom: "1px solid white", width: "100%" }}
                ></div>
                <p>
                  WE OFFER COMMERCIAL ELECTRICAL SAFETY INSPECTION SERVICES TO
                  PROPERTY OWNERS OF THE AUSTIN, TX AREA.
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com"
              style={{
                display: "inline-block",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                zIndex: 999,
              }}
            />
          </div>
          {/* Lighting Services */}
          <div
            style={{ ...width, position: "relative", overflow: "hidden" }}
            onMouseOver={() => {
              setColor({ ...color, four: ["#f4bb36", 1.2, 0.7] });
            }}
            onMouseLeave={() => {
              setColor({ ...color, four: ["#1f40a3", 1, 0.5] });
            }}
          >
            <div
              style={{
                ...serviceHover,
                width: "100%",
                height: "6px",
                backgroundColor: `${color.four[0]}`,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...width,
                backgroundColor: `rgba(0, 0, 0, ${color.four[2]})`,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...width,
                transform: `scale(${color.four[1]}, ${color.four[1]})`,
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "absolute",
                top: 0,
                zIndex: -5,
                backgroundImage:
                  "url('http://pritchardelectric.net/files/2014/04/42Untitled-6-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered.jpg?w=316&h=421&a=t')",
              }}
            ></div>
            <div
              style={{
                ...width,
                zIndex: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                position: "absolute",
                top: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 25,
                }}
              >
                <h1>LIGHTING SERVICES</h1>
                <div
                  style={{ borderBottom: "1px solid white", width: "100%" }}
                ></div>
                <p>
                  WE INSTALL, UPGRADE, RETROFIT AND REPLACE INTERIOR AND
                  EXTERIOR RESIDENTIAL LIGHTING.
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com"
              style={{
                display: "inline-block",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                zIndex: 999,
              }}
            />
          </div>
        </section>

        {/* Mobile View - Service Sections - 1086px */}
        <section
          class="mobileView"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            display: "none",
          }}
        >
          <div style={{ display: "flex" }}>
            {/* Electrical Panel Upgrades */}
            <div
              style={{
                ...mobileWidth,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseOver={() => {
                setColor({ ...color, one: ["#f4bb36", 1.2, 0.7] });
              }}
              onMouseLeave={() => {
                setColor({ ...color, one: ["#1f40a3", 1, 0.5] });
              }}
            >
              <div
                style={{
                  ...serviceHover,
                  width: "100%",
                  height: "6px",
                  backgroundColor: `${color.one[0]}`,
                }}
              ></div>
              <div
                style={{
                  ...serviceHover,
                  ...mobileWidth,
                  backgroundColor: `rgba(0, 0, 0, ${color.one[2]})`,
                  zIndex: 1,
                  width: "100%",
                  height: "100%",
                }}
              ></div>
              <div
                style={{
                  ...serviceHover,
                  ...mobileWidth,
                  transform: `scale(${color.one[1]}, ${color.one[1]})`,
                  width: "100%",
                  height: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  position: "absolute",
                  top: 0,
                  zIndex: -5,
                  backgroundImage:
                    "url('http://pritchardelectric.net/files/2014/04/62Untitled-6-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered.jpg?w=316&h=421&a=t')",
                }}
              ></div>
              <div
                style={{
                  ...mobileWidth,
                  zIndex: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  position: "absolute",
                  top: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: 25,
                  }}
                >
                  <h1>ELETRICAL PANEL UPGRADES</h1>
                  <div
                    style={{ borderBottom: "1px solid white", width: "100%" }}
                  ></div>
                  <p>
                    MAKE FLICKERING LIGHTS AND TRIPPED CIRCUIT BREAKERS A THING
                    OF THE PAST BY GETTING AN ELECTRICAL PANEL UPGRADE.
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com"
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  zIndex: 999,
                }}
              />
            </div>
            {/* Residential Electrical Services */}
            <div
              style={{
                ...mobileWidth,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseOver={() => {
                setColor({ ...color, two: ["#f4bb36", 1.2, 0.7] });
              }}
              onMouseLeave={() => {
                setColor({ ...color, two: ["#1f40a3", 1, 0.5] });
              }}
            >
              <div
                style={{
                  ...serviceHover,
                  width: "100%",
                  height: "6px",
                  backgroundColor: `${color.two[0]}`,
                }}
              ></div>
              <div
                style={{
                  ...serviceHover,
                  ...mobileWidth,
                  backgroundColor: `rgba(0, 0, 0, ${color.two[2]})`,
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                }}
              ></div>
              <div
                style={{
                  ...serviceHover,
                  ...mobileWidth,
                  transform: `scale(${color.two[1]}, ${color.two[1]})`,
                  width: "100%",
                  height: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  position: "absolute",
                  top: 0,
                  zIndex: -5,
                  backgroundImage:
                    "url('http://pritchardelectric.net/files/2014/04/32Untitled-6-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered.jpg?w=316&h=421&a=t')",
                }}
              ></div>
              <div
                style={{
                  ...mobileWidth,
                  zIndex: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  position: "absolute",
                  top: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: 25,
                  }}
                >
                  <h1>RESIDENTIAL ELECTRICAL SERVICES</h1>
                  <div
                    style={{ borderBottom: "1px solid white", width: "100%" }}
                  ></div>
                  <p>
                    ASK AN ELECTRICIAN TO INSTALL NEW OUTLETS, BREAKERS AND
                    APPLIANCES, OR PERFORM ELECTRICAL REPAIRS.
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com"
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  zIndex: 999,
                }}
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            {/* Commercial Electrical Services */}
            <div
              style={{
                ...mobileWidth,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseOver={() => {
                setColor({ ...color, three: ["#f4bb36", 1.2, 0.7] });
              }}
              onMouseLeave={() => {
                setColor({ ...color, three: ["#1f40a3", 1, 0.5] });
              }}
            >
              <div
                style={{
                  ...serviceHover,
                  width: "100%",
                  height: "6px",
                  backgroundColor: `${color.three[0]}`,
                }}
              ></div>
              <div
                style={{
                  ...serviceHover,
                  ...mobileWidth,
                  backgroundColor: `rgba(0, 0, 0, ${color.three[2]})`,
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                }}
              ></div>
              <div
                style={{
                  ...serviceHover,
                  ...mobileWidth,
                  transform: `scale(${color.three[1]}, ${color.three[1]})`,
                  width: "100%",
                  height: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  position: "absolute",
                  top: 0,
                  zIndex: -5,
                  backgroundImage:
                    "url('http://pritchardelectric.net/files/2014/04/2Untitled-6-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered.jpg?w=316&h=421&a=t')",
                }}
              ></div>
              <div
                style={{
                  ...mobileWidth,
                  zIndex: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  position: "absolute",
                  top: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: 25,
                  }}
                >
                  <h1>COMMERCIAL ELECTRICAL SERVICES</h1>
                  <div
                    style={{ borderBottom: "1px solid white", width: "100%" }}
                  ></div>
                  <p>
                    WE OFFER COMMERCIAL ELECTRICAL SAFETY INSPECTION SERVICES TO
                    PROPERTY OWNERS OF THE AUSTIN, TX AREA.
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com"
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  zIndex: 999,
                }}
              />
            </div>
            {/* Lighting Services */}
            <div
              style={{
                ...mobileWidth,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseOver={() => {
                setColor({ ...color, four: ["#f4bb36", 1.2, 0.7] });
              }}
              onMouseLeave={() => {
                setColor({ ...color, four: ["#1f40a3", 1, 0.5] });
              }}
            >
              <div
                style={{
                  ...serviceHover,
                  width: "100%",
                  height: "6px",
                  backgroundColor: `${color.four[0]}`,
                }}
              ></div>
              <div
                style={{
                  ...serviceHover,
                  ...mobileWidth,
                  backgroundColor: `rgba(0, 0, 0, ${color.four[2]})`,
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                }}
              ></div>
              <div
                style={{
                  ...serviceHover,
                  ...mobileWidth,
                  transform: `scale(${color.four[1]}, ${color.four[1]})`,
                  width: "100%",
                  height: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  position: "absolute",
                  top: 0,
                  zIndex: -5,
                  backgroundImage:
                    "url('http://pritchardelectric.net/files/2014/04/42Untitled-6-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered.jpg?w=316&h=421&a=t')",
                }}
              ></div>
              <div
                style={{
                  ...mobileWidth,
                  zIndex: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  position: "absolute",
                  top: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: 25,
                  }}
                >
                  <h1>LIGHTING SERVICES</h1>
                  <div
                    style={{ borderBottom: "1px solid white", width: "100%" }}
                  ></div>
                  <p>
                    WE INSTALL, UPGRADE, RETROFIT AND REPLACE INTERIOR AND
                    EXTERIOR RESIDENTIAL LIGHTING.
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com"
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  zIndex: 999,
                }}
              />
            </div>
          </div>
        </section>

        {/* Mobile View - Service Sections - 560px*/}
        <section
          class="mobile560View"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            display: "none",
          }}
        >
          {/* Electrical Panel Upgrades */}
          <div
            style={{
              ...mobile560Width,
              position: "relative",
              overflow: "hidden",
            }}
            onMouseOver={() => {
              setColor({ ...color, one: ["#f4bb36", 1.2, 0.7] });
            }}
            onMouseLeave={() => {
              setColor({ ...color, one: ["#1f40a3", 1, 0.5] });
            }}
          >
            <div
              style={{
                ...serviceHover,
                width: "100%",
                height: "6px",
                backgroundColor: `${color.one[0]}`,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...mobile560Width,
                backgroundColor: `rgba(0, 0, 0, ${color.one[2]})`,
                zIndex: 1,
                width: "100%",
                height: "100%",
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...mobile560Width,
                transform: `scale(${color.one[1]}, ${color.one[1]})`,
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "absolute",
                top: 0,
                zIndex: -5,
                backgroundImage:
                  "url('http://pritchardelectric.net/files/2014/04/62Untitled-6-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered.jpg?w=316&h=421&a=t')",
              }}
            ></div>
            <div
              style={{
                ...mobile560Width,
                zIndex: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                position: "absolute",
                top: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 25,
                }}
              >
                <h1>ELETRICAL PANEL UPGRADES</h1>
                <div
                  style={{ borderBottom: "1px solid white", width: "100%" }}
                ></div>
                <p>
                  MAKE FLICKERING LIGHTS AND TRIPPED CIRCUIT BREAKERS A THING OF
                  THE PAST BY GETTING AN ELECTRICAL PANEL UPGRADE.
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com"
              style={{
                display: "inline-block",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                zIndex: 999,
              }}
            />
          </div>
          {/* Residential Electrical Services */}
          <div
            style={{
              ...mobile560Width,
              position: "relative",
              overflow: "hidden",
            }}
            onMouseOver={() => {
              setColor({ ...color, two: ["#f4bb36", 1.2, 0.7] });
            }}
            onMouseLeave={() => {
              setColor({ ...color, two: ["#1f40a3", 1, 0.5] });
            }}
          >
            <div
              style={{
                ...serviceHover,
                width: "100%",
                height: "6px",
                backgroundColor: `${color.two[0]}`,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...mobile560Width,
                backgroundColor: `rgba(0, 0, 0, ${color.two[2]})`,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...mobile560Width,
                transform: `scale(${color.two[1]}, ${color.two[1]})`,
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "absolute",
                top: 0,
                zIndex: -5,
                backgroundImage:
                  "url('http://pritchardelectric.net/files/2014/04/32Untitled-6-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered.jpg?w=316&h=421&a=t')",
              }}
            ></div>
            <div
              style={{
                ...mobile560Width,
                zIndex: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                position: "absolute",
                top: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 25,
                }}
              >
                <h1>RESIDENTIAL ELECTRICAL SERVICES</h1>
                <div
                  style={{ borderBottom: "1px solid white", width: "100%" }}
                ></div>
                <p>
                  ASK AN ELECTRICIAN TO INSTALL NEW OUTLETS, BREAKERS AND
                  APPLIANCES, OR PERFORM ELECTRICAL REPAIRS.
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com"
              style={{
                display: "inline-block",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                zIndex: 999,
              }}
            />
          </div>
          {/* Commercial Electrical Services */}
          <div
            style={{
              ...mobile560Width,
              position: "relative",
              overflow: "hidden",
            }}
            onMouseOver={() => {
              setColor({ ...color, three: ["#f4bb36", 1.2, 0.7] });
            }}
            onMouseLeave={() => {
              setColor({ ...color, three: ["#1f40a3", 1, 0.5] });
            }}
          >
            <div
              style={{
                ...serviceHover,
                width: "100%",
                height: "6px",
                backgroundColor: `${color.three[0]}`,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...mobile560Width,
                backgroundColor: `rgba(0, 0, 0, ${color.three[2]})`,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...mobile560Width,
                transform: `scale(${color.three[1]}, ${color.three[1]})`,
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "absolute",
                top: 0,
                zIndex: -5,
                backgroundImage:
                  "url('http://pritchardelectric.net/files/2014/04/2Untitled-6-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered.jpg?w=316&h=421&a=t')",
              }}
            ></div>
            <div
              style={{
                ...mobile560Width,
                zIndex: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                position: "absolute",
                top: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 25,
                }}
              >
                <h1>COMMERCIAL ELECTRICAL SERVICES</h1>
                <div
                  style={{ borderBottom: "1px solid white", width: "100%" }}
                ></div>
                <p>
                  WE OFFER COMMERCIAL ELECTRICAL SAFETY INSPECTION SERVICES TO
                  PROPERTY OWNERS OF THE AUSTIN, TX AREA.
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com"
              style={{
                display: "inline-block",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                zIndex: 999,
              }}
            />
          </div>
          {/* Lighting Services */}
          <div
            style={{
              ...mobile560Width,
              position: "relative",
              overflow: "hidden",
            }}
            onMouseOver={() => {
              setColor({ ...color, four: ["#f4bb36", 1.2, 0.7] });
            }}
            onMouseLeave={() => {
              setColor({ ...color, four: ["#1f40a3", 1, 0.5] });
            }}
          >
            <div
              style={{
                ...serviceHover,
                width: "100%",
                height: "6px",
                backgroundColor: `${color.four[0]}`,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...mobile560Width,
                backgroundColor: `rgba(0, 0, 0, ${color.four[2]})`,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            ></div>
            <div
              style={{
                ...serviceHover,
                ...mobile560Width,
                transform: `scale(${color.four[1]}, ${color.four[1]})`,
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "absolute",
                top: 0,
                zIndex: -5,
                backgroundImage:
                  "url('http://pritchardelectric.net/files/2014/04/42Untitled-6-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered.jpg?w=316&h=421&a=t')",
              }}
            ></div>
            <div
              style={{
                ...mobile560Width,
                zIndex: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                position: "absolute",
                top: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 25,
                }}
              >
                <h1>LIGHTING SERVICES</h1>
                <div
                  style={{ borderBottom: "1px solid white", width: "100%" }}
                ></div>
                <p>
                  WE INSTALL, UPGRADE, RETROFIT AND REPLACE INTERIOR AND
                  EXTERIOR RESIDENTIAL LIGHTING.
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com"
              style={{
                display: "inline-block",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                zIndex: 999,
              }}
            />
          </div>
        </section>

        <section
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 600,
            backgroundImage:
              "url('http://pritchardelectric.net/files/2014/04/2Untitled-6-Recovered-Recovered-Recovered-Recovered.jpg?&a=t')",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: 70,
              margin: 0,
              textShadow: "3px 4px 5px black",
              textTransform: "uppercase",
            }}
          >
            BRING YOUR LIGHT INTO THE 21ST CENTURY
          </h1>
          <p style={{ color: "white", textShadow: "3px 4px 5px black" }}>
            OUR ELECTRICAL SERVICES INCLUDE LANDASCAPE LIGHTING UPDGRADES
          </p>
          <button
            style={{
              padding: 10,
              border: "none",
              backgroundColor: "#f4bb36",
              color: "white",
              fontSize: 20,
              fontWeight: "light",
            }}
          >
            CONTACT US >
          </button>
        </section>

        {/* DESKTOP VIEW */}
        <section
          className="CallElectricianTime"
          style={{
            backgroundColor: "#1f40a3",
            width: "100%",
            height: "25vw",
            display: "flex",
            color: "white",
            paddingTop: 75,
            paddingBottom: 75,
          }}
        >
          <div
            style={{
              height: "100%",
              width: "49%",
              paddingLeft: 75,
              paddingRight: 75,
            }}
          >
            <h1 style={{ margin: 0 }}>
              IT'S TIME TO CALL YOUR ELECTRICIAN IF YOU NOTICE THESE SIGNS
            </h1>
            <p>
              Avoid that nightmare completely. Call an electrician from
              Pritchard Electric right away if you notice:
            </p>

            <ul>
              <li>Discolored or malfunctioning outlets</li>
              <li>Lights that flicker or buzz</li>
              <li>Frequently tripped circuit breakers</li>
            </ul>

            <p>
              We provide a wide range of{" "}
              <u>
                <a href="">residential electrical services</a>
              </u>{" "}
              in Austin, Texas and the surrounding area.
            </p>
          </div>
          <div style={{ height: "100%", border: "2px solid white" }}></div>

          <div
            style={{
              height: "100%",
              width: "49%",
              paddingRight: 75,
              paddingLeft: 75,
            }}
          >
            <img
              src="http://pritchardelectric.net/files/2014/04/52Untitled-6-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered.jpg?&a=t"
              alt
              width="100%"
            />
          </div>
        </section>

        {/* MOBILE VIEW */}
        <section
          className="MobileCallElectricianTime"
          style={{
            backgroundColor: "#1f40a3",
            width: "100%",
            height: "50vh",
            display: "none",
            color: "white",
            paddingTop: 25,
            paddingBottom: 25,
          }}
        >
          <div
            style={{
              height: "100%",
              width: "49%",
              paddingLeft: 25,
              paddingRight: 25,
            }}
          >
            <h1 style={{ margin: 0 }}>
              IT'S TIME TO CALL YOUR ELECTRICIAN IF YOU NOTICE THESE SIGNS
            </h1>
            <div style={{ fontSize: 14 }}>
              <p>
                Avoid that nightmare completely. Call an electrician from
                Pritchard Electric right away if you notice:
              </p>

              <ul>
                <li>Discolored or malfunctioning outlets</li>
                <li>Lights that flicker or buzz</li>
                <li>Frequently tripped circuit breakers</li>
              </ul>

              <p>
                We provide a wide range of{" "}
                <u>
                  <a href="">residential electrical services</a>
                </u>{" "}
                in Austin, Texas and the surrounding area.
              </p>
            </div>
          </div>
          <div style={{ height: "100%", border: "2px solid white" }}></div>

          <div
            style={{
              height: "100%",
              width: "49%",
              paddingRight: 25,
              paddingLeft: 25,
            }}
          >
            <img
              src="http://pritchardelectric.net/files/2014/04/52Untitled-6-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered.jpg?&a=t"
              alt
              width="100%"
            />
          </div>
        </section>

        {/* MOBILE VIEW < 556 */}
        <section
          className="Mobile556CallElectricianTime"
          style={{
            backgroundColor: "#1f40a3",
            width: "100%",
            display: "none",
            color: "white",
            flexDirection: "column",
            paddingTop: 25,
            paddingBottom: 25,
          }}
        >
          <div
            style={{
              // height: "100%",
              // width: "100%",
              paddingLeft: 25,
              paddingRight: 25,
            }}
          >
            <h1 style={{ margin: 0 }}>
              IT'S TIME TO CALL YOUR ELECTRICIAN IF YOU NOTICE THESE SIGNS
            </h1>
            <div style={{ fontSize: 14 }}>
              <p>
                Avoid that nightmare completely. Call an electrician from
                Pritchard Electric right away if you notice:
              </p>

              <ul>
                <li>Discolored or malfunctioning outlets</li>
                <li>Lights that flicker or buzz</li>
                <li>Frequently tripped circuit breakers</li>
              </ul>

              <p>
                We provide a wide range of{" "}
                <u>
                  <a href="">residential electrical services</a>
                </u>{" "}
                in Austin, Texas and the surrounding area.
              </p>
            </div>
          </div>
          {/* <div style={{ height: "100%", border: "2px solid white" }}></div> */}

          <div
            style={{
              paddingRight: 25,
              paddingLeft: 25,
            }}
          >
            <img
              src="http://pritchardelectric.net/files/2014/04/52Untitled-6-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered.jpg?&a=t"
              alt
              width="100%"
            />
          </div>
        </section>

        <section
          style={{
            backgroundColor: "white",
            padding: "0px 45px 0px 45px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              paddingBottom: "45px",
            }}
          >
            <h1 style={{ color: "#1f40a3" }}>
              PUT A LICENSED ELECTRICIAN IN YOUR CONTACT LIST
            </h1>
            <h3 style={{ color: "#1f40a3" }}>
              MAKE US YOUR SOURCE FOR ELECTRICAL SERVICES IN AUSTIN, TX
            </h3>
            <p>
              Need a few electrical repairs or upgrades done around the house?
              You can call Pritchard Electric, LLC for electrical issues of all
              kinds, including repairs, electrical panel upgrades, lighting
              services and new wiring installations.
            </p>
            <p>
              Trust your home or business to an electrician with over 10 years
              of experience.
            </p>
          </div>
        </section>

        {/* DESKTOP BOTTOM INFO AND CONTACT > 789 */}
        <section
          className="BottomInfoContact"
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "white",
          }}
        >
          {/* COMMERCIAL ELECTRICAL SERVICES */}
          <div
            style={{
              width: "65%",
              display: "flex",
              padding: "10px",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ maxWidth: "653px" }}>
              <img
                style={{ width: "100%", maxWidth: "652px", height: "275px" }}
                src="http://pritchardelectric.net/files/bigstock/2019/01/Electric-Job-In-The-Apartment-245991979.jpg?w=1440&h=598&a=t"
                alt="Count on us for commercial electrical services"
              />
              <h1 style={{ color: "#1f40a3" }}>
                COUNT ON US FOR COMMERCIAL ELECTRICAL SERVICES
              </h1>
              <p>
                Do you own a business or commercial property in the Travis
                County area? Pritchard Electric provides commercial electrical
                services for:
              </p>
              <ul>
                <li>Office buildings</li>
                <li>Apartment complexes</li>
                <li>Retail shops and warehouses</li>
              </ul>
              <p>
                Keep business running smoothly. Contact Austin, TX's premier
                commercial electrician today at 512-252-4699. We serve customers
                throughout the surrounding areas. Remember to ask for a free
                estimate on equipment upgrades or any other electrical service.
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div style={{ width: "35%", padding: "10px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <form style={{ width: "300px" }}>
                <label>
                  <span>Name *</span>
                  <br />
                  <input type="text" style={{ ...contactInput }} />
                  <br />
                  <span style={{ fontSize: 12 }}>First</span>
                  <br />
                  <label>
                    <input type="text" style={{ ...contactInput }} />
                    <br />
                    <span style={{ fontSize: 12 }}>Last</span>
                  </label>
                </label>
                <br />
                <br />
                <label>
                  <span>Phone *</span>
                  <br />
                  <input type="phone" style={{ ...contactInput }} />
                </label>
                <br />
                <br />
                <label>
                  <span>Email *</span>
                  <br />
                  <input type="email" style={{ ...contactInput }} />
                </label>
                <br />
                <br />
                <label>
                  <span>Message/Suggestions *</span>
                  <br />
                  <textarea
                    type="text"
                    style={{
                      ...contactSuggestions,
                      height: "100px",
                      resize: "none",
                    }}
                  />
                </label>
                <br />
                <br />
                <label>
                  <span>Security Check *</span>
                </label>
                <br />
                <br />
                <button
                  style={{
                    padding: 10,
                    border: "none",
                    backgroundColor: "#f4bb36",
                    color: "white",
                    width: "100%",
                    fontSize: 20,
                    fontWeight: "light",
                  }}
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* MOBILE CONTACT AND INFO < 789 */}
        <section
          className="MobileBottomInfoContact"
          style={{
            display: "none",
            backgroundColor: "white",
          }}
        >
          {/* MOBILE COMMERCIAL ELECTRICAL SERVICES */}
          <div style={{ padding: 20 }}>
            <img
              style={{ width: "100%", height: "275px" }}
              src="http://pritchardelectric.net/files/bigstock/2019/01/Electric-Job-In-The-Apartment-245991979.jpg?w=1440&h=598&a=t"
              alt="Count on us for commercial electrical services"
            />
            <h1 style={{ color: "#1f40a3" }}>
              COUNT ON US FOR COMMERCIAL ELECTRICAL SERVICES
            </h1>
            <p>
              Do you own a business or commercial property in the Travis County
              area? Pritchard Electric provides commercial electrical services
              for:
            </p>
            <ul>
              <li>Office buildings</li>
              <li>Apartment complexes</li>
              <li>Retail shops and warehouses</li>
            </ul>
            <p>
              Keep business running smoothly. Contact Austin, TX's premier
              commercial electrician today at 512-252-4699. We serve customers
              throughout the surrounding areas. Remember to ask for a free
              estimate on equipment upgrades or any other electrical service.
            </p>
          </div>

          {/* MOBILE CONTACT FORM */}
          <div style={{ padding: 20 }}>
            <form>
              <label>
                <span>
                  Name <span style={{ color: "red" }}>*</span>
                </span>
                <br />
                <input type="text" style={{ ...contactInput }} />
                <br />
                <span style={{ fontSize: 12 }}>First</span>
                <br />
                <label>
                  <input type="text" style={{ ...contactInput }} />
                  <br />
                  <span style={{ fontSize: 12 }}>Last</span>
                </label>
              </label>
              <br />
              <br />
              <label>
                <span>
                  Phone <span style={{ color: "red" }}>*</span>
                </span>
                <br />
                <input type="phone" style={{ ...contactInput }} />
              </label>
              <br />
              <br />
              <label>
                <span>
                  Email <span style={{ color: "red" }}>*</span>
                </span>
                <br />
                <input type="email" style={{ ...contactInput }} />
              </label>
              <br />
              <br />
              <label>
                <span>
                  Message/Suggestions <span style={{ color: "red" }}>*</span>
                </span>
                <br />
                <textarea
                  type="text"
                  style={{
                    ...contactSuggestions,
                    height: "100px",
                    resize: "none",
                  }}
                />
              </label>
              <br />
              <br />
              <label>
                <span>
                  Security Check <span style={{ color: "red" }}>*</span>
                </span>
              </label>
              <br />
              <br />
              <button
                style={{
                  padding: 10,
                  border: "none",
                  backgroundColor: "#f4bb36",
                  color: "white",
                  width: "100%",
                  fontSize: 20,
                  fontWeight: "light",
                }}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </section>

        {/* BOTTOM LOGO */}
        <div style={{ padding: 25, display: "flex", justifyContent: "center" }}>
          <img
            style={{ width: 145, height: 60 }}
            src="http://pritchardelectric.net/files/2019/01/394765_139812716188312_1908785223_n-1.png"
          />
        </div>
      </div>
    );
  }
  return null;
};

// Connect the Item to gain access to `state` as a prop
export default connect(Home);
